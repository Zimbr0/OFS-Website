import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { schoolInfo } from "@/content/schoolInfo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: schoolInfo.name,
    template: `%s · ${schoolInfo.name}`,
  },
  description: schoolInfo.motto,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={jakarta.variable}>
      <body>
        {/* Ohne JavaScript kann der Scroll-Reveal (Reveal-Komponente) nie
            auf "sichtbar" umschalten – ohne dieses Fallback bliebe der
            Inhalt dauerhaft unsichtbar. */}
        <noscript>
          <style>{".reveal { opacity: 1 !important; transform: none !important; }"}</style>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
