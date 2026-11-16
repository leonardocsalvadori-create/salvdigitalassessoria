import { createFileRoute, Link } from "@tanstack/react-router";
import { arts } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salv Digital Assessoria — Design que posiciona" },
      { name: "description", content: "Design gráfico e assessoria digital para marcas que querem se destacar." },
      { property: "og:title", content: "Salv Digital Assessoria" },
      { property: "og:description", content: "Design gráfico e assessoria digital para marcas que querem se destacar." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-glow">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 md:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// assessoria digital</p>
        <h1 className="mt-5 text-4xl font-bold leading-tight md:text-7xl">
          Design que faz sua marca <span className="text-primary">ser lembrada.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Identidade visual, posts e campanhas pensados para gerar resultado.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contrate" className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-bold text-primary-foreground transition hover:bg-accent">
            Nos contrate →
          </Link>
          <Link to="/portfolio" className="rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition hover:border-primary">
            Ver portfólio
          </Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 pb-20 md:grid-cols-4">
        {arts.map((a) => (
          <img key={a.title} src={a.src} alt={a.title} width={a.w} height={a.h} className="aspect-square w-full rounded-lg object-cover" />
        ))}
      </section>
    </main>
  );
}
