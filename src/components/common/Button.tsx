import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outlineLight" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border border-brand bg-brand text-white hover:bg-brand-dark hover:border-brand-dark",
  outline:
    "border border-brand bg-transparent text-white hover:bg-brand/10",
  outlineLight:
    "border border-white/80 bg-transparent text-white hover:bg-white/10",
  ghost:
    "border border-transparent bg-white/5 text-white hover:bg-white/10",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm gap-2",
  md: "h-11 px-5 text-sm gap-2.5",
  lg: "h-12 px-6 text-[15px] gap-2.5 md:h-[52px] md:px-7",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-[10px] font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    variantClass[variant],
    sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
