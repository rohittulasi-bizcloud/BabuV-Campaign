"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-background py-fluid-24"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-fluid-6">
        <div className="grid items-center gap-fluid-20 md:grid-cols-2">
          {/* Portrait */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-fit">
              <div className="aspect-[4/5] w-[clamp(18rem,50vw,24rem)] overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/media/placeholder.svg?height=480&width=380"
                  alt="Babu Vekant with his family in Frisco"
                  className="h-full w-full object-cover"
                  width={380}
                  height={480}
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-lg bg-accent/10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="mb-3 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About Babu
            </p>
            <h2
              id="about-heading"
              className="mb-fluid-6 font-accent text-fluid-3xl-sm font-bold leading-tight tracking-tight text-foreground text-balance"
            >
              A Frisco parent. 
              <br />
              An executive leader.
              <br />
              A servant leader.
            </h2>

            <div className="mt-1 space-y-fluid-6 text-fluid-base leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">A Frisco parent, first and always</span> who believes
                our schools must always put students at the center of every decision.
              </p>
              <p>
                <span className="font-semibold text-foreground">With deep roots in the Frisco ISD community,</span> my
                family has been part of Frisco ISD for over 15 years. Our son is a graduate, and our daughter is
                currently a sophomore.
              </p>
              <p>
                <span className="font-semibold text-foreground">Bringing leadership grounded in accountability and service,</span> my
                professional and community experience has shaped a thoughtful, transparent approach focused on
                long-term responsibility.
              </p>
              <p>
                <span className="font-semibold text-foreground">I am running to help ensure</span> Frisco ISD remains
                safe, academically strong, future-ready, and fiscally responsible for every student and every family.
              </p>
            </div>

            <div className="mt-fluid-8">
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#donate">Support the Campaign</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
