import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { site } from "@/data/site";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });
const body = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"], display: "swap" });
const editorial = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: "400", style: "italic", display: "swap" });
const mono = IBM_Plex_Mono({ variable: "--font-ibm-plex-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

// Apply the saved preference before the first paint; storage may be unavailable.
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem('sait.theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}`;

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} · ${site.name}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${display.variable} ${body.variable} ${editorial.variable} ${mono.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
