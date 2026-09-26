"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, FadeIn, Glass, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </FadeIn>
          <FadeIn delay={0.15} className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c) => (
              <Glass key={c.title} className="flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-fuchsia-500 text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-white">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-slate-400 hover:text-orange-300">{c.body}</a>
                  ) : (
                    <p className="text-slate-400">{c.body}</p>
                  )}
                </div>
              </Glass>
            ))}
            <Glass className="p-5">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-white">
                <Clock className="h-5 w-5 text-violet-300" /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-slate-400">
                  <span className="font-semibold text-slate-200">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </Glass>
          </FadeIn>
        </div>
      </section>
      <section className="px-4 pb-20 pt-6">
        <div className="mx-auto max-w-6xl">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
