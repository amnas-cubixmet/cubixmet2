export type Service = {
  no: string;
  title: string;
  copy: string;
  meta: string[];
  image: string;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Web & App Development",
    copy: "Full-stack web apps, SPAs, progressive web applications and digital platforms built with modern frameworks for performance and scale.",
    meta: ["Full-stack Web Apps", "SPAs & PWAs", "Frontend Development", "Backend & API", "Cloud Deployment"],
    image: "/images/services/web-app-development.png",
  },
  {
    no: "02",
    title: "Product Engineering",
    copy: "End-to-end product development from early ideation and UX through engineering, deployment and long-term scaling.",
    meta: ["Product Strategy", "UI / UX Design", "MVP Development", "System Architecture", "Scale & Optimization"],
    image: "/images/services/product-engineering.png",
  },
  {
    no: "03",
    title: "Digital Marketing",
    copy: "Integrated digital campaigns designed to attract the right audience, build visibility and convert attention into measurable growth.",
    meta: ["Social Media Management", "Paid Advertising", "Campaign Strategy", "Lead Generation", "Marketing Automation"],
    image: "/images/services/digital-marketing.png",
  },
  {
    no: "04",
    title: "Brand Growth",
    copy: "Data-backed positioning, performance marketing and conversion strategy built to strengthen brands and accelerate market growth.",
    meta: ["Brand Growth Strategy", "Performance Marketing", "Conversion Funnels", "Google & Meta Ads", "Market Penetration"],
    image: "/images/services/brand-growth.png",
  },
  {
    no: "05",
    title: "Creative & Content",
    copy: "Graphic design, content systems and campaign-ready visual communication created for modern brands across digital channels.",
    meta: ["Graphic Design", "Content Creation", "Branding", "Video Editing", "AI-assisted Creative"],
    image: "/images/services/creative-content.png",
  },
  {
    no: "06",
    title: "Tech & AI Training",
    copy: "Practical career-focused learning in digital marketing, Python full stack development, AI tools and modern automation workflows.",
    meta: ["Python Full Stack", "AI Vibe Coding", "Digital Marketing", "Automation", "Project-based Learning"],
    image: "/images/services/tech-ai-training.png",
  },
];
