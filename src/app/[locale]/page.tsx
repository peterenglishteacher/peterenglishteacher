import type { Locale } from "@/types";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChoosePeter from "@/components/sections/WhyChoosePeter";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = getDictionary(locale as Locale);

  return (
    <>
      <Header content={t.nav} locale={locale as Locale} />

      <main className="flex-1 pt-16 md:pt-18">
        <Hero content={t.hero} />
        <About content={t.about} />
        <Services content={t.services} />
        <HowItWorks content={t.howItWorks} />
        <WhyChoosePeter content={t.whyChoose} />
        <WhoItsFor content={t.whoItsFor} />
        <Testimonials content={t.testimonials} />
        <Contact content={t.contact} locale={locale as Locale} />
      </main>

      <Footer content={t.footer} />
      <WhatsAppButton />
    </>
  );
}
