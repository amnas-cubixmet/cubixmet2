/**
 * Client story copy supplied for publication.
 * Keep the names, roles and quotations in this one file rather than JSX.
 * Confirm client permission and factual accuracy before promoting the stories.
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "arjun-menon",
    quote: "Cubixmet Tech delivered a product that exceeded our expectations. Their structured approach to development saved us months of iteration.",
    name: "Arjun Menon",
    role: "CEO, TechVista Solutions",
  },
  {
    id: "priya-nair",
    quote: "Cubixmet Digital transformed our online presence. Our leads increased by 300% in just 3 months with their data-driven strategies.",
    name: "Priya Nair",
    role: "Marketing Head, GreenLeaf Organics",
  },
  {
    id: "rahul-sharma",
    quote: "Cubixmet Academy's Python Full Stack program gave me the skills and confidence to land my dream job. The hands-on projects were game-changing.",
    name: "Rahul Sharma",
    role: "Full Stack Developer",
  },
  {
    id: "sneha-das",
    quote: "Working with Cubixmet felt like having an in-house tech and marketing team. They understand business, not just code.",
    name: "Sneha Das",
    role: "Founder, StyleCraft",
  },
  {
    id: "vishnu-prasad",
    quote: "Their technical consulting helped us architect a scalable system from day one. Professional, precise, and always on time.",
    name: "Vishnu Prasad",
    role: "CTO, FinEdge",
  },
  {
    id: "ananya-pillai",
    quote: "The practical approach at Cubixmet Academy is unmatched. I went from zero knowledge to running real campaigns in weeks.",
    name: "Ananya Pillai",
    role: "Digital Marketing Trainee",
  },
];
