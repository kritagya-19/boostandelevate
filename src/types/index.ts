// --- Service Card ---
export interface ServiceCardType {
  id: number;
  title: string;
  description: string;
}

// --- Testimonial ---
export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

// --- Process Step ---
export interface ProcessStepType {
  id: string;
  title: string;
  description: string;
  color: string;
}
