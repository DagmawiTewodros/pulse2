import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-pill btn-primary",
  ghost: "btn-pill btn-ghost",
  dark: "btn-pill btn-dark",
};

export function PillLink({
  to,
  variant = "primary",
  children,
  className = "",
  ...rest
}: BaseProps & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">) {
  return (
    <Link to={to} className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function PillButton({
  variant = "primary",
  children,
  className = "",
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function PillAnchor({
  variant = "primary",
  children,
  className = "",
  ...rest
}: BaseProps & ComponentProps<"a">) {
  return (
    <a className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
