"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, StatsBand, CTABand, Blob, Squiggle } from "../_ui";
import { Heart } from "lucide-react";

const valueColors = ["#FBE9E1", "#E4EDD8", "#E7EDDD", "#FADFDC"];

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="relative overflow-hidden py-14">
        <Blob className="-right-24 top-10 h-72 w-72" color="#E4EDD8" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-[#E7EDDD]" aria-hidden />
            <img src={img.about} alt="Coaching on the floor at IronCore" className="relative w-full rotate-1 rounded-[2rem] object-cover shadow-xl" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[#5C4F4B]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="rounded-3xl bg-[#FBE9E1] p-5 font-bold text-[#5C4F40]">{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Heart className="mx-auto mb-4 h-10 w-10 fill-[#D96C7B]/20 text-[#D96C7B]" />
          <h2 className="text-3xl font-extrabold">{a.missionTitle}</h2>
          <Squiggle className="mx-auto mt-3" />
          <p className="mt-5 text-xl leading-relaxed text-[#5C4F4B]">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.title} style={{ background: valueColors[i] }} className="rounded-3xl p-6">
              <h3 className="font-extrabold">{v.title}</h3>
              <p className="mt-2 text-sm text-[#5C4F4B]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </>
  );
}
