import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Full-width CTA banner prompting users to book a strategy call.
 */
interface CTASectionProps {
  onCalendlyClick: (e: React.MouseEvent) => void;
}

export const CTASection = ({ onCalendlyClick }: CTASectionProps) => {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-[3rem] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] p-12 md:p-24 text-center flex flex-col items-center justify-center"
      >
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#FB9B8F]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#F57799]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-sm font-bold tracking-wider text-slate-700 uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F57799] animate-pulse" />
            Limited Spots Available
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
            Ready to Turn Your Online Presence Into{" "}
            <br className="hidden md:block" />
            <span className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FB9B8F] via-[#FDC3A1] to-[#F57799] pr-2 pb-2">
              Revenue?
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Let's build a system that attracts the right audience, converts
            consistently, and scales your business — without wasting time or
            money.
          </p>

          <a
            href="#"
            onClick={onCalendlyClick}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-[#F57799]/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FB9B8F]/20 to-[#F57799]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              Book My Free Strategy Call
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
