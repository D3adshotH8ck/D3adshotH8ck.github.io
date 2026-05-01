import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import ParticlesBackground from "@/components/effects/ParticlesBackground";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "D3ADSHOT — Ethical Hacker & Bug Bounty Hunter",
  description:
    "Bug bounty hunter and offensive security researcher based in South Africa. Finding what shouldn't be there — on Bugcrowd, HackerOne, Intigriti, and YesWeHack.",
  keywords: ["bug bounty", "ethical hacking", "penetration testing", "OSCP", "cybersecurity"],
  authors: [{ name: "D3ADSHOT" }],
  openGraph: {
    title: "D3ADSHOT — Ethical Hacker & Bug Bounty Hunter",
    description: "Bug bounty hunter and offensive security researcher. I find what shouldn't be there.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#04060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased relative">
        <ParticlesBackground />
        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
