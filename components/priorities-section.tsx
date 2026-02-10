"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { GraduationCap, Heart, Users, Landmark } from "lucide-react";

const priorities = [
  {
    icon: GraduationCap,
    label: "Students First",
    subheading: "Safe, strong, and future-ready schools.",
    summary:
      "Every decision should begin with students strengthening campus safety, academic excellence, and programs that prepare young people for college, careers, and life beyond the classroom.",
  },
  {
    icon: Heart,
    label: "Backing Great Teachers",
    subheading: "Strong schools are built by strong educators.",
    summary:
      "Retaining great teachers through competitive compensation, professional growth, and classroom support while fostering a culture of shared leadership and respect.",
  },
  {
    icon: Users,
    label: "Parents as True Partners",
    subheading: "Education works best when families are heard.",
    summary:
      "Clear communication, transparent decision-making, and meaningful dialogue always keeping the focus on student success.",
  },
  {
    icon: Landmark,
    label: "Responsible Stewardship",
    subheading: "Protecting trust today while planning for tomorrow.",
    summary:
      "Responsible budgeting, long-term financial stability, data-driven decisions, and accountable oversight as Frisco ISD continues to grow.",
  },
];

export function PrioritiesSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section
      id="priorities"
      aria-labelledby="priorities-heading"
      className="bg-secondary py-fluid-24"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-fluid-6">
        {/* Header */}
        <div
          className={`mx-auto mb-fluid-16 max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
            My Priorities
          </p>
          <h2
            id="priorities-heading"
            className="mb-fluid-4 font-accent text-fluid-3xl-sm font-bold tracking-tight text-foreground text-balance"
          >
            What I{"'"}ll focus on as your trustee
          </h2>
        </div>

        {/* Priority cards */}
        <div className="grid gap-fluid-6 sm:grid-cols-2">
          {priorities.map((p, i) => (
            <div
              key={p.label}
              className={`group relative rounded-lg border border-border bg-card p-fluid-8 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms" }}
            >
              {/* Accent left border */}
              <div className="absolute inset-y-4 left-0 w-1 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div className="flex items-start gap-fluid-4">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-fluid-lg font-bold text-foreground">{p.label}</h3>
                  <p className="mt-1 text-fluid-sm font-medium italic text-accent">{p.subheading}</p>
                  <p className="mt-2 text-fluid-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
