"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

function TryOnIllustration() {
  return (
    <div className="relative mx-auto h-44 w-36">
      <div className="absolute inset-0 rounded-2xl border border-border/60 bg-gradient-to-b from-rose-light to-white shadow-sm">
        <div className="flex flex-col items-center pt-5">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#F5D0C5] to-[#E8B4A8]">
            <div className="flex h-full items-end justify-center pb-3">
              <div className="h-2 w-6 rounded-full bg-rose/60" />
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            {["#B94A6A", "#C4707E", "#8B3A4A", "#D4888F"].map((c) => (
              <div key={c} className="h-4 w-4 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="mt-3 h-6 w-20 rounded-full bg-rose/80" />
        </div>
      </div>
      <div className="absolute -right-3 bottom-6 h-5 w-5 rounded-full border-2 border-rose bg-white shadow-md" />
    </div>
  );
}

function PersonalizationIllustration() {
  return (
    <div className="relative mx-auto h-44 w-44">
      <div className="absolute bottom-4 left-0 right-0 h-28 rounded-xl border border-border/60 bg-white shadow-sm">
        <div className="px-4 pt-4">
          <div className="h-1.5 w-16 rounded-full bg-foreground/10" />
          <div className="mt-2 h-1.5 w-24 rounded-full bg-foreground/5" />
        </div>
        <div className="mt-3 flex items-center gap-3 px-4">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#F5D0C5] to-[#E8B4A8]">
            <div className="flex h-full items-end justify-center pb-2">
              <div className="h-1.5 w-4 rounded-full bg-rose/50" />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-14 rounded-full bg-foreground/10" />
            <div className="h-1.5 w-10 rounded-full bg-foreground/5" />
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-rose/10 text-sm">
        <span className="text-rose">&#9829;</span>
      </div>
    </div>
  );
}

function IntegrationIllustration() {
  return (
    <div className="relative mx-auto h-44 w-44">
      <div className="absolute inset-x-0 top-2 rounded-xl border border-border/60 bg-dark p-4 shadow-sm">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-rose/60" />
          <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
          <div className="h-2 w-2 rounded-full bg-green-400/60" />
        </div>
        <div className="mt-3 space-y-2 font-mono text-[9px]">
          <div className="text-white/30">&lt;script&gt;</div>
          <div className="ml-2 text-rose/70">dotry.init()</div>
          <div className="text-white/30">&lt;/script&gt;</div>
        </div>
      </div>
      <div className="absolute -right-2 bottom-2 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white shadow-lg text-sm font-bold">
        &#10003;
      </div>
      <div className="absolute -left-1 bottom-4 rounded-full bg-white border border-border/60 px-2 py-1 text-[10px] font-semibold text-foreground/60 shadow-sm">
        48h
      </div>
    </div>
  );
}

const features = [
  {
    number: "01",
    tag: "Try-On Widget",
    title: "Ausprobieren \u2014 direkt auf deiner Haut.",
    body: "Ein Selfie, und DOTRY legt den Lippenstift in Echtzeit auf die Lippen. Keine App, kein Download.",
    illustration: TryOnIllustration,
  },
  {
    number: "02",
    tag: "Personalisierung",
    title: "Dein Kunde als Model.",
    body: "Kampagnen mit dem eigenen Gesicht des Kunden \u2014 mit dem neuen Produkt drauf. Keine Stock-Models.",
    illustration: PersonalizationIllustration,
  },
  {
    number: "03",
    tag: "Integration",
    title: "Live in 48 Stunden.",
    body: "Ein JavaScript-Snippet. Keine IT, kein Relaunch. Einf\u00FCgen und starten.",
    illustration: IntegrationIllustration,
  },
];

export function Features() {
  return (
    <section id="produkt" className="relative py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUpStagger} className="section-label text-rose">
            Das Produkt
          </motion.span>
          <motion.h2
            variants={fadeUpStagger}
            className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Zwei Produkte.{" "}
            <span className="text-gradient-rose">Ein nahtloses</span>{" "}
            Erlebnis.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {features.map((feature) => {
            const Illust = feature.illustration;
            return (
              <motion.div
                key={feature.number}
                variants={fadeUpStagger}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-8 transition-all duration-500 hover:border-rose/20 hover:shadow-xl hover:shadow-rose/5 lg:p-10"
              >
                <div className="mb-6">
                  <Illust />
                </div>
                <span className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                  {feature.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-rose to-rose/50 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
