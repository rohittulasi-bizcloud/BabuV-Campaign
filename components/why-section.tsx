"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { GraduationCap, Shield, BookOpen, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Student-Centered Decisions",
    description: (
      <>Every decision should start with one question: <em>how does this help our students learn, grow, and succeed?</em></>
    ),
  },
  {
    icon: Shield,
    title: "Safety & Well-Being",
    description:
      "Our kids deserve to feel safe physically and emotionally in every hallway, classroom, and bus.",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Protecting Frisco ISD’s strong academic foundation while preparing students for what comes next.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Vision",
    description:
      "Thoughtful long-term planning and responsible use of resources to support growth without losing community trust.",
  },
];

export function WhySection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="why" aria-labelledby="why-heading" className="bg-secondary py-fluid-24">
      <div ref={ref} className="mx-auto max-w-6xl px-fluid-6">
        <div
          className={`mx-auto mb-fluid-16 max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why I{"'"}m Running
          </p>
          <h2
            id="why-heading"
            className="mb-fluid-4 font-accent text-fluid-3xl-sm font-bold tracking-tight text-foreground text-balance"
          >
            Our students deserve board members who show up for them
          </h2>
          <p className="text-fluid-base leading-relaxed text-muted-foreground">
            School board service is about stewardship, not politics.
          </p>
        </div>

        <div className="grid gap-fluid-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group rounded-lg border border-border bg-card p-fluid-8 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                <reason.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-fluid-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="text-fluid-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
