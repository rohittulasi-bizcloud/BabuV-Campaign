"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { MessageCircle, UsersRound, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: MessageCircle,
    title: "Show Up and Listen",
    body: "I will hold open conversations with parents, teachers, and students — and make decisions in the open.",
  },
  {
    icon: UsersRound,
    title: "Work Across Differences",
    body: "School board decisions shouldn’t be political. I will work with families, educators, and trustees to solve real problems.",
  },
  {
    icon: HeartHandshake,
    title: "Earn Community Trust",
    body: "Trust is built through consistency, transparency, and follow-through every meeting, every vote.",
  },
];

export function TrustSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="trust" aria-labelledby="trust-heading" className="bg-primary py-fluid-24 text-primary-foreground">
      <div ref={ref} className="mx-auto max-w-6xl px-fluid-6">
        <div
          className={`mx-auto mb-fluid-16 max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Community Trust
          </p>
          <h2
            id="trust-heading"
            className="mb-fluid-4 font-accent text-fluid-3xl-sm font-bold tracking-tight text-primary-foreground text-balance"
          >
            Built on listening, collaboration, and respect
          </h2>
          <p className="text-fluid-base leading-relaxed text-primary-foreground/70">
            Trust is earned by showing up, listening, and doing the work consistently and transparently.
          </p>
        </div>

        <div className="grid gap-fluid-10 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms" }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5">
                <v.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-fluid-lg font-bold text-primary-foreground">
                {v.title}
              </h3>
              <p className="text-fluid-sm leading-relaxed text-primary-foreground/70">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
