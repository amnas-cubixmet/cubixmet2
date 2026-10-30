/**
 * Single source for public Cubixmet branding and contact details.
 * Replace values here without editing layout components.
 */
export const site = {
  brand: "Cubixmet",
  logo: "/images/logo.png",
  phoneDisplay: "+91 89215 92742",
  phoneDial: "+918921592742",
  phoneWhatsApp: "918921592742",
  email: "hello@cubixmet.com",
  website: "https://www.cubixmet.com/",
  websiteDisplay: "www.cubixmet.com",
  address: "1st Floor, Anjillan Building, Wandoor Road, opp. Gramin Bank, Pandikkad, Malappuram, Kerala – 676521",
  locationShort: "Pandikkad · Malappuram · Kerala",
  mapTitle: "Cubixmet Office Location - Pandikkad, Malappuram, Kerala",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d76.2241192!3d11.0974314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba633cfb708b3af%3A0x2bf820fbcb71c181!2sCubixmet%20Tech%20%E2%80%93%20Software%20And%20Website!5e0!3m2!1sen!2sin!4v1700000000000",
} as const;

export const footerCopy = {
  title: "Where Strategy Meets Scale.",
  description: "An innovation ecosystem from Kerala with global ambition.",
  venturesLabel: "Ventures",
  companyLabel: "Company",
  contactLabel: "Get In Touch",
  copyright: "© 2026 Cubixmet. All rights reserved.",
} as const;

export const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.phoneWhatsApp}?text=${encodeURIComponent(message)}`;

export const contactMessages = {
  header: "Hi Cubixmet, I'd like to discuss a project.",
  hero: "Hi Cubixmet! I'd like to get started.",
} as const;

/** SEO defaults for the public site. */
export const siteMetadata = {
  title: "Cubixmet — Technology, Development & Digital Growth",
  description: "Cubixmet builds software, digital products, AI solutions and growth experiences for modern businesses.",
} as const;
