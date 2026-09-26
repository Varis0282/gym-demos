import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IronCore Fitness Studio — Indore | Forge Demo",
  description: "Gym, personal training, yoga and ladies batch at Palasia, Indore. Book a free trial workout on WhatsApp.",
};

export default function ForgeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} bg-white text-slate-700`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
