"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/site-config";
import { ScrollReveal, SectionHeading } from "@/lib/motion";

export default function CTA() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="floral" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="30" fill="none" stroke="#f5e6c8" strokeWidth="0.5" />
              <circle cx="60" cy="60" r="15" fill="none" stroke="#f5e6c8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#floral)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <SectionHeading light className="text-center">
            Ready To Host Your Next Event?
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Let&apos;s help you create memories that last a lifetime. Reach out today
            at our Idimu venue — weddings, parties, conferences, and more.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-champagne px-10 py-5 text-sm font-bold uppercase tracking-wider text-navy transition-all hover:bg-white hover:shadow-2xl hover:shadow-champagne/20"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Book Now on WhatsApp
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
