import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const variants = {
    primary: "bg-teal text-white hover:bg-[#0f786d]",
    secondary: "bg-white text-navy hover:bg-cloud",
    ghost: "border border-slate-300 bg-white text-navy hover:border-teal hover:text-teal"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
