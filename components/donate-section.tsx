"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Check } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const presetAmounts = [10, 25, 50, 100, 250];

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <section id="donate" aria-labelledby="donate-heading" className="bg-background pb-fluid-24 pt-fluid-32">
      <div ref={ref} className="mx-auto max-w-xl px-fluid-6">
        <div
          className={`mb-fluid-10 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Support the Campaign
          </p>
          <h2
            id="donate-heading"
            className="mb-fluid-4 font-accent text-fluid-3xl-sm font-bold tracking-tight text-foreground text-balance"
          >
            Support local schools. Invest in local students.
          </h2>
          <p className="text-fluid-base leading-relaxed text-muted-foreground">
            Your contribution funds local outreach, voter education, and school-focused advocacy keeping students and families at the center of every decision.
          </p>
        </div>

        <div
          className={`transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {submitted ? (
            <div className="rounded-lg border border-border bg-card p-fluid-10 text-center shadow-sm" role="status">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-fluid-xl font-bold text-foreground">Thank you!</h3>
              <p className="text-fluid-sm text-muted-foreground">
                Your generosity makes a real difference in this community-powered campaign.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-lg border border-border bg-card p-fluid-8 shadow-sm"
            >
              <fieldset>
                <legend className="mb-3 text-fluid-sm font-semibold text-foreground">Choose an amount</legend>
                <div className="mb-5 flex flex-wrap gap-2">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                      className={`rounded-lg border px-5 py-2.5 text-fluid-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        selectedAmount === amt && !customAmount
                          ? "border-accent bg-accent text-accent-foreground shadow-sm"
                          : "border-border bg-background text-foreground hover:border-accent/40"
                      }`}
                      aria-pressed={selectedAmount === amt && !customAmount}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mb-fluid-6">
                <Label htmlFor="custom-amount" className="mb-1.5 block text-fluid-sm font-medium text-foreground">
                  Or enter a custom amount
                </Label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fluid-sm text-muted-foreground">$</span>
                  <Input
                    id="custom-amount" type="number" min={1} step={1} placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    className="border-border bg-background pl-7"
                  />
                </div>
              </div>

              <div className="mb-fluid-6 grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="donor-name" className="mb-1.5 block text-fluid-sm font-medium text-foreground">Full name</Label>
                  <Input id="donor-name" type="text" required placeholder="Your full name" autoComplete="name" className="border-border bg-background" />
                </div>
                <div>
                  <Label htmlFor="donor-email" className="mb-1.5 block text-fluid-sm font-medium text-foreground">Email</Label>
                  <Input id="donor-email" type="email" required placeholder="you@example.com" autoComplete="email" className="border-border bg-background" />
                </div>
              </div>

              <Button type="submit" size="lg" className="mb-4 w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={!activeAmount || activeAmount < 1}>
                {activeAmount && activeAmount >= 1 ? `Contribute $${activeAmount}` : "Select an amount"}
              </Button>

              <div className="flex items-center justify-center gap-2 text-fluid-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Secure donation • Texas campaign finance compliant</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
