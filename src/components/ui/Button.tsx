import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-cream hover:bg-forest-dark",
  outline: "border border-forest/40 text-forest hover:border-forest hover:bg-forest/5",
  ghost: "text-forest hover:bg-forest/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm sm:text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return clsx(base, variants[variant], sizes[size], className);
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes(variant, size, className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes(variant, size, className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  );
}
