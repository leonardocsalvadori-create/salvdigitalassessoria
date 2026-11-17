import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BEHANCE, WHATSAPP, arts } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Salv Digital Assessoria" },
      {
        name: "description",
        content:
          "Matchdays e artes criadas pela Salv Digital para clubes, atletas e marcas: Corinthians, Santos, Grêmio, Chelsea e mais.",
      },
      { property: "og:title", content: "Portfólio — Salv Digital Assessoria" },
      {
        property: "og:description",
        content: "Matchdays e artes criadas pela Salv Digital para clubes, atletas e marcas.",
      },
    ],
  }),
  component: Portfolio,
});

const pad = (n: number) => String(n).padStart(2, "0");

function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);
  const featured = arts[0];
  const current = open === null ? undefined : arts[open];

  const go = (d: number) =>
    setOpen((i) => (i === null ? i : (i + d + arts.length) % arts.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!featured) return null;

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-8">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>✦ / 02</span>
          <span>Portfólio</span>
          <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
          <h1 className="text-5xl md:text-7xl">Portfólio</h1>
          <div className="md:text-right">
            <p className="text-muted-foreground">
              Uma seleção de matchdays e artes para atletas, clubes e marcas.
            </p>
            <a
              href={BEHANCE}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full border border-border px-5 py-2.5 font-mono text-xs text-foreground transition hover:border-primary"
            >
              Ver no Behance ↗
            </a>
          </div>
        </div>

        <section className="mt-14 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
          <button
            type="button"
            onClick={() => setOpen(0)}
            className="group overflow-hidden rounded-xl border border-border bg-card text-left"
          >
            <img
              src={featured.src}
              alt={featured.title}
              width={featured.w}
              height={featured.h}
              className="h-[420px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] md:h-[620px]"
            />
          </button>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">/ 01</p>
            <h2 className="mt-4 text-3xl md:text-5xl">{featured.title}</h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {featured.category}
            </p>
            <button
              type="button"
              onClick={() => setOpen(0)}
              className="mt-6 font-mono text-sm text-foreground underline underline-offset-4 transition hover:text-primary"
            >
              Ver em tela cheia →
            </button>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
            <h2 className="text-3xl md:text-5xl">Todas as artes</h2>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {arts.length} artes
            </span>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {arts.map((a, i) => (
              <li key={a.title}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group w-full text-left"
                >
                  <div className="overflow-hidden rounded-lg border border-border bg-card">
                    <img
                      src={a.src}
                      alt={a.title}
                      width={a.w}
                      height={a.h}
                      loading="lazy"
                      className="aspect-[9/16] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[13px] text-foreground">
                      <span className="text-muted-foreground">{pad(i + 1)}</span> {a.title}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {a.category}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-14 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-border px-7 py-3.5 font-mono text-sm text-foreground transition hover:border-primary"
            >
              Contratar uma arte
            </a>
          </div>
        </section>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full border border-border bg-card p-3 text-foreground transition hover:border-primary"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Arte anterior"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-3 text-foreground transition hover:border-primary md:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima arte"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-3 text-foreground transition hover:border-primary md:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full w-full max-w-3xl flex-col items-center">
            <img
              src={current.src}
              alt={current.title}
              width={current.w}
              height={current.h}
              className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 flex w-full items-baseline justify-between gap-3 font-mono text-sm text-muted-foreground">
              <span className="text-foreground">{current.title}</span>
              <span className="uppercase tracking-widest">{current.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
