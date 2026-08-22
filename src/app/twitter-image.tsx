import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

// Separate file on purpose: Next does not fall back from opengraph-image to
// twitter-image, so a missing twitter-image means no card image on X.
export const alt = "Renewable Observer — renewable energy news and market intelligence";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function TwitterImage() {
  return renderOgImage("Renewable energy news, markets and policy");
}
