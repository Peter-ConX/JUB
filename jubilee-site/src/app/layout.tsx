import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://royalhall-demo.vercel.app"
  ),
  title: "Royal Hall Event Centre | Luxury Events in Lekki, Lagos",
  description:
    "Demonstration website — Royal Hall Event Centre. A premier Lekki destination for weddings, corporate galas, conferences, and high-end celebrations.",
  keywords: [
    "Royal Hall Event Centre",
    "luxury event venue Lekki",
    "wedding venue Lagos",
    "corporate events Lekki Phase 1",
  ],
  openGraph: {
    title: "Royal Hall Event Centre",
    description:
      "Where extraordinary events find their signature setting — Lekki Phase 1, Lagos.",
    type: "website",
    locale: "en_NG",
    images: ["/images/venue-wedding.jpg"],
  },
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased overscroll-none">{children}</body>
    </html>
  );
}
