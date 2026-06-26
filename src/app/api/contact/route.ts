import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Validation -------------------------------------------------------------
// Minimal fields only. No health-data / special-category fields are collected.
const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(2).max(4000),
  consent: z.literal(true),
  company: z.string().optional(), // honeypot — must be empty
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

export async function POST(req: NextRequest) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const { name, email, message, company, locale } = parsed.data;

  // Honeypot tripped: pretend success, send nothing.
  if (company && company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form is not configured: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
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

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend threw:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
