"use client";

import Plans from "@/components/Plans";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { programs } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, CTABand, SectionHead, planStyles } from "../_ui";

const tileColors = ["#FBE9E1", "#E4EDD8", "#FBF0C8", "#FADFDC", "#E7EDDD", "#EADFF5", "#FBE9E1", "#E4EDD8"];
const iconColors = ["#B24A5C", "#5C7F44", "#B08A1E", "#C0392B", "#7BA05B", "#7E57C2", "#B24A5C", "#5C7F44"];

export default function Courses() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.programsTitle} sub={t.sections.programsSub} />
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {programs.map((c, i) => {
            const d = pick(c, lang);
            return (
              <div key={c.icon} className="flex gap-5 rounded-3xl border-2 border-[#F2D8CE] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#D96C7B]">
                <span style={{ background: tileColors[i], color: iconColors[i] }} className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl">
                  <Icon name={c.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-[#8A6E6E]">{d.desc}</p>
                  <Link href={`${BASE}/contact`} className="mt-3 inline-block text-sm font-extrabold text-[#D96C7B] hover:underline">
                    {t.nav.book} →
                  </Link>
                </div>
              </div>
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
