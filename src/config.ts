/**
 * TechInstant Tools is a separate Next.js app with its own deployment, so the
 * marketing site links to it by absolute URL. Keep this the single place that
 * knows the address — if the domain changes, change it here only.
 */
export const TOOLS_URL = 'https://techinstant-tools.netlify.app';

/** Deep link to a specific tool, e.g. toolUrl('compress-pdf'). */
export const toolUrl = (slug?: string) =>
  slug ? `${TOOLS_URL}/tools/${slug}` : `${TOOLS_URL}/tools`;
