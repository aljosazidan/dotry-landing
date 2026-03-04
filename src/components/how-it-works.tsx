"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

function StepVisual1() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border/40 bg-gradient-to-b from-rose-light/50 to-white">
      <div className="flex h-full items-center justify-center gap-4 px-6">
        <div className="h-24 w-16 rounded-lg bg-gradient-to-b from-rose/20 to-rose/10" />
        <div className="space-y-2">
          <div className="h-2 w-20 rounded-full bg-foreground/10" />
          <div className="h-2 w-14 rounded-full bg-foreground/5" />
          <div className="h-1.5 w-24 rounded-full bg-foreground/5" />
          <div className="mt-1 flex h-6 w-20 items-center justify-center rounded-full bg-rose text-[8px] font-bold text-white">
            ausprobieren
          </div>
        </div>
      </div>
      {/* Static cursor */}
      <div className="absolute bottom-10 right-16">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M1 1L1 14L5 10L9 18L12 16L8 8L14 8L1 1Z" fill="#0A0A0B" stroke="white" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
}

function StepVisual2() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border/40 bg-gradient-to-b from-rose-light/50 to-white">
      <div className="flex h-full items-center justify-center">
        <div className="relative">
          <div className="h-28 w-28 rounded-full bg-gradient-to-br from-[#F5D0C5] to-[#E8B4A8] shadow-inner">
            <div className="flex h-full items-end justify-center pb-6">
              <div className="h-4 w-10 rounded-full bg-rose/70" />
            </div>
          </div>
          <div className="mt-3 flex justify-center gap-1.5">
            {["#B94A6A", "#C4707E", "#8B3A4A", "#D4888F", "#9E4158"].map((c, i) => (
              <div
                key={c}
                className={`h-5 w-5 rounded-full ${i === 0 ? "ring-2 ring-foreground/20 ring-offset-1" : ""}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          {/* Static AI badge */}
          <div className="absolute -right-8 top-0 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold text-rose shadow-md border border-rose/20">
            KI
          </div>
        </div>
      </div>
    </div>
  );
}

function StepVisual3() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border/40 bg-gradient-to-b from-rose-light/50 to-white">
      <div className="flex h-full items-center justify-center px-6">
        <div className="w-full max-w-[200px] rounded-lg border border-border/40 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#F5D0C5] to-[#E8B4A8]">
              <div className="flex h-full items-end justify-center pb-1.5">
                <div className="h-1 w-3 rounded-full bg-rose/50" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-16 rounded-full bg-foreground/10" />
              <div className="h-1.5 w-12 rounded-full bg-foreground/5" />
            </div>
          </div>
          <div className="mt-2 h-px w-full bg-border/40" />
          <div className="mt-2 space-y-1.5">
            <div className="h-1 w-full rounded-full bg-foreground/5" />
            <div className="h-1 w-3/4 rounded-full bg-foreground/5" />
          </div>
          <div className="mt-2 h-5 w-16 rounded-full bg-rose text-[7px] font-bold text-white flex items-center justify-center">
            Jetzt kaufen
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 rounded-full bg-green-50 border border-green-200 px-2 py-0.5 text-[8px] font-semibold text-green-700">
        DSGVO &#10003;
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: 'Klick auf \u201Eausprobieren\u201C',
    body: "Direkt neben dem Produkt. Kein Redirect, kein Popup.",
    detail: "\u2192 Auf jeder Produktseite",
    visual: StepVisual1,
  },
  {
    number: "02",
    title: "Selfie & Try-On",
    body: "KI erkennt die Lippen und legt die Farbe in Echtzeit auf.",
    detail: "\u2192 Pr\u00E4zision in Millisekunden",
    visual: StepVisual2,
  },
  {
    number: "03",
    title: "Speichern & personalisieren",
    body: "Nie wieder generischer Newsletter \u2014 ab jetzt mit dem eigenen Gesicht.",
    detail: "\u2192 DSGVO-konform & opt-in",
    visual: StepVisual3,
  },
];

export function HowItWorks() {
  return (
    <section
      id="so-funktionierts"
      className="relative overflow-hidden bg-surface py-28 sm:py-36 lg:py-44"
    >
      {/* Soft glow — no blur */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-rose/[0.03] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUpStagger}
            className="section-label text-rose"
          >
            So funktioniert&apos;s
          </motion.span>
          <motion.h2
            variants={fadeUpStagger}
            className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Drei Schritte. Eine neue Erfahrung.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          {steps.map((step) => {
            const Visual = step.visual;
            return (
              <motion.div
                key={step.number}
                variants={fadeUpStagger}
                className="group"
              >
                <Visual />

                <div className="mt-6 flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-rose/30 text-xs font-bold text-rose">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                    <p className="mt-2 text-xs font-medium text-rose">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
