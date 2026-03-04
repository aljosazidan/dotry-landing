"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Produkt", href: "#produkt" },
    { label: "So funktioniert\u2019s", href: "#so-funktionierts" },
    { label: "Ergebnisse", href: "#ergebnisse" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-background border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="#" className="relative z-10">
            <span className="text-xl font-bold tracking-tight">DOTRY</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="https://cal.com/aljosa-zidan-wozbsk/dotry" target="_blank" rel="noopener noreferrer">
              <Button
                className="rounded-full bg-rose px-6 text-white hover:bg-rose/90 transition-all duration-300 hover:shadow-lg hover:shadow-rose/20"
                size="sm"
              >
                Demo anfragen
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] w-6 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[2.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu — pure CSS transition, no Framer Motion */}
      <div
        className={`overflow-hidden bg-background transition-[max-height,opacity] duration-300 md:hidden ${
          mobileOpen ? "max-h-64 opacity-100 border-b border-border/50" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="https://cal.com/aljosa-zidan-wozbsk/dotry" target="_blank" rel="noopener noreferrer">
            <Button className="mt-2 w-full rounded-full bg-rose text-white hover:bg-rose/90">
              Demo anfragen
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
