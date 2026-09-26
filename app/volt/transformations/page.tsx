"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { transformations } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, StatsBand, CTABand } from "../_ui";

export default function Results() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.results} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-px bg-[#161616] sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map((tp) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className="group bg-[#050505] p-7 transition-colors hover:bg-[#0B0B0B]">
                  <div className="flex items-start justify-between gap-4">
                    <img src={img.transformations[tp.photo]} alt={tp.name} className="h-20 w-20 object-cover grayscale transition-all group-hover:grayscale-0" />
                    <div className="text-right">
                      <p className="font-display text-3xl font-bold text-[#C8FF00]">{d.result}</p>
                      <p className="text-xs uppercase tracking-wider text-[#9CA3AF]">{d.duration}</p>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{tp.name}</h3>
                  <p className="text-sm text-[#9CA3AF]">{d.detail}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-12 max-w-xl text-sm text-[#9CA3AF]">
            {lang === "en"
              ? "And hundreds more quiet wins — first push-ups, lower sugar reports, pain-free knees. Ask members, not posters."
              : "और सैकड़ों छोटी जीतें — पहला पुश-अप, शुगर रिपोर्ट में सुधार, बिना दर्द घुटने। पोस्टर से नहीं, मेंबर्स से पूछिए।"}
          </p>
          <Link href={`${BASE}/contact`} className="mt-6 inline-block bg-[#C8FF00] px-8 py-4 font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#A8D600]">
            {t.hero.cta1}
          </Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
