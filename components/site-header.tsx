"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Priorities", href: "#priorities" },
  { label: "Get Involved", href: "#get-involved" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-primary/90"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-fluid-6 py-4">
        <a
          href="#"
          className="flex items-center gap-3 text-primary-foreground"
          aria-label="Babu Venkat for Frisco ISD -- return to top"
        >
          <span className="text-fluid-xl font-bold tracking-tight">
            BABU<span className="ml-1 font-light opacity-70">VENKAT</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-fluid-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-3 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#donate">Donate</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-primary-foreground hover:bg-primary-foreground/10 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="bg-primary/95 px-fluid-6 pb-6 pt-2 backdrop-blur">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-3 text-fluid-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#donate"
                onClick={() => setMobileOpen(false)}
                className="block rounded-md bg-accent px-3 py-3 text-center text-fluid-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
