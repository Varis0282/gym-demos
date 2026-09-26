import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer, GradientBg } from "./_ui";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IronCore Fitness Studio — Indore | Surge Demo",
  description: "Gym, personal training, yoga and ladies batch at Palasia, Indore. Book a free trial workout on WhatsApp.",
};

export default function SurgeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${manrope.className} relative min-h-screen bg-[#0A0A12] text-slate-200`}>
        <GradientBg />
        <div className="relative z-10">
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </div>
    </LangProvider>
  );
}
