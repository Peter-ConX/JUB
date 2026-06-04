"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutPoints, getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import { ScrollReveal, SectionHeading, SectionLabel } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #f5e6c8 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal className="relative">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/outside.jpeg"
                  alt="Jubilee Event Center exterior in Idimu, Lagos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-8 -right-4 w-48 overflow-hidden rounded-xl border-4 border-navy shadow-2xl sm:-right-8 sm:w-64"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/outside.jpeg"
                    alt="Jubilee Event Center building detail"
                    fill
                    className="object-cover object-left"
                    sizes="256px"
                  />
                </div>
              </motion.div>

              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-champagne/20" />
              <div className="absolute -right-8 top-12 grid grid-cols-3 gap-2 opacity-30">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-2 w-2 rounded-full bg-champagne" />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <SectionLabel>About Jubilee</SectionLabel>
            <SectionHeading light>
              Your <span className="italic text-champagne">Entertainment</span> Destination
            </SectionHeading>
            <p className="mt-6 leading-relaxed text-white/70">
              {siteConfig.name} is an ultra modern events place in Idimu, Lagos — built
              for celebrations of every kind. Whether you are hosting a wedding, birthday,
              seminar, political gathering, or fellowship meeting, our team provides the
              space and support to make it exceptional.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              We also offer party chair and table rentals, professional event planning and
              decoration, and trained security / bouncer services so your programme runs
              smoothly from start to finish.
            </p>

            <ul className="mt-8 space-y-4">
              {aboutPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/85"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-champagne">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-champagne/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-champagne transition-all hover:bg-champagne hover:text-navy"
            >
              Contact Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
