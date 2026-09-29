/**
 * Submits a form to Netlify Forms.
 *
 * The site is a single-page app, so Netlify's build-time crawler never sees the
 * React markup. The way round that — and the documented one — is to declare each
 * form as a hidden static form in `index.html`, then POST url-encoded data to
 * any path on the site with a matching `form-name`. Netlify intercepts the POST
 * before it reaches the SPA and files the submission.
 *
 * Submissions land in Netlify → Forms. Email notification has to be switched on
 * there; it cannot be configured from the code.
 *
 * There is deliberately no API key or third-party service here. If Netlify Forms
 * is ever turned off, `submitForm` starts returning failures and every caller
 * shows the fallback email address rather than pretending the message was sent.
 */

/** Must match the `name` of a hidden form declared in index.html. */
export type FormName = "project-brief" | "newsletter";

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "network" | "rejected"; status?: number };

export async function submitForm(
  formName: FormName,
  fields: Record<string, string>
): Promise<SubmitResult> {
  const body = new URLSearchParams({ "form-name": formName });
  for (const [key, value] of Object.entries(fields)) {
    /* Netlify stores every field it is given; skip blanks so optional fields do
       not show up as empty rows in the dashboard. */
    if (value != null && String(value).trim() !== "") body.set(key, String(value));
  }

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    /* Netlify answers a successful form POST with a 200 or a 303 redirect.
       Anything else means it did not file the submission — most often because
       Forms is not enabled for the site, or the form name has no matching
       declaration in index.html. */
    if (response.ok || response.status === 303) return { ok: true };
    return { ok: false, reason: "rejected", status: response.status };
  } catch {
    return { ok: false, reason: "network" };
  }
}

/** The address shown whenever a submission could not be delivered. */
export const FALLBACK_EMAIL = "team.techinstant@gmail.com";

/**
 * A prefilled mailto, so a failed submission is still recoverable in one click
 * rather than asking someone to retype everything they just wrote.
 */
export function mailtoFallback(subject: string, fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`);
  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}
