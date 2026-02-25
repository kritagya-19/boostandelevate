import React, { useEffect } from "react";
import {
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

// Components
import {
  GridBackground,
  Header,
  HeroSection,
  StickyServicesCards,
  PortfolioSection,
  ProcessSection,
  TestimonialsSection,
  CTASection,
  Footer,
} from "./components";

// Data
import {
  servicesData,
  processStepsData,
  testimonialsData,
  CALENDLY_URL,
} from "./data";

// --- Global CSS Keyframes ---
const globalStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }

  @keyframes draw-curve {
    0% { stroke-dashoffset: 100; }
    100% { stroke-dashoffset: 0; }
  }
  .animate-draw-curve {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: draw-curve 1.5s ease-out 0.6s forwards;
  }
`;

// --- Main App ---
export default function App() {
  // Load Calendly widget script & styles
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  // --- Grid background animation values ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen text-slate-900 font-sans selection:bg-[#FDC3A1] selection:text-slate-900 relative"
    >
      {/* Global keyframe styles */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* Animated grid background */}
      <GridBackground
        gridOffsetX={gridOffsetX}
        gridOffsetY={gridOffsetY}
        maskImage={maskImage}
      />

      {/* Page content */}
      <div className="relative z-10">
        <Header />
        <HeroSection onCalendlyClick={handleCalendlyClick} />

        <section
          id="services"
          className="relative z-10 bg-transparent pt-12 md:pt-24"
        >
          <StickyServicesCards cards={servicesData} />
        </section>

        <PortfolioSection />
        <ProcessSection steps={processStepsData} />
        <TestimonialsSection testimonials={testimonialsData} />
        <CTASection onCalendlyClick={handleCalendlyClick} />
        <Footer />
      </div>
    </div>
  );
}
