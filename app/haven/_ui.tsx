"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Sun, Menu, X, ChevronDown, Star, MapPin, Heart } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";
import type { PlanStyles } from "@/components/Plans";

export const BASE = "/haven";
const CORAL = "#D96C7B";
const SKY = "#7BA05B";

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 10" className={`h-2.5 w-28 ${className}`} fill="none" aria-hidden>
      <path d="M2 6 Q 12 1, 22 6 T 42 6 T 62 6 T 82 6 T 102 6 T 118 6" stroke={CORAL} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className = "", color = "#F2C9BC" }: { className?: string; color?: string }) {
  return (
    <div
      aria-hidden
      style={{ background: color, borderRadius: "42% 58% 61% 39% / 45% 41% 59% 55%" }}
      className={`pointer-events-none absolute opacity-60 blur-sm ${className}`}
    />
  );
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
    <header className="sticky top-0 z-40 border-b border-[#F2D8CE] bg-[#FFF7F2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D96C7B] text-white shadow-md shadow-[#D96C7B]/30">
            <Sun className="h-6 w-6" />
          </span>
          <span className="text-lg font-extrabold leading-tight">{lang === "en" ? inst.name : inst.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-5 font-bold text-[#5C4F4B] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] transition-colors hover:text-[#D96C7B]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-[#A08F79] hover:text-[#D96C7B]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#7BA05B] px-3.5 py-1 text-sm font-extrabold text-[#7BA05B] hover:bg-[#7BA05B] hover:text-white" />
          <Link
            href={`${BASE}/contact#book`}
            className="rounded-full bg-[#D96C7B] px-5 py-2.5 text-[15px] font-extrabold text-white shadow-lg shadow-[#D96C7B]/30 transition-transform hover:scale-105"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#F2D8CE] bg-[#FFF7F2] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#F2D8CE] py-3 font-bold">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <LangToggle className="rounded-full border-2 border-[#7BA05B] px-4 py-2 font-extrabold text-[#7BA05B]" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-[#D96C7B] px-5 py-2.5 text-center font-extrabold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      <Squiggle className="mx-auto mt-3" />
      {sub && <p className="mt-4 text-lg text-[#8A6E6E]">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden py-16 text-center">
      <Blob className="-left-20 -top-24 h-72 w-72" />
      <Blob className="-right-24 top-4 h-64 w-64" color="#E7EDDD" />
      <div className="relative">
        <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
        <Squiggle className="mx-auto mt-4" />
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-lg text-[#8A6E6E]">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#F4B860] text-[#F4B860]" : "fill-[#EBD6CC] text-[#EBD6CC]"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  const colors = ["#FBE9E1", "#E4EDD8", "#FBF0C8", "#FADFDC"];
  const text = ["#B24A5C", "#5C7F44", "#B08A1E", "#C0392B"];
  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.value} style={{ background: colors[i] }} className="rounded-3xl p-6 text-center">
            <p style={{ color: text[i] }} className="text-3xl font-extrabold md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm font-bold text-[#5C4F4B]">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
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
          <div key={i} className="overflow-hidden rounded-3xl border-2 border-[#F2D8CE] bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-extrabold"
            >
              {item.q}
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "rotate-180 bg-[#D96C7B] text-white" : "bg-[#FBE9E1] text-[#B24A5C]"}`}>
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            {isOpen && <p className="border-t-2 border-dashed border-[#F2D8CE] px-6 py-4 text-[#5C4F4B]">{item.a}</p>}
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
        <div className="rounded-3xl border-2 border-[#F2D8CE] bg-white p-7">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold">
            <MapPin className="h-5 w-5 text-[#D96C7B]" /> {lang === "en" ? inst.name : inst.nameHi}
          </h3>
          <p className="mb-4 text-[#5C4F4B]">{lang === "en" ? inst.address : inst.addressHi}</p>
          <div className="mb-5 space-y-1 text-sm text-[#5C4F4B]">
            {inst.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-extrabold">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#7BA05B] px-6 py-2.5 text-sm font-extrabold text-white shadow-md shadow-[#7BA05B]/30 hover:bg-[#2384BC]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border-2 border-[#F2D8CE] lg:col-span-3">
        <iframe src={inst.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Institute location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-[#D96C7B] py-16">
      <Blob className="-left-16 -top-20 h-64 w-64" color="#F58B80" />
      <Blob className="-bottom-24 right-0 h-72 w-72" color="#F58B80" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <Heart className="mx-auto mb-4 h-10 w-10 fill-white/20" />
        <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-lg text-orange-50">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-white px-8 py-3.5 font-extrabold text-[#D96C7B] shadow-xl transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-extrabold text-white hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
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
    <footer className="bg-[#43392E] pt-14 text-[#D8CCB9]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D96C7B] text-white"><Sun className="h-5 w-5" /></span>
            <span className="font-extrabold text-white">{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm opacity-80">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.quick}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#F58B80]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#F58B80]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border-2 border-[#F2D8CE] bg-white p-6 sm:p-8",
  label: "mb-1.5 block text-sm font-extrabold",
  input: "w-full rounded-2xl border-2 border-[#EBD6CC] bg-[#FFFDF7] px-4 py-2.5 outline-none transition-colors placeholder:text-[#B9A88F] focus:border-[#D96C7B]",
  select: "w-full rounded-2xl border-2 border-[#EBD6CC] bg-[#FFFDF7] px-4 py-2.5 outline-none focus:border-[#D96C7B]",
  dayBtn: "rounded-2xl border-2 border-[#EBD6CC] bg-white py-2 text-center text-[#8A6E6E] transition-colors hover:border-[#D96C7B]",
  dayBtnActive: "rounded-2xl border-2 border-[#D96C7B] bg-[#D96C7B] py-2 text-center text-white shadow-md shadow-[#D96C7B]/30",
  slotBtn: "rounded-full border-2 border-[#EBD6CC] bg-white px-4 py-2 text-sm font-extrabold text-[#8A6E6E] transition-colors hover:border-[#7BA05B]",
  slotBtnActive: "rounded-full border-2 border-[#7BA05B] bg-[#7BA05B] px-4 py-2 text-sm font-extrabold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-extrabold uppercase tracking-wider text-[#B9A88F]",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-extrabold text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-[1.02]",
  success: "rounded-2xl bg-green-50 px-4 py-3 text-sm font-extrabold text-green-700",
  error: "rounded-2xl bg-red-50 px-4 py-3 text-sm font-extrabold text-red-500",
};

export const planStyles: PlanStyles = {
  grid: "grid gap-6 md:grid-cols-3",
  card: "relative rounded-[2rem] border-2 border-[#F2D8CE] bg-white p-7",
  cardPopular: "relative rounded-[2rem] border-2 border-[#D96C7B] bg-white p-7 shadow-xl",
  badge: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D96C7B] px-4 py-0.5 text-xs font-bold text-white",
  name: "text-sm font-extrabold uppercase tracking-widest text-[#8A6E6E]",
  price: "mt-2 text-4xl font-extrabold text-[#3E3A36]",
  period: "text-sm text-[#8A6E6E]",
  feature: "flex items-center gap-2 text-sm text-[#5C4F4B]",
  check: "h-4 w-4 shrink-0 text-[#7BA05B]",
  cta: "mt-6 block rounded-full border-2 border-[#3E3A36] py-2.5 text-center text-sm font-extrabold text-[#3E3A36] transition-colors hover:bg-[#3E3A36] hover:text-white",
  ctaPopular: "mt-6 block rounded-full bg-[#D96C7B] py-2.5 text-center text-sm font-extrabold text-white shadow-md transition-colors hover:bg-[#B24A5C]",
};
