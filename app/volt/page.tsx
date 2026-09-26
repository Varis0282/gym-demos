"use client";

import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { programs, trainers, whyUs, reviews, transformations } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, Eyebrow, SectionHead, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[#161616]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>{t.hero.badge}</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              {t.hero.title}
              <br />
              <span className="text-[#C8FF00]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#9CA3AF]">{t.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="bg-[#C8FF00] px-8 py-4 font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#A8D600]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border border-[#262626] px-8 py-4 font-bold uppercase tracking-wider text-[#E5E5E5] transition-colors hover:border-[#C8FF00] hover:text-[#C8FF00]">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Training floor at IronCore" className="w-full object-cover grayscale-[0.4] contrast-[1.05]" />
            <div className="absolute -bottom-6 -left-2 border border-[#161616] bg-[#050505] px-6 py-4 md:-left-8">
              <p className="font-display text-3xl font-bold text-[#C8FF00]">400+</p>
              <p className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">{lang === "en" ? "Transformations since 2016" : "2016 से ट्रांसफॉर्मेशन"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* COURSES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.programs} title={t.sections.programsTitle} sub={t.sections.programsSub} />
          <div className="grid border-l border-t border-[#161616] sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((c) => {
              const d = pick(c, lang);
              return (
                <div key={c.icon} className="group border-b border-r border-[#161616] p-6 transition-colors hover:bg-[#0B0B0B]">
                  <Icon name={c.icon} className="mb-4 h-7 w-7 text-[#C8FF00]" />
                  <h3 className="font-display font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#9CA3AF]">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link href={`${BASE}/programs`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C8FF00] hover:text-white">
              {t.misc.viewAll} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-t border-[#161616] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-px bg-[#161616] sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="bg-[#050505] p-7">
                  <p className="font-display text-sm font-bold text-[#C8FF00]">{String(i + 1).padStart(2, "0")}</p>
                  <Icon name={w.icon} className="mt-4 h-7 w-7 text-[#E5E5E5]" />
                  <h3 className="mt-4 font-display font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#9CA3AF]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section className="border-t border-[#161616] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.results} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
          <div className="grid gap-px bg-[#161616] md:grid-cols-3">
            {transformations.slice(0, 3).map((tp) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className="group bg-[#050505] p-7 transition-colors hover:bg-[#0B0B0B]">
                  <div className="flex items-center justify-between">
                    <img src={img.transformations[tp.photo]} alt={tp.name} className="h-16 w-16 object-cover grayscale transition-all group-hover:grayscale-0" />
                    <p className="font-display text-2xl font-bold text-[#C8FF00]">{d.result}</p>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-white">{tp.name}</h3>
                  <p className="text-sm text-[#9CA3AF]">{d.duration} · {d.detail}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link href={`${BASE}/transformations`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C8FF00] hover:text-white">
              {lang === "en" ? "See All Results" : "सभी रिज़ल्ट देखें"} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="border-t border-[#161616] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.trainers} title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
          <div className="grid gap-px bg-[#161616] sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((f) => {
              const d = pick(f, lang);
              return (
                <Link key={f.id} href={`${BASE}/trainers`} className="group bg-[#050505] transition-colors hover:bg-[#0B0B0B]">
                  <img src={img.trainers[f.photo]} alt={d.name} className="h-56 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                  <div className="p-5">
                    <h3 className="font-display font-bold text-white">{d.name}</h3>
                    <p className="text-sm text-[#C8FF00]">{d.spec}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-[#9CA3AF]">{d.exp}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-[#161616] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.8 / 5" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-px bg-[#161616] md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <figure key={r.name} className="bg-[#050505] p-7">
                <p className="font-display text-4xl leading-none text-[#C8FF00]">&ldquo;</p>
                <blockquote className="mt-2 text-sm leading-relaxed text-[#E5E5E5]">{r[lang]}</blockquote>
                <figcaption className="mt-5">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-xs uppercase tracking-wider text-[#9CA3AF]">{r.area}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-[#161616] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px bg-[#161616] md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Campus photo ${i + 1}`} className="h-44 w-full object-cover grayscale-[0.5] transition-all duration-300 hover:grayscale-0 md:h-60" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#161616] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-[#161616] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
