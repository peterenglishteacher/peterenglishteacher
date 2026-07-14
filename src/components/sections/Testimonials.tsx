"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import type { SiteContent } from "@/types";

const CLONES = 3;   // cards cloned at each end for seamless wrap
const ANIM = 300;   // transition duration in ms

interface TestimonialsProps {
  content: SiteContent["testimonials"];
}

export default function Testimonials({ content }: TestimonialsProps) {
  const items = content.items;
  const N = items.length;
  // [...last 3, ...all real, ...first 3]
  const extended = [...items.slice(-CLONES), ...items, ...items.slice(0, CLONES)];

  const [idx, setIdx] = useState(CLONES); // start at first real card
  const [stepping, setStepping] = useState(false);
  const [stepPx, setStepPx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure step (card width + gap) from DOM — responsive-safe
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || track.children.length < 2) return;
      const a = (track.children[0] as HTMLElement).getBoundingClientRect();
      const b = (track.children[1] as HTMLElement).getBoundingClientRect();
      setStepPx(b.left - a.left);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // After animation completes, silently jump from clone to real card
  useEffect(() => {
    if (!stepping) return;
    const t = setTimeout(() => {
      setIdx((prev) => {
        if (prev < CLONES) return prev + N;
        if (prev >= N + CLONES) return prev - N;
        return prev;
      });
      setStepping(false);
    }, ANIM);
    return () => clearTimeout(t);
  }, [idx, stepping, N]);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (stepping) return;
      setStepping(true);
      setIdx((prev) => prev + dir);
    },
    [stepping]
  );

  const btnClass =
    "absolute top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-slate-50 hover:shadow-md transition text-slate-600 text-xl leading-none disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.sectionTitle} subtitle={content.sectionSubtitle} />

        <div className="relative px-12">
          <button
            onClick={() => go(-1)}
            disabled={stepping}
            className={`${btnClass} left-0`}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-8 pb-2"
              style={{
                transform: `translateX(${-idx * stepPx}px)`,
                transition: stepping ? `transform ${ANIM}ms ease-in-out` : "none",
                visibility: stepPx === 0 ? "hidden" : "visible",
              }}
            >
              {extended.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.375rem)] bg-slate-50 rounded-xl p-8 border border-slate-100 relative"
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
          </div>

          <button
            onClick={() => go(1)}
            disabled={stepping}
            className={`${btnClass} right-0`}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
