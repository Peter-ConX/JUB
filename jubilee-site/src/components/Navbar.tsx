"use client";

import { motion } from "framer-motion";
import { CalendarDays, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import { useScrolled } from "@/lib/motion";

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3 shadow-lg shadow-navy/20" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="#home" className="group flex flex-col leading-tight">
            <span className="font-serif text-xl tracking-wide text-champagne transition-colors group-hover:text-white sm:text-2xl">
              {siteConfig.nameShort}
            </span>
            <span className="max-w-[11rem] text-[9px] font-medium uppercase leading-snug tracking-[0.18em] text-white/70 sm:max-w-none sm:text-[10px] sm:tracking-[0.22em]">
              Event Center &amp; Entertainment Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-champagne"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-champagne/50 bg-champagne/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-champagne transition-all hover:border-champagne hover:bg-champagne hover:text-navy sm:inline-flex"
            >
              <CalendarDays className="h-4 w-4" />
              Book a Tour
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex rounded-lg p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        className="fixed inset-0 z-40 glass md:hidden"
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {siteConfig.nav.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl text-white transition-colors hover:text-champagne"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-3 text-sm font-semibold uppercase tracking-wider text-navy"
          >
            <CalendarDays className="h-4 w-4" />
            Book a Tour
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
