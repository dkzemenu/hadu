type LogoMarkProps = {
  className?: string;
  variant?: "default" | "inverse";
};

export function LogoMark({ className = "h-11 w-11", variant = "default" }: LogoMarkProps) {
  const frameColor = variant === "inverse" ? "text-white" : "text-white";
  const accentColor = variant === "inverse" ? "text-amber" : "text-teal";

  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="HADU Electro-Mechanical Engineering logo">
      <rect width="64" height="64" rx="10" className="fill-current text-navy" />
      <path
        d="M13 47V17h8v11h12V17h8v30h-8V35H21v12h-8Z"
        className="fill-current text-white"
      />
      <path d="M45 14 33 34h9l-5 16 15-23h-9l2-13Z" className="fill-current text-amber" />
      <path d="M10 52h44M54 12v40M10 12h44" className={`stroke-current ${frameColor}`} strokeWidth="3" strokeLinecap="round" opacity="0.32" />
      <path d="M50 11 38 33h8l-8 20" className={`stroke-current ${accentColor}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" />
    </svg>
  );
}
