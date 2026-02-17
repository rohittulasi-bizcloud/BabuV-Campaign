"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HandHelping, Check, Loader2 } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { AddressAutocomplete } from "@/components/address-autocomplete";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzUTefanekLaMKq9lez6oQNP3XhsRDKHJ500clggmu_8j8PTDMkvh60qodFeuzEJkiD/exec";

export function GetInvolvedSection() {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [area, setArea] = useState("");
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("vol-name") as HTMLInputElement).value;
    const contact = (form.elements.namedItem("vol-contact") as HTMLInputElement).value;

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, area }),
      });
      setVolunteerSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="get-involved" aria-labelledby="involved-heading" className="bg-muted/40 py-fluid-24">
      <div ref={ref} className="mx-auto max-w-2xl px-fluid-6">
        <div
          className={`mb-fluid-12 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-fluid-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get Involved
          </p>
          <h2
            id="involved-heading"
            className="mb-fluid-4 font-accent text-fluid-3xl-sm font-bold tracking-tight text-foreground text-balance"
          >
            Be part of the team strengthening our schools
          </h2>
          <p className="text-fluid-base leading-relaxed text-muted-foreground">
            Even a small amount of time can make a real difference.
          </p>
        </div>

        {/* Volunteer */}
        <div
          className={`relative overflow-hidden rounded-lg border border-border bg-card px-fluid-8 py-fluid-10 shadow-sm transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {/* Right-side decorative gradient */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl"
            aria-hidden="true"
          />
          <div className="mb-1 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <HandHelping className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-fluid-lg font-bold text-foreground">Volunteer</h3>
          </div>
          <p className="mb-fluid-6 text-fluid-sm leading-relaxed text-muted-foreground">
            Support the campaign in simple, meaningful ways from helping at local events to reaching out to neighbors and families.
          </p>

          {volunteerSubmitted ? (
            <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-3 text-fluid-sm font-medium text-primary" role="status">
              <Check className="h-4 w-4" aria-hidden="true" />
              Thank you! We{"'"}ll reach out with next steps.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div>
                <Label htmlFor="vol-name" className="mb-1.5 block text-fluid-sm font-medium text-foreground">Full Name</Label>
                <Input id="vol-name" type="text" placeholder="Jane Smith" required autoComplete="name" className="border-border bg-background" />
              </div>
              <div>
                <Label htmlFor="vol-contact" className="mb-1.5 block text-fluid-sm font-medium text-foreground">Email or Phone (your choice)</Label>
                <Input id="vol-contact" type="text" placeholder="Email address or phone number" required autoComplete="email tel" className="border-border bg-background" />
              </div>
              <div>
                <Label htmlFor="vol-area" className="mb-1.5 block text-fluid-sm font-medium text-foreground">Your Neighborhood / Area</Label>
                <AddressAutocomplete
                  id="vol-area"
                  value={area}
                  onChange={setArea}
                  placeholder="Start typing your neighborhood or address..."
                  required
                />
                <p className="mt-1.5 text-fluid-xs text-muted-foreground/60">This helps us connect you with nearby volunteer opportunities.</p>
              </div>
              <Button type="submit" disabled={submitting} className="mt-1 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Submitting...
                  </>
                ) : (
                  "Join the Volunteer Team"
                )}
              </Button>
              {error && (
                <p className="text-fluid-xs text-red-500" role="alert">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
