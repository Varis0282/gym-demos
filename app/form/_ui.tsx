"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";
import type { PlanStyles } from "@/components/Plans";

export const BASE = "/form";
export const GREEN = "#1E40FF";

export function Num({ n }: { n: number }) {
  return <span className="font-display text-sm italic text-[#1E40FF]">{String(n).padStart(2, "0")}</span>;
}

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/programs`, label: t.nav.programs },
    { href: `${BASE}/trainers`, label: t.nav.trainers },
    { href: `${BASE}/transformations`, label: t.nav.results },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#111111] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="font-display text-xl font-black tracking-tight">
          {lang === "en" ? inst.shortName.toUpperCase() : inst.nameHi}<span className="text-[#1E40FF]">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="underline-offset-4 transition-colors hover:text-[#1E40FF] hover:underline">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-neutral-400 hover:text-[#111111]">← All demos</Link>
          <LangToggle className="border-2 border-[#111111] px-3 py-1 text-xs font-bold hover:bg-[#111111] hover:text-white" />
          <Link
            href={`${BASE}/contact#book`}
            className="bg-[#1E40FF] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#14206B]"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-[#111111] bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-neutral-200 py-3 font-medium">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <LangToggle className="border-2 border-[#111111] px-4 py-2 text-sm font-bold" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 bg-[#1E40FF] px-5 py-2.5 text-center font-bold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ n, title, sub }: { n: number; title: string; sub?: string }) {
  return (
    <div className="mb-12 border-t-2 border-[#111111] pt-6">
      <div className="flex items-baseline gap-4">
        <Num n={n} />
        <h2 className="font-display text-3xl font-black md:text-5xl">{title}</h2>
      </div>
      {sub && <p className="mt-3 max-w-2xl text-neutral-500 md:pl-11">{sub}</p>}
    </div>
  );
}

export function PageHero({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <section className="border-b-2 border-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1E40FF]">{kicker}</p>
        <h1 className="font-display text-5xl font-black leading-[1.05] md:text-7xl">{title}</h1>
        {sub && <p className="mt-6 max-w-2xl text-lg text-neutral-500">{sub}</p>}
      </div>
    </section>
  );
}

/** Signature chalkboard panel */
export function Chalkboard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#14206B] text-[#F4F4F0] shadow-[8px_8px_0_#111111] ${className}`}>
      {children}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <Chalkboard className="grid grid-cols-2 gap-8 p-8 md:grid-cols-4 md:p-12">
        {stats.map((s) => (
          <div key={s.value} className="text-center">
            <p className="font-display text-4xl font-black md:text-5xl">{s.value}</p>
            <p className="mt-2 border-t border-dashed border-[#F4F4F0]/40 pt-2 text-xs uppercase tracking-widest text-[#F4F4F0]/80">{s[lang]}</p>
          </div>
        ))}
      </Chalkboard>
    </section>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-neutral-300">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-baseline gap-4 py-5 text-left font-bold"
            >
              <Num n={i + 1} />
              <span className={isOpen ? "text-[#1E40FF]" : ""}>{item.q}</span>
            </button>
            {isOpen && <p className="pb-5 pl-11 text-neutral-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid border-2 border-[#111111] lg:grid-cols-5">
      <div className="p-8 lg:col-span-2">
        <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-black">
          <MapPin className="h-5 w-5 text-[#1E40FF]" /> {lang === "en" ? inst.name : inst.nameHi}
        </h3>
        <p className="mb-5 text-neutral-600">{lang === "en" ? inst.address : inst.addressHi}</p>
        <div className="mb-6 space-y-1.5 text-sm text-neutral-600">
          {inst.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-bold text-[#111111]">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#111111] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1E40FF]">
          {t.misc.getDirections} →
        </a>
      </div>
      <div className="border-t-2 border-[#111111] lg:col-span-3 lg:border-l-2 lg:border-t-0">
        <iframe src={inst.mapEmbed} className="h-72 w-full grayscale lg:h-full" loading="lazy" title="Institute location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <Chalkboard className="p-8 md:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4F4F0]/70">Free demo</p>
        <h2 className="mt-3 font-display text-3xl font-black md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 max-w-xl border-b border-dashed border-[#F4F4F0]/40 pb-6 text-[#F4F4F0]/80">{t.sections.ctaSub}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link href={`${BASE}/contact#book`} className="bg-[#F4F4F0] px-8 py-3.5 font-bold text-[#14206B] transition-colors hover:bg-white">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border-2 border-[#F4F4F0]/60 px-8 py-3.5 font-bold text-[#F4F4F0] hover:bg-[#F4F4F0]/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </Chalkboard>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/programs`, label: t.nav.programs },
    { href: `${BASE}/trainers`, label: t.nav.trainers },
    { href: `${BASE}/transformations`, label: t.nav.results },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <footer className="border-t-2 border-[#111111] pt-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-black">{lang === "en" ? inst.shortName.toUpperCase() : inst.nameHi}<span className="text-[#1E40FF]">.</span></p>
          <p className="mt-2 text-sm text-neutral-500">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">{t.footer.quick}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="underline-offset-4 hover:text-[#1E40FF] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="font-bold text-[#111111] underline underline-offset-4 hover:text-[#1E40FF]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-5 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 border-2 border-[#111111] p-6 sm:p-8",
  label: "mb-1.5 block text-xs font-bold uppercase tracking-[0.2em]",
  input: "w-full border-0 border-b-2 border-neutral-300 bg-transparent px-0 py-2.5 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#1E40FF]",
  select: "w-full border-0 border-b-2 border-neutral-300 bg-transparent px-0 py-2.5 outline-none focus:border-[#1E40FF]",
  dayBtn: "border-2 border-neutral-200 py-2 text-center text-neutral-500 transition-colors hover:border-[#111111]",
  dayBtnActive: "border-2 border-[#111111] bg-[#111111] py-2 text-center text-white",
  slotBtn: "border-2 border-neutral-200 px-4 py-2 text-sm font-bold text-neutral-500 transition-colors hover:border-[#1E40FF]",
  slotBtnActive: "border-2 border-[#1E40FF] bg-[#1E40FF] px-4 py-2 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-[6px_6px_0_#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#111111]",
  success: "border-2 border-[#1E40FF] bg-[#1E40FF]/5 px-4 py-3 text-sm font-bold text-[#1E40FF]",
  error: "border-2 border-red-600 bg-red-50 px-4 py-3 text-sm font-bold text-red-600",
};

export const planStyles: PlanStyles = {
  grid: "grid gap-10 md:grid-cols-3",
  card: "relative border-t-2 border-[#111111] pt-6",
  cardPopular: "relative border-t-2 border-[#1E40FF] pt-6",
  badge: "absolute right-0 top-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]",
  name: "text-xs font-bold uppercase tracking-[0.25em] text-neutral-500",
  price: "mt-3 font-display text-5xl text-[#111111]",
  period: "text-sm text-neutral-500",
  feature: "flex items-center gap-2 text-sm text-neutral-700",
  check: "h-4 w-4 shrink-0 text-[#1E40FF]",
  cta: "mt-6 inline-block border-b-2 border-[#111111] pb-0.5 text-sm font-bold text-[#111111] transition-colors hover:border-[#1E40FF] hover:text-[#1E40FF]",
  ctaPopular: "mt-6 inline-block border-b-2 border-[#1E40FF] pb-0.5 text-sm font-bold text-[#1E40FF]",
};
