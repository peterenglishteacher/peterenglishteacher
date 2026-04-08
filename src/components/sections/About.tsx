import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import type { SiteContent } from "@/types";

interface AboutProps {
  content: SiteContent["about"];
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-red-100 to-blue-100 rounded-2xl" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/PeterBrown.png"
                  alt={content.photoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -left-3 w-24 h-1 bg-red-600 rounded-full" />
              <div className="absolute -top-3 -right-3 w-16 h-1 bg-blue-900 rounded-full" />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 space-y-5">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-xl">🇬🇧</span>
                <span className="text-sm font-medium text-blue-900">Native Speaker</span>
              </div>
              <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg">
                <span className="text-xl">📍</span>
                <span className="text-sm font-medium text-red-900">Seville, Spain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
