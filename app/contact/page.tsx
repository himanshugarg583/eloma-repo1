"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Building2, Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const enquiryBlocks = [
  {
    title: "Infodesk",
    lines: [
      "Toll Free (India): 1800 710 388",
      "Available: 8 am to 8 pm IST",
      "International: +91 22 6752 5899",
      "Available: 2:30 am to 2:30 pm GMT",
      "Email: infodesk@elomagroup.com"
    ]
  },
  {
    title: "Investor Enquiry",
    lines: [
      "Investor Services: 1-800-3094-001",
      "Time: 10 am to 6 pm IST",
      "Email: ircg@elomagroup.com",
      "Visit Investor Relations site"
    ]
  }
];

const businessLinks = [
  "Heavy Engineering",
  "Energy",
  "Precision Engineering",
  "Valves"
];

const careerLinks = [
  "Careers Portal",
  "Recruitment Caution",
  "Open Roles"
];

const officeTabs = [
  "Registered Office",
  "Regional Offices",
  "Area Offices",
  "Branch Offices"
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80"
              alt="Contact hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b2342]/95 via-[#0b2d53]/85 to-[#0a1730]/95" />
          <div className="absolute inset-0">
            <div className="absolute right-10 top-10 hidden items-center gap-6 md:flex">
              {[Mail, Phone, MapPin].map((Icon, index) => (
                <span
                  key={index}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur"
                >
                  <Icon size={26} />
                </span>
              ))}
            </div>
          </div>
          <div className="container-x relative py-24 md:py-28">
            <div className="max-w-2xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/70">
                Corporate / Contact Us
              </p>
              <h1 className="text-3xl font-semibold md:text-5xl">Contact Us</h1>
              <p className="text-base text-slate-200 md:text-lg">
                Reach the right team quickly with our direct office contacts and enquiry channels.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="h-px w-10 bg-slate-300" />
                Registered Office & Head Office
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold">Eloma Group Limited</h2>
                <p className="text-sm text-slate-600">
                  L&amp;T House, Ballard Estate, P.O. Box: 278,
                  <br />
                  Mumbai 400 001, India.
                </p>
                <div className="grid gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-slate-400" />
                    Toll Free (India): 1800 710 388
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-slate-400" />
                    Available: 8 am to 8 pm IST
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-slate-400" />
                    International: +91 22 6752 5899
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-slate-400" />
                    Available: 2:30 am to 2:30 pm GMT
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" />
                    contact@elomagroup.com
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative h-[360px] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1400&q=80"
                  alt="Office map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/10" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow">
                  Ballard Estate, Mumbai
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700 shadow">
                  View Map
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            {enquiryBlocks.map((block) => (
              <div key={block.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{block.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  {block.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Business Enquiry</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                {businessLinks.map((link) => (
                  <Link key={link} href="#" className="flex items-center gap-2 text-slate-700 hover:text-slate-900">
                    <Building2 size={16} className="text-slate-400" />
                    {link}
                    <ExternalLink size={14} className="text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Career Enquiry</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                {careerLinks.map((link) => (
                  <Link key={link} href="#" className="flex items-center gap-2 text-slate-700 hover:text-slate-900">
                    <Building2 size={16} className="text-slate-400" />
                    {link}
                    <ExternalLink size={14} className="text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-x">
            <div className="flex flex-wrap items-center gap-3">
              {officeTabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={
                    activeTab === index
                      ? "rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
                      : "rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-600"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900">Registered Office & Head Office</h4>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
                  <p className="font-semibold text-slate-900">L&amp;T House, Ballard Estate</p>
                  <p className="mt-2">
                    L&amp;T House, Ballard Estate<br />
                    P.O. Box: 278<br />
                    Mumbai 400 001
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold">Global Presence</h4>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400" />
                    Mumbai, Delhi, Bengaluru, Dubai, Singapore
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-slate-400" />
                    +91 22 6752 5899
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" />
                    global@elomagroup.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
