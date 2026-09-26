"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useLang } from "@/lib/lang";
import { plans } from "@/lib/content";

export type PlanStyles = {
  grid: string;
  card: string;
  cardPopular: string;
  badge: string;
  name: string;
  price: string;
  period: string;
  feature: string;
  check: string;
  cta: string;
  ctaPopular: string;
};

export default function Plans({ styles, base }: { styles: PlanStyles; base: string }) {
  const { lang, t } = useLang();
  return (
    <div className={styles.grid}>
      {plans.map((p) => {
        const d = p[lang];
        return (
          <div key={p.en.name} className={p.popular ? styles.cardPopular : styles.card}>
            {p.popular && <span className={styles.badge}>{t.misc.perMonth}</span>}
            <p className={styles.name}>{d.name}</p>
            <p className={styles.price}>{p.price}</p>
            <p className={styles.period}>{d.period}</p>
            <ul className="mt-5 space-y-2.5">
              {d.features.map((f) => (
                <li key={f} className={styles.feature}>
                  <Check className={styles.check} /> {f}
                </li>
              ))}
            </ul>
            <Link href={`${base}/contact`} className={p.popular ? styles.ctaPopular : styles.cta}>
              {t.nav.book}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
