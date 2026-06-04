"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/outside.jpeg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/venue-tour.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-champagne/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-champagne backdrop-blur-sm"
          >
            Ultra Modern Events · Idimu, Lagos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-serif text-3xl leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Jubilee Event Center &amp;{" "}
            <span className="text-gradient-champagne italic">Entertainment Hub</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {siteConfig.tagline} for weddings, birthdays, child naming, anniversaries,
            seminars, political meetings, fellowship, conferences — and more. Rentals,
            planning, decoration, and security available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy transition-all hover:bg-white hover:shadow-xl hover:shadow-champagne/20"
            >
              <CalendarDays className="h-4 w-4" />
              Book a Tour
            </Link>
            <Link
              href="#gallery"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-champagne hover:bg-champagne/10 hover:text-champagne"
            >
              View Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-champagne/80 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
