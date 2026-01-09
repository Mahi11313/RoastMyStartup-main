import { PageLayout } from "@/components/layout/PageLayout";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalCard, BrutalCardContent } from "@/components/ui/brutal-card";
import { BrutalProgress } from "@/components/ui/brutal-progress";
import { ScoreMeter } from "@/components/roast/ScoreMeter";
import { Share2, RotateCcw, Zap, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const savageQuotes = [
  "Your competitive advantage is that you have no competition because no one wants to build this.",
  "I've seen better market research on a cereal box.",
  "Your 5-year projection assumes you'll still be motivated after month 3.",
];

const metrics = [
  { label: "Originality", value: 3, max: 10 },
  { label: "Market Fit", value: 5, max: 10 },
  { label: "Founder Sanity", value: 2, max: 10 },
  { label: "Investor Appeal", value: 4, max: 10 },
  { label: "Execution Feasibility", value: 6, max: 10 },
];

export default function Result() {
  const roastScore = 9.2;

  return (
    <PageLayout>
      <section className="section-container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Roast Results 💀
          </h1>
          <p className="text-xl text-muted-foreground">
            The truth hurts. Here's yours.
          </p>
        </div>

        {/* Score */}
        <div className="mb-12">
          <ScoreMeter score={roastScore} />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric) => (
            <BrutalCard key={metric.label}>
              <BrutalCardContent>
                <BrutalProgress
                  label={metric.label}
                  value={metric.value}
                  max={metric.max}
                />
              </BrutalCardContent>
            </BrutalCard>
          ))}
        </div>

        {/* Savage Quotes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Highlights from Your Roast 🔥
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {savageQuotes.map((quote, index) => (
              <BrutalCard
                key={index}
                rotate={index % 2 === 0 ? "1" : "-1"}
                className="bg-muted"
              >
                <BrutalCardContent className="flex gap-4">
                  <Quote className="h-8 w-8 flex-shrink-0 text-primary" />
                  <p className="text-lg font-medium italic">"{quote}"</p>
                </BrutalCardContent>
              </BrutalCard>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <BrutalCard className="max-w-3xl mx-auto mb-12 bg-primary">
          <BrutalCardContent className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">The Verdict</h3>
            <p className="text-lg mb-6">
              Your startup idea has potential, but it needs serious work.
              The market exists, but your approach needs refinement.
              Consider pivoting your value proposition and validating with real customers.
            </p>
            <div className="inline-block bg-secondary text-secondary-foreground px-6 py-3 border-4 border-foreground font-bold">
              Survival Chance: 23%
            </div>
          </BrutalCardContent>
        </BrutalCard>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <BrutalButton size="lg">
            <Share2 className="h-5 w-5 mr-2" />
            Share Results
          </BrutalButton>
          <Link to="/roast">
            <BrutalButton variant="outline" size="lg">
              <RotateCcw className="h-5 w-5 mr-2" />
              Try Again
            </BrutalButton>
          </Link>
          <Link to="/pricing">
            <BrutalButton variant="secondary" size="lg">
              <Zap className="h-5 w-5 mr-2" />
              Upgrade for More
            </BrutalButton>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
