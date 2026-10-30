export type WhyChooseItem = {
  title: string;
  copy: string;
  icon: "growth" | "ecosystem" | "talent" | "partnership" | "ethics";
};

export const whyChoose: WhyChooseItem[] = [
  {
    title: "Structured Growth Approach",
    copy: "Systematic methodology for sustainable business growth.",
    icon: "growth",
  },
  {
    title: "Integrated Service Ecosystem",
    copy: "Interconnected verticals that amplify each other's impact.",
    icon: "ecosystem",
  },
  {
    title: "Talent Built In-House",
    copy: "We train, hire, and grow talent through our own academy.",
    icon: "talent",
  },
  {
    title: "Long-term Partnership Mindset",
    copy: "We invest in relationships, not transactions.",
    icon: "partnership",
  },
  {
    title: "Transparent & Ethical Practices",
    copy: "Integrity-first operations across every venture.",
    icon: "ethics",
  },
];
