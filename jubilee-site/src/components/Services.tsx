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
import {
  additionalServices,
  eventCategories,
} from "@/lib/site-config";
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
    <section id="services" className="relative overflow-hidden bg-champagne-muted py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-champagne to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-16 text-center">
          <SectionLabel>What We Host & Offer</SectionLabel>
          <SectionHeading>
            An Ultra Modern Place{" "}
            <span className="italic text-champagne-dark">For Every Occasion</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-navy/60">
            From intimate family celebrations to large conferences — plus rentals,
            planning, and security to complete your event.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20 grid gap-8 lg:grid-cols-3"
        >
          {eventCategories.map((category, index) => {
            const Icon = eventIconMap[category.icon as keyof typeof eventIconMap];
            return (
              <motion.article
                key={category.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-navy p-3 text-champagne">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-navy">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">
                  {category.description}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {category.events.map((event) => (
                    <li key={event} className="flex items-start gap-2.5 text-sm text-navy/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-dark" strokeWidth={2.5} />
                      {event}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

        <ScrollReveal className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
            Additional Services
          </p>
          <h3 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
            Beyond The <span className="italic text-champagne-dark">Venue</span>
          </h3>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {additionalServices.map((service, index) => {
            const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl bg-navy p-8 text-white"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-champagne/10 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-5 inline-flex rounded-full border border-champagne/30 bg-champagne/10 p-3 text-champagne">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-xl">{service.title}</h4>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-champagne/80">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
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
