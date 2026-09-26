"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { transformations } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, FadeIn, Glass, StatsBand, CTABand } from "../_ui";

export default function Results() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.map((tp, i) => {
            const d = tp[lang];
            return (
              <FadeIn key={tp.name} delay={(i % 3) * 0.08}>
                <Glass className="group h-full p-6 text-center transition-all hover:border-violet-300/40">
                  <img src={img.transformations[tp.photo]} alt={tp.name} className="mx-auto h-24 w-24 rounded-3xl object-cover shadow-xl" />
                  <p className="mt-4 inline-block rounded-full bg-gradient-to-r from-orange-400/20 to-violet-400/20 px-4 py-1 text-sm font-extrabold text-violet-300">
                    {d.result}
                  </p>
                  <h3 className="mt-3 font-bold text-white">{tp.name}</h3>
                  <p className="text-sm text-orange-300">{d.duration}</p>
                  <p className="mt-1 text-xs text-slate-500">{d.detail}</p>
                </Glass>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn className="mx-auto mt-12 max-w-xl text-center text-slate-500">
          {lang === "en"
            ? "And hundreds more quiet wins — first push-ups, lower sugar reports, pain-free knees. Ask members, not posters."
            : "और सैकड़ों छोटी जीतें — पहला पुश-अप, शुगर रिपोर्ट में सुधार, बिना दर्द घुटने। पोस्टर से नहीं, मेंबर्स से पूछिए।"}
        </FadeIn>
      </section>
      <CTABand />
    </>
  );
}
