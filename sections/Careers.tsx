"use client";

import { useRef } from "react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const roles = [
  "Regional Operations Director",
  "Logistics Innovation Lead",
  "Fleet Excellence Manager",
  "Global Partnerships Manager"
];

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="career" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Careers"
          title="Join a group that moves the world"
          description="We are building an elite team across operations, innovation, and client experience."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <div
              key={role}
              data-reveal
              className="glass-card flex items-center justify-between rounded-3xl p-6"
            >
              <span className="text-sm font-semibold text-forest">{role}</span>
              <Button variant="outline">View Role</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
