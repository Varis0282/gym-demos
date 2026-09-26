"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </div>
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1F2328] text-[#A31621]">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-[#1F2328]">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-slate-600 hover:text-[#A31621]">{c.body}</a>
                  ) : (
                    <p className="text-slate-600">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-[#1F2328]">
                <Clock className="h-5 w-5 text-[#A31621]" /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-red-50 p-5">
              <Megaphone className="h-6 w-6 shrink-0 text-[#A31621]" />
              <p className="text-sm font-semibold text-[#1F2328]">
                {t.misc.emergency}: <a href={`tel:${inst.phoneRaw}`} className="underline decoration-[#A31621] decoration-2 underline-offset-2">{inst.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
