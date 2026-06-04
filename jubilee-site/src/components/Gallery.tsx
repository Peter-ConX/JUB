"use client";

import { motion } from "framer-motion";
import { Grid3X3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems, siteConfig } from "@/lib/site-config";
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
    <section id="gallery" className="relative bg-champagne-muted py-32 lg:py-44">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal className="mb-20 text-center lg:mb-28">
          <SectionLabel>Gallery</SectionLabel>
          <SectionHeading>
            Moments Crafted With{" "}
            <span className="italic text-champagne-dark">Intention</span>
          </SectionHeading>
          <p className="section-lead mx-auto mt-8 max-w-3xl font-light text-navy/60">
            A curated glimpse into celebrations hosted at {siteConfig.nameShort}.
          </p>
          <div className="section-divider mx-auto mt-10 w-32" />
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid auto-rows-[220px] grid-cols-2 gap-5 md:auto-rows-[260px] lg:grid-cols-4 lg:gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={`${item.label}-${index}`}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
              className={`group relative overflow-hidden ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                style={{ objectPosition: item.objectPosition ?? "center" }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/45" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:p-8">
                <span className="label-luxury bg-white/10 px-5 py-2 text-white backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal className="mt-16 text-center lg:mt-20">
          <Link
            href="#contact"
            className="btn-luxury inline-flex items-center gap-3 rounded-none bg-navy text-champagne transition-all hover:bg-navy-light"
          >
            <Grid3X3 className="h-5 w-5" />
            Request A Private Tour
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
