"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/site-config";
import { ScrollReveal, SectionHeading } from "@/lib/motion";

export default function CTA() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-navy py-32 lg:py-44">
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

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
        <ScrollReveal>
          <SectionHeading light className="text-center">
            Begin Your Celebration
          </SectionHeading>
          <p className="section-lead mx-auto mt-10 max-w-2xl font-light text-white/75">
            Private tours available by appointment. Reach out to discuss your
            vision — our team responds with the discretion you deserve.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-14"
          >
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury group inline-flex items-center gap-4 rounded-none bg-champagne text-navy transition-all hover:bg-white"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Message on WhatsApp
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
