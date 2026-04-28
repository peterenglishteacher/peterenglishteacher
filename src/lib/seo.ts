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
        "x-default": `${url}/es`,
      },
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url: `${url}/${locale}`,
      siteName: BRAND.fullBrand,
      locale: localeTag,
      type: "website",
      images: [
        {
          url: `${url}/peter-brown.jpg`,
          width: 1200,
          height: 630,
          alt: BRAND.fullBrand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      images: [`${url}/peter-brown.jpg`],
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
    "@id": CONTACT.url,
    name: BRAND.fullBrand,
    description: t.meta.description,
    url: CONTACT.url,
    image: `${CONTACT.url}/peter-brown.jpg`,
    telephone: CONTACT.whatsappFormatted,
    email: CONTACT.email,
    sameAs: [CONTACT.facebookUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seville",
      addressCountry: "ES",
    },
    areaServed: [
      { "@type": "City", name: "Seville", addressCountry: "ES" },
      { "@type": "Place", name: "Worldwide (online)" },
    ],
    serviceType: "English Language Teaching",
    provider: {
      "@type": "Person",
      name: BRAND.name,
      jobTitle: "English Teacher",
      nationality: {
        "@type": "Country",
        name: "United Kingdom",
      },
      knowsLanguage: ["en", "es"],
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Online",
      availableLanguage: "English",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "es" ? "Clases de inglés" : "English Classes",
      itemListElement: t.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    inLanguage: locale === "es" ? ["es", "en"] : ["en"],
  };
}
