import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero section with headline, subheading, CTAs, and client logo marquee.
 */
interface HeroSectionProps {
  onCalendlyClick: (e: React.MouseEvent) => void;
}

export const HeroSection = ({ onCalendlyClick }: HeroSectionProps) => {
  return (
    <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-16 overflow-visible flex flex-col items-center justify-center min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-tighter text-slate-900 leading-[1.05] mb-8 mt-12"
        >
          <span className="block mb-1 md:mb-2 whitespace-normal lg:whitespace-nowrap">
            Turn Your Online Presence Into a
          </span>
          <span className="relative inline-block whitespace-nowrap px-2 mt-2 md:mt-0">
            <span className="relative z-10 text-slate-900">
              Revenue Machine
            </span>
            {/* Curved Animated Underline */}
            <svg
              className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-4 md:h-6 -z-10 opacity-90"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="gradientCurve"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FB9B8F" />
                  <stop offset="50%" stopColor="#FDC3A1" />
                  <stop offset="100%" stopColor="#F57799" />
                </linearGradient>
              </defs>
              <path
                d="M 0 15 Q 50 0 100 15"
                fill="none"
                stroke="url(#gradientCurve)"
                strokeWidth="6"
                strokeLinecap="round"
                pathLength="100"
                className="animate-draw-curve"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Stop posting without results. No more websites that don't convert.{" "}
          <br />
          We build conversion-focused websites, AI UGC, and Instagram growth
          systems that turn attention into qualified leads — and leads into
          paying customers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#"
            onClick={onCalendlyClick}
            className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] overflow-hidden shadow-2xl shadow-slate-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FB9B8F]/20 to-[#F57799]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              Start Growing Today{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>
          <a
            href="#work"
            className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 shadow-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:bg-white hover:border-slate-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio
            </span>
          </a>
        </motion.div>

        {/* Client Logo Marquee */}
        <ClientLogoMarquee />
      </div>
    </section>
  );
};

/** Scrolling client logo marquee strip. */
const ClientLogoMarquee = () => {
  const logos = [
    {
      src: "https://placehold.co/300x100/transparent/94a3b8?text=CLIENT+LOGO&font=montserrat",
      alt: "Client 1",
    },
    {
      src: "https://placehold.co/300x100/transparent/94a3b8?text=BRAND+NAME&font=montserrat",
      alt: "Client 2",
    },
    {
      src: "https://placehold.co/300x100/transparent/94a3b8?text=COMPANY+INC&font=montserrat",
      alt: "Client 3",
    },
    {
      src: "https://placehold.co/300x100/transparent/94a3b8?text=PARTNER+LTD&font=montserrat",
      alt: "Client 4",
    },
    {
      src: "https://placehold.co/300x100/transparent/94a3b8?text=STARTUP+X&font=montserrat",
      alt: "Client 5",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="w-full mt-24 flex flex-col md:flex-row items-center gap-6 md:gap-10"
    >
      <div className="shrink-0 text-center md:text-left">
        <p className="text-[15px] md:text-base text-slate-500 font-medium leading-tight max-w-[180px] mx-auto md:mx-0">
          Brands We've Helped Scale Online
        </p>
      </div>

      <div className="flex-1 w-full relative flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
          {[1, 2].map((half) => (
            <div
              key={half}
              className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 shrink-0"
            >
              {[1, 2, 3].map((group) => (
                <React.Fragment key={`${half}-${group}`}>
                  {logos.map((logo, i) => (
                    <img
                      key={`${half}-${group}-${i}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-6 md:h-8 w-auto max-w-none object-contain shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
