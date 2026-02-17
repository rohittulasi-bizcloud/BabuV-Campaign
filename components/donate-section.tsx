"use client";

import { ShieldCheck, Heart } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

export function DonateSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  const handleDonate = () => {
    // Trigger the Donorbox popup if the widget is loaded
    const donorboxButton = document.querySelector("dbox-widget button") as HTMLButtonElement | null;
    if (donorboxButton) {
      donorboxButton.click();
    } else {
      // Fallback: open Donorbox in a new tab
      window.open("https://donorbox.org/babu-venkat-for-fisd", "_blank");
    }
  };

  return (
    <section id="donate" aria-labelledby="donate-heading" className="bg-background pb-fluid-24 pt-fluid-32">
      <div ref={ref} className="mx-auto max-w-2xl px-fluid-6">
        <div
          className={`text-center transition-all duration-700 ${
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
          <p className="mx-auto mb-fluid-10 max-w-lg text-fluid-base leading-relaxed text-muted-foreground">
            Your contribution funds local outreach, voter education, and
            school-focused advocacy keeping students and families at the center
            of every decision.
          </p>

          <button
            onClick={handleDonate}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-fluid-base font-semibold text-accent-foreground shadow-md transition-all hover:bg-accent/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
            Donate Now
          </button>

          <p className="mt-5 flex items-center justify-center gap-2 text-fluid-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Secure donation • Texas campaign finance compliant
          </p>
        </div>
      </div>
    </section>
  );
}
