import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym Website Demos — 5 Styles",
  description:
    "One institute, five completely different websites. Free demo-class booking on WhatsApp, Hindi/English, toppers showcase, courses, reviews and map — pick the design you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
