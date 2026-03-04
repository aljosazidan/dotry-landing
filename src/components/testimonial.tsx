"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-32">
      {/* Decorative quote mark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="block font-serif text-[20rem] leading-none text-foreground/[0.02] select-none">
          &ldquo;
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto max-w-4xl"
        >
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
            {/* Avatar + company visual */}
            <div className="flex flex-shrink-0 flex-col items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-rose/20 to-rose/5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B94A6A" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#B94A6A" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="text-center lg:text-left">
              <blockquote>
                <p className="font-serif text-2xl font-medium leading-relaxed tracking-tight text-foreground sm:text-3xl">
                  &bdquo;Wir haben DOTRY in unserem Pilotprojekt getestet und waren
                  von der einfachen Integration &uuml;berrascht. Unsere Kunden haben
                  das Feature sofort angenommen.&ldquo;
                </p>
              </blockquote>

              <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
                <div className="h-px w-8 bg-rose/40" />
                <p className="text-sm font-medium text-muted-foreground">
                  E-Commerce-Leitung &middot; Premium Beauty Retailer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
