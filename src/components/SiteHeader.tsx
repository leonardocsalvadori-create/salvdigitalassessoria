import { Link } from "@tanstack/react-router";

import { LOGO, WHATSAPP } from "@/lib/site";

const link =
  "font-mono text-[10px] uppercase tracking-wider whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground sm:text-xs sm:tracking-widest";
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
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={LOGO}
            alt="Símbolo da Salv Digital"
            width={800}
            height={800}
            className="h-7 w-7 rounded-md object-cover sm:h-8 sm:w-8"
          />
          <span className="font-mono text-sm font-bold tracking-widest text-foreground">
            SALV<span className="text-primary">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className={link} activeProps={active}>
              {item.label}
              <Num>{item.num}</Num>
            </Link>
          ))}
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 rounded-full bg-primary px-5 py-2 font-mono text-xs font-bold text-primary-foreground transition hover:bg-accent lg:inline-block"
        >
          Chamar no WhatsApp
        </a>
      </nav>
    </header>
  );
}
