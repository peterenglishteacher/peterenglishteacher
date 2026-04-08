import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import type { SiteContent } from "@/types";

interface ServicesProps {
  content: SiteContent["services"];
}

export default function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
