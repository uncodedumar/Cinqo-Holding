import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type ButtonAsLink = {
  href: string;
  onClick?: never;
  type?: never;
} & Omit<ComponentProps<typeof Link>, "href">;

type ButtonAsButton = {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
} & Omit<ComponentProps<"button">, "type">;

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "nav-ghost" | "primary" | "outline";
} & (ButtonAsLink | ButtonAsButton);

const variantStyles: Record<string, string> = {
  "nav-ghost":
    "rounded-none border border-white/20 bg-transparent px-5 py-2 text-[10px] font-bold tracking-[0.18em] uppercase text-cream-50 transition-all duration-300 ease-out hover:border-white hover:bg-cream-50 hover:text-navy-950",
  primary:
    "btn btn-primary",
  outline:
    "btn btn-outline",
};

export default function Button({
  children,
  className = "",
  variant = "nav-ghost",
  ...props
}: ButtonProps) {
  const base = variantStyles[variant] ?? variantStyles["nav-ghost"];
  const combined = `${base} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={combined} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, ...rest } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={combined} {...rest}>
      {children}
    </button>
  );
}
