import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { TestimonialType } from "../types";

/**
 * Testimonials section with horizontal marquee of testimonial cards.
 */
interface TestimonialsSectionProps {
  testimonials: TestimonialType[];
}

export const TestimonialsSection = ({
  testimonials,
}: TestimonialsSectionProps) => {
  return (
    <section
      id="testimonials"
      className="pt-20 pb-24 md:pt-32 md:pb-40 relative z-10 max-w-[100vw] overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16 border-t border-slate-200/60 pt-16 relative">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/50 shadow-sm text-xs font-bold tracking-widest text-slate-700 uppercase backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
              </span>
              Verified Growth
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">
              Don't just take{" "}
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FB9B8F] to-[#F57799] pr-1">
                our word
              </span>{" "}
              for it.
            </h3>
          </div>

          <div className="flex flex-col items-start md:items-end relative z-10">
            <div className="flex gap-1 text-[#FDC3A1] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
            <p className="text-base font-semibold text-slate-500">
              4.9/5 from 200+ scaling brands
            </p>
          </div>
        </div>
      </div>

      {/* Marquee feed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-8 px-4 sm:px-0"
      >
        <div
          className="flex w-max items-stretch animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: "60s" }}
        >
          {[1, 2].map((half) => (
            <div
              key={half}
              className="flex items-stretch gap-6 md:gap-8 pr-6 md:pr-8 shrink-0"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard
                  key={`${half}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// --- Single Testimonial Card ---
const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: TestimonialType;
  index: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div className="relative h-full w-[320px] md:w-[420px] shrink-0 whitespace-normal">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: (index % 3) * 0.7,
        }}
        onMouseMove={handleMouseMove}
        className="group relative h-full overflow-hidden rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 md:p-10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
      >
        {/* Spotlight tracker */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(251, 155, 143, 0.12), transparent 80%)
            `,
          }}
        />

        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FB9B8F] via-[#FDC3A1] to-[#F57799] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />

        {/* Watermark quote */}
        <div className="absolute -top-4 -right-4 text-[10rem] font-serif leading-none text-slate-900/[0.03] select-none pointer-events-none group-hover:text-slate-900/[0.05] transition-colors duration-500 z-0 rotate-12">
          "
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Stars */}
          <div className="flex gap-1 text-[#FDC3A1] mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                fill="currentColor"
                size={18}
                className="drop-shadow-sm"
              />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10 flex-1">
            "{testimonial.text}"
          </p>

          {/* Author */}
          <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between mt-auto">
            <div>
              <h4 className="font-extrabold text-slate-900 text-base tracking-tight uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FB9B8F] group-hover:to-[#F57799] transition-all duration-300">
                {testimonial.name}
              </h4>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {testimonial.role}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50/80 border border-slate-200/80 flex items-center justify-center shadow-inner group-hover:bg-white group-hover:border-[#25D366]/30 group-hover:shadow-[0_0_15px_rgba(37,211,102,0.15)] transition-all duration-500">
              <CheckCircle2 size={18} className="text-[#25D366]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
