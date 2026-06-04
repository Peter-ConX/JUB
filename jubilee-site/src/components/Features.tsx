"use client";

import { motion } from "framer-motion";
import { Car, Users, Wind, Zap } from "lucide-react";
import { features } from "@/lib/site-config";
import {
  ScrollReveal,
  SectionHeading,
  SectionLabel,
  staggerContainer,
  fadeUp,
  defaultTransition,
} from "@/lib/motion";

const iconMap = {
  users: Users,
  wind: Wind,
  car: Car,
  zap: Zap,
};

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-32 lg:py-44">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal className="mb-20 text-center lg:mb-28">
          <SectionLabel>Amenities</SectionLabel>
          <SectionHeading>
            Every Detail,{" "}
            <span className="italic text-champagne-dark">Considered</span>
          </SectionHeading>
          <p className="section-lead mx-auto mt-8 max-w-3xl font-light text-navy/60">
            World-class infrastructure designed for events that demand nothing less
            than perfection.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.subtitle}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.35 } }}
                className="group relative overflow-hidden border border-champagne/40 bg-champagne-muted/30 p-10 lg:p-12"
              >
                <div className="mb-8 inline-flex bg-navy p-4 text-champagne transition-colors group-hover:bg-champagne group-hover:text-navy">
                  <Icon className="h-7 w-7" strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-4xl font-light text-navy lg:text-5xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">
                  {feature.subtitle}
                </p>
                <p className="mt-6 text-base leading-relaxed text-navy/55 lg:text-lg">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
