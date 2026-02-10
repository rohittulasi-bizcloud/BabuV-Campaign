"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, FileText } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const voteDetails = [
  {
    icon: CalendarDays,
    label: "Election Day",
    value: "May 3, 2026",
    sub: "Early voting: April 21 - 29",
  },
  {
    icon: MapPin,
    label: "Where to Vote",
    value: "Find your polling location",
    href: "https://www.collincountytx.gov/elections",
    sub: "Collin County Elections website",
  },
  {
    icon: FileText,
    label: "What You Need",
    value: "Valid photo ID",
    sub: "Texas driver license, passport, or other accepted ID",
  },
];

export function VoteSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="vote" aria-labelledby="vote-heading" className="bg-secondary py-fluid-24">
      <div ref={ref} className="mx-auto max-w-6xl px-fluid-6">
        <div
          className={`mx-auto mb-fluid-12 max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Voting Information
          </p>
          <h2
            id="vote-heading"
            className="mb-fluid-4 font-accent text-fluid-3xl-sm font-bold tracking-tight text-foreground text-balance"
          >
            Your vote is your voice
          </h2>
          <p className="text-fluid-base leading-relaxed text-muted-foreground">
            School board elections have some of the lowest turnout -- but the
            biggest impact on your child{"'"}s daily life.
          </p>
        </div>

        <div className="grid gap-fluid-6 md:grid-cols-3">
          {voteDetails.map((item, i) => (
            <div
              key={item.label}
              className={`rounded-lg border border-border bg-card p-fluid-8 text-center shadow-sm transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms" }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mb-1 text-fluid-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fluid-base font-bold text-accent underline underline-offset-2 hover:text-accent/80"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-fluid-base font-bold text-foreground">{item.value}</p>
              )}
              <p className="mt-1 text-fluid-xs text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-fluid-10 text-center transition-all delay-500 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary bg-transparent text-primary hover:bg-primary/5"
          >
            <a href="https://www.votetexas.gov/register-to-vote/" target="_blank" rel="noopener noreferrer">
              Check Your Registration
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
