import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalBadgeVariants = cva(
  "inline-flex items-center border-3 border-foreground px-3 py-1 text-sm font-bold",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-background text-foreground",
        destructive: "bg-accent text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BrutalBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof brutalBadgeVariants> {}

function BrutalBadge({ className, variant, ...props }: BrutalBadgeProps) {
  return (
    <div className={cn(brutalBadgeVariants({ variant }), className)} {...props} />
  );
}

export { BrutalBadge, brutalBadgeVariants };
