import { ImageResponse } from "next/og";
import { SITE_NAME } from "./site";

/** Facebook and X both crawl at this size; anything else gets re-cropped. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BRAND = "#0F5132";

/**
 * Default social card, shared by opengraph-image and twitter-image.
 *
 * Pages with a featured image override this through their own metadata; this
 * covers everything else, which previously shared to social as a bare link
 * with no image at all.
 *
 * Deliberately uses no custom font: loading one would mean a network fetch at
 * build time, and the default face renders fine at this size.
 */
export function renderOgImage(title: string = SITE_NAME, eyebrow?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BRAND,
          padding: 72,
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            {eyebrow || "Renewable Energy News"}
          </div>
          <div
            style={{
              marginTop: 12,
              height: 4,
              width: 140,
              background: "#FACC15",
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            fontSize: title.length > 70 ? 56 : 72,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1.5,
            display: "flex",
            maxWidth: 1000,
          }}
        >
          {title.length > 130 ? `${title.slice(0, 127)}...` : title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <div style={{ display: "flex", fontWeight: 700, letterSpacing: 2 }}>
            RENEWABLE OBSERVER
          </div>
          <div style={{ display: "flex" }}>renewableobserver.com</div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
