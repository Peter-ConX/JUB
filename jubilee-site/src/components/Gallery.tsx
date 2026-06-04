"use client";

import { motion } from "framer-motion";
import { Grid3X3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/lib/site-config";
import {
  ScrollReveal,
  SectionHeading,
  SectionLabel,
  staggerContainer,
  fadeUp,
  defaultTransition,
} from "@/lib/motion";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-champagne-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-16 text-center">
          <SectionLabel>Gallery</SectionLabel>
          <SectionHeading>
            A Glimpse Of Our{" "}
            <span className="italic text-champagne-dark">Beautiful Venue</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-navy/60">
            Explore the elegance and versatility of Jubilee Event Centre through our
            venue showcase.
          </p>
          <div className="section-divider mx-auto mt-8 w-24" />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[220px] lg:grid-cols-4 lg:gap-5"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={`${item.label}-${index}`}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/40" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold uppercase tracking-wider text-champagne transition-all hover:bg-navy-light hover:shadow-xl"
          >
            <Grid3X3 className="h-4 w-4" />
            View Full Gallery
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
