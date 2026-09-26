"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { trainers } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, CTABand } from "../_ui";
import { Clock } from "lucide-react";

export default function Faculty() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.trainers} title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-px bg-[#161616] md:grid-cols-2">
            {trainers.map((f) => {
              const d = pick(f, lang);
              return (
                <div key={f.id} className="group grid bg-[#050505] sm:grid-cols-5">
                  <img src={img.trainers[f.photo]} alt={d.name} className="h-full min-h-56 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:col-span-2" />
                  <div className="p-6 sm:col-span-3">
                    <h2 className="font-display text-xl font-bold text-white">{d.name}</h2>
                    <p className="text-sm font-semibold text-[#C8FF00]">{d.spec}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-[#9CA3AF]">{d.qual} · {d.exp}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">{d.bio}</p>
                    <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-wider text-[#9CA3AF]">
                      <Clock className="h-4 w-4 text-[#C8FF00]" /> {f.slots}
                    </p>
                    <Link href={`${BASE}/contact`} className="mt-5 inline-block border border-[#C8FF00] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#C8FF00] transition-colors hover:bg-[#C8FF00] hover:text-black">
                      {t.nav.book}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
