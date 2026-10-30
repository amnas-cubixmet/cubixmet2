/** All Cubixmet ventures in one file; people are in data/team.ts. */
import { whatsappLink } from "./site";

export const startProjectWhatsAppUrl = whatsappLink("Hi Cubixmet Tech, I'd like to start a project. Please share the next steps.");

export const techServices = [
  {
    number: "01",
    title: "Web & Application Development",
    description:
      "Full-stack web apps, SPAs, and progressive web applications built with React, Next.js, and modern frameworks. We build scalable, performant applications.",
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "End-to-end product lifecycle management from ideation and prototyping to deployment, monitoring, and iteration.",
  },
  {
    number: "03",
    title: "Custom Software Solutions",
    description:
      "Tailored enterprise-grade software engineered for your unique business processes, integrations, and workflows.",
  },
  {
    number: "04",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology stack assessments, cloud migration planning, and digital transformation advisory.",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, containerization, Kubernetes orchestration, and cloud infrastructure management on AWS, GCP, and Azure.",
  },
  {
    number: "06",
    title: "API & Backend Development",
    description:
      "RESTful and GraphQL API design, microservices architecture, and robust backend systems for high-traffic applications.",
  },
  {
    number: "07",
    title: "Security & Compliance",
    description:
      "Application security audits, penetration testing, GDPR compliance, and secure development lifecycle implementation.",
  },
  {
    number: "08",
    title: "AI & Automation",
    description:
      "Machine learning integrations, intelligent automation workflows, and AI-powered features for modern applications.",
  },
];

export const techCopy = {
  "metadata": {
    "title": "Cubixmet Tech | Build. Deploy. Scale.",
    "description": "End-to-end technology solutions from Cubixmet Tech: software development, product engineering, cloud, APIs, security, AI and technical consulting."
  },
  "verticalLabel": "Technology Vertical",
  "brandPrefix": "Cubixmet",
  "brandSuffix": "Tech",
  "tagline": "Build. Deploy. Scale.",
  "intro": "End-to-end software solutions from product engineering to technical consulting. We build technology that scales with your ambition.",
  "servicesLabel": "What We Build",
  "servicesTitle": "Technology that moves businesses forward.",
  "servicesDescription": "Comprehensive technology services engineered for performance, scalability, and growth.",
  "approachLabel": "Web Development",
  "approachTitle": "Engineering Excellence.",
  "approachDescription": "Every project is built with clean architecture, automated testing, and production-ready deployment pipelines.",
  "approachItems": [
    "Clean architecture",
    "Automated testing",
    "Production-ready deployment",
    "Reliable, scalable delivery"
  ],
  "teamLabel": "The Tech Team",
  "teamTitle": "People behind the technology.",
  "teamDescription": "Engineers, architects, and problem-solvers dedicated to building your next big thing.",
  "heroCaption": "Software. Cloud. Innovation.",
  "heroImage": "/images/ventures/tech-hero.png",
  "heroFallback": "/images/heroProjects/workspace.png",
  "heroImageAlt": "Cubixmet Tech: a collaborative software development workspace",
  "ctaLabel": "Ready to Build?",
  "ctaTitle": "Let's turn your vision into a scalable, production-ready product.",
  "startProjectLabel": "Start a Project",
  "brochureHref": "/brochures/cubixmet-tech.pdf",
  "brochureName": "cubixmet-tech.pdf",
  "brochureLabel": "Download Tech Brochure (PDF)"
} as const;

export const whatsappUrl = whatsappLink("Hi Cubixmet Digital, I'd like to grow my brand. Please share the next steps.");

export const digitalServices = [
  {
    icon: "social",
    title: "Social Media Management",
    description: "End-to-end social presence across Instagram, LinkedIn, Facebook, X, and emerging platforms with content strategy and community management.",
  },
  {
    icon: "ads",
    title: "Paid Advertising",
    description: "ROI-driven ad campaigns across Google Ads, Meta Ads, LinkedIn Ads, and programmatic platforms with continuous optimization.",
  },
  {
    icon: "strategy",
    title: "Brand Growth Strategy",
    description: "Data-backed brand positioning, market research, competitive analysis, and go-to-market strategies for sustained growth.",
  },
  {
    icon: "performance",
    title: "Performance Marketing",
    description: "Conversion-optimized funnels, A/B testing, attribution modeling, and campaigns designed for measurable business outcomes.",
  },
  {
    icon: "content",
    title: "Content Marketing",
    description: "Blog strategy, copywriting, video scripts, and thought leadership content that builds authority and drives organic traffic.",
  },
  {
    icon: "search",
    title: "SEO & SEM",
    description: "Technical SEO audits, keyword strategy, on-page optimization, and search engine marketing for maximum visibility.",
  },
  {
    icon: "email",
    title: "Email Marketing",
    description: "Automated email sequences, newsletter design, segmentation, and lifecycle marketing campaigns.",
  },
  {
    icon: "creative",
    title: "Video & Creative",
    description: "Motion graphics, social video content, ad creatives, and visual storytelling that captures attention.",
  },
] as const;

export const digitalCopy = {
  "metadata": {
    "title": "Cubixmet Digital | Strategize. Market. Convert.",
    "description": "Data-driven digital marketing, paid advertising, content, SEO, brand strategy and growth solutions from Cubixmet Digital."
  },
  "verticalLabel": "Digital Marketing Vertical",
  "brandPrefix": "Cubixmet",
  "brandSuffix": "Digital",
  "tagline": "Strategize. Market. Convert.",
  "intro": "Data-driven digital marketing and brand growth strategies that deliver measurable results and lasting impact.",
  "heroImage": "/images/ventures/digital-hero.png",
  "heroImageAlt": "Cubixmet Digital creative marketing team collaborating in a professional studio",
  "servicesLabel": "How We Grow Brands",
  "servicesTitle": "Marketing that makes an impact.",
  "servicesDescription": "Full-spectrum digital marketing services designed to amplify your reach and convert audiences.",
  "approachLabel": "Digital Marketing",
  "approachTitle": "Data-Driven Growth.",
  "approachDescription": "Every campaign is backed by analytics, A/B testing, and continuous optimization for maximum ROI.",
  "approachItems": [
    "Analytics & insights",
    "A/B testing",
    "Campaign optimization",
    "Performance reporting"
  ],
  "teamLabel": "The Digital Team",
  "teamTitle": "People behind the growth.",
  "teamDescription": "Strategists, creatives, and data analysts who turn brands into market leaders.",
  "ctaLabel": "Ready to Grow?",
  "ctaTitle": "Let's craft a marketing strategy that drives real business results.",
  "growLabel": "Grow Your Brand",
  "brochureHref": "/brochures/cubixmet-digital.pdf",
  "brochureName": "cubixmet-digital.pdf",
  "brochureLabel": "Download Digital Brochure (PDF)"
} as const;

export const generalEnrollUrl = whatsappLink(
  "Hi Cubixmet Academy, I'm interested in enrolling in your next batch. Please share the program details and admission process."
);

export const programs = [
  {
    id: "graphic-design",
    href: "/ventures/academy/graphic-designing-content-creation",
    type: "design" as const,
    duration: "6 Months",
    title: "Graphic Designing & Content Creation Program (AI Integrated)",
    description:
      "Turn your creativity into a career. Master the most in-demand design, video editing, branding, and content creation skills with real-world project experience.",
    topics: [
      "Adobe Photoshop, Illustrator & CorelDRAW",
      "Premiere Pro, After Effects & Reels",
      "AI Image Generation & Design Workflows",
      "Live Projects & Portfolio Development",
    ],
    detail:
      "Develop visual identities, graphic assets, content, and motion-based creative work while building a practical portfolio with AI-assisted design workflows.",
  },
  {
    id: "digital-marketing",
    href: "/ventures/academy/advanced-digital-marketing-automation",
    type: "marketing" as const,
    duration: "6 Months",
    title: "Advanced Digital Marketing & Automation Program",
    description:
      "Learn how to attract the right audience, generate quality leads, run profitable ad campaigns, and build automated marketing systems that work 24/7.",
    topics: [
      "WordPress & Sales Funnel Design",
      "SEO & Organic Content Marketing",
      "Meta, Google & YouTube Ads",
      "Marketing Automation & CRM",
    ],
    detail:
      "Plan and optimize marketing campaigns, build lead-generation funnels, study search and advertising channels, and practice automated customer journeys.",
  },
  {
    id: "python-full-stack",
    href: "/ventures/academy/python-full-stack-development-ai-vibe-coding",
    type: "code" as const,
    duration: "6 Months",
    title: "Python Full Stack Development & AI Vibe Coding",
    description:
      "Master full-stack development using Python and modern frontend technologies while leveraging AI tools, agentic workflows, and cloud deployment practices used by today's software teams.",
    topics: [
      "Python, Django & REST API Development",
      "React.js & Responsive UI Development",
      "AI-Assisted & Agentic Workflows",
      "Docker, CI/CD & Cloud Deployment",
    ],
    detail:
      "Build and deploy end-to-end applications, connect frontend and backend systems, and use AI-assisted development approaches in practical projects.",
  },
];

export const benefits = [
  {
    icon: "curriculum" as const,
    title: "Industry-Ready Curriculum",
    copy: "Programs designed with input from hiring managers and industry experts.",
  },
  {
    icon: "certificate" as const,
    title: "Certification",
    copy: "Recognized certificates upon course completion to boost your career profile.",
  },
  {
    icon: "projects" as const,
    title: "Hands-On Projects",
    copy: "Build real-world portfolio projects throughout every program.",
  },
  {
    icon: "flexible" as const,
    title: "Flexible Learning",
    copy: "Weekend and evening batches available for working professionals.",
  },
];

export type BenefitIcon = typeof benefits[number]["icon"];
export type ProgramIcon = typeof programs[number]["type"];

export const academyCopy = {
  "metadata": {
    "title": "Cubixmet Academy | Learn. Build. Launch.",
    "description": "Explore six-month design, digital marketing, and Python full stack programs at Cubixmet Academy, with practical projects, internship opportunities and placement assistance."
  },
  "backLabel": "Back to Home",
  "verticalLabel": "Academy Vertical",
  "brandPrefix": "Cubixmet",
  "brandSuffix": "Academy",
  "tagline": "Learn. Build. Launch.",
  "intro": "Career transformation programs designed to create industry-ready professionals with real-world skills and portfolio projects.",
  "programsLabel": "Our Programs",
  "programsTitle": "Build skills. Launch careers.",
  "programsDescription": "Industry-aligned courses designed for career transformation and skill mastery.",
  "programAssurance": "Internship Assured — up to 2 to 6 months with all courses",
  "programPlacement": "100% Placement Assistance",
  "knowMoreLabel": "Know More",
  "enrollLabel": "Enroll via WhatsApp",
  "trainingLabel": "Academy Training",
  "trainingTitle": "Learn by Building.",
  "trainingDescription": "Every program includes real-world projects that go straight into your portfolio.",
  "trainingItems": [
    "Practical learning",
    "Project-driven curriculum",
    "Portfolio development",
    "Career guidance"
  ],
  "teamLabel": "The Academy Team",
  "teamTitle": "People behind the learning.",
  "teamDescription": "Experienced educators and mentors dedicated to your career success.",
  "ctaLabel": "Start Your Journey",
  "ctaTitle": "Transform your career with industry-ready skills. Enroll in our next batch today.",
  "viewProgramsLabel": "View Programs",
  "enrollNowLabel": "Enroll Now",
  "brochureHref": "/brochures/cubixmet-academy.pdf",
  "brochureName": "cubixmet-academy.pdf",
  "brochureLabel": "Download Programs Brochure (PDF)",
  "illustrationBadge": "Learn by building",
  "heroImage": "/images/ventures/academy-hero.png",
  "heroImageAlt": "Cubixmet Academy students learning and collaborating around a laptop"
} as const;

export const programEnrollUrl = (title: string) =>
  whatsappLink(`Hi Cubixmet Academy, I'd like to enroll in ${title}. Please share the course fees, batch timings, and admission process.`);

export type Venture = {
  name: string;
  tagline: string;
  copy: string;
  services: string[];
  href: string;
  icon: "tech" | "digital" | "academy";
};
export const ventureDetails = {
  tech: { copy: techCopy, services: techServices, contactUrl: startProjectWhatsAppUrl, teamId: "tech" },
  digital: { copy: digitalCopy, services: digitalServices, contactUrl: whatsappUrl, teamId: "digital" },
  academy: { copy: academyCopy, programs, benefits, contactUrl: generalEnrollUrl, teamId: "academy" },
} as const;

export const ventures: Venture[] = [
  {
    name: "Cubixmet Tech",
    tagline: techCopy.tagline,
    copy: "End-to-end software solutions from product engineering to technical consulting.",
    services: techServices.slice(0, 4).map(({ title }) => title),
    href: "/ventures/tech",
    icon: "tech",
  },
  {
    name: "Cubixmet Digital",
    tagline: digitalCopy.tagline,
    copy: "Data-driven digital marketing and brand growth strategies that deliver results.",
    services: digitalServices.slice(0, 4).map(({ title }) => title),
    href: "/ventures/digital",
    icon: "digital",
  },
  {
    name: "Cubixmet Academy",
    tagline: academyCopy.tagline,
    copy: "Career transformation programs designed to create industry-ready professionals.",
    services: programs.map(({ title }) => title),
    href: "/ventures/academy",
    icon: "academy",
  },
];
