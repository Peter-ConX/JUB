"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images, testimonials } from "@/lib/site-config";
import { ScrollReveal, SectionHeading, SectionLabel } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <div className="absolute inset-0">
        <Image
          src={images.celebration}
          alt=""
          fill
          className="object-cover object-center grayscale"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy/88" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-20 text-center">
          <SectionLabel light>Guest Experiences</SectionLabel>
          <SectionHeading light className="text-center">
            Words From Those Who{" "}
            <span className="italic text-champagne">Celebrated With Us</span>
          </SectionHeading>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative border border-white/10 bg-white/5 p-10 backdrop-blur-sm lg:p-12"
            >
              <span className="font-serif text-6xl leading-none text-champagne/30">&ldquo;</span>
              <p className="mt-2 font-serif text-2xl font-light leading-relaxed text-white/90 sm:text-[1.65rem] sm:leading-relaxed">
                {item.quote}
              </p>
              <footer className="mt-8 border-t border-white/10 pt-6">
                <cite className="not-italic">
                  <span className="block font-serif text-xl text-champagne">{item.author}</span>
                  <span className="mt-1 block text-sm uppercase tracking-[0.2em] text-white/50">
                    {item.event}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
