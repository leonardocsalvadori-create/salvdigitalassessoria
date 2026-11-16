import { createFileRoute } from "@tanstack/react-router";
import { arts, BEHANCE } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Salv Digital Assessoria" },
      { name: "description", content: "Artes, identidades visuais e campanhas criadas pela Salv Digital." },
      { property: "og:title", content: "Portfólio — Salv Digital Assessoria" },
      { property: "og:description", content: "Artes, identidades visuais e campanhas criadas pela Salv Digital." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// portfólio</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Minhas artes</h1>
        </div>
        <a href={BEHANCE} target="_blank" rel="noreferrer" className="rounded-md border border-primary px-5 py-3 font-mono text-sm text-primary transition hover:bg-primary hover:text-primary-foreground">
          Ver no Behance ↗
        </a>
      </div>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {arts.map((a) => (
          <figure key={a.title} className="group mb-4 break-inside-avoid overflow-hidden rounded-lg border border-border bg-card">
            <img src={a.src} alt={a.title} width={a.w} height={a.h} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
            <figcaption className="p-3 font-mono text-xs text-muted-foreground">{a.title}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
