import type { Locale, SiteContent } from "@/types";
import { en } from "@/content/en";
import { es } from "@/content/es";

const dictionaries: Record<Locale, SiteContent> = { en, es };

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function getDictionary(locale: Locale): SiteContent {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
