"use client";

import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import type { SiteContent } from "@/types";

interface TestimonialsProps {
  content: SiteContent["testimonials"];
}

export default function Testimonials({ content }: TestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const first = scrollRef.current.firstElementChild as HTMLElement | null;
    const gap = 32;
    const step = first ? first.offsetWidth + gap : scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} />

        <div className="relative px-12">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-slate-50 hover:shadow-md transition text-slate-600 text-xl leading-none"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {content.items.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.375rem)] snap-start bg-slate-50 rounded-xl p-8 border border-slate-100 relative"
              >
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

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-slate-50 hover:shadow-md transition text-slate-600 text-xl leading-none"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
