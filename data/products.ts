/** Shared product listings for the Products page and homepage portfolio filters. */
export type ProductListing = {
  name: string;
  mark: string;
  category: string;
  description: string;
  href: string | null;
};

export const products: ProductListing[] = [
  {
    name: "CubeGears Drive Hub",
    mark: "CG",
    category: "Automotive Software",
    description:
      "Digital tools and workflows for automotive businesses and workshop operations.",
    href: "https://cubegears-drive-hub.vercel.app/",
  },
  {
    name: "BiteMyBills",
    mark: "BB",
    category: "Restaurant Management",
    description:
      "A digital platform for restaurant billing and everyday restaurant workflows.",
    href: "https://resto-suite-shell-fawn.vercel.app/",
  },
  {
    name: "CubeSites",
    mark: "CS",
    category: "Websites",
    description:
      "Explore website creation solutions for businesses and digital brands.",
    href: "https://cubesites.cubixmet.com/",
  },
  {
    name: "CubixSkill",
    mark: "SK",
    category: "Learning Platform",
    description:
      "A learning and skills platform from the Cubixmet product ecosystem.",
    href: null,
  },
  {
    name: "CubixLog",
    mark: "CL",
    category: "Digital Product",
    description:
      "A product from the Cubixmet ecosystem. More details will be announced.",
    href: null,
  },
  {
    name: "Influencer",
    mark: "IN",
    category: "Creator Tools",
    description:
      "An upcoming platform focused on creator and influencer workflows.",
    href: null,
  },
];
