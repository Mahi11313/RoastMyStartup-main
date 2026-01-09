import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrutalProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
}

const BrutalProgress = React.forwardRef<HTMLDivElement, BrutalProgressProps>(
  ({ className, value, max = 100, label, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {label && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold">{label}</span>
            <span className="text-sm font-mono">{value}/{max}</span>
          </div>
        )}
        <div className="h-6 w-full border-4 border-foreground bg-background">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);
BrutalProgress.displayName = "BrutalProgress";

export { BrutalProgress };
