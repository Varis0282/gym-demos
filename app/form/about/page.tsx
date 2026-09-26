"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, StatsBand, CTABand, Chalkboard, Num } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero kicker={t.nav.about} title={a.title} sub={a.sub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <img src={img.about} alt="Coaching on the floor at IronCore" className="w-full object-cover grayscale" />
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p><span className="float-left mr-3 font-display text-6xl font-black leading-[0.8] text-[#1E40FF]">{a.story1.charAt(0)}</span>{a.story1.slice(1)}</p>
            <p>{a.story2}</p>
            <p className="border-l-4 border-[#1E40FF] pl-5 font-medium">{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Chalkboard className="p-8 md:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4F4F0]/70">{a.missionTitle}</p>
          <p className="mt-4 font-display text-2xl font-black italic leading-relaxed md:text-4xl">&ldquo;{a.mission}&rdquo;</p>
        </Chalkboard>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.title}>
              <div className="border-b-2 border-[#111111] pb-3"><Num n={i + 1} /></div>
              <h3 className="mt-4 font-display text-lg font-black">{v.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </>
  );
}
