"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { programs, trainers, whyUs, reviews, transformations } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, SectionHead, Squiggle, Blob, Stars, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";

const tileColors = ["#FBE9E1", "#E4EDD8", "#FBF0C8", "#FADFDC", "#E7EDDD", "#EADFF5", "#FBE9E1", "#E4EDD8"];
const iconColors = ["#B24A5C", "#5C7F44", "#B08A1E", "#C0392B", "#7BA05B", "#7E57C2", "#B24A5C", "#5C7F44"];

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Blob className="-left-24 -top-28 h-96 w-96" />
        <Blob className="-right-28 top-24 h-80 w-80" color="#E7EDDD" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#E4EDD8] px-4 py-1.5 text-sm font-extrabold text-[#5C7F44]">
              {t.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-[3.4rem] md:leading-[1.15]">
              {t.hero.title}
              <br />
              <span className="text-[#D96C7B]">{t.hero.titleAccent}</span>
            </h1>
            <Squiggle className="mt-4" />
            <p className="mt-5 max-w-lg text-lg text-[#8A6E6E]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#D96C7B] px-8 py-3.5 font-extrabold text-white shadow-xl shadow-[#D96C7B]/30 transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#7BA05B] px-8 py-3.5 font-extrabold text-[#7BA05B] transition-colors hover:bg-[#7BA05B] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#F2C9BC]" aria-hidden />
            <img src={img.heroAlt} alt="Happy members at IronCore" className="relative w-full -rotate-1 rounded-[2rem] object-cover shadow-xl transition-transform duration-300 hover:rotate-0" />
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-3 shadow-xl md:-left-8">
              <p className="text-2xl font-extrabold text-[#D96C7B]">200+</p>
              <p className="text-xs font-bold text-[#8A6E6E]">{lang === "en" ? "Members in ladies batch" : "लेडीज़ बैच में मेंबर्स"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* COURSES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.programsTitle} sub={t.sections.programsSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((c, i) => {
              const d = pick(c, lang);
              return (
                <div key={c.icon} className="group rounded-3xl border-2 border-[#F2D8CE] bg-white p-6 transition-all hover:-translate-y-1.5 hover:border-[#D96C7B]">
                  <span style={{ background: tileColors[i], color: iconColors[i] }} className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="text-lg font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A6E6E]">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/programs`} className="font-extrabold text-[#7BA05B] underline decoration-wavy underline-offset-4 hover:text-[#D96C7B]">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-white py-16">
        <Blob className="-right-24 -top-24 h-72 w-72" color="#FBE9E1" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-3xl bg-[#FFF7F2] p-6 text-center">
                  <span style={{ background: iconColors[i] }} className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A6E6E]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.slice(0, 3).map((tp, i) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className={`rounded-3xl border-2 border-[#F2D8CE] bg-white p-6 text-center transition-transform hover:-translate-y-1 ${i === 1 ? "md:-rotate-1" : "md:rotate-1"}`}>
                  <img src={img.transformations[tp.photo]} alt={tp.name} className="mx-auto h-24 w-24 rounded-full border-4 border-[#F2C9BC] object-cover" />
                  <p className="mt-4 inline-block rounded-full bg-[#D96C7B] px-4 py-1 text-sm font-extrabold text-white">{d.result}</p>
                  <h3 className="mt-3 text-lg font-extrabold">{tp.name}</h3>
                  <p className="text-sm font-bold text-[#7BA05B]">{d.duration}</p>
                  <p className="mt-1 text-xs text-[#8A6E6E]">{d.detail}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/transformations`} className="rounded-full bg-[#7BA05B] px-8 py-3 font-extrabold text-white shadow-lg shadow-[#7BA05B]/30 transition-transform hover:scale-105">
              {lang === "en" ? "See All Results" : "सभी रिज़ल्ट देखें"} →
            </Link>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((f) => {
              const d = pick(f, lang);
              return (
                <Link key={f.id} href={`${BASE}/trainers`} className="group text-center">
                  <div className="overflow-hidden rounded-[2rem] border-4 border-[#F2C9BC]">
                    <img src={img.trainers[f.photo]} alt={d.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 font-extrabold">{d.name}</h3>
                  <p className="text-sm font-bold text-[#D96C7B]">{d.spec}</p>
                  <p className="text-xs text-[#8A6E6E]">{d.exp}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={r.name} style={{ background: tileColors[i] }} className="rounded-3xl p-6">
                <Stars n={r.stars} />
                <p className="mt-3 leading-relaxed text-[#5C4F40]">&ldquo;{r[lang]}&rdquo;</p>
                <p className="mt-4 font-extrabold">{r.name}</p>
                <p className="text-xs font-bold text-[#8A6E6E]">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Campus photo ${i + 1}`} className={`h-44 w-full rounded-[1.7rem] border-4 border-[#FFF7F2] object-cover shadow-md transition-transform hover:scale-[1.03] md:h-56 ${i % 2 ? "md:rotate-1" : "md:-rotate-1"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
