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
      <PageHero title={t.sections.trainersTitle} sub={t.sections.trainersSub} />
      <section className="pb-16">
        <div className="mx-auto max-w-5xl space-y-8 px-4">
          {trainers.map((f, i) => {
            const d = pick(f, lang);
            return (
              <div key={f.id} className="grid items-center gap-8 rounded-[2rem] border-2 border-[#F2D8CE] bg-white p-7 md:grid-cols-3">
                <div className={`relative ${i % 2 ? "md:order-last" : ""}`}>
                  <div className={`absolute -inset-2 rounded-[1.7rem] bg-[#F2C9BC] ${i % 2 ? "-rotate-2" : "rotate-2"}`} aria-hidden />
                  <img src={img.trainers[f.photo]} alt={d.name} className="relative h-60 w-full rounded-[1.7rem] object-cover" />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-extrabold">{d.name}</h2>
                  <p className="font-extrabold text-[#D96C7B]">{d.spec}</p>
                  <p className="mt-1 text-sm font-bold text-[#8A6E6E]">{d.qual} · {d.exp}</p>
                  <p className="mt-4 leading-relaxed text-[#5C4F4B]">{d.bio}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-bold text-[#8A6E6E]">
                    <Clock className="h-4 w-4 text-[#7BA05B]" /> {f.slots}
                  </p>
                  <Link href={`${BASE}/contact`} className="mt-5 inline-block rounded-full bg-[#7BA05B] px-6 py-2.5 text-sm font-extrabold text-white shadow-md shadow-[#7BA05B]/30 hover:bg-[#2384BC]">
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
