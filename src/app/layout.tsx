import type { Metadata } from "next";
import {
  DM_Sans,
  Inter,
  Manrope,
  Montserrat,
  Poppins,
  Racing_Sans_One,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ScrollManager } from "@/components/common/ScrollManager";
import { homeMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const racing = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-racing",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${dmSans.variable} ${montserrat.variable} ${poppins.variable} ${racing.variable} ${manrope.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        <ScrollManager />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
