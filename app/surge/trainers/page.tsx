"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { trainers } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, FadeIn, Glass, CTABand } from "../_ui";
import { Clock } from "lucide-react";

export default function Faculty() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {trainers.map((f, i) => {
            const d = pick(f, lang);
            return (
              <FadeIn key={f.id} delay={(i % 2) * 0.08}>
                <Glass className="h-full overflow-hidden transition-all hover:border-orange-300/40">
                  <img src={img.trainers[f.photo]} alt={d.name} className="h-64 w-full object-cover" />
                  <div className="p-6">
                    <h2 className="text-xl font-extrabold text-white">{d.name}</h2>
                    <p className="font-semibold text-orange-300">{d.spec}</p>
                    <p className="mt-1 text-sm text-slate-500">{d.qual} · {d.exp}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{d.bio}</p>
                    <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <Clock className="h-4 w-4 text-violet-300" /> {f.slots}
                    </p>
                    <Link href={`${BASE}/contact#book`} className="mt-5 inline-block rounded-full bg-gradient-to-r from-orange-400 to-violet-400 px-6 py-2.5 text-sm font-bold text-[#0A0A12]">
                      {t.nav.book}
                    </Link>
                  </div>
                </Glass>
              </FadeIn>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
