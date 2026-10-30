/**
 * Lightweight repository content architecture audit.
 * Run: npm run audit:content
 * Business records belong in data/, not in page or view components.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const required = [
  "data/about.ts",
  "data/heroProjects.ts",
  "data/homeContent.ts",
  "data/impact.ts",
  "data/team.ts",
  "data/marquee.ts",
  "data/projects.ts",
  "data/services.ts",
  "data/testimonials.ts",
  "data/ventures.ts",
  "data/whyChoose.ts",
  "data/site.ts",
  "data/navigation.ts",
  "data/academyCourses.ts",
  "data/events.ts",
  "app/events/page.tsx",
  "app/events/[slug]/page.tsx",
  "components/events/EventVisual.tsx",
  "components/academy/AcademyCoursePage.tsx",
];

const courseSlugs = [
  "graphic-designing-content-creation",
  "advanced-digital-marketing-automation",
  "python-full-stack-development-ai-vibe-coding",
];
for (const slug of courseSlugs) {
  required.push(`app/ventures/academy/${slug}/page.tsx`);
}

const violations = [];
for (const file of required) {
  if (!existsSync(file)) violations.push(`Missing required file: ${file}`);
}

function sourceFiles(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((name) => {
    const full = join(directory, name);
    return statSync(full).isDirectory()
      ? sourceFiles(full)
      : /\.(?:tsx|jsx)$/.test(name) ? [full] : [];
  });
}

const presentational = [...sourceFiles("app"), ...sourceFiles("components")];
const rules = [
  {
    label: "Hardcoded WhatsApp number",
    test: /(?:918921592742|\+91\s*89215\s*92742)/g,
  },
  {
    label: "Business list embedded in a view (put records under data/)",
    test: /\b(?:const|let)\s+(?:team|teamMembers|leaders|projects|heroProjects|testimonials|programs|techServices|digitalServices|services|benefits)\s*=\s*\[/g,
  },
  {
    label: "Direct wa.me link in a view (use data/site.ts)",
    test: /https:\/\/wa\.me\//g,
  },
];
for (const file of presentational) {
  const content = readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const rule of rules) {
      rule.test.lastIndex = 0;
      if (rule.test.test(line)) {
        violations.push(`${file}:${index + 1} — ${rule.label}`);
      }
    }
  });
}

for (const slug of courseSlugs) {
  const page = `app/ventures/academy/${slug}/page.tsx`;
  if (existsSync(page)) {
    const source = readFileSync(page, "utf8");
    if (!source.includes("AcademyCoursePage") || !source.includes("data/academyCourses")) {
      violations.push(`${page} must use shared AcademyCoursePage and its data module`);
    }
  }
}

// All event slugs must have a navigable listing + statically generated detail route.
if (existsSync("data/navigation.ts")) {
  const navigation = readFileSync("data/navigation.ts", "utf8");
  if (!navigation.includes('["/events", "Events"]')) {
    violations.push("Events must appear in the shared navigation");
  }
}
if (existsSync("app/events/[slug]/page.tsx")) {
  const detail = readFileSync("app/events/[slug]/page.tsx", "utf8");
  if (!detail.includes("generateStaticParams") || !detail.includes("getEventBySlug")) {
    violations.push("Event details must resolve data records and support static routes");
  }
}

for (const [file, expected] of [["data/ventures.ts", ["ventureDetails", "techCopy", "digitalCopy", "academyCopy"]], ["data/team.ts", ["ventureTeamIds", "getVentureTeam", "leaders", "teamMembers"]], ["data/academyCourses.ts", ["academyCourses", "academyCourseLabels"]]]) {
  if (existsSync(file)) {
    const text = readFileSync(file, "utf8");
    for (const name of expected) if (!text.includes(name)) violations.push(`${file} missing required export ${name}`);
  }
}


// Prevent duplicate staff files and disconnected legacy venture modules.
for (const legacyFile of [
  "data/leaders.ts",
  "data/tech.ts",
  "data/digital.ts",
  "data/academy.ts",
  "data/home.ts",
  "data/insights.ts",
  "data/process.ts",
  "components/HeroCanvas.tsx",
  ...courseSlugs.map((slug) => `data/academyCourses/${slug}.ts`),
  "data/academyCourses/common.ts",
]) {
  if (existsSync(legacyFile)) violations.push(`Unnecessary duplicate or unused file: ${legacyFile}`);
}

if (violations.length) {
  console.error("Content audit failed:");
  for (const failure of violations) console.error(" - " + failure);
  process.exitCode = 1;
} else {
  console.log(`Content audit passed: ${presentational.length} app/components checked, ${required.length} required files present.`);
}
