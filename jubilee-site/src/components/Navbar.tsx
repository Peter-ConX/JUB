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
        className={`fixed inset-x-0 top-[2.125rem] z-50 transition-all duration-500 ${
          scrolled ? "glass py-4 shadow-lg shadow-navy/20" : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 lg:px-12">
          <Link href="#home" className="group flex flex-col leading-none">
            <span className="font-serif text-2xl font-light tracking-wide text-champagne transition-colors group-hover:text-white sm:text-3xl">
              {siteConfig.nameShort}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-[11px]">
              Event Centre
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-champagne"
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
              className="btn-luxury hidden items-center gap-2 rounded-none border border-champagne/50 bg-champagne/10 text-champagne transition-all hover:bg-champagne hover:text-navy lg:inline-flex"
            >
              <CalendarDays className="h-4 w-4" />
              Enquire
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex rounded-lg p-2 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { opacity: 1, pointerEvents: "auto" as const }
            : { opacity: 0, pointerEvents: "none" as const }
        }
        className="fixed inset-0 z-40 glass lg:hidden"
      >
        <nav className="flex h-full flex-col items-center justify-center gap-10">
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
                className="font-serif text-3xl font-light text-white transition-colors hover:text-champagne"
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
            className="btn-luxury mt-4 inline-flex items-center gap-2 rounded-none bg-champagne text-navy"
          >
            <CalendarDays className="h-4 w-4" />
            Enquire
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
