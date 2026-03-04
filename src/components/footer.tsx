export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-lg font-bold tracking-tight">DOTRY</span>

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

          <p className="text-sm text-muted-foreground">
            &copy; 2025 DOTRY · dotry.de
          </p>
        </div>
      </div>
    </footer>
  );
}
