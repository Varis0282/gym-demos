"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { transformations } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, StatsBand, Chalkboard, CTABand } from "../_ui";

export default function Results() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero kicker={t.nav.results} title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Chalkboard className="p-8 md:p-12">
          <p className="mb-10 border-b border-dashed border-[#F4F4F0]/40 pb-4 font-display text-2xl font-black italic">
            {lang === "en" ? "The wall of results" : "रिज़ल्ट की दीवार"}
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map((tp) => {
              const d = tp[lang];
              return (
                <div key={tp.name} className="flex items-center gap-4">
                  <img src={img.transformations[tp.photo]} alt={tp.name} className="h-20 w-20 rounded-full border-2 border-[#F4F4F0]/50 object-cover" />
                  <div>
                    <p className="font-display text-3xl font-black">{d.result}</p>
                    <p className="font-bold">{tp.name}</p>
                    <p className="text-xs text-[#F4F4F0]/70">{d.duration}</p>
                    <p className="text-xs text-[#F4F4F0]/70">{d.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Chalkboard>
        <p className="mx-auto mt-12 max-w-xl text-center text-neutral-500">
          {lang === "en"
            ? "And hundreds more quiet wins — first push-ups, lower sugar reports, pain-free knees. Ask members, not posters."
            : "और सैकड़ों छोटी जीतें — पहला पुश-अप, शुगर रिपोर्ट में सुधार, बिना दर्द घुटने। पोस्टर से नहीं, मेंबर्स से पूछिए।"}
        </p>
        <div className="mt-8 pb-10 text-center">
          <Link href={`${BASE}/contact#book`} className="bg-[#1E40FF] px-8 py-4 font-bold text-white transition-colors hover:bg-[#14206B]">
            {t.hero.cta1}
          </Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
