"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Clock, Dumbbell, Menu, X, ChevronDown, Star, MapPin, BadgeCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { faqs, transformations, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";
import type { PlanStyles } from "@/components/Plans";

export const BASE = "/forge";
const INK = "text-[#1F2328]";

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
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* top bar */}
      <div className="bg-[#1F2328] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:text-[13px]">
          <div className="flex items-center gap-4">
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5 text-[#A31621]" /> {inst.phone}
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#A31621]" /> {t.hero.open}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="opacity-80 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full bg-white/15 px-3 py-0.5 font-semibold hover:bg-white/25" />
          </div>
        </div>
      </div>
      {/* main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F2328] text-[#A31621]">
            <Dumbbell className="h-6 w-6" />
          </span>
          <span className={`text-lg font-extrabold leading-tight ${INK}`}>
            {lang === "en" ? inst.name : inst.nameHi}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#1F2328]">
              {l.label}
            </Link>
          ))}
          <Link
            href={`${BASE}/contact`}
            className="rounded-lg bg-[#A31621] px-5 py-2.5 text-white shadow-md shadow-red-900/25 transition-all hover:bg-[#7E1119]"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="mt-3 block rounded-lg bg-[#A31621] px-5 py-3 text-center font-semibold text-white">
            {t.nav.book}
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#A31621]">{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? "text-white" : INK}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-slate-300" : "text-slate-500"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-gradient-to-br from-[#1F2328] to-[#14171A] py-16 text-center text-white">
      <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#A31621]" />
      {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-slate-300">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="bg-[#1F2328] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value}>
            <p className="text-4xl font-extrabold text-[#A31621]">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-300">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TopperCard({ i }: { i: number }) {
  const { lang } = useLang();
  const tp = transformations[i];
  const d = tp[lang];
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative pt-8">
        <img src={img.transformations[tp.photo]} alt={tp.name} className="mx-auto h-24 w-24 rounded-full border-4 border-[#A31621]/30 object-cover" />
        <span className="absolute left-1/2 top-[104px] -translate-x-1/2 rounded-full bg-[#A31621] px-3 py-0.5 text-xs font-bold text-white shadow">
          {d.result}
        </span>
      </div>
      <div className="px-4 pb-6 pt-5">
        <h3 className="font-extrabold text-[#1F2328]">{tp.name}</h3>
        <p className="text-sm font-semibold text-slate-600">{d.duration}</p>
        <p className="mt-1 text-xs text-slate-500">{d.detail}</p>
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800"
            >
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#A31621] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-slate-100 px-5 py-4 text-slate-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className={`mb-4 flex items-center gap-2 text-lg font-bold ${INK}`}>
            <MapPin className="h-5 w-5 text-[#A31621]" /> {lang === "en" ? inst.name : inst.nameHi}
          </h3>
          <p className="mb-4 text-slate-600">{lang === "en" ? inst.address : inst.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-slate-600">
            {inst.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-[#1F2328] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#14171A]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-3">
        <iframe src={inst.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Gym location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-gradient-to-r from-[#1F2328] to-[#14171A] py-16">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-slate-300">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-lg bg-[#A31621] px-8 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function TrustPoint({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
      <BadgeCheck className="h-4 w-4 text-[#A31621]" /> {text}
    </span>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/programs`, label: t.nav.programs },
    { href: `${BASE}/trainers`, label: t.nav.trainers },
    { href: `${BASE}/transformations`, label: t.nav.results },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <footer className="bg-[#14171A] pt-14 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#A31621] text-white"><Dumbbell className="h-5 w-5" /></span>
            <span className="font-extrabold text-white">{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm text-slate-400">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#A31621]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#A31621]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {inst.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-slate-200">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#1F2328]",
  input: "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#A31621] focus:ring-2 focus:ring-red-200",
  select: "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 outline-none focus:border-[#A31621] focus:ring-2 focus:ring-red-200",
  dayBtn: "rounded-lg border border-slate-200 bg-white py-2 text-center text-slate-600 transition-colors hover:border-[#A31621]",
  dayBtnActive: "rounded-lg border border-[#A31621] bg-[#A31621] py-2 text-center text-white shadow-md shadow-red-900/25",
  slotBtn: "rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-[#A31621]",
  slotBtnActive: "rounded-lg border border-[#1F2328] bg-[#1F2328] px-4 py-2 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700",
  error: "rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600",
};

export const planStyles: PlanStyles = {
  grid: "grid gap-6 md:grid-cols-3",
  card: "relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm",
  cardPopular: "relative rounded-2xl border-2 border-[#A31621] bg-white p-7 shadow-xl",
  badge: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#A31621] px-4 py-0.5 text-xs font-bold text-white",
  name: "text-sm font-bold uppercase tracking-widest text-slate-500",
  price: "mt-2 text-4xl font-extrabold text-[#1F2328]",
  period: "text-sm text-slate-400",
  feature: "flex items-center gap-2 text-sm text-slate-600",
  check: "h-4 w-4 shrink-0 text-[#A31621]",
  cta: "mt-6 block rounded-lg border-2 border-[#1F2328] py-2.5 text-center text-sm font-bold text-[#1F2328] transition-colors hover:bg-[#1F2328] hover:text-white",
  ctaPopular: "mt-6 block rounded-lg bg-[#A31621] py-2.5 text-center text-sm font-bold text-white shadow-md transition-colors hover:bg-[#7E1119]",
};
