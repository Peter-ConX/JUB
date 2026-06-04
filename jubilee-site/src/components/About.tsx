"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutPoints, getWhatsAppUrl, images, siteConfig } from "@/lib/site-config";
import { ScrollReveal, SectionHeading, SectionLabel } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-32 lg:py-44">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #f5e6c8 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal className="relative">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={images.wedding}
                  alt="Luxury wedding reception at Royal Hall Event Centre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 48, y: 48 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="absolute -bottom-10 -right-6 w-52 overflow-hidden border-4 border-navy shadow-2xl sm:-right-10 sm:w-72"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={images.concert}
                    alt="Live entertainment at Royal Hall"
                    fill
                    className="object-cover object-top"
                    sizes="288px"
                  />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <SectionLabel light>The Venue</SectionLabel>
            <SectionHeading light>
              An Address Worthy of{" "}
              <span className="italic text-champagne">Your Finest Moments</span>
            </SectionHeading>
            <p className="section-lead mt-10 font-light text-white/80">
              {siteConfig.name} rises on Admiralty Way — Lekki&apos;s most distinguished
              corridor for hospitality. Here, architecture, light, and service converge
              to create events that feel effortlessly grand.
            </p>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/60">
              From intimate soirées to commanding galas, our halls adapt with the grace
              of a luxury hotel ballroom — supported by event design, catering
              partnerships, and concierge coordination.
            </p>

            <ul className="mt-12 space-y-5">
              {aboutPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 text-lg text-white/85"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne/15 text-champagne">
                    <Check className="h-4 w-4" strokeWidth={2} />
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury group mt-14 inline-flex items-center gap-3 rounded-none border border-champagne/50 text-champagne transition-all hover:bg-champagne hover:text-navy"
            >
              Contact Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
