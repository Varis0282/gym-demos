"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, Chalkboard, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero kicker={t.nav.contact} title={b.title} sub={b.sub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-6 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c) => (
              <div key={c.title} className="border-b border-neutral-300 pb-5">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                  <c.icon className="h-4 w-4 text-[#1E40FF]" /> {c.title}
                </h3>
                {c.href ? (
                  <a href={c.href} className="mt-2 block font-bold underline underline-offset-4 hover:text-[#1E40FF]">{c.body}</a>
                ) : (
                  <p className="mt-2 text-neutral-700">{c.body}</p>
                )}
              </div>
            ))}
            <Chalkboard className="p-6">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#F4F4F0]/70">{t.footer.hours}</h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="border-b border-dashed border-[#F4F4F0]/30 py-2 text-sm last:border-0">
                  <span className="font-bold">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </Chalkboard>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <MapBlock />
      </section>
    </>
  );
}
