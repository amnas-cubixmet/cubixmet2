/** Academy course records, curriculum and shared labels in one data file.
 * Each course's public route reads a single immutable record below.
 */
import { whatsappLink } from "./site";

/**
 * Shared Academy detail-page presentation labels.
 * Course-specific headings, media, modules and enrollment text live in each course file.
 */
export const academyCourseLabels = {
  parent: "Cubixmet Academy",
  programs: "Programs",
  kicker: "Academy Program",
  duration: "6 Months Intensive Training Program",
  enroll: "Enroll via WhatsApp",
  exploreCurriculum: "Explore Curriculum",
  highlightsLabel: "Why This Program",
  highlightsHeading: "Course Highlights.",
  curriculumLabel: "What You Will Learn",
  curriculumHeading: "Skills you can put to work.",
  audienceLabel: "Who Can Join",
  ctaLabel: "Start Your Journey",
  download: "Download All Programs (PDF)",
  viewAll: "View All Programs",
} as const;

export type AcademyCoursePageContent = {
  metadata: { title: string; description: string };
  breadcrumb: string;
  headlineBefore: string;
  headlineEmphasis: string;
  headlineAfter: string;
  headlineSubtitle?: string;
  tagline: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  heroBadge: string;
  heroCaption: string;
  highlightsDescription: string;
  curriculumDescription: string;
  learnerHeading: string;
  learnerDescription: string;
  ctaHeading: string;
  ctaDescription: string;
};

export type AcademyCurriculumModule = {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics: readonly string[];
};

const graphicDesign = (() => {
const enrollUrl = whatsappLink("Hi Cubixmet Academy, I'm interested in the Graphic Designing & Content Creation Program (AI Integrated). Please share fees, batch timings and enrollment details.");

const brochureUrl = "/brochures/cubixmet-academy.pdf";
const allProgramsUrl = "/ventures/academy#programs";

const highlights = [
  "AI-Powered Design & Content Creation",
  "Real Client Project Exposure",
  "Industry-Oriented Practical Training",
  "Portfolio Development",
  "Marketing & Personal Branding Skills",
  "Spoken English for Professionals",
];

const curriculum = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "design",
    description: "Build visual design skills, brand identities, and digital creative assets.",
    topics: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Logo Designing",
      "Brand Identity Design",
      "Social Media Creatives",
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing & Motion Graphics",
    icon: "video",
    description: "Learn professional editing workflows for digital video and motion.",
    topics: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "DaVinci Resolve",
      "CapCut",
      "Reel & Short Video Creation",
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools for Creators",
    icon: "ai",
    description: "Apply modern AI tools to visual creation and day-to-day workflows.",
    topics: [
      "AI Image Generation",
      "AI Content Creation",
      "AI Design Workflows",
      "Productivity & Automation Tools",
    ],
  },
  {
    id: "photography",
    title: "Photography & Content Creation",
    icon: "camera",
    description: "Plan, shoot, and tell stories through compelling visuals.",
    topics: [
      "Basic Photography",
      "Mobile Photography Techniques",
      "Content Planning",
      "Visual Storytelling",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Business Skills",
    icon: "growth",
    description: "Understand how to market creative work and engage real clients.",
    topics: [
      "Digital Marketing Basics",
      "Social Media Marketing Techniques",
      "Personal Branding",
      "Client Handling",
      "Freelancing Fundamentals",
    ],
  },
  {
    id: "communication",
    title: "Communication Skills",
    icon: "communication",
    description: "Build confidence in professional conversations and presentations.",
    topics: [
      "Spoken English",
      "Professional Communication",
      "Presentation Skills",
    ],
  },
  {
    id: "real-work",
    title: "Real Work Training Exposure",
    icon: "projects",
    description: "Practice industry workflows and assemble portfolio-ready work.",
    topics: [
      "Work on Live Projects",
      "Agency-Style Training",
      "Portfolio Building",
      "Internship-Like Experience",
      "Industry Workflows & Client Briefs",
    ],
  },
] as const;

const eligibleLearners = [
  "Students",
  "Working Professionals",
  "Freelancers",
  "Business Owners",
  "Content Creators",
  "Aspiring Graphic Designers",
];



/** Course-specific presentation text and media. */
const coursePage = {
  "metadata": {
    "title": "Graphic Designing & Content Creation | Cubixmet Academy",
    "description": "Explore Cubixmet Academy's 6-month Graphic Designing & Content Creation Program (AI Integrated): design, video editing, AI tools, photography, branding, marketing, communication and live projects."
  },
  "breadcrumb": "Graphic Designing & Content Creation",
  "headlineBefore": "Graphic Designing",
  "headlineEmphasis": "&",
  "headlineAfter": "Content Creation",
  "headlineSubtitle": "Program (AI Integrated)",
  "tagline": "Create. Design. Edit. Market. Earn.",
  "intro": "Turn your creativity into a career. Master the most in-demand design, video editing, branding, and content creation skills with real-world project experience.",
  "heroImage": "/images/ventures/academy-hero.png",
  "heroImageAlt": "Students collaborating on a laptop during a Cubixmet Academy training session",
  "heroBadge": "Learn by Building",
  "heroCaption": "Create something extraordinary.",
  "highlightsDescription": "Creative skills, business understanding, and practical training in one intensive program.",
  "curriculumDescription": "Explore design, editing, AI tools, photography, marketing, communication, and real-world practice.",
  "learnerHeading": "Your next creative chapter starts here.",
  "learnerDescription": "Whether you are starting your career or expanding your skills, explore the techniques and workflows behind professional creative projects.",
  "ctaHeading": "Ready to turn your creativity into a career?",
  "ctaDescription": "Get course fees, batch timings, and enrollment guidance directly from the Cubixmet Academy team."
} satisfies AcademyCoursePageContent;
return { enrollUrl, brochureUrl, allProgramsUrl, highlights, curriculum, eligibleLearners, coursePage };
})();

const digitalMarketing = (() => {
const enrollUrl = whatsappLink("Hi Cubixmet Academy, I'm interested in the Advanced Digital Marketing & Automation Program. Please share course fees, batch timings and enrollment details.");

const brochureUrl = "/brochures/cubixmet-academy.pdf";
const allProgramsUrl = "/ventures/academy#programs";

const highlights = [
  "WordPress Websites & Sales Funnels",
  "SEO & Organic Lead Generation",
  "Meta, Google & YouTube Ads",
  "CRM, Automation & Analytics",
  "Real Campaign & Project Experience",
  "Professional Communication Skills"
];

const curriculum = [
  {
    "id": "wordpress-funnels",
    "title": "WordPress Web Designing & Sales Funnels",
    "icon": "website",
    "description": "Create websites, landing pages, lead-capture systems and conversion-focused funnels.",
    "topics": [
      "WordPress Website Development",
      "Landing Page Design",
      "Sales Funnel Creation",
      "Lead Capture Systems",
      "Conversion Optimization"
    ]
  },
  {
    "id": "content-creative",
    "title": "Content Creation & Creative Design",
    "icon": "content",
    "description": "Plan engaging content and develop brand-focused creative assets.",
    "topics": [
      "Social Media Content Creation",
      "Graphic Design Fundamentals",
      "AI-Powered Content Creation",
      "Reels & Video Marketing",
      "Creative Branding Strategies"
    ]
  },
  {
    "id": "organic-seo",
    "title": "Content Marketing & Organic SEO",
    "icon": "seo",
    "description": "Develop search visibility and organic content strategies.",
    "topics": [
      "Search Engine Optimization (SEO)",
      "Keyword Research",
      "Blog Content Strategy",
      "Local SEO",
      "Website Ranking Techniques",
      "Organic Lead Generation"
    ]
  },
  {
    "id": "performance-marketing",
    "title": "Performance Marketing",
    "icon": "ads",
    "description": "Set up, test and optimize paid campaigns for business objectives.",
    "topics": [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads",
      "YouTube Advertising",
      "Lead Generation Campaigns",
      "Remarketing Strategies",
      "Campaign Optimization & Scaling"
    ]
  },
  {
    "id": "automation-analytics",
    "title": "Marketing Automation & Analytics",
    "icon": "automation",
    "description": "Connect CRM, automated customer journeys and measurement workflows.",
    "topics": [
      "CRM Management",
      "Email Marketing Automation",
      "WhatsApp Automation",
      "Lead Nurturing Funnels",
      "Google Analytics",
      "Conversion Tracking",
      "Marketing Reports & Data Analysis"
    ]
  },
  {
    "id": "communication",
    "title": "Professional Communication & Spoken English",
    "icon": "communication",
    "description": "Practice client-facing communication and workplace presentation skills.",
    "topics": [
      "Business Communication",
      "Client Interaction Skills",
      "Presentation Techniques",
      "Spoken English for Professionals",
      "Interview & Workplace Communication"
    ]
  },
  {
    "id": "industry-exposure",
    "title": "Practical Training & Industry Exposure",
    "icon": "training",
    "description": "Build experience through real-world projects and hands-on campaign practice.",
    "topics": [
      "Real Campaign Setup",
      "Live Project Experience",
      "Portfolio Development",
      "Client-Based Assignments",
      "Industry Best Practices",
      "Career & Freelancing Guidance"
    ]
  }
] as const;

const eligibleLearners = [
  "Students",
  "Working Professionals",
  "Business Owners",
  "Entrepreneurs",
  "Freelancers",
  "Marketing Aspirants"
];



/** Course-specific presentation text and media. */
const coursePage = {
  "metadata": {
    "title": "Advanced Digital Marketing & Automation | Cubixmet Academy",
    "description": "Learn WordPress, lead generation, sales funnels, SEO, Meta Ads, Google Ads, video marketing, CRM, analytics and real campaigns in Cubixmet Academy's 6-month digital marketing course."
  },
  "breadcrumb": "Advanced Digital Marketing & Automation",
  "headlineBefore": "Advanced",
  "headlineEmphasis": "Digital Marketing",
  "headlineAfter": "& Automation Program",
  "tagline": "Learn. Automate. Optimize. Scale.",
  "intro": "Learn how to attract the right audience, generate quality leads, run profitable ad campaigns, and build automated marketing systems that work 24/7.",
  "heroImage": "/images/ventures/digital-hero.png",
  "heroImageAlt": "Digital marketing professionals collaborating on campaigns, content and creative strategy",
  "heroBadge": "Marketing in Practice",
  "heroCaption": "Learn. Automate. Scale.",
  "highlightsDescription": "Advertising, SEO, automation, analytics and campaign training in one intensive program.",
  "curriculumDescription": "Explore WordPress, content creation, SEO, paid advertising, analytics, automation, communication, and live campaigns.",
  "learnerHeading": "Your marketing journey starts here.",
  "learnerDescription": "Whether you are starting a career or growing a business, learn practical digital marketing strategies and workflows used by modern teams.",
  "ctaHeading": "Ready to build marketing skills that drive growth?",
  "ctaDescription": "Get course fees, batch timings, and enrollment guidance directly from the Cubixmet Academy team."
} satisfies AcademyCoursePageContent;
return { enrollUrl, brochureUrl, allProgramsUrl, highlights, curriculum, eligibleLearners, coursePage };
})();

const pythonFullStack = (() => {
const enrollUrl = whatsappLink("Hi Cubixmet Academy, I'm interested in the Python Full Stack Development & AI Vibe Coding program. Please share course fees, batch timings and enrollment details.");

const brochureUrl = "/brochures/cubixmet-academy.pdf";
const allProgramsUrl = "/ventures/academy#programs";

const highlights = [
  "Python & Django Backend Engineering",
  "Modern React Frontend Development",
  "AI Vibe Coding & Agentic Workflows",
  "Docker, CI/CD & Cloud Deployment",
  "Live Projects & Code Reviews",
  "Professional Skills & Career Guidance"
];
const curriculum = [
  {
    "id": "backend-engineering",
    "title": "Backend Engineering",
    "icon": "backend",
    "description": "Develop secure Python backends, REST APIs and database-driven applications.",
    "topics": [
      "Python Programming Fundamentals",
      "Django Framework",
      "REST API Development",
      "Database Design & Management",
      "PostgreSQL & SQL",
      "Authentication & Authorization",
      "Backend Architecture",
      "API Integration",
      "Real-World Project Development"
    ]
  },
  {
    "id": "frontend-development",
    "title": "Frontend & UI Development",
    "icon": "frontend",
    "description": "Build responsive user interfaces, dashboards and integrated web experiences.",
    "topics": [
      "HTML5, CSS3 & JavaScript",
      "Responsive Web Design",
      "Modern UI/UX Principles",
      "React.js Fundamentals",
      "Component-Based Development",
      "API Integration with Frontend",
      "Dashboard Development",
      "Progressive Web Applications (PWA)"
    ]
  },
  {
    "id": "ai-vibe-coding",
    "title": "AI Vibe Coding & Agentic Workflows",
    "icon": "ai",
    "description": "Apply AI coding tools, prompt engineering and agentic approaches to software creation.",
    "topics": [
      "AI-Assisted Development",
      "Prompt Engineering for Developers",
      "AI Coding Tools & Productivity",
      "Agentic Workflows",
      "Building AI-Powered Applications",
      "AI API Integration",
      "Automation with AI Agents",
      "Rapid Application Development",
      "AI-Based Debugging & Optimization"
    ]
  },
  {
    "id": "devops-cloud",
    "title": "DevOps & Cloud Deployment",
    "icon": "cloud",
    "description": "Learn development operations, cloud deployment, production security and monitoring.",
    "topics": [
      "Git & GitHub",
      "Linux Server Fundamentals",
      "Docker & Containerization",
      "CI/CD Concepts",
      "Cloud Deployment",
      "Domain & Hosting Setup",
      "Application Monitoring",
      "Security Best Practices",
      "Production Deployment"
    ]
  },
  {
    "id": "real-work",
    "title": "Real Work Training Exposure",
    "icon": "projects",
    "description": "Build portfolio-ready software through collaborative team and real-project workflows.",
    "topics": [
      "Live Project Development",
      "Industry-Oriented Coding Practices",
      "Team Collaboration Workflows",
      "Portfolio Building",
      "Code Reviews & Best Practices",
      "Real Client Project Exposure",
      "Internship-Style Learning Environment"
    ]
  },
  {
    "id": "professional",
    "title": "Professional Development",
    "icon": "career",
    "description": "Grow professional communication, interview and career-building skills.",
    "topics": [
      "Technical Communication",
      "Spoken English for IT Professionals",
      "Resume & Portfolio Building",
      "Interview Preparation",
      "Freelancing & Remote Work Guidance"
    ]
  }
] as const;
const eligibleLearners = [
  "Students",
  "Fresh Graduates",
  "Career Switchers",
  "Freelancers",
  "Entrepreneurs",
  "Aspiring Software Developers"
];



/** Course-specific presentation text and media. */
const coursePage = {
  "metadata": {
    "title": "Python Full Stack Development & AI Vibe Coding | Cubixmet Academy",
    "description": "Learn Python, Django, PostgreSQL, React, AI development, agentic workflows, Docker, CI/CD and cloud deployment in Cubixmet Academy's six-month intensive program."
  },
  "breadcrumb": "Python Full Stack Development & AI Vibe Coding",
  "headlineBefore": "",
  "headlineEmphasis": "Python Full Stack",
  "headlineAfter": "Development & AI Vibe Coding",
  "tagline": "Learn. Build. Deploy. Scale.",
  "intro": "Master full-stack development using Python and modern frontend technologies while leveraging AI tools, agentic workflows, and cloud deployment practices used by today's software teams.",
  "heroImage": "/images/ventures/tech-hero.png",
  "heroImageAlt": "Software developers collaborating on coding and full-stack technology projects",
  "heroBadge": "Software in Practice",
  "heroCaption": "Learn. Build. Deploy.",
  "highlightsDescription": "Software engineering, AI coding workflows, deployment and practical training in one intensive program.",
  "curriculumDescription": "Explore Python backend development, React frontend, AI coding workflows, DevOps, hands-on projects, and professional skills.",
  "learnerHeading": "Your software career starts here.",
  "learnerDescription": "Whether you are starting to code or switching careers, practice the technologies and workflows used in modern software teams.",
  "ctaHeading": "Ready to build and deploy real applications?",
  "ctaDescription": "Get course fees, batch timings, and enrollment guidance directly from the Cubixmet Academy team."
} satisfies AcademyCoursePageContent;
return { enrollUrl, brochureUrl, allProgramsUrl, highlights, curriculum, eligibleLearners, coursePage };
})();

export const academyCourses = {
  "graphic-designing-content-creation": graphicDesign,
  "advanced-digital-marketing-automation": digitalMarketing,
  "python-full-stack-development-ai-vibe-coding": pythonFullStack,
} as const;
