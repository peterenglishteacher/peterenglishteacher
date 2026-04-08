import type { Metadata } from "next";
import type { Locale } from "@/types";
import { getDictionary } from "./i18n";
import { CONTACT, BRAND } from "@/constants/contact";

export function generateSeoMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const url = CONTACT.url;
  const localeTag = locale === "es" ? "es_ES" : "en_GB";

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords:
      locale === "es"
        ? "profesor de inglés nativo, clases de inglés online, profesor de inglés en Sevilla, Peter Brown English Teacher, clases de inglés personalizadas, business English, preparación exámenes inglés"
        : "native English teacher, online English classes, English teacher in Seville, Peter Brown English Teacher, personalised English lessons, business English, exam preparation",
    authors: [{ name: BRAND.name }],
    creator: BRAND.fullBrand,
    metadataBase: new URL(url),
    alternates: {
      canonical: `${url}/${locale}`,
      languages: {
        "es": `${url}/es`,
        "en": `${url}/en`,
      },
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url: `${url}/${locale}`,
      siteName: BRAND.fullBrand,
      locale: localeTag,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateJsonLd(locale: Locale) {
  const t = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BRAND.fullBrand,
    description: t.meta.description,
    url: CONTACT.url,
    telephone: CONTACT.whatsappFormatted,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seville",
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide (online)",
    },
    serviceType: "English Language Teaching",
    provider: {
      "@type": "Person",
      name: BRAND.name,
      jobTitle: "English Teacher",
      nationality: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Online",
    },
    inLanguage: [locale === "es" ? "es" : "en", "en"],
  };
}
