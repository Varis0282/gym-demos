"use client";

import Plans from "@/components/Plans";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { programs } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, Num, PageHero, CTABand, SectionHead, planStyles } from "../_ui";

export default function Courses() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero kicker={t.nav.programs} title={t.sections.programsTitle} sub={t.sections.programsSub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {programs.map((c, i) => {
            const d = pick(c, lang);
            return (
              <div key={c.icon}>
                <div className="flex items-baseline justify-between border-b-2 border-[#111111] pb-3">
                  <span className="flex items-center gap-3">
                    <Icon name={c.icon} className="h-6 w-6 text-[#1E40FF]" />
                    <h3 className="font-display text-2xl font-black">{d.title}</h3>
                  </span>
                  <Num n={i + 1} />
                </div>
                <p className="mt-4 text-neutral-600">{d.desc}</p>
                <Link href={`${BASE}/contact`} className="mt-4 inline-block border-b-2 border-[#1E40FF] pb-0.5 text-sm font-bold text-[#1E40FF] hover:border-[#111111] hover:text-[#111111]">
                  {t.nav.book} →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
            <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead n={2} title={t.sections.plansTitle} sub={t.sections.plansSub} />
          <Plans styles={planStyles} base={BASE} />
        </div>
      </section>
      <CTABand />
    </>
  );
}
