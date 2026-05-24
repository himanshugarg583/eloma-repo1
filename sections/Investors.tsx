"use client";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

export default function Investors() {
  return (
    <section id="investors" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="glass-panel rounded-3xl p-10">
          <SectionHeading
            eyebrow="Investors and partners"
            title="A premium platform for long-term growth"
            description="Access the latest investor updates, partnership opportunities, and strategic initiatives."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg">Investor Relations</Button>
            <Button variant="outline" size="lg">
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
