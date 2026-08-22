"use server"

export type SubscribeResult =
  | { success: true; message: string }
  | { success: false; error: string };

// Deliberately permissive: the goal is to catch typos and obvious junk, not to
// adjudicate RFC 5322. The provider does the authoritative validation.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Hands the address to the configured newsletter provider.
 *
 * Set NEWSLETTER_WEBHOOK_URL to the provider's subscribe endpoint (Mailchimp,
 * Resend Audiences, Buttondown, Zapier — anything that accepts a JSON POST),
 * and NEWSLETTER_WEBHOOK_TOKEN if it expects a bearer token.
 *
 * This previously appended to a CSV under process.cwd(). On Vercel the
 * application directory is read-only, so every write threw and every address
 * collected since launch was discarded behind a generic error message.
 */
export async function subscribeAction(formData: FormData): Promise<SubscribeResult> {
  const raw = formData.get("email");

  if (typeof raw !== "string") {
    return { success: false, error: "Please enter an email address." };
  }

  const email = raw.trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { success: false, error: "That doesn't look like a valid email address." };
  }

  const endpoint = process.env.NEWSLETTER_WEBHOOK_URL;

  if (!endpoint) {
    // Loud on the server, honest to the reader. Silently accepting the address
    // and dropping it is the failure mode this replaced.
    console.error(
      `[newsletter] NEWSLETTER_WEBHOOK_URL is not set — signup from ${email} could not be stored.`
    );
    return {
      success: false,
      error: "Signups aren't available right now. Please email hello@renewableobserver.com and we'll add you.",
    };
  }

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.NEWSLETTER_WEBHOOK_TOKEN) {
      headers.Authorization = `Bearer ${process.env.NEWSLETTER_WEBHOOK_TOKEN}`;
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, source: "renewableobserver.com" }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[newsletter] Provider rejected ${email}: ${res.status} ${detail}`);
      return { success: false, error: "Something went wrong. Please try again in a moment." };
    }

    return { success: true, message: "Thanks — you're subscribed." };
  } catch (error) {
    console.error(`[newsletter] Failed to submit ${email}:`, error);
    return { success: false, error: "Something went wrong. Please try again in a moment." };
  }
}
