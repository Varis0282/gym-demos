"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { programs, trainers, whyUs, reviews, transformations } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, FadeIn, SectionHead, StatsBand, Glass, Stars, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="px-4 pb-16 pt-20 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-1.5 text-sm font-semibold text-orange-200"
          >
            <span className="h-2 w-2 animate-pulseSoft rounded-full bg-violet-300" /> {t.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl"
          >
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-orange-300 to-violet-300 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            {t.hero.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <Link href={`${BASE}/contact#book`} className="rounded-full bg-gradient-to-r from-orange-400 to-violet-400 px-8 py-3.5 font-bold text-[#0A0A12] shadow-xl shadow-orange-500/30 transition-transform hover:scale-105">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="relative mt-14"
          >
            <img src={img.heroAlt} alt="Members training at IronCore" className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 object-cover shadow-2xl" />
            <Glass className="absolute -left-2 top-6 hidden px-5 py-3 md:block">
              <p className="text-2xl font-extrabold text-violet-300">400+</p>
              <p className="text-xs text-slate-400">{lang === "en" ? "Transformations" : "ट्रांसफॉर्मेशन"}</p>
            </Glass>
            <Glass className="absolute -right-2 bottom-6 hidden px-5 py-3 md:block">
              <p className="text-2xl font-extrabold text-orange-300">30</p>
              <p className="text-xs text-slate-400">{lang === "en" ? "Max batch size" : "अधिकतम बैच"}</p>
            </Glass>
          </motion.div>
        </div>
      </section>

      <StatsBand />

      {/* COURSES */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.programs} title={t.sections.programsTitle} sub={t.sections.programsSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((c, i) => {
              const d = pick(c, lang);
              return (
                <FadeIn key={c.icon} delay={i * 0.06}>
                  <Glass className="group h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300/40">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400/20 to-violet-400/20 text-orange-300 transition-colors group-hover:text-violet-300">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="font-bold text-white">{d.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{d.desc}</p>
                  </Glass>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href={`${BASE}/programs`} className="inline-flex items-center gap-2 font-bold text-orange-300 hover:text-violet-300">
              {t.misc.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <FadeIn key={w.icon} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent p-[1px]">
                    <div className="h-full rounded-2xl bg-[#151022]/80 p-6 text-center">
                      <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-fuchsia-500 text-white shadow-lg shadow-orange-500/25">
                        <Icon name={w.icon} className="h-7 w-7" />
                      </span>
                      <h3 className="font-bold text-white">{d.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{d.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.results} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.slice(0, 3).map((tp, i) => {
              const d = tp[lang];
              return (
                <FadeIn key={tp.name} delay={i * 0.08}>
                  <Glass className="flex items-center gap-4 p-5 transition-all hover:border-violet-300/40">
                    <img src={img.transformations[tp.photo]} alt={tp.name} className="h-16 w-16 rounded-2xl object-cover" />
                    <div className="min-w-0">
                      <p className="truncate font-bold text-white">{tp.name}</p>
                      <p className="text-sm text-slate-400">{d.duration}</p>
                      <p className="mt-0.5 inline-block rounded-full bg-violet-400/15 px-2.5 py-0.5 text-xs font-bold text-violet-300">{d.result}</p>
                    </div>
                  </Glass>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href={`${BASE}/transformations`} className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/10 px-6 py-2.5 font-bold text-violet-300 transition-colors hover:bg-violet-400/20">
              {lang === "en" ? "See All Results" : "सभी रिज़ल्ट देखें"} <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FACULTY */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.trainers} title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((f, i) => {
              const d = pick(f, lang);
              return (
                <FadeIn key={f.id} delay={i * 0.07}>
                  <Link href={`${BASE}/trainers`}>
                    <Glass className="group overflow-hidden transition-all hover:border-orange-300/40">
                      <img src={img.trainers[f.photo]} alt={d.name} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="p-4">
                        <h3 className="font-bold text-white">{d.name}</h3>
                        <p className="text-sm text-orange-300">{d.spec}</p>
                        <p className="mt-1 text-xs text-slate-500">{d.exp}</p>
                      </div>
                    </Glass>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE */}
      <section className="overflow-hidden py-16">
        <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="group relative">
          <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <Glass key={i} className="w-80 shrink-0 p-5">
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-slate-300">&ldquo;{r[lang]}&rdquo;</p>
                <p className="mt-3 font-bold text-white">{r.name}</p>
                <p className="text-xs text-slate-500">{r.area}</p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <FadeIn key={g} delay={i * 0.05}>
                <img src={g} alt={`Campus photo ${i + 1}`} className="h-44 w-full rounded-2xl border border-white/10 object-cover transition-all duration-300 hover:scale-[1.03] hover:border-orange-300/40 md:h-56" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
