"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { programs } from "@/lib/content";
import Icon from "@/components/Icon";
import Plans from "@/components/Plans";
import { BASE, PageHero, CTABand, SectionHead, planStyles } from "../_ui";

export default function Programs() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.programsTitle} sub={t.sections.programsSub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          {programs.map((c) => {
            const d = pick(c, lang);
            return (
              <div key={c.icon} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1F2328] text-[#A31621]">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-[#1F2328]">{d.title}</h3>
                  <p className="mt-2 text-slate-500">{d.desc}</p>
                  <Link href={`${BASE}/contact`} className="mt-3 inline-block text-sm font-bold text-[#A31621] hover:underline">
                    {t.nav.book} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-[#F6F7F8] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.plansTitle} sub={t.sections.plansSub} />
          <Plans styles={planStyles} base={BASE} />
        </div>
      </section>
      <CTABand />
    </>
  );
}
