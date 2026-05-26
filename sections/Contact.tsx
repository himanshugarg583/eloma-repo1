"use client";

import { useRef } from "react";
import { ArrowRight, Building2, Mail, MapPin, Phone } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const contactItems = [
  {
    icon: Building2,
    label: "Corporate Headquarters",
    value: "100 Premium Avenue, Sydney NSW 2000, Australia"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+61 1800 710 388"
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@elomagroup.com"
  },
  {
    icon: MapPin,
    label: "Regional Offices",
    value: "Australia · India · USA · Canada · China · UK · UAE · Singapore"
  }
];

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-forest placeholder:text-slate-400 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with the Eloma Group"
          description="Share your requirements and our team will respond with the right solution."
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          {/* Contact info */}
          <div data-reveal className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                Get in touch
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-forest">
                We&apos;d love to hear from you
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Whether you are exploring a partnership or need business support,
                our team is ready to help.
              </p>

              <div className="mt-6 space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-forest shadow-card">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-forest">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            data-reveal
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-card md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Full name *
                </label>
                <input type="text" placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Work email *
                </label>
                <input type="email" placeholder="you@company.com" className={inputClass} />
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Company
                </label>
                <input type="text" placeholder="Your company" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Phone
                </label>
                <input type="tel" placeholder="+1 555 000 0000" className={inputClass} />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Inquiry type
              </label>
              <select className={inputClass}>
                <option>Partnership opportunity</option>
                <option>Logistics services</option>
                <option>Investor relations</option>
                <option>Media inquiry</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Message *
              </label>
              <textarea
                placeholder="Tell us about your requirements..."
                rows={5}
                className={inputClass}
              />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              By submitting this form, you agree to our privacy policy and consent
              to receive communications from Eloma Group.
            </p>
            <Button size="lg" className="mt-6">
              Submit Inquiry
              <ArrowRight size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
