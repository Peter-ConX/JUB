"use client";

import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl, isDemoSite, primaryEmail, siteConfig } from "@/lib/site-config";

const socialLinks = [
  {
    label: "WhatsApp",
    href: getWhatsAppUrl(),
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-champagne-muted/80 pt-24 pb-10 lg:pt-28">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="mb-5 inline-flex bg-navy/5 p-3.5 text-navy">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-navy">Location</h3>
            <p className="mt-3 text-base leading-relaxed text-navy/60 lg:text-lg">
              {siteConfig.location.address}
            </p>
            <Link
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.location.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-luxury mt-4 inline-block text-navy/70 transition-colors hover:text-navy"
            >
              Get Directions
            </Link>
          </div>

          <div>
            <div className="mb-5 inline-flex bg-navy/5 p-3.5 text-navy">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-navy">WhatsApp</h3>
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-base text-navy/70 transition-colors hover:text-navy lg:text-lg"
            >
              {siteConfig.contact.whatsappDisplay}
            </Link>
          </div>

          <div>
            <div className="mb-5 inline-flex bg-navy/5 p-3.5 text-navy">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-navy">Email</h3>
            <Link
              href={`mailto:${primaryEmail}`}
              className="mt-3 inline-block text-base text-navy/70 transition-colors hover:text-navy lg:text-lg"
            >
              {primaryEmail}
            </Link>
          </div>

          <div>
            <div className="mb-5 inline-flex bg-navy/5 p-3.5 text-navy">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-navy">Hours</h3>
            <p className="mt-3 text-base text-navy/60 lg:text-lg">{siteConfig.contact.hours}</p>
          </div>
        </div>

        <div className="section-divider my-14" />

        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-base text-navy/50">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            {isDemoSite && (
              <p className="mt-2 text-sm text-navy/40">
                Demonstration website — sample portfolio branding
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="bg-navy/5 p-3 text-navy/60 transition-all hover:bg-navy hover:text-champagne"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
