"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const roles = [
  {
    title: "Regional Operations Director",
    department: "Operations",
    location: "Sydney, Australia",
    type: "Full-time"
  },
  {
    title: "Logistics Innovation Lead",
    department: "Technology",
    location: "Singapore",
    type: "Full-time"
  },
  {
    title: "Fleet Excellence Manager",
    department: "Fleet & Mobility",
    location: "Melbourne, Australia",
    type: "Full-time"
  },
  {
    title: "Global Partnerships Manager",
    department: "Strategy",
    location: "New York, USA",
    type: "Full-time"
  }
];

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="career"
      ref={sectionRef}
      className="section-padding section-alt"
    >
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="space-y-8 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Careers"
              title="Join a group that moves the world"
              description="We are building an elite team across operations, innovation, and client experience — united by a single standard of excellence."
            />
            <div data-reveal className="relative overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
                alt="Life at Eloma Group"
                width={1400}
                height={900}
                className="h-[280px] w-full object-cover md:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Life at Eloma
                </p>
                <p className="mt-1 font-display text-lg font-semibold">
                  A culture of stewardship and excellence
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Current Openings
            </p>
            {roles.map((role) => (
              <Link
                key={role.title}
                href="#"
                data-reveal
                className="group flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover sm:flex-row sm:items-center md:p-6"
              >
                <div className="flex-1 space-y-2">
                  <h3 className="font-display text-lg font-semibold text-forest transition-colors group-hover:text-gold-dark">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={12} />
                      {role.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} />
                      {role.location}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-semibold text-slate-700">
                      {role.type}
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  Apply now
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="outline" size="sm">
                View All Openings
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
