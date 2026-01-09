import { BrutalCard, BrutalCardContent } from "@/components/ui/brutal-card";
import { Link } from "react-router-dom";
import { Eye, Skull, Calendar } from "lucide-react";

interface RoastCardProps {
  id: string;
  startupName: string;
  date: string;
  score: number;
  preview: string;
}

export function RoastCard({ id, startupName, date, score, preview }: RoastCardProps) {
  return (
    <BrutalCard className="hover:translate-x-1 hover:translate-y-1 transition-transform">
      <BrutalCardContent>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg">{startupName}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 border-4 border-foreground">
            <Skull className="h-4 w-4" />
            <span className="font-bold">{score}/10</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 font-mono">
          "{preview}"
        </p>

        <Link
          to={`/result?id=${id}`}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 border-4 border-foreground font-bold text-sm hover:translate-x-1 hover:translate-y-1 transition-transform"
        >
          <Eye className="h-4 w-4" />
          View Roast
        </Link>
      </BrutalCardContent>
    </BrutalCard>
  );
}
