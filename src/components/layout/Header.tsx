"use client";

import { useState } from "react";
import Link from "next/link";
import type { SiteContent, Locale } from "@/types";
import { BRAND } from "@/constants/contact";

interface HeaderProps {
  content: SiteContent["nav"];
  locale: Locale;
}

export default function Header({ content, locale }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const switchLocale = locale === "es" ? "en" : "es";

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PB</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-blue-900 text-sm leading-tight group-hover:text-red-600 transition-colors">
                {BRAND.name}
              </p>
              <p className="text-xs text-slate-500">{BRAND.tagline}</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language switch */}
            <Link
              href={`/${switchLocale}`}
              className="text-sm font-semibold px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              {content.langSwitch}
            </Link>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors shadow-sm"
            >
              {content.cta}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block py-3 px-4 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block w-full text-center bg-red-600 text-white text-sm font-semibold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors mt-3"
            >
              {content.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
