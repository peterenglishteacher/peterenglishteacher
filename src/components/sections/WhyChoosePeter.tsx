import SectionTitle from "@/components/ui/SectionTitle";
import type { SiteContent } from "@/types";

interface WhyChoosePeterProps {
  content: SiteContent["whyChoose"];
}

export default function WhyChoosePeter({ content }: WhyChoosePeterProps) {
  return (
    <section id="why-peter" className="py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-10 left-20 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} light />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
