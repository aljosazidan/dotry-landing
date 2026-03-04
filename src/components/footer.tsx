"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <span className="text-lg font-bold tracking-tight">DOTRY</span>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Datenschutz
            </a>
            <a
              href="mailto:hello@dotry.de"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Kontakt
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; 2025 DOTRY &middot; dotry.de
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
