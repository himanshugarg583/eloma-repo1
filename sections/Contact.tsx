"use client";

import { useRef } from "react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with the Eloma Group"
          description="Share your requirements and our executive team will respond promptly."
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <div data-reveal className="glass-card rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                Headquarters
              </p>
              <p className="mt-3 text-sm text-forest/80">
                100 Premium Avenue, Sydney, Australia
              </p>
            </div>
            <div data-reveal className="glass-card rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                Contact
              </p>
              <p className="mt-3 text-sm text-forest/80">+61 000 000 000</p>
              <p className="text-sm text-forest/80">contact@elomagroup.com</p>
            </div>
          </div>
          <form data-reveal className="glass-panel rounded-3xl p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="rounded-full border border-forest/10 px-4 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="Work email"
                className="rounded-full border border-forest/10 px-4 py-3 text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="mt-4 w-full rounded-full border border-forest/10 px-4 py-3 text-sm"
            />
            <textarea
              placeholder="Tell us about your requirements"
              className="mt-4 h-32 w-full rounded-3xl border border-forest/10 px-4 py-3 text-sm"
            />
            <Button size="lg" className="mt-4">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
