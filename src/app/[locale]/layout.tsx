import { notFound } from "next/navigation";
import type { Locale } from "@/types";
import { isValidLocale, locales, getDictionary } from "@/lib/i18n";
import { generateSeoMetadata, generateJsonLd } from "@/lib/seo";
import CookieBanner from "@/components/layout/CookieBanner";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return generateSeoMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const jsonLd = generateJsonLd(locale as Locale);
  const t = getDictionary(locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
      <CookieBanner content={t.cookieBanner} />
    </>
  );
}
