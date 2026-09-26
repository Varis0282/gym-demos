import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "IronCore Fitness Studio — Indore | Volt Demo",
  description: "Gym, personal training, yoga and ladies batch at Palasia, Indore. Book a free trial workout on WhatsApp.",
};

export default function VoltLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} ${oswald.variable} bg-[#050505] text-[#E5E5E5]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
