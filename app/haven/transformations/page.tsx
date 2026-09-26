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
      <PageHero title={t.sections.resultsTitle} sub={t.sections.resultsSub} />
      <StatsBand />
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.map((tp, i) => {
            const d = tp[lang];
            return (
              <div key={tp.name} className={`rounded-3xl border-2 border-[#F2D8CE] bg-white p-6 text-center transition-transform hover:-translate-y-1 ${i % 2 ? "md:rotate-1" : "md:-rotate-1"}`}>
                <img src={img.transformations[tp.photo]} alt={tp.name} className="mx-auto h-24 w-24 rounded-full border-4 border-[#F2C9BC] object-cover" />
                <p className="mt-4 inline-block rounded-full bg-[#D96C7B] px-4 py-1 text-sm font-extrabold text-white">{d.result}</p>
                <h3 className="mt-3 text-lg font-extrabold">{tp.name}</h3>
                <p className="text-sm font-bold text-[#7BA05B]">{d.duration}</p>
                <p className="mt-1 text-xs text-[#8A6E6E]">{d.detail}</p>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-12 max-w-xl px-4 text-center text-[#8A6E6E]">
          {lang === "en"
            ? "And hundreds more quiet wins — first push-ups, lower sugar reports, pain-free knees. Ask members, not posters."
            : "और सैकड़ों छोटी जीतें — पहला पुश-अप, शुगर रिपोर्ट में सुधार, बिना दर्द घुटने। पोस्टर से नहीं, मेंबर्स से पूछिए।"}
        </p>
        <div className="mt-8 text-center">
          <Link href={`${BASE}/contact`} className="rounded-full bg-[#D96C7B] px-8 py-3.5 font-extrabold text-white shadow-xl shadow-[#D96C7B]/30 transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
