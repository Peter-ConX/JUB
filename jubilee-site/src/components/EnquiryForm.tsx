"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import {
  buildEnquiryMailSubject,
  buildEnquiryMessage,
  getWhatsAppUrl,
  primaryEmail,
  siteConfig,
} from "@/lib/site-config";
import { ScrollReveal, SectionHeading, SectionLabel } from "@/lib/motion";

type FormFields = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  enquiry: string;
};

const initialForm: FormFields = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  enquiry: "",
};

const inputClassName =
  "w-full border border-navy/10 bg-white/80 px-5 py-4 text-base text-navy placeholder:text-navy/35 outline-none transition-all focus:border-champagne-dark focus:bg-white focus:ring-2 focus:ring-champagne/40";

const labelClassName =
  "label-luxury mb-2 block text-navy/60";

export default function EnquiryForm() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormFields, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      enquiry: form.enquiry.trim(),
    };

    const bodyText = buildEnquiryMessage(payload);
    const whatsappUrl = getWhatsAppUrl(bodyText);
    const mailSubject = encodeURIComponent(
      buildEnquiryMailSubject(payload.firstName, payload.lastName)
    );
    const mailBody = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:${primaryEmail}?subject=${mailSubject}&body=${mailBody}`;

    const mailLink = document.createElement("a");
    mailLink.href = mailtoUrl;
    mailLink.rel = "noopener noreferrer";
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);

    window.setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 300);

    setSubmitted(true);
    setForm(initialForm);
    formEl.reset();

    window.setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-champagne-muted via-white to-champagne-muted py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-champagne/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
        <ScrollReveal className="mb-16 text-center">
          <SectionLabel>Private Enquiries</SectionLabel>
          <SectionHeading>
            Reserve Your <span className="italic text-champagne-dark">Experience</span>
          </SectionHeading>
          <p className="section-lead mx-auto mt-8 max-w-xl font-light text-navy/60">
            Share your details — we&apos;ll open WhatsApp and your email app with your
            enquiry pre-filled.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-light p-8 shadow-xl shadow-navy/5 sm:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex flex-col items-center gap-4 py-10 text-center"
                >
                  <div className="rounded-full bg-navy/5 p-4 text-navy">
                    <CheckCircle2 className="h-10 w-10 text-champagne-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-navy">Enquiry Ready</h3>
                  <p className="max-w-sm text-sm text-navy/60">
                    WhatsApp should be open with your message. Your email app was also prompted —
                    complete the send there if you&apos;d like a copy by email.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="enquiry-first-name" className={labelClassName}>
                        First Name <span className="text-champagne-dark">*</span>
                      </label>
                      <input
                        id="enquiry-first-name"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className={inputClassName}
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="enquiry-last-name" className={labelClassName}>
                        Last Name <span className="text-champagne-dark">*</span>
                      </label>
                      <input
                        id="enquiry-last-name"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className={inputClassName}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="enquiry-phone" className={labelClassName}>
                        Phone Number <span className="text-champagne-dark">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={inputClassName}
                        placeholder="+234 ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="enquiry-email" className={labelClassName}>
                        Email <span className="text-champagne-dark">*</span>
                      </label>
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={inputClassName}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiry-message" className={labelClassName}>
                      Enquiries <span className="text-champagne-dark">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="enquiry"
                      required
                      rows={5}
                      value={form.enquiry}
                      onChange={(e) => updateField("enquiry", e.target.value)}
                      className={`${inputClassName} resize-y min-h-[120px]`}
                      placeholder="Tell us about your event — date, guest count, services needed, and any other details..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-luxury group mt-4 flex w-full items-center justify-center gap-3 rounded-none bg-navy text-champagne transition-all hover:bg-navy-light"
                  >
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Submit Enquiry
                  </motion.button>

                  <p className="text-center text-xs text-navy/45">
                    Submits via WhatsApp ({siteConfig.contact.whatsappDisplay}) and email (
                    {primaryEmail})
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
