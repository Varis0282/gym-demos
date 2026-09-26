"use client";

import Plans from "@/components/Plans";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { programs } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, FadeIn, Glass, CTABand, SectionHead, planStyles } from "../_ui";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.programsTitle} sub={t.sections.programsSub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {programs.map((c, i) => {
            const d = pick(c, lang);
            return (
              <FadeIn key={c.icon} delay={(i % 2) * 0.08}>
                <Glass className="flex h-full gap-5 p-7 transition-all hover:border-orange-300/40">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-fuchsia-500 text-white shadow-lg shadow-orange-500/25">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{d.title}</h3>
                    <p className="mt-2 text-slate-400">{d.desc}</p>
                    <Link href={`${BASE}/contact`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-violet-300 hover:text-violet-200">
                      {t.nav.book} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Glass>
              </FadeIn>
            );
          })}
        </div>
      </section>
            <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.plansTitle} sub={t.sections.plansSub} />
          <Plans styles={planStyles} base={BASE} />
        </div>
      </section>
      <CTABand />
    </>
  );
}
