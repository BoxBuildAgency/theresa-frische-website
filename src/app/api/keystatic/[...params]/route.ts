import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

/**
 * Keystatic builds its GitHub OAuth `redirect_uri` from `request.url`.
 *
 * Behind Netlify's proxy that is the *internal* deploy URL, not the public one
 * — confirmed on production, where a request to https://theresafrische.com
 * arrived with `request.url` of https://main--theresafrische.netlify.app/… and
 * the login endpoint therefore sent GitHub a redirect_uri of
 * https://<deploy-id>--theresafrische.netlify.app/api/keystatic/github/oauth/callback.
 * That host is not registered on the GitHub App, so GitHub rejects the login
 * with "The redirect_uri is not associated with this application".
 *
 * The correct public host is in `x-forwarded-host` (with `x-forwarded-proto`),
 * which Netlify's edge sets on every request. Rewriting the URL before handing
 * it to Keystatic makes the derived redirect_uri correct on the production
 * domain, on branch previews, and locally, without hard-coding a domain.
 *
 * Set KEYSTATIC_PUBLIC_URL to pin the origin instead of deriving it — useful if
 * this ever sits behind a proxy that does not set the forwarded headers.
 * Forging `x-forwarded-host` cannot redirect an OAuth code anywhere new,
 * because GitHub only accepts callback URLs already registered on the App.
 */
function toPublicUrl(request: Request): Request {
  const configured = process.env.KEYSTATIC_PUBLIC_URL;
  const forwardedHost = request.headers.get("x-forwarded-host");
  if (!configured && !forwardedHost) return request;

  const current = new URL(request.url);

  // Build the new URL from the origin rather than assigning `url.host`:
  // assigning a host with no port leaves the old port in place, which would
  // produce https://theresafrische.com:3000/… when proxied from a local port.
  const origin = configured
    ? new URL(configured).origin
    : `${request.headers.get("x-forwarded-proto") ?? "https"}://${forwardedHost}`;

  const url = new URL(current.pathname + current.search + current.hash, origin);

  if (url.toString() === request.url) return request;

  // A GET/HEAD has no body to carry over. Anything else has to forward the
  // stream explicitly — `duplex` is required when constructing a Request from
  // a stream body in Node's fetch implementation.
  if (request.method === "GET" || request.method === "HEAD") {
    return new Request(url, request);
  }
  return new Request(url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: request.redirect,
    duplex: "half",
  } as RequestInit & { duplex: "half" });
}

const keystatic = makeRouteHandler({ config });

export function GET(request: Request) {
  return keystatic.GET(toPublicUrl(request));
}

export function POST(request: Request) {
  return keystatic.POST(toPublicUrl(request));
}
