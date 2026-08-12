import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Validation -------------------------------------------------------------
// Minimal fields only. No health-data / special-category fields are collected.
//
// `contactReference` is the honeypot. It must NOT be named anything a browser
// recognises as an autofill token: this route previously used `company`, which
// Chrome and Safari happily autofill from the saved address profile (they treat
// "organization" as fillable even with autocomplete="off"). Genuine enquiries
// were therefore being classified as bots and discarded while the visitor was
// shown the success message. Do not rename this back to company/organisation/
// address/url/tel or anything else in the autofill vocabulary.
//
// `company` is still accepted and ignored, so that a visitor running a cached
// copy of the old JS bundle still gets their message through.
const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(2).max(4000),
  consent: z.literal(true),
  contactReference: z.string().optional(), // honeypot — must be empty
  company: z.string().optional(), // legacy field from older bundles — ignored
  locale: z.enum(["en", "de"]).optional(),
});

// --- Naive in-memory rate limiting -----------------------------------------
// Best-effort per-instance limiter (5 requests / 10 min / IP). Serverless
// instances are ephemeral, so this is a light abuse guard, not a hard limit.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-nf-client-connection-ip") ?? "unknown";
}

/** Prefix for every log line, so the contact route is greppable in Netlify. */
const TAG = "[contact]";

export async function POST(req: NextRequest) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", message: "Too many submissions. Please try again shortly." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json", message: "The request body was not valid JSON." },
      { status: 400 },
    );
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_input", message: "Please check the form fields and try again." },
      { status: 400 },
    );
  }

  const { name, email, message, contactReference, locale } = parsed.data;

  // Honeypot tripped: almost certainly a bot, so report success without sending
  // (telling a bot it failed just invites a retry). Logged deliberately — if
  // this ever fires for real people we need to see it rather than lose the
  // enquiry in silence, which is exactly what went wrong before. No personal
  // data is logged, only the fact of the trip.
  if (contactReference && contactReference.trim().length > 0) {
    console.warn(`${TAG} honeypot tripped — submission discarded without sending. locale=${locale ?? "en"}`);
    return NextResponse.json({ ok: true, discarded: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  const missing = [
    !apiKey && "RESEND_API_KEY",
    !to && "CONTACT_TO_EMAIL",
    !from && "CONTACT_FROM_EMAIL",
  ].filter(Boolean);

  if (missing.length > 0 || !apiKey || !to || !from) {
    console.error(
      `${TAG} NOT CONFIGURED — refusing to accept the enquiry. Missing env var(s): ${missing.join(", ")}. ` +
        `Set them in Netlify → Site configuration → Environment variables, then redeploy.`,
    );
    return NextResponse.json(
      {
        ok: false,
        error: "not_configured",
        message: "The contact form is not configured on the server. Please email us directly.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  // Data minimisation: relay by email only. Nothing is persisted server-side.
  const text = [
    `New enquiry via theresafrische.com (${locale ?? "en"})`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  let data: { id?: string } | null = null;
  let error: unknown = null;

  try {
    // The Resend SDK resolves with { data, error } instead of throwing, so the
    // result has to be inspected. An unchecked call here would report success
    // on a rejected send.
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text,
    });
    data = result.data;
    error = result.error;
  } catch (err) {
    console.error(`${TAG} Resend threw:`, err);
    return NextResponse.json(
      { ok: false, error: "send_failed", message: "The message could not be sent. Please email us directly." },
      { status: 502 },
    );
  }

  if (error) {
    console.error(`${TAG} Resend returned an error: ${JSON.stringify(error)}`);
    return NextResponse.json(
      { ok: false, error: "send_failed", message: "The message could not be sent. Please email us directly." },
      { status: 502 },
    );
  }

  // A send with no error but no id was never accepted for delivery. Treating
  // that as success is how a message disappears without a trace.
  if (!data?.id) {
    console.error(`${TAG} Resend accepted the call but returned no message id: ${JSON.stringify(data)}`);
    return NextResponse.json(
      { ok: false, error: "send_failed", message: "The message could not be sent. Please email us directly." },
      { status: 502 },
    );
  }

  console.log(`${TAG} sent ok — resend id ${data.id}`);
  return NextResponse.json({ ok: true, id: data.id });
}
