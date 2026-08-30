import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Jost, Karla } from "next/font/google";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { BRAND } from "@/lib/content";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.subtitle}`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    "Palacyday Designs creates bespoke mixed-media digital art, custom watercolor portraits, specialty decor, event stationery, and logo design through a hybrid digital workflow.",
  icons: { icon: "/image.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} ${karla.variable}`}>
      <body className="antialiased">
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
