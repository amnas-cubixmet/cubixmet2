/**
 * Cubixmet event records. Add new events here; listing and detail routes are
 * generated from this data without copying page components.
 */
export type CubixmetEvent = {
  id: string;
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  status: "Completed" | "Upcoming";
  summary: string;
  /** Listing and detail photos in public/images/events/<event-id>/. */
  listingImage?: string;
  detailImage?: string;
  paragraphs: string[];
  topics: string[];
  outcomes: string[];
};

export const events: CubixmetEvent[] = [
  {
    id: "event-001",
    slug: "event-001",
    listingImage: "/images/events/001/image.png",
    detailImage: "/images/events/001/image2.png",
    title: "Sunfest AI – Build Websites & Business Systems Using AI",
    date: "2026-06-21",
    displayDate: "21 June 2026",
    category: "AI & Technology",
    status: "Completed",
    summary:
      "The Free AI Workshop successfully introduced students to the practical applications of Artificial Intelligence in education, business, and technology.",
    paragraphs: [
      "The Free AI Workshop successfully introduced students to the practical applications of Artificial Intelligence in education, business, and technology. During this hands-on session, participants learned how to use AI tools such as ChatGPT to generate business documentation, create website content, and develop complete websites with minimal coding experience. The workshop included the installation and setup of development tools like VS Code and TrebEdit, followed by live demonstrations on generating business plans, website structures, and responsive website code using AI. Students also explored how AI can assist with debugging, content creation, and digital innovation. By the end of the session, participants gained a clear understanding of how AI can be used as a productivity tool for learning, entrepreneurship, and career development. The workshop empowered students to transform ideas into real digital projects and provided valuable insights into emerging opportunities in the AI-driven world.",
    ],
    topics: [
      "AI tools and ChatGPT",
      "Business documentation and plans",
      "AI-assisted website content",
      "VS Code and TrebEdit setup",
      "Responsive website generation",
      "Debugging and content creation",
    ],
    outcomes: [
      "Explore practical AI applications",
      "Turn ideas into digital projects",
      "Discover AI-powered career opportunities",
    ],
  },
];

export const eventsPageCopy = {
  eyebrow: "Cubixmet Events",
  title: "Ideas worth sharing.",
  description:
    "Workshops, learning experiences and events that bring together technology, creativity and new opportunities.",
  featured: "Our Events",
  viewEvent: "View Event",
  allEvents: "Events",
  backToEvents: "Back to Events",
  eventOverview: "About This Event",
  galleryLabel: "Event Gallery",
  topicsLabel: "What Participants Explored",
  outcomesLabel: "Workshop Outcomes",
  exploreMore: "Explore more events",
} as const;

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);
