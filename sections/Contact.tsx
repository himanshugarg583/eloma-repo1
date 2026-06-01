"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Mail, MapPin, Phone } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";

const contactItems = [
  {
    icon: Building2,
    label: "Corporate Headquarters",
    value: "100 Premium Avenue, Sydney NSW 2000, Australia"
  },
  { icon: Phone, label: "Phone", value: "1800 054 555" },
  { icon: Mail, label: "Email", value: "contact@elomagroup.com.au" },
  {
    icon: MapPin,
    label: "Regional Offices",
    value: "Singapore · Tokyo · Beijing · New York · Toronto"
  }
];

function FloatingInput({
  id,
  label,
  type = "text",
  required = false
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const lift = focused || val.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer h-14 w-full rounded-md border border-slate-300 bg-white px-4 pt-4 text-sm text-forest transition-all focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          lift
            ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-forest"
            : "top-1/2 -translate-y-1/2 text-sm text-slate-400"
        }`}
      >
        {label}
        {required ? <span className="ml-0.5 text-gold-dark">*</span> : null}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  required = false
}: {
  id: string;
  label: string;
  required?: boolean;
}) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const lift = focused || val.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={5}
        className="peer w-full rounded-md border border-slate-300 bg-white px-4 pb-3 pt-6 text-sm text-forest transition-all focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          lift
            ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-forest"
            : "top-4 text-sm text-slate-400"
        }`}
      >
        {label}
        {required ? <span className="ml-0.5 text-gold-dark">*</span> : null}
      </label>
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[460px] w-[460px] rounded-full bg-forest/5 blur-3xl"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with the Eloma Group"
          description="Share your requirements and our executive team will respond within one business day."
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                Get in touch
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-forest">
                We&apos;d love to hear from you
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Whether you&apos;re exploring a partnership or need a solution
                across our business verticals, our team is ready to help.
              </p>

              <div className="mt-6 space-y-5">
                {contactItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.08 }}
                    className="group flex gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-forest shadow-card transition-all group-hover:rotate-6 group-hover:bg-forest group-hover:text-white">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-forest">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FloatingInput id="name" label="Full name" required />
              <FloatingInput id="email" label="Work email" type="email" required />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <FloatingInput id="company" label="Company" />
              <FloatingInput id="phone" label="Phone" type="tel" />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Inquiry type
              </label>
              <select className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15">
                <option>Partnership opportunity</option>
                <option>Logistics services</option>
                <option>Digital solutions</option>
                <option>Investor relations</option>
                <option>Media inquiry</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <FloatingTextarea
                id="message"
                label="Tell us about your requirements"
                required
              />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              By submitting this form, you agree to our privacy policy and consent
              to receive communications from Eloma Group.
            </p>
            <div className="mt-6">
              <MagneticButton strength={14}>
                <Button size="lg" className="group">
                  Submit Inquiry
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
