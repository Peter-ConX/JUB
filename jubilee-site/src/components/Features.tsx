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
    <section id="features" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-16 text-center">
          <SectionLabel>Our Facilities</SectionLabel>
          <SectionHeading>
            Everything You Need,{" "}
            <span className="italic text-champagne-dark">In One Place</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-navy/60">
            World-class amenities designed to make every event seamless, comfortable,
            and unforgettable.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.subtitle}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-champagne/30 bg-champagne-muted/50 p-8 transition-shadow hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="mb-6 inline-flex rounded-xl bg-navy p-3 text-champagne transition-colors group-hover:bg-champagne group-hover:text-navy">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-navy">{feature.title}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-navy/70">
                  {feature.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy/55">
                  {feature.description}
                </p>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-champagne/20 transition-transform group-hover:scale-150" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
