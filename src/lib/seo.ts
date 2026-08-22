import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_LOCALE, truncate } from "./site";

/** Search engines truncate around these; longer values are wasted work. */
export const MAX_TITLE = 60;
export const MAX_DESCRIPTION = 160;

export const TWITTER_HANDLE = "@RenewableObsrvr";

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/renewableobserver/",
];

interface PageMetaInput {
  title: string;
  description: string;
  /** Site-root-relative, with a leading slash. Becomes the canonical URL. */
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Set false for placeholder pages that should not be indexed. */
  index?: boolean;
}

/**
 * Single source of truth for page metadata.
 *
 * Every page needs a canonical, an Open Graph block and a Twitter card, and
 * writing them by hand meant most pages had none. Build them here so a new page
 * gets the full set by default rather than by remembering to.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  index = true,
}: PageMetaInput): Metadata {
  const finalTitle = truncate(title, MAX_TITLE);
  const finalDescription = truncate(description, MAX_DESCRIPTION);
  const url = `${SITE_URL}${path}`;

  // Omitted rather than defaulted: Next falls back to the route's own
  // opengraph-image, and a hand-set empty array would suppress that.
  const images = image ? [image] : undefined;

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: { canonical: path },
    robots: index
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
      : { index: false, follow: true },
    openGraph: {
      type,
      title: finalTitle,
      description: finalDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      ...(images ? { images } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      ...(images ? { images } : {}),
    },
  };
}

/**
 * Open Graph block for a static page.
 *
 * Deliberately omits title and description: Next fills those from the page's
 * own `title` and `description` when absent. It does need `url`, though —
 * metadata merging replaces `openGraph` wholesale rather than merging it, so a
 * page that declares none inherits the layout's and reports the homepage as its
 * og:url.
 */
export function ogFor(path: string) {
  return {
    type: "website" as const,
    url: path,
    siteName: SITE_NAME,
    locale: "en_US",
  };
}

/**
 * Publisher identity, emitted once in the root layout.
 *
 * Google News and the article rich results both resolve the `publisher` on a
 * NewsArticle against an Organization node; without one the articles reference
 * a publisher that is never described anywhere.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    sameAs: SOCIAL_PROFILES,
    email: "hello@renewableobserver.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "editorial",
        email: "editor@renewableobserver.com",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: SITE_LOCALE,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
