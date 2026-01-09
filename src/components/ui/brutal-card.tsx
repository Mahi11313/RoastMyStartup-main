import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  rotate?: "none" | "1" | "-1" | "2" | "-2";
}

const BrutalCard = React.forwardRef<HTMLDivElement, BrutalCardProps>(
  ({ className, rotate = "none", ...props }, ref) => {
    const rotateClass = {
      none: "",
      "1": "brutal-rotate-1",
      "-1": "brutal-rotate-neg-1",
      "2": "brutal-rotate-2",
      "-2": "brutal-rotate-neg-2",
    }[rotate];

    return (
      <div
        ref={ref}
        className={cn(
          "bg-card text-card-foreground border-4 border-foreground p-6",
          rotateClass,
          className
        )}
        {...props}
      />
    );
  }
);
BrutalCard.displayName = "BrutalCard";

const BrutalCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-4", className)} {...props} />
));
BrutalCardHeader.displayName = "BrutalCardHeader";

const BrutalCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-bold leading-none tracking-tight", className)}
    {...props}
  />
));
BrutalCardTitle.displayName = "BrutalCardTitle";

const BrutalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground mt-2", className)}
    {...props}
  />
));
BrutalCardDescription.displayName = "BrutalCardDescription";

const BrutalCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
BrutalCardContent.displayName = "BrutalCardContent";

const BrutalCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-4 flex items-center", className)} {...props} />
));
BrutalCardFooter.displayName = "BrutalCardFooter";

export {
  BrutalCard,
  BrutalCardHeader,
  BrutalCardTitle,
  BrutalCardDescription,
  BrutalCardContent,
  BrutalCardFooter,
};
