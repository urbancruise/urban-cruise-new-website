import { formatLocationName } from "@/app/lib/location";
import { absoluteUrl, SITE_NAME, SITE_URL } from "./seo";

export type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.webp"),
    sameAs: [
      "https://www.facebook.com/UrbanCruiseIndia/",
      "https://www.instagram.com/urbancruiseindia/",
      "https://x.com/UrbanCruiseIn",
      "https://www.linkedin.com/company/urban-cruise-india/",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function webPageSchema({
  name,
  description,
  path,
  breadcrumbs,
}: {
  name: string;
  description: string;
  path: string;
  breadcrumbs?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    ...(breadcrumbs ? { breadcrumb: { "@id": breadcrumbs } } : {}),
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items[items.length - 1]?.path || "/")}#breadcrumb`,
    itemListElement,
  };
}

export function faqPageSchema(
  questions: Array<{ question: string; answer: string }>,
  path?: string,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(path ? { "@id": `${absoluteUrl(path)}#faq` } : {}),
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function itemListSchema(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function locationBusinessSchema(location: string): JsonLd {
  const city = formatLocationName(location);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl(`/${location}`)}#business`,
    name: `${SITE_NAME} ${city}`,
    url: absoluteUrl(`/${location}`),
    image: absoluteUrl("/images/logo.webp"),
    areaServed: { "@type": "City", name: city },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceSchema({
  name,
  description,
  path,
  location,
}: {
  name: string;
  description: string;
  path: string;
  location: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: formatLocationName(location) },
  };
}
