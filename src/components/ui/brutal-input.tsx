import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrutalInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const BrutalInput = React.forwardRef<HTMLInputElement, BrutalInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-4 border-foreground bg-background px-4 py-3 text-base font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
BrutalInput.displayName = "BrutalInput";

export { BrutalInput };
