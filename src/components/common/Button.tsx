import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl",
      secondary:
        "bg-amber-500 text-white hover:bg-amber-600 shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
      ghost: "text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700",
      gradient:
        "gradient-cta text-white shadow-lg hover:shadow-xl hover:scale-105",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    };

    const buttonClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className,
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        className: cn(
          buttonClasses,
          (children.props as { className?: string })?.className,
        ),
        ref,
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
