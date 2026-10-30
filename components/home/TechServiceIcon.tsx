type TechServiceIconProps = {
  name: string;
  className?: string;
};

const iconPaths: Record<string, React.ReactNode> = {
  "Web & Application Development": (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9-3 3 3 3m4-6 3 3-3 3" />
    </>
  ),
  "Product Engineering": (
    <>
      <path d="m12 2 8.66 5v10L12 22l-8.66-5V7L12 2Z" />
      <path d="m3.34 7 8.66 5 8.66-5M12 12v10" />
    </>
  ),
  "Custom Software Solutions": (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M17.5 14v7m-3.5-3.5h7" />
    </>
  ),
  "Technical Consulting": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 9v12m3.5-7 2 2 4-4" />
    </>
  ),
  "Cloud & DevOps": (
    <>
      <path d="M20 17.5a4.5 4.5 0 0 0-.8-8.93 7 7 0 0 0-13.4.6A4.5 4.5 0 0 0 7.5 18H20Z" />
      <path d="m10 14 2 2 2-2m-2 2v5" />
    </>
  ),
  "API & Backend Development": (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" />
    </>
  ),
  "Security & Compliance": (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  "AI & Automation": (
    <>
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
      <path d="m12 8-1.2 3.1L8 12l2.8.9L12 16l1.2-3.1L16 12l-2.8-.9L12 8Z" />
    </>
  ),
};

export default function TechServiceIcon({
  name,
  className = "h-7 w-7",
}: TechServiceIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {iconPaths[name] ?? iconPaths["Web & Application Development"]}
    </svg>
  );
}
