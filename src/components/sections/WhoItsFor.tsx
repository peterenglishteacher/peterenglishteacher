import SectionTitle from "@/components/ui/SectionTitle";
import type { SiteContent } from "@/types";

interface WhoItsForProps {
  content: SiteContent["whoItsFor"];
}

export default function WhoItsFor({ content }: WhoItsForProps) {
  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {content.audiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-red-100 transition-all duration-300 text-center"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-medium text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
