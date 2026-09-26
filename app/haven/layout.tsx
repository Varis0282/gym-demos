import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IronCore Fitness Studio — Indore | Haven Demo",
  description: "Gym, personal training, yoga and ladies batch at Palasia, Indore. Book a free trial workout on WhatsApp.",
};

export default function HavenLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${nunito.className} bg-[#FFF7F2] text-[#43392E]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
