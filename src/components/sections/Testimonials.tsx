import SectionTitle from "@/components/ui/SectionTitle";
import type { SiteContent } from "@/types";

interface TestimonialsProps {
  content: SiteContent["testimonials"];
}

export default function Testimonials({ content }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} />

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 border border-slate-100 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-red-100 font-serif leading-none select-none">
                &ldquo;
              </div>

              <div className="relative">
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 text-sm">{testimonial.name}</p>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
