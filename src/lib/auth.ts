import { createHash, timingSafeEqual } from "crypto";

/**
 * Constant-time secret comparison.
 *
 * Hashing first gives both sides a fixed length, which timingSafeEqual requires
 * and which also stops the comparison leaking the secret's length.
 */
export function secretMatches(provided: string | null, expected: string | undefined): boolean {
  if (!provided || !expected) return false;
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

/**
 * Reads the caller's secret. Prefers the Authorization header — Vercel Cron
 * sends one, and unlike a query string it does not end up in access logs,
 * referrer headers or browser history. The query parameter stays supported so
 * existing WordPress webhooks keep working.
 */
export function extractSecret(request: Request): string | null {
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7);
  return new URL(request.url).searchParams.get("secret");
}
