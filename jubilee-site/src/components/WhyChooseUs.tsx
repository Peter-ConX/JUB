"use client";

import { motion } from "framer-motion";
import { HeartHandshake, MapPin, Sparkles, UsersRound } from "lucide-react";
import { whyChooseUs } from "@/lib/site-config";
import {
  ScrollReveal,
  SectionHeading,
  SectionLabel,
  staggerContainer,
  fadeUp,
  defaultTransition,
} from "@/lib/motion";

const iconMap = {
  sparkles: Sparkles,
  "map-pin": MapPin,
  "users-round": UsersRound,
  "heart-handshake": HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-champagne/20 blur-3xl" />
      <div className="absolute -right-32 top-1/4 h-48 w-48 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-16 text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <SectionHeading>
            The Jubilee{" "}
            <span className="italic text-champagne-dark">Difference</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-navy/60">
            We combine premium facilities with heartfelt hospitality to deliver
            events that exceed expectations.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-light group rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="mb-6 inline-flex rounded-full border border-champagne/50 bg-champagne/30 p-4 text-navy transition-all group-hover:bg-navy group-hover:text-champagne">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/55">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
