import Image from "next/image";
import Button from "@/components/ui/Button";
import type { SiteContent } from "@/types";
import { CONTACT } from "@/constants/contact";

interface HeroProps {
  content: SiteContent["hero"];
}

export default function Hero({ content }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white"
    >
      {/* Decorative elements - subtle British inspiration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-white rounded-full" />
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-white to-red-600" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-6">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-sm font-medium px-4 py-2 rounded-full border border-white/20">
              🇬🇧 {content.badge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {content.title}
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {content.subtitle}
            </p>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {content.online}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button href="#contact" variant="primary" size="lg">
                {content.cta}
              </Button>
              <Button
                href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent("Hi Peter! I'm interested in English lessons.")}`}
                variant="whatsapp"
                size="lg"
                external
              >
                {content.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/20 to-blue-400/20 rounded-2xl blur-2xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/PeterBrown.png"
                  alt={content.badge}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Decorative flag accent */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl">🇬🇧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
