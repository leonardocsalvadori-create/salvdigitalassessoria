import { createFileRoute } from "@tanstack/react-router";
import { BEHANCE, PHONE, WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/contrate")({
  head: () => ({
    meta: [
      { title: "Nos contrate — Salv Digital Assessoria" },
      { name: "description", content: "Fale com a Salv Digital pelo WhatsApp e tire seu projeto do papel." },
      { property: "og:title", content: "Nos contrate — Salv Digital Assessoria" },
      { property: "og:description", content: "Fale com a Salv Digital pelo WhatsApp e tire seu projeto do papel." },
    ],
  }),
  component: Contrate,
});

const services = ["Identidade visual", "Posts para redes sociais", "Flyers e campanhas", "Assessoria digital"];

function Contrate() {
  return (
    <main className="bg-glow">
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// nos contrate</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Vamos criar juntos?</h1>
        <p className="mt-5 text-lg text-muted-foreground">Me chame no WhatsApp e conte sobre seu projeto.</p>
        <ul className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {services.map((s) => (
            <li key={s} className="rounded-lg border border-border bg-card p-4 font-mono text-sm">
              <span className="text-primary">→</span> {s}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-md bg-primary px-8 py-4 font-mono text-sm font-bold text-primary-foreground transition hover:bg-accent">
            Chamar no WhatsApp · {PHONE}
          </a>
          <a href={BEHANCE} target="_blank" rel="noreferrer" className="font-mono text-xs text-muted-foreground underline hover:text-primary">
            behance.net/salvdesign2
          </a>
        </div>
      </section>
    </main>
  );
}
