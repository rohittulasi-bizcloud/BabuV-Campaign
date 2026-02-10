import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
// import { WhySection } from "@/components/why-section";
import { PrioritiesSection } from "@/components/priorities-section";
import { TrustSection } from "@/components/trust-section";
import { GetInvolvedSection } from "@/components/get-involved-section";
import { DonateSection } from "@/components/donate-section";
// import { VoteSection } from "@/components/vote-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        {/* <WhySection /> */}
        <PrioritiesSection />
        <TrustSection />
        <GetInvolvedSection />
        <DonateSection />
        {/* <VoteSection /> */}
      </main>
      <SiteFooter />
    </div>
  );
}
