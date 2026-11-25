import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE, WHATSAPP, arts, services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salv Digital Assessoria — Design para atletas e agências" },
      {
        name: "description",
        content:
          "Matchdays, posts e artes para atletas e agências de atletas. Design com a energia do dia de jogo.",
      },
      { property: "og:title", content: "Salv Digital Assessoria" },
      {
        property: "og:description",
        content: "Matchdays, posts e artes para atletas e agências de atletas.",
      },
    ],
  }),
  component: Index,
});

const pad = (n: number) => String(n).padStart(2, "0");

function MetaBar({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
      <span>✦ / {num}</span>
      <span>{label}</span>
      <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
    </div>
  );
}

function Index() {
  const featured = arts[0];

  if (!featured) return null;

  return (
    <main className="bg-background">
      <section className="bg-glow">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-8 md:pb-20 md:pt-12">
          <MetaBar num="01" label="Design esportivo" />

          <div className="mt-12 grid items-end gap-10 md:mt-16 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl">
                Artes que fazem o atleta <span className="text-primary">ser lembrado.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Matchdays, posts e artes para atletas e agências de atletas — do primeiro rascunho
                à peça pronta para publicar no dia do jogo.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/portfolio"
                  className="rounded-full bg-primary px-6 py-3 font-mono text-sm font-bold text-primary-foreground transition hover:bg-accent"
                >
                  Ver portfólio →
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-6 py-3 font-mono text-sm text-foreground transition hover:border-primary"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={featured.src}
                alt={featured.title}
                width={featured.w}
                height={featured.h}
                className="h-[380px] w-full rounded-xl object-cover object-top md:h-[560px]"
              />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {featured.title}
              </p>
            </div>
          </div>

          <p className="mt-10 text-right font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Role para ver ↓
          </p>        </div>
      </section>

      <section aria-hidden className="mask-edges overflow-hidden border-y border-border py-5">
        <div className="flex w-max animate-marquee gap-3">
          {[...arts, ...arts].map((a, i) => (
            <img
              key={`${a.title}-${i}`}
              src={a.src}
              alt=""
              width={a.w}
              height={a.h}
              className="h-36 w-[84px] rounded-md object-cover md:h-44 md:w-24"
            />
          ))}
        </div>
      </section>

      <section className="bg-paper text-paper-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex items-center justify-between gap-4 border-b border-paper-border pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper-muted">
            <span>✦ / 02</span>
            <span>Serviços</span>
            <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl md:text-6xl">O que eu crio</h2>
            <p className="text-paper-muted">
              Da arte do jogo ao post do dia: peças pensadas para o atleta aparecer bem no feed e
              para a agência entregar tudo no prazo.
            </p>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.name} className="rounded-lg border border-paper-border bg-paper-card p-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-muted">
                  {pad(i + 1)}
                </span>
                <h3 className="mt-3 text-2xl">{s.name}</h3>
                <p className="mt-2 text-sm text-paper-muted">{s.desc}</p>
              </li>
            ))}
          </ul>

          <Link
            to="/portfolio"
            className="mt-10 inline-block font-mono text-sm text-paper-foreground underline underline-offset-4 transition hover:text-primary"
          >
            Ver portfólio →
          </Link>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <h2 className="text-4xl md:text-6xl">
            Vamos criar a próxima arte do seu atleta?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Me chame no WhatsApp e conte a data do jogo ou o que a sua agência precisa.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-block rounded-full bg-primary px-8 py-4 font-mono text-sm font-bold text-primary-foreground transition hover:bg-accent"
          >
            Chamar no WhatsApp · {PHONE}
          </a>
        </div>
      </section>
    </main>
  );
}
