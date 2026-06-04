"use client";

import { motion } from "framer-motion";
import {
  Armchair,
  Briefcase,
  Check,
  Palette,
  PartyPopper,
  Shield,
  Users,
} from "lucide-react";
import { additionalServices, eventCategories } from "@/lib/site-config";
import {
  ScrollReveal,
  SectionHeading,
  SectionLabel,
  staggerContainer,
  fadeUp,
  defaultTransition,
} from "@/lib/motion";

const eventIconMap = {
  party: PartyPopper,
  briefcase: Briefcase,
  users: Users,
};

const serviceIconMap = {
  armchair: Armchair,
  palette: Palette,
  shield: Shield,
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-champagne-muted py-32 lg:py-44">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-champagne to-transparent" />

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal className="mb-20 text-center lg:mb-28">
          <SectionLabel>Occasions</SectionLabel>
          <SectionHeading>
            A Stage For{" "}
            <span className="italic text-champagne-dark">Every Celebration</span>
          </SectionHeading>
          <p className="section-lead mx-auto mt-8 max-w-3xl font-light text-navy/60">
            Weddings, galas, conferences, and private evenings — each hosted with
            the poise of a five-star hospitality brand.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-24 grid gap-10 lg:grid-cols-3 lg:gap-12"
        >
          {eventCategories.map((category, index) => {
            const Icon = eventIconMap[category.icon as keyof typeof eventIconMap];
            return (
              <motion.article
                key={category.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                className="flex flex-col border border-navy/8 bg-white p-10 shadow-sm transition-shadow hover:shadow-xl lg:p-12"
              >
                <div className="mb-8 inline-flex bg-navy p-4 text-champagne">
                  <Icon className="h-7 w-7" strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-3xl font-light text-navy lg:text-4xl">
                  {category.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy/55 lg:text-lg">
                  {category.description}
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {category.events.map((event) => (
                    <li
                      key={event}
                      className="flex items-start gap-3 text-base text-navy/75 lg:text-lg"
                    >
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-champagne-dark"
                        strokeWidth={2}
                      />
                      {event}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

        <ScrollReveal className="mb-14 text-center">
          <p className="label-luxury text-navy/45">Concierge Services</p>
          <h3 className="display-hero mt-4 text-4xl text-navy sm:text-5xl lg:text-6xl">
            Beyond The{" "}
            <span className="italic text-champagne-dark">Ballroom</span>
          </h3>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 md:grid-cols-3 lg:gap-10"
        >
          {additionalServices.map((service, index) => {
            const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden bg-navy p-10 text-white lg:p-12"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-champagne/10 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-8 inline-flex border border-champagne/30 bg-champagne/10 p-4 text-champagne">
                    <Icon className="h-7 w-7" strokeWidth={1.25} />
                  </div>
                  <h4 className="font-serif text-2xl font-light lg:text-3xl">
                    {service.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-champagne/75">
                    {service.subtitle}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-white/65 lg:text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
