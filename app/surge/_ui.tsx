"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Phone, Rocket, Menu, X, ChevronDown, Star, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";
import type { PlanStyles } from "@/components/Plans";

export const BASE = "/surge";

export function GradientBg() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-orange-500/15 blur-[120px]" />
      <div className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-400/10 blur-[130px]" />
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/^[0-9,.]+/, "");
  useEffect(() => {
    if (!inView || !ref.current || isNaN(num)) return;
    const controls = animate(0, num, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = (num >= 100 ? Math.round(v).toLocaleString("en-IN") : v.toFixed(1)) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, num, suffix]);
  return (
    <div className="text-center">
      <p ref={ref} className="bg-gradient-to-r from-orange-300 to-violet-300 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 md:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.value} value={s.value} label={s[lang]} />
        ))}
      </div>
    </section>
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
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 shadow-2xl backdrop-blur-xl">
        <Link href={BASE} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-fuchsia-500 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-extrabold text-white">{lang === "en" ? inst.shortName : "दिशा"}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-300 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-orange-300">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/" className="text-xs text-slate-400 hover:text-white">← All demos</Link>
          <LangToggle className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-200 hover:bg-white/10" />
          <Link
            href={`${BASE}/contact`}
            className="rounded-full bg-gradient-to-r from-orange-400 to-violet-400 px-5 py-2 text-sm font-bold text-[#0A0A12] shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-400/50"
          >
            {t.nav.book}
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#151022]/95 p-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 font-medium text-slate-200">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LangToggle className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-gradient-to-r from-orange-400 to-violet-400 px-5 py-2.5 text-center font-bold text-[#0A0A12]">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-slate-400">{sub}</p>}
    </FadeIn>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="px-4 pb-10 pt-20 text-center">
      <FadeIn>
        <h1 className="bg-gradient-to-r from-orange-300 via-white to-violet-300 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          {title}
        </h1>
        {sub && <p className="mx-auto mt-5 max-w-xl text-slate-400">{sub}</p>}
      </FadeIn>
    </section>
  );
}

export function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-violet-300 text-violet-300" : "fill-slate-700 text-slate-700"}`} />
      ))}
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
          <Glass key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
            >
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-orange-300 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-white/5 px-5 py-4 text-slate-400">{item.a}</p>}
          </Glass>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Glass className="p-6 lg:col-span-2">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
          <MapPin className="h-5 w-5 text-orange-300" /> {lang === "en" ? inst.name : inst.nameHi}
        </h3>
        <p className="mb-4 text-slate-400">{lang === "en" ? inst.address : inst.addressHi}</p>
        <div className="mb-5 space-y-1 text-sm text-slate-400">
          {inst.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-semibold text-slate-200">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-orange-400 to-violet-400 px-5 py-2.5 text-sm font-bold text-[#0A0A12]">
          {t.misc.getDirections} →
        </a>
      </Glass>
      <div className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-3">
        <iframe src={inst.mapEmbed} className="h-72 w-full brightness-[0.85] contrast-[1.05] lg:h-full" loading="lazy" title="Institute location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="px-4 py-20">
      <FadeIn className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/15 via-fuchsia-600/15 to-violet-400/10 px-6 py-14 text-center backdrop-blur-md">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">{t.sections.ctaTitle}</h2>
          <p className="mt-3 text-slate-300">{t.sections.ctaSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`${BASE}/contact`} className="rounded-full bg-gradient-to-r from-orange-400 to-violet-400 px-8 py-3.5 font-bold text-[#0A0A12] shadow-xl shadow-orange-500/30 transition-transform hover:scale-105">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </div>
      </FadeIn>
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
    <footer className="border-t border-white/10 pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-fuchsia-500 text-white"><Rocket className="h-5 w-5" /></span>
            <span className="font-extrabold text-white">{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm text-slate-500">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-orange-300">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-orange-300">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md sm:p-8",
  label: "mb-1.5 block text-sm font-semibold text-slate-200",
  input: "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-orange-300/60 focus:ring-2 focus:ring-orange-400/20",
  select: "w-full rounded-xl border border-white/10 bg-[#151022] px-4 py-2.5 text-white outline-none focus:border-orange-300/60",
  dayBtn: "rounded-xl border border-white/10 bg-white/[0.04] py-2 text-center text-slate-300 transition-colors hover:border-orange-300/50",
  dayBtnActive: "rounded-xl border border-orange-300 bg-orange-400/15 py-2 text-center text-orange-200 shadow-lg shadow-orange-500/20",
  slotBtn: "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:border-orange-300/50",
  slotBtnActive: "rounded-full border border-violet-300 bg-violet-400/15 px-4 py-2 text-sm font-semibold text-violet-200",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-500",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-xl shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-xl border border-violet-300/30 bg-violet-400/10 px-4 py-3 text-sm font-semibold text-violet-200",
  error: "rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300",
};

export const planStyles: PlanStyles = {
  grid: "grid gap-6 md:grid-cols-3",
  card: "relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur",
  cardPopular: "relative rounded-3xl border border-orange-300/50 bg-gradient-to-b from-orange-400/15 to-violet-500/10 p-7 shadow-2xl shadow-orange-500/20 backdrop-blur",
  badge: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-400 to-violet-400 px-4 py-0.5 text-xs font-bold text-black",
  name: "text-sm font-bold uppercase tracking-widest text-slate-400",
  price: "mt-2 text-4xl font-extrabold text-white",
  period: "text-sm text-slate-500",
  feature: "flex items-center gap-2 text-sm text-slate-300",
  check: "h-4 w-4 shrink-0 text-orange-300",
  cta: "mt-6 block rounded-full border border-white/25 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-white/10",
  ctaPopular: "mt-6 block rounded-full bg-gradient-to-r from-orange-400 to-violet-400 py-2.5 text-center text-sm font-bold text-black shadow-lg transition-transform hover:scale-[1.02]",
};
