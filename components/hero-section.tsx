"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[80vh] items-center bg-primary lg:overflow-hidden"
    >
      {/* Background overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Bottom nav bar — desktop only */}
      <div className="absolute inset-x-0 bottom-0 z-20 hidden border-t border-primary-foreground/10 bg-primary/80 backdrop-blur lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-fluid-8 px-fluid-6 py-4">
          {["About Babu", "On the Issues", "Get Involved"].map((item) => (
            <a
              key={item}
              href={`#${item === "About Babu" ? "about" : item === "On the Issues" ? "priorities" : "get-involved"}`}
              className="text-fluid-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-fluid-6 pb-fluid-20 pt-fluid-24">
        <div className="grid items-start gap-fluid-8 md:grid-cols-2">
          {/* Text */}
          <div className="order-2 md:order-1 md:pt-[18%]">
            <p
              className={`mb-fluid-4 text-fluid-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/50 transition-all duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Candidate for Frisco ISD Board of Trustees
            </p>
            <h1
              id="hero-heading"
              className={`mb-fluid-6 text-fluid-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground text-balance transition-all delay-150 duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Strong&nbsp;Schools.
              <br />
              <span className="text-accent font-accent">Bright&nbsp;Futures.</span>
            </h1>
            <p
              className={`mb-fluid-10 max-w-lg text-fluid-base leading-relaxed text-primary-foreground/70 transition-all delay-300 duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              A Frisco ISD parent and community leader running to keep every
              student at the center of every decision.
            </p>
            <div
              className={`flex flex-col gap-3 transition-all delay-500 duration-700 sm:flex-row ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#get-involved">Get Involved</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="#about">Meet Babu</a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`order-1 flex justify-center transition-all delay-300 duration-1000 md:order-2 md:justify-end ${
              loaded
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-95 opacity-0"
            }`}
          >
            <div className="relative w-[clamp(16rem,40vw,26rem)]">
              <div
                // className="absolute inset-x-4 bottom-0 top-1/4 rounded-full bg-accent/10 blur-3xl"
                // aria-hidden="true"
              />
              <img
                src="/media/Babu Venkat (No BG).png"
                alt="Babu Vekant, candidate for Frisco ISD Board of Trustees"
                className="relative z-10 h-auto w-full"
                width={420}
                height={525}
                loading="eager"
              />
              {/* Bottom fade-out blur */}
              <div
                className="pointer-events-none absolute inset-x-0 -bottom-1 z-20 h-1/3 bg-gradient-to-t from-[#14213b] from-10% via-[#14213b]/70 via-40% to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
