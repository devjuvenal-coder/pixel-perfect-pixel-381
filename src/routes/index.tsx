import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";
import car from "@/assets/car.jpg";
import polisher from "@/assets/polisher.png";

// Edite aqui os dados reais da empresa. Links vazios ficam desativados.
const CONFIG = {
  name: "ESTÉTICA 28",
  whatsapp: "", // ex: https://wa.me/5511999999999
  instagram: "", // ex: https://instagram.com/usuario
  maps: "", // ex: https://maps.app.goo.gl/...
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESTÉTICA 28 | Restauração Automotiva" },
      { name: "description", content: "Agende seu horário na Estética 28 e conheça nossos serviços de estética e restauração automotiva." },
      { property: "og:title", content: "ESTÉTICA 28 | Restauração Automotiva" },
      { property: "og:description", content: "Seu carro merece o mesmo cuidado que você tem com a sua imagem!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WhatsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8"><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 7.7 19.6L3 21z" strokeLinejoin="round"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2L9 8.5z" strokeLinejoin="round"/></svg>
);
const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor"/></svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8"><path d="M12 22s7-7.2 7-12.5A7 7 0 0 0 5 9.5C5 14.8 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
);
const PolishSeal = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" className="h-3/5 w-3/5"><path d="M18 8h10a4 4 0 0 1 4 4v3H14v-3a4 4 0 0 1 4-4z"/><rect x="20" y="16" width="6" height="8"/><path d="M10 28c0-2 2-4 4-4h18c2 0 4 2 4 4v2H10z"/><ellipse cx="23" cy="34" rx="15" ry="4"/><path d="M36 14h6M38 19h4M36 9h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
);
const ShieldSeal = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3/5 w-3/5"><path d="M24 5l15 6v11c0 10-7 17-15 21-8-4-15-11-15-21V11z"/><path d="M24 10l10 4v8c0 7-5 12-10 15" strokeWidth="1.5"/><path d="M16 24l6 6 10-11" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const CarSeal = () => (
  <svg viewBox="0 0 48 48" fill="currentColor" className="h-3/5 w-3/5"><path d="M12 22l3-7a3 3 0 0 1 3-2h12a3 3 0 0 1 3 2l3 7a3 3 0 0 1 3 3v8h-4v3h-5v-3H18v3h-5v-3H9v-8a3 3 0 0 1 3-3zm4 0h16l-2-5H18z"/><circle cx="15" cy="27" r="2" fill="var(--brand-ink)"/><circle cx="33" cy="27" r="2" fill="var(--brand-ink)"/><path d="M10 6l1 3 3 1-3 1-1 3-1-3-3-1 3-1zM38 4l.8 2.2L41 7l-2.2.8L38 10l-.8-2.2L35 7l2.2-.8zM24 3l.6 1.6 1.6.6-1.6.6L24 7.4l-.6-1.6-1.6-.6 1.6-.6z"/></svg>
);

function LinkButton({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
  const disabled = !href;
  return (
    <a
      href={disabled ? undefined : href}
      target="_blank"
      rel="noopener noreferrer"
      aria-disabled={disabled}
      title={disabled ? "Link ainda não configurado" : undefined}
      className="gold-pill relative flex h-16 w-full items-center justify-center rounded-full px-16 text-lg text-gold-light sm:h-[4.5rem] sm:text-xl"
    >
      <span className="absolute left-6 text-gold">{icon}</span>
      {children}
    </a>
  );
}

function Seal({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div aria-label={label} role="img" className="gold-seal flex h-20 w-20 items-center justify-center rounded-full text-gold md:h-24 md:w-24">
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="relative flex min-h-screen justify-center overflow-x-hidden bg-backdrop px-3 py-6 md:py-16">
      <div className="relative w-full max-w-[460px]">
        <img
          src={polisher}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          className="pointer-events-none absolute -right-56 top-24 z-10 hidden w-80 -scale-x-100 rotate-[20deg] drop-shadow-2xl md:block"
        />
        <section className="bio-card relative rounded-[2.5rem] px-6 pb-6 pt-10 sm:px-8">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-brand-ink shadow-xl ring-2 ring-gold sm:h-44 sm:w-44">
            <img src={logo} alt="Logotipo Estética 28 — Restauração Automotiva" width={1024} height={1024} className="h-full w-full scale-[1.12] object-cover" />
          </div>
          <h1 className="mt-6 text-center text-xl leading-snug text-brand-ink sm:text-2xl">
            Seu carro merece o mesmo<br />cuidado que você tem<br />com a sua imagem!
          </h1>
          <nav className="mt-7 flex flex-col gap-4">
            <LinkButton href={CONFIG.whatsapp} icon={<WhatsIcon />}>Agende seu horário</LinkButton>
            <LinkButton href={CONFIG.instagram} icon={<InstaIcon />}>Nosso Instagram</LinkButton>
            <LinkButton href={CONFIG.maps} icon={<PinIcon />}>Nossa localização</LinkButton>
          </nav>
          <img src={car} alt="Carro vermelho com acabamento impecável" loading="lazy" className="mt-6 aspect-[525/460] w-full rounded-[2rem] object-cover" />
        </section>
        <div className="mt-6 flex justify-center gap-5 md:absolute md:-right-32 md:bottom-16 md:mt-0 md:flex-col">
          <Seal label="Polimento profissional"><PolishSeal /></Seal>
          <Seal label="Proteção e confiança"><ShieldSeal /></Seal>
          <Seal label="Acabamento impecável"><CarSeal /></Seal>
        </div>
      </div>
    </main>
  );
}
