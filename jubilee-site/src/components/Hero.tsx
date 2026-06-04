"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl, images, siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden lg:items-center">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={images.wedding}
          className="h-full w-full object-cover"
        >
          <source src="/videos/venue-tour.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-navy/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-24 pt-40 lg:px-12 lg:pb-32 lg:pt-48">
        <div className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="label-luxury mb-8 inline-block text-champagne/90"
          >
            Lekki Phase 1 · Lagos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="display-hero text-[2.75rem] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] 2xl:text-[7.5rem]"
          >
            Royal Hall
            <br />
            <span className="text-gradient-champagne italic font-normal">Event Centre</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="section-lead mt-10 max-w-2xl font-light text-white/85 lg:mt-12 lg:max-w-3xl"
          >
            {siteConfig.tagline}. A premier destination for weddings, corporate galas,
            receptions, and celebrations crafted with world-class hospitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center lg:mt-16"
          >
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury group inline-flex items-center justify-center gap-3 rounded-none bg-champagne text-navy transition-all hover:bg-white"
            >
              <CalendarDays className="h-5 w-5" />
              Reserve Your Date
            </Link>
            <Link
              href="#gallery"
              className="btn-luxury group inline-flex items-center justify-center gap-3 rounded-none border border-white/40 bg-transparent text-white transition-all hover:border-champagne hover:text-champagne"
            >
              Explore The Venue
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="label-luxury text-[10px] text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-champagne/70 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
