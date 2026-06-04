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
    <section className="relative overflow-hidden bg-white py-32 lg:py-44">
      <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-champagne/15 blur-3xl" />

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal className="mb-20 text-center lg:mb-28">
          <SectionLabel>Distinction</SectionLabel>
          <SectionHeading>
            The Royal Hall{" "}
            <span className="italic text-champagne-dark">Standard</span>
          </SectionHeading>
          <p className="section-lead mx-auto mt-8 max-w-3xl font-light text-navy/60">
            Hospitality, architecture, and service — unified into an experience
            that feels unmistakably premium.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-light group p-10 transition-shadow hover:shadow-2xl lg:p-12"
              >
                <div className="mb-8 inline-flex border border-champagne/50 bg-champagne/25 p-5 text-navy transition-all group-hover:bg-navy group-hover:text-champagne">
                  <Icon className="h-7 w-7" strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-2xl font-light text-navy lg:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy/55 lg:text-lg">
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
