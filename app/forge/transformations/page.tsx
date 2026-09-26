"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { transformations, stats } from "@/lib/content";
import { BASE, PageHero, StatsBand, TopperCard, CTABand } from "../_ui";

export default function Results() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map((_, i) => (
              <TopperCard key={i} i={i} />
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-xl text-center text-slate-500">
            {lang === "en"
              ? "And hundreds more quiet wins — first push-ups, lower sugar reports, pain-free knees. Ask members, not posters."
              : "और सैकड़ों छोटी जीतें — पहला पुश-अप, शुगर रिपोर्ट में सुधार, बिना दर्द घुटने। पोस्टर से नहीं, मेंबर्स से पूछिए।"}
          </p>
          <div className="mt-8 text-center">
            <Link href={`${BASE}/contact#book`} className="rounded-lg bg-[#A31621] px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105">
              {t.hero.cta1}
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
