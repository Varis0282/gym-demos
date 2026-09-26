"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, FadeIn, Glass, StatsBand, CTABand } from "../_ui";
import { Sparkle } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <img src={img.about} alt="Coaching on the floor at IronCore" className="w-full rounded-3xl border border-white/10 object-cover shadow-2xl" />
          </FadeIn>
          <FadeIn delay={0.15} className="space-y-5 text-lg leading-relaxed text-slate-400">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="rounded-2xl border border-orange-300/20 bg-orange-400/5 p-5 font-medium text-orange-100">{a.story3}</p>
          </FadeIn>
        </div>
      </section>
      <section className="px-4 py-12">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white">{a.missionTitle}</h2>
          <p className="mt-5 bg-gradient-to-r from-orange-300 to-violet-300 bg-clip-text text-2xl font-bold leading-relaxed text-transparent">
            &ldquo;{a.mission}&rdquo;
          </p>
        </FadeIn>
      </section>
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <Glass className="h-full p-6">
                <Sparkle className="mb-3 h-7 w-7 text-violet-300" />
                <h3 className="font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{v.desc}</p>
              </Glass>
            </FadeIn>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </>
  );
}
