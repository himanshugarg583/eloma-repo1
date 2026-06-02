"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import SydneyOperaHouse from "@/assset/about us/sydney-opera-house.png";
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
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-[400px] w-[460px] rounded-full bg-forest/5 blur-3xl"
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
            className="space-y-8"
          >
            {/* Australian landmark — Sydney skyline (real transparent cut-out,
                anchored to the bottom so the soft gradient above reads as sky) */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-100 via-white to-white">
            
              
              
<div className="relative h-[280px] 3xl:h-[340px] 4xl:h-[400px] w-full overflow-hidden">
  <Image
    src={SydneyOperaHouse}
    alt="Sydney skyline, Australia"
    fill
    className="object-cover"
  />
</div>
              <p className="pb-5 text-center text-[10px] 3xl:text-[11px] 4xl:text-[12px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Sydney &middot; Australia
              </p>
            </div>

            {/* Corporate headquarters */}
            <div>
              <h3 className="font-display text-2xl 3xl:text-3xl font-bold tracking-tight text-forest">
                Melbourne, Australia
              </h3>
              <p className="mt-1 text-[11px] 3xl:text-[12px] 4xl:text-[13px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
                Corporate Headquarters
              </p>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-gold-dark" />
                  <span className="text-sm leading-relaxed text-slate-600">
                    71 Gipps Street, Collingwood, Melbourne, VIC 3066, Australia
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 flex-shrink-0 text-gold-dark" />
                  <a
                    href="tel:1800054555"
                    className="text-sm text-slate-600 transition-colors hover:text-forest"
                  >
                    1800 054 555
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="mt-0.5 flex-shrink-0 text-gold-dark" />
                  <a
                    href="mailto:contact@elomagroup.com.au"
                    className="text-sm text-slate-600 transition-colors hover:text-forest"
                  >
                    contact@elomagroup.com.au
                  </a>
                </li>
              </ul>
            </div>

            {/* Other offices */}
            <div className="border-t border-slate-200 pt-6">
              <p className="text-[11px] 3xl:text-[12px] 4xl:text-[13px] font-semibold uppercase tracking-[0.24em] text-gold-dark">
                Other Offices
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Sydney", "Brisbane", "Adelaide", "Perth"].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-forest"
                  >
                    <MapPin size={12} className="text-gold-dark" />
                    {city}
                  </span>
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
