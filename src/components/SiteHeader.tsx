import { Link } from "@tanstack/react-router";

const link = "font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary";
const active = { className: "text-primary" };

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="font-mono text-sm font-bold text-foreground">
          SALV<span className="text-primary">.</span>
        </Link>
        <div className="flex gap-5">
          <Link to="/portfolio" className={link} activeProps={active}>Portfólio</Link>
          <Link to="/contrate" className={link} activeProps={active}>Nos contrate</Link>
        </div>
      </nav>
    </header>
  );
}
