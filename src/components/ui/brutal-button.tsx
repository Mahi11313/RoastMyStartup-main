import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalButtonVariants = cva(
  "inline-flex items-center justify-center font-bold text-base transition-transform duration-100 border-4 border-foreground cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:translate-x-1 hover:translate-y-1 active:translate-x-0.5 active:translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground hover:translate-x-1 hover:translate-y-1 active:translate-x-0.5 active:translate-y-0.5",
        outline: "bg-background text-foreground hover:bg-muted hover:translate-x-1 hover:translate-y-1 active:translate-x-0.5 active:translate-y-0.5",
        destructive: "bg-accent text-accent-foreground hover:translate-x-1 hover:translate-y-1 active:translate-x-0.5 active:translate-y-0.5",
        ghost: "border-transparent hover:bg-muted hover:border-foreground",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BrutalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brutalButtonVariants> {}

const BrutalButton = React.forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(brutalButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
BrutalButton.displayName = "BrutalButton";

export { BrutalButton, brutalButtonVariants };
