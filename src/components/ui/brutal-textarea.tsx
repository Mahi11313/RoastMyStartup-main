import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrutalTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const BrutalTextarea = React.forwardRef<HTMLTextAreaElement, BrutalTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full border-4 border-foreground bg-background px-4 py-3 text-base font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
BrutalTextarea.displayName = "BrutalTextarea";

export { BrutalTextarea };
