"use client";

import Script from "next/script";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

export function DonateSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="donate" aria-labelledby="donate-heading" className="bg-background pb-fluid-24 pt-fluid-32">
      <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" />
      <div ref={ref} className="mx-auto max-w-2xl px-fluid-6">
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
          className={`flex justify-center transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <iframe
            src="https://donorbox.org/embed/babu-venkat-for-fisd"
            name="donorbox"
            frameBorder="0"
            scrolling="no"
            height="900px"
            width="100%"
            style={{ maxWidth: "500px", minWidth: "250px", maxHeight: "none" }}
            allow="payment"
            title="Donate via Donorbox"
          />
        </div>
      </div>
    </section>
  );
}
