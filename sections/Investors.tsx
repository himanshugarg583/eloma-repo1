"use client";

import Image from "next/image";
import { ArrowRight, Handshake, LineChart } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Investors() {
  return (
    <section id="investors" className="section-padding bg-white">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-2xl bg-forest-gradient p-8 md:p-14">
          {/* Background image with overlay */}
          <Image
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2000&q=80"
            alt="Investor partnership"
            fill
            sizes="100vw"
            className="-z-10 object-cover opacity-15"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/95 to-forest/70" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <span className="inline-block h-px w-7 bg-gold" />
                Investors & Partners
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                A premium platform for long-term growth
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
                Access the latest investor updates, partnership opportunities,
                and strategic initiatives across the Eloma Group of companies.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-gold text-forest hover:bg-gold-soft"
                >
                  Investor Relations
                  <ArrowRight size={18} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-forest"
                >
                  Partner with Us
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <LineChart size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Investor Relations</p>
                  <p className="mt-1 text-sm text-white/70">
                    Annual reports, financial updates, and governance disclosures.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Handshake size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Strategic Partnerships</p>
                  <p className="mt-1 text-sm text-white/70">
                    Co-investment, joint ventures, and supplier partnership programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
