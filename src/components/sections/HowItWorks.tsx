import SectionTitle from "@/components/ui/SectionTitle";
import type { SiteContent } from "@/types";

interface HowItWorksProps {
  content: SiteContent["howItWorks"];
}

export default function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector line */}
              {index < content.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-slate-200" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-900 text-white mb-6 shadow-lg group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>

              <h3 className="text-lg font-bold text-blue-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
