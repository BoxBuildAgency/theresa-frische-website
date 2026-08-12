// TEMPORARY diagnostic — remove once the Keystatic URL handling is fixed.
// Reports only request metadata. No environment values, no secrets.
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  let parsed: Record<string, string> | string;
  try {
    const u = new URL(req.url);
    parsed = { origin: u.origin, host: u.host, protocol: u.protocol, pathname: u.pathname };
  } catch (err) {
    parsed = `URL parse failed: ${String(err)}`;
  }

  const pick = [
    "host",
    "x-forwarded-host",
    "x-forwarded-proto",
    "x-nf-request-id",
    "x-forwarded-for",
  ];

  return Response.json({
    reqUrl: req.url,
    parsed,
    // What Keystatic's getParams() would compute from this request.
    keystaticParamsWouldBe:
      typeof parsed === "object"
        ? parsed.pathname.replace(/^\/api\/keystatic\/?/, "").split("/").filter(Boolean)
        : null,
    headers: Object.fromEntries(pick.map((h) => [h, req.headers.get(h)])),
    envUrlHints: {
      // Netlify sets these; values are public URLs, not secrets.
      URL: process.env.URL ?? null,
      DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL ?? null,
      DEPLOY_URL: process.env.DEPLOY_URL ?? null,
      CONTEXT: process.env.CONTEXT ?? null,
    },
  });
}
