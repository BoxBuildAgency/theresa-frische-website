import type { Locale, SiteContent } from "@/content/types";
import { SITE_URL } from "@/lib/site";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, serialised server-side; safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Person + a generic Counselling Service. Non-medical schema types only —
 * deliberately NOT MedicalBusiness / Physician.
 */
export function PersonServiceJsonLd({ content }: { content: SiteContent }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.brand.name,
    jobTitle: content.brand.title,
    url: SITE_URL,
    image: `${SITE_URL}/images/about-theresa.jpg`,
    description: content.about.metaDescription,
    knowsLanguage: ["en", "de"],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Counselling",
    name: content.brand.title,
    provider: { "@type": "Person", name: content.brand.name, url: SITE_URL },
    areaServed: "Worldwide",
    availableLanguage: ["English", "German"],
    audience: { "@type": "Audience", audienceType: "Individuals and couples" },
    url: SITE_URL,
    description: content.home.metaDescription,
  };

  return (
    <>
      <Script data={person} />
      <Script data={service} />
    </>
  );
}

export function FaqJsonLd({ faq }: { faq: SiteContent["faq"] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <Script data={data} />;
}

export function ArticleJsonLd({
  content,
  locale,
  slug,
  title,
  description,
  date,
}: {
  content: SiteContent;
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  const url = `${SITE_URL}${locale === "de" ? "/de" : ""}/blog/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: locale === "de" ? "de-DE" : "en",
    author: { "@type": "Person", name: content.brand.name, url: SITE_URL },
    publisher: { "@type": "Person", name: content.brand.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
  return <Script data={data} />;
}
