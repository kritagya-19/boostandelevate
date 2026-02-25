import { ServiceCardType, TestimonialType, ProcessStepType } from "../types";

// --- Services ---
export const servicesData: ServiceCardType[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "We build high-converting, mobile-first websites designed to turn visitors into qualified leads and paying customers.",
  },
  {
    id: 2,
    title: "AI UGC",
    description:
      "We create hyper-realistic AI product visuals and videos that boost trust, stop scrolling, and increase purchase decisions — without expensive shoots.",
  },
  {
    id: 3,
    title: "Instagram Management",
    description:
      "From strategy to content creation and growth systems — we manage your Instagram to generate consistent engagement, leads, and brand authority.",
  },
  {
    id: 4,
    title: "Brand Logo & Identity",
    description:
      "We design powerful logos and cohesive brand identities that position you as premium, trustworthy, and impossible to ignore.",
  },
];

// --- Process Steps ---
export const processStepsData: ProcessStepType[] = [
  {
    id: "01",
    title: "Discover & Strategize",
    description:
      "We understand your business, audience, and goals — then create a clear digital growth plan tailored to you.",
    color: "from-[#FB9B8F] to-[#FDC3A1]",
  },
  {
    id: "02",
    title: "Build & Launch",
    description:
      "We design your website, craft your brand identity, and create powerful content that's built to convert — not just look good.",
    color: "from-[#FDC3A1] to-[#F57799]",
  },
  {
    id: "03",
    title: "Optimize & Scale",
    description:
      "We track performance, refine strategy, and turn your online presence into a consistent lead and revenue system.",
    color: "from-[#F57799] to-[#FB9B8F]",
  },
];

// --- Testimonials ---
export const testimonialsData: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Founder, Luma Beauty",
    text: "Boost & Elevate completely transformed our online presence. Their web design and IG management doubled our inbound leads in just 3 months. The ROI has been absolutely phenomenal.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "CMO, TechFlow",
    text: "The AI UGC creatives they produced for our ads cut our CPA in half. A truly premium, results-driven agency experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Ross",
    role: "Director, Apex Fitness",
    text: "The website they built for us is a conversion machine. Our sales have increased by 150% since the launch. It's the best investment we've made this year.",
    rating: 5,
  },
];

// --- Calendly ---
export const CALENDLY_URL =
  "https://calendly.com/b-e141905/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=000000";

// --- Social Links ---
export const socialLinks = {
  instagram: "https://www.instagram.com/boostandelevate_?igsh=d3I0Y2R6dTJuZXph",
  linkedin: "https://www.linkedin.com/company/boostandelevate/",
};
