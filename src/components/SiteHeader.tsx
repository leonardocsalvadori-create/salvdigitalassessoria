import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { LOGO, WHATSAPP } from "@/lib/site";

const link =
  "font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground";
const active = { className: "text-foreground" };

const nav = [
  { to: "/", label: "Início", num: "01" },
  { to: "/portfolio", label: "Portfólio", num: "02" },
  { to: "/contrate", label: "Nos contrate", num: "03" },
] as const;

function Num({ children }: { children: string }) {
  return <sup className="ml-0.5 text-[0.6em] text-primary">{children}</sup>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={LOGO}
            alt="Símbolo da Salv Digital"
            width={800}
            height={800}
            className="h-8 w-8 rounded-md object-cover"
          />
          <span className="font-mono text-sm font-bold tracking-widest text-foreground">
            SALV<span className="text-primary">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className={link} activeProps={active}>
              {item.label}
              <Num>{item.num}</Num>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2 font-mono text-xs font-bold text-primary-foreground transition hover:bg-accent sm:inline-block"
          >
            Chamar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="rounded-md border border-border p-2 text-foreground transition hover:border-primary md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border py-3 font-mono text-sm uppercase tracking-widest text-foreground last:border-0"
              >
                {item.label}
                <span className="text-xs text-primary">{item.num}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      </header>

      {open && (
        <div
          data-menu-backdrop="true"
          className="fixed inset-0 z-20 bg-background/70 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
