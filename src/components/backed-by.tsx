"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

const logos = [
  { src: "/logos/fragrancex_logo.webp", alt: "FragranceX" },
  { src: "/logos/header-logo_ebc61223-5df2-4733-8d35-b0df0ba33d6c.svg", alt: "Cologne.com" },
  { src: "/logos/dermeleve_wordmark_2color-with-R.svg", alt: "Dermeleve" },
  { src: "/logos/elysium-wordmark.svg", alt: "Elysium" },
  { src: "/logos/SECRET_BOTTLE_Black_3x1_aspect_ratio.avif", alt: "Secret Bottle" },
  { src: "/logos/TBD-logo.1.avif", alt: "TBD" },
  { src: "/logos/difiaba.webp", alt: "Difiaba" },
  { src: "/logos/69727ef50bf9ec7fb2bf5a8b_New_logo_1_720x.webp", alt: "Brand" },
  { src: "/logos/icon-logo.avif", alt: "Brand" },
  { src: "/logos/logo-1.svg", alt: "Brand" },
  { src: "/logos/logo.png", alt: "Brand" },
  { src: "/logos/new logo inbetween_edited_edited.avif", alt: "Brand" },
  { src: "/logos/4ecee0_90f378d9a5c0495cadac21b2eba8e9e3~mv2.jpg", alt: "Brand" },
];

export function BackedBy() {
  const scrollLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-border/50" />

      <div className="pb-16 pt-24 sm:pb-20 sm:pt-32">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8"
        >
          <motion.span
            variants={fadeUpStagger}
            className="section-label text-muted-foreground/40"
          >
            Die Technologie dahinter
          </motion.span>

          <motion.h2
            variants={fadeUpStagger}
            className="mx-auto mt-8 max-w-4xl font-serif text-3xl font-light leading-[1.3] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            DOTRY wird entwickelt von{" "}
            <a
              href="https://www.productai.photo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-rose/30 underline-offset-[6px] transition-colors duration-300 hover:decoration-rose/60"
            >
              ProductAI
            </a>{" "}
            —<br className="hidden lg:block" />{" "}
            KI-Bildgenerierungssoftware die von 75+ Top-Brands weltweit genutzt wird.
          </motion.h2>

          <motion.a
            variants={fadeUpStagger}
            href="https://www.productai.photo"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground/60 transition-colors duration-300 hover:text-foreground"
          >
            <span className="underline decoration-border/60 underline-offset-4 transition-colors duration-300 group-hover:decoration-foreground/30">
              Mehr über ProductAI erfahren
            </span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>

        {/* Scrolling logo bar */}
        <div className="relative mt-16 sm:mt-20">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent sm:w-48" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent sm:w-48" />

          <div className="animate-scroll-left flex w-max items-center gap-14 sm:gap-20">
            {scrollLogos.map((logo, i) => (
              <div
                key={i}
                className="flex h-10 flex-shrink-0 items-center opacity-[0.15] grayscale transition-all duration-700 hover:opacity-40 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-7 w-auto object-contain sm:h-8"
                  loading="lazy"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/50" />
    </section>
  );
}
