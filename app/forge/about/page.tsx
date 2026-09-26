"use client";

import { useLang } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { PageHero, StatsBand, CTABand } from "../_ui";
import { BadgeCheck } from "lucide-react";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <img src={img.about} alt="Coaching on the floor at IronCore" className="w-full rounded-2xl object-cover shadow-xl" />
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="border-l-4 border-[#A31621] pl-4 font-semibold text-[#1F2328]">{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-[#1F2328] md:text-3xl">{a.missionTitle}</h2>
          <p className="mt-4 text-xl leading-relaxed text-slate-600">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <BadgeCheck className="mb-3 h-8 w-8 text-[#A31621]" />
                <h3 className="font-bold text-[#1F2328]">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </>
  );
}
