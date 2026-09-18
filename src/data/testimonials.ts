export type Testimonial = { quote: string; name: string; role: string; photo?: string };

// Add real testimonials here (first name + role is enough, with permission). `photo` is an optional path under public/.
// The testimonials section stays hidden while this array is empty.
export const testimonials: Testimonial[] = [];
