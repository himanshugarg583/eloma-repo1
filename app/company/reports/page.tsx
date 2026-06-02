"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REPORTS = [
  { title: "Sustainability Report 2024", href: "/reports/Sustainability-2024.pdf" },
  { title: "Environmental Impact Summary 2023", href: "/reports/Impact-2023.pdf" }
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Navbar />
      <main className="container-x py-20">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Reports & Updates</p>
          <h1 className="mt-4 font-display text-4xl font-bold">Reports & Updates</h1>
          <p className="mt-4 text-base text-slate-600">Download our latest reports or read short updates on progress and milestones.</p>
        </header>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <div className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Latest Reports</h3>
              <ul className="mt-4 space-y-3">
                {REPORTS.map((r) => (
                  <li key={r.title}>
                    <a href={r.href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between w-full rounded-md border p-3 hover:bg-slate-50">
                      <span>{r.title}</span>
                      <span className="text-sm text-slate-500">Download</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Recent Updates</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li><strong>May 2026:</strong> Published Sustainability Report 2024.</li>
                <li><strong>Mar 2026:</strong> Launched new supplier scorecards.</li>
                <li><strong>Jan 2026:</strong> Expanded community training pilot.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#edf0f2] bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Report highlights</h3>
            <p className="mt-3 text-sm text-slate-600">A concise summary of key metrics and learnings from our latest sustainability work.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Emission intensity reduced by 12%.</li>
              <li>1000+ hours of community training delivered.</li>
              <li>Supplier sustainability baseline coverage 85%.</li>
            </ul>

            <div className="mt-6">
              <Link href="/company/sustainability" className="inline-flex items-center gap-2 rounded-full bg-[#08213C] px-4 py-2 text-sm font-semibold text-white">See initiatives</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
