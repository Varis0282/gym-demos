"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { trainers } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, Num, PageHero, CTABand } from "../_ui";

export default function Faculty() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero kicker={t.nav.trainers} title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-16">
          {trainers.map((f, i) => {
            const d = pick(f, lang);
            return (
              <div key={f.id} className="grid items-start gap-8 border-t border-neutral-300 pt-10 md:grid-cols-12">
                <span className="md:col-span-1"><Num n={i + 1} /></span>
                <img src={img.trainers[f.photo]} alt={d.name} className={`h-72 w-full object-cover grayscale md:col-span-4 ${i % 2 ? "md:order-last" : ""}`} />
                <div className="md:col-span-7">
                  <h2 className="font-display text-3xl font-black">{d.name}</h2>
                  <p className="mt-1 font-bold text-[#1E40FF]">{d.spec}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-400">{d.qual} · {d.exp}</p>
                  <p className="mt-5 max-w-xl leading-relaxed text-neutral-600">{d.bio}</p>
                  <p className="mt-4 text-sm font-bold">{f.slots}</p>
                  <Link href={`${BASE}/contact`} className="mt-6 inline-block bg-[#111111] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1E40FF]">
                    {t.nav.book}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
