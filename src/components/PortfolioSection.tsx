import { motion } from "framer-motion";

/**
 * Portfolio / Case Studies section with alternating image+text layouts.
 */
export const PortfolioSection = () => {
  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-white/60 backdrop-blur-xl border-y border-slate-100/50 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* Case Study 1 - Text Left, Image Right */}
          <CaseStudy
            tag="Client results"
            title={
              <>
                Clinic Brand Increased Monthly Inquiries by <br />
                <span className="italic font-light">137%</span> in 90 Days
              </>
            }
            description="For Shiyanka Rehab & Physiotherapy CLinic, we redesigned their website, and implemented a structured Instagram content system. Within 3 months, website traffic grew by 102%, Instagram engagement improved by 1.92x, and direct inquiry messages increased by 137%, leading to consistent weekend bookings."
            imageSrc="physio.png"
            imageAlt="Shiyanka Rehab & Physiotherapy Clinic"
            imagePosition="right"
          />

          {/* Case Study 2 - Image Left, Text Right */}
          <CaseStudy
            tag="Client results"
            title={
              <>
                Turning Traffic Into <br />
                <span className="italic font-light">Qualified Leads</span>
              </>
            }
            description="After redesigning the client's website with a clear offer, faster load speed (under 2.5 seconds), and optimized CTAs, their conversion rate improved from 1.2% to 2.9% within 60 days — more than doubling qualified inquiries without increasing ad spend."
            imageSrc="beautyhub.png"
            imageAlt="Website Analytics Dashboard"
            imagePosition="left"
          />
        </div>
      </div>
    </section>
  );
};

// --- Single Case Study Block ---
interface CaseStudyProps {
  tag: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

const CaseStudy = ({
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
}: CaseStudyProps) => {
  const isLeft = imagePosition === "left";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className={`w-full ${isLeft ? "order-1" : "order-2 lg:order-2"}`}
      >
        <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/15 group cursor-pointer">
          {/* Premium gradient border effect */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FB9B8F]/20 via-transparent to-[#F57799]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Subtle vignette overlay for premium look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Text */}
      <div
        className={`flex flex-col items-start text-left ${
          isLeft ? "order-2" : "order-1 lg:order-1"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="inline-flex px-3 py-1.5 rounded-md bg-[#FAFAFA] border border-slate-200/60 shadow-sm text-slate-700 text-sm font-semibold mb-8"
        >
          {tag}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};
