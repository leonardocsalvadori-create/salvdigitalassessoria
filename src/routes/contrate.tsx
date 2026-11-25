import { createFileRoute } from "@tanstack/react-router";
import { BEHANCE, PHONE, WHATSAPP, services } from "@/lib/site";

export const Route = createFileRoute("/contrate")({
  head: () => ({
    meta: [
      { title: "Nos contrate — Salv Digital Assessoria" },
      {
        name: "description",
        content:
          "Fale com a Salv Digital pelo WhatsApp e peça uma arte de jogo, um post ou um pacote para a sua agência.",
      },
      { property: "og:title", content: "Nos contrate — Salv Digital Assessoria" },
      {
        property: "og:description",
        content:
          "Fale com a Salv Digital pelo WhatsApp e peça uma arte de jogo, um post ou um pacote para a sua agência.",
      },
    ],
  }),
  component: Contrate,
});

const pad = (n: number) => String(n).padStart(2, "0");

function Contrate() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-8">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>✦ / 03</span>
          <span>Nos contrate</span>
          <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
          <h1 className="text-5xl md:text-7xl">
            Vamos criar <span className="text-primary">juntos?</span>
          </h1>
          <p className="text-muted-foreground md:text-right">
            Me chame no WhatsApp e conte a data do jogo ou o que a sua agência precisa. Respondo com
            prazo e valor.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.name} className="rounded-lg border border-border bg-card p-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                {pad(i + 1)}
              </span>
              <h2 className="mt-3 text-2xl">{s.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-8 py-4 font-mono text-sm font-bold text-primary-foreground transition hover:bg-accent"
          >
            Chamar no WhatsApp · {PHONE}
          </a>
          <a
            href={BEHANCE}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-muted-foreground underline underline-offset-4 transition hover:text-primary"
          >
            behance.net/salvdesign2
          </a>
        </div>
      </div>
    </main>
  );
}
