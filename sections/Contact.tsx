"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
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
        className="peer h-14 w-full rounded-xl border border-navy/15 bg-white px-4 pt-4 text-sm text-navy transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          lift
            ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700"
            : "top-1/2 -translate-y-1/2 text-sm text-navy/40"
        }`}
      >
        {label}
        {required ? <span className="ml-0.5 text-emerald-600">*</span> : null}
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
        className="peer w-full rounded-xl border border-navy/15 bg-white px-4 pb-3 pt-6 text-sm text-navy transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          lift
            ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700"
            : "top-4 text-sm text-navy/40"
        }`}
      >
        {label}
        {required ? <span className="ml-0.5 text-emerald-600">*</span> : null}
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
      className="relative overflow-hidden bg-gradient-to-b from-white via-cloud to-white py-14 md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-[400px] w-[460px] rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[360px] w-[420px] rounded-full bg-navy/5 blur-3xl"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with the Eloma Group"
          description="Share your requirements and our executive team will respond within one business day."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          {/* LEFT — dark navy info panel with the Sydney image on top */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy to-navy-800 text-white shadow-lift"
          >
            {/* Australian landmark — Sydney skyline */}
            <div className="relative h-[220px] w-full overflow-hidden 3xl:h-[260px]">
              <Image
                src={SydneyOperaHouse}
                alt="Sydney skyline, Australia"
                fill
                className="object-cover"
              />
              {/* fade the image into the dark panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <span className="absolute bottom-4 left-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                <MapPin size={12} className="text-emerald-400" />
                Sydney &middot; Australia
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-8 p-7 md:p-9">
              {/* Corporate headquarters */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                  Corporate Headquarters
                </p>
                <h3 className="mt-2 font-serif text-3xl font-light tracking-tight text-white">
                  Melbourne, Australia
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                      <MapPin size={16} className="text-emerald-400" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/70">
                      71 Gipps Street, Collingwood, Melbourne, VIC 3066, Australia
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                      <Phone size={16} className="text-emerald-400" />
                    </span>
                    <a
                      href="tel:1800054555"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      1800 054 555
                    </a>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                      <Mail size={16} className="text-emerald-400" />
                    </span>
                    <a
                      href="mailto:contact@elomagroup.com.au"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      contact@elomagroup.com.au
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other offices */}
              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                  Other Offices
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Sydney", "Brisbane", "Adelaide", "Perth"].map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10"
                    >
                      <MapPin size={12} className="text-emerald-400" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form card */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-navy/10 bg-white p-6 shadow-lift md:p-9"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-light text-navy">Send us a message</h3>
              <p className="mt-1 text-sm text-navy/50">
                Fields marked with <span className="text-emerald-600">*</span> are required.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FloatingInput id="name" label="Full name" required />
              <FloatingInput id="email" label="Work email" type="email" required />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <FloatingInput id="company" label="Company" />
              <FloatingInput id="phone" label="Phone" type="tel" />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy/60">
                Inquiry type
              </label>
              <select className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3.5 text-sm text-navy transition-all focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15">
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
            <p className="mt-4 text-xs leading-relaxed text-navy/45">
              By submitting this form, you agree to our privacy policy and consent
              to receive communications from Eloma Group.
            </p>
            <div className="mt-6">
              <MagneticButton strength={14}>
                <button
                  type="submit"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-7 text-sm font-semibold text-white shadow-glow-sm transition-all hover:shadow-glow"
                >
                  Submit Inquiry
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
