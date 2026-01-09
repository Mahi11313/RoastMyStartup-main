import { PageLayout } from "@/components/layout/PageLayout";
import { PricingCard } from "@/components/roast/PricingCard";
import { BrutalCard, BrutalCardContent } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "Free",
    description: "Dip your toes in the roasting pool",
    features: [
      { text: "1 roast per day", included: true },
      { text: "Soft roast mode only", included: true },
      { text: "Basic feedback", included: true },
      { text: "PDF downloads", included: false },
      { text: "Meme generator", included: false },
      { text: "Investor feedback mode", included: false },
    ],
    buttonText: "Start Free",
    isPopular: false,
  },
  {
    name: "PRO",
    price: "$19",
    description: "For founders who can handle the heat",
    features: [
      { text: "Unlimited roasts", included: true },
      { text: "All roast levels including Nuclear ☢️", included: true },
      { text: "Detailed investor feedback", included: true },
      { text: "Pitch rewrite suggestions", included: true },
      { text: "PDF downloads", included: true },
      { text: "Meme generator", included: true },
    ],
    buttonText: "Go Nuclear 💀",
    isPopular: true,
  },
];

const faqs = [
  {
    question: "Will this actually help my startup?",
    answer: "If honest feedback helps, yes. If you need validation and hugs, probably not.",
  },
  {
    question: "Is the AI really that brutal?",
    answer: "On Nuclear mode? We've made VCs cry. And they don't have feelings.",
  },
  {
    question: "Can I get a refund if my feelings are hurt?",
    answer: "No, but you can get a better startup idea. That's worth more.",
  },
  {
    question: "Do you offer team plans?",
    answer: "Contact us if you need to roast an entire accelerator batch at once.",
  },
];

export default function Pricing() {
  return (
    <PageLayout>
      <section className="section-container py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <BrutalBadge className="mb-4">PRICING</BrutalBadge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Choose Your Pain Level
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free roasts are nice. But real founders go Nuclear.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Comparison */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Go Pro? 🔥
          </h2>
          <BrutalCard className="bg-muted">
            <BrutalCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-4">Free</h3>
                  <p className="text-muted-foreground">
                    Like asking your mom for feedback. She'll say it's nice, but you know she's lying.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4">Pro</h3>
                  <p className="text-muted-foreground">
                    Like having a brutally honest VC on speed dial. Painful, but you'll actually improve.
                  </p>
                </div>
              </div>
            </BrutalCardContent>
          </BrutalCard>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Questions? 🤔
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <BrutalCard key={index}>
                <BrutalCardContent>
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </BrutalCardContent>
              </BrutalCard>
            ))}
          </div>
        </div>

        {/* Money Back */}
        <div className="text-center mt-16">
          <BrutalCard className="inline-block bg-primary">
            <BrutalCardContent className="flex items-center gap-3">
              <Check className="h-6 w-6" />
              <span className="font-bold">
                No money-back guarantee. Because growth doesn't come from comfort.
              </span>
            </BrutalCardContent>
          </BrutalCard>
        </div>
      </section>
    </PageLayout>
  );
}
