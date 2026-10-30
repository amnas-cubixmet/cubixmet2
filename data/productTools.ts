/** Edit these two cards when the product and tool names/details are finalized. */
export const productTools = [
  {
    id: "product",
    category: "Product",
    number: "01",
    name: "Business Software",
    description:
      "Explore custom software products built around business workflows, teams and growth.",
    detailHeading: "Digital products made for real work.",
    detailDescription:
      "From an early idea to a scalable business application, Cubixmet helps plan and build software around the people and processes that use it.",
    features: ["Business applications", "Dashboards & reporting", "Scalable product architecture"],
    href: "/products",
    action: "Explore Product",
    contactMessage: "Hi Cubixmet, I'd like to discuss a software product.",
  },
  {
    id: "tool",
    category: "Tool",
    number: "02",
    name: "Automation Tools",
    description:
      "Explore focused tools that simplify repetitive tasks and everyday digital workflows.",
    detailHeading: "Smarter tools. Less manual work.",
    detailDescription:
      "Cubixmet builds focused utilities and integrations that help teams connect processes, automate routine steps and work more efficiently.",
    features: ["Workflow automation", "API integrations", "Practical AI assistance"],
    href: "/tools",
    action: "Explore Tool",
    contactMessage: "Hi Cubixmet, I'd like to discuss a workflow or automation tool.",
  },
] as const;

export type ProductTool = (typeof productTools)[number];
