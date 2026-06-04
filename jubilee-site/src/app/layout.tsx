import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jubileeeventcentre.com"
  ),
  title:
    "Jubilee Event Center & Entertainment Hub | Weddings & Events in Idimu, Lagos",
  description:
    "Ultra modern event center in Idimu, Lagos for weddings, birthdays, seminars, conferences, and more. Rentals, planning, decoration, and security available.",
  keywords: [
    "Jubilee Event Center",
    "event center Idimu Lagos",
    "wedding venue Idimu",
    "party chair rental Lagos",
    "entertainment hub Lagos",
  ],
  openGraph: {
    title: "Jubilee Event Center & Entertainment Hub",
    description:
      "Ultra modern events place for weddings, birthdays, conferences, fellowship meetings, and more in Idimu, Lagos.",
    type: "website",
    locale: "en_NG",
    images: ["/images/outside.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
