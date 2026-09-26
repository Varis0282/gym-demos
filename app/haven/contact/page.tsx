"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

const cardColors = ["#FBE9E1", "#E4EDD8", "#E7EDDD"];

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </div>
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c, i) => (
              <div key={c.title} style={{ background: cardColors[i] }} className="flex gap-4 rounded-3xl p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/70">
                  <c.icon className="h-5 w-5 text-[#5C4F40]" />
                </span>
                <div>
                  <h3 className="font-extrabold">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-[#5C4F40] hover:underline">{c.body}</a>
                  ) : (
                    <p className="text-[#5C4F40]">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-3xl border-2 border-[#F2D8CE] bg-white p-5">
              <h3 className="mb-2 flex items-center gap-2 font-extrabold">
                <Clock className="h-5 w-5 text-[#7BA05B]" /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#5C4F4B]">
                  <span className="font-extrabold">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-3xl bg-[#FADFDC] p-5">
              <Megaphone className="h-6 w-6 shrink-0 text-[#C0392B]" />
              <p className="text-sm font-extrabold">
                {t.misc.emergency}: <a href={`tel:${inst.phoneRaw}`} className="text-[#C0392B] underline">{inst.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
