"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { programs, trainers, whyUs, reviews, transformations } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, Num, SectionHead, StatsBand, Chalkboard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="border-b-2 border-[#111111]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#1E40FF]">{t.hero.badge}</p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.03] md:text-8xl">
            {t.hero.title}
            <br />
            <em className="text-[#1E40FF]">{t.hero.titleAccent}</em>
          </h1>
          <div className="mt-10 grid items-end gap-8 border-t border-neutral-300 pt-8 md:grid-cols-2">
            <p className="max-w-md text-lg text-neutral-600">{t.hero.sub}</p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link href={`${BASE}/contact`} className="bg-[#1E40FF] px-8 py-4 font-bold text-white transition-colors hover:bg-[#14206B]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border-2 border-[#111111] px-8 py-4 font-bold transition-colors hover:bg-[#111111] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <img src={img.hero} alt="Training floor at IronCore" className="mt-12 h-72 w-full object-cover grayscale md:h-[26rem]" />
        </div>
      </section>

      <StatsBand />

      {/* COURSES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={1} title={t.sections.programsTitle} sub={t.sections.programsSub} />
        <div className="border-t border-neutral-300">
          {programs.map((c, i) => {
            const d = pick(c, lang);
            return (
              <Link key={c.icon} href={`${BASE}/programs`} className="group grid items-center gap-3 border-b border-neutral-300 py-6 transition-colors hover:bg-neutral-50 md:grid-cols-12 md:gap-6">
                <span className="md:col-span-1"><Num n={i + 1} /></span>
                <span className="flex items-center gap-3 md:col-span-5">
                  <Icon name={c.icon} className="h-5 w-5 shrink-0 text-[#1E40FF]" />
                  <span className="font-display text-xl font-black md:text-2xl">{d.title}</span>
                </span>
                <span className="text-sm text-neutral-500 md:col-span-5">{d.desc}</span>
                <ArrowRight className="hidden h-5 w-5 justify-self-end text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-[#1E40FF] md:block" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={2} title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => {
            const d = pick(w, lang);
            return (
              <div key={w.icon}>
                <div className="flex items-baseline justify-between border-b-2 border-[#111111] pb-3">
                  <Icon name={w.icon} className="h-6 w-6 text-[#1E40FF]" />
                  <Num n={i + 1} />
                </div>
                <h3 className="mt-4 font-display text-lg font-black">{d.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TOPPERS — chalkboard */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={3} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
        <Chalkboard className="p-8 md:p-12">
          <p className="mb-8 border-b border-dashed border-[#F4F4F0]/40 pb-4 font-display text-xl italic">
            {lang === "en" ? "From this floor, to:" : "इसी फ्लोर से, यहाँ तक:"}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {transformations.slice(0, 3).map((tp) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className="flex items-center gap-4">
                  <img src={img.transformations[tp.photo]} alt={tp.name} className="h-16 w-16 rounded-full border-2 border-[#F4F4F0]/50 object-cover" />
                  <div>
                    <p className="font-display text-2xl font-black">{d.result}</p>
                    <p className="font-bold">{tp.name}</p>
                    <p className="text-xs text-[#F4F4F0]/70">{d.duration}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href={`${BASE}/transformations`} className="mt-10 inline-block border-b-2 border-dashed border-[#F4F4F0] pb-0.5 font-bold hover:text-white">
            {lang === "en" ? "See all results" : "सभी रिज़ल्ट देखें"} →
          </Link>
        </Chalkboard>
      </section>

      {/* FACULTY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={4} title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((f) => {
            const d = pick(f, lang);
            return (
              <Link key={f.id} href={`${BASE}/trainers`} className="group">
                <img src={img.trainers[f.photo]} alt={d.name} className="h-60 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                <h3 className="mt-4 font-display text-lg font-black group-hover:text-[#1E40FF]">{d.name}</h3>
                <p className="text-sm font-bold text-[#1E40FF]">{d.spec}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-neutral-400">{d.exp}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={5} title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="grid gap-px bg-neutral-300 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <figure key={r.name} className="bg-white p-7">
              <p className="font-display text-5xl leading-none text-[#1E40FF]">&ldquo;</p>
              <blockquote className="mt-2 leading-relaxed text-neutral-700">{r[lang]}</blockquote>
              <figcaption className="mt-5 border-t border-neutral-200 pt-3">
                <p className="font-bold">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-neutral-400">{r.area}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={6} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <img key={g} src={g} alt={`Campus photo ${i + 1}`} className="h-44 w-full object-cover grayscale transition-all duration-300 hover:grayscale-0 md:h-56" />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={7} title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead n={8} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </>
  );
}
