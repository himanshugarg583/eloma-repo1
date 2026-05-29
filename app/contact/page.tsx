"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Building2, Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import GlobalPresenceMap from "@/components/GlobalPresenceMap";

const GlobeScene = dynamic(() => import("@/components/GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-gold" />
    </div>
  )
});

const enquiryBlocks = [
  {
    title: "Infodesk",
    lines: [
      "Toll Free(India): 1800 209 4545",
      "Available from: 8 am to 8 pm IST",
      "International: +91 22 6752 5899",
      "Available from: 2:30 am to 2:30 pm GMT",
      "Send us a mail: infodesk@larsentoubro.com",
      "(Mails to this Email ID will be forwarded to the concerned department.",
      "This ID does not respond to mails or send out mails on behalf of L&T.)"
    ]
  },
  {
    title: "Investor Enquiry",
    lines: [
      "Please contact",
      "Investor Services: 1-800-3094-001 (Toll Free No.)",
      "(Time: 10 am to 6.00 pm IST)",
      "E-mail: igrc@larsentoubro.com",
      "Visit our Investor Relations site"
    ]
  }
];

const presenceBlocks = {
  global: {
    title: "Global Presence",
    cards: [
      {
        name: "Mumbai Office",
        location: "Mumbai 400 001, India",
        phone: "+91 22 6752 5899",
        email: "mumbai@elomagroup.com"
      },
      {
        name: "Delhi Office",
        location: "New Delhi 110 001, India",
        phone: "+91 11 4123 4567",
        email: "delhi@elomagroup.com"
      },
      {
        name: "Bengaluru Office",
        location: "Bengaluru 560 001, India",
        phone: "+91 80 4123 4567",
        email: "bengaluru@elomagroup.com"
      },
      {
        name: "Dubai Office",
        location: "Business Bay, Dubai, UAE",
        phone: "+971 4 555 0123",
        email: "dubai@elomagroup.com"
      },
      {
        name: "Singapore Office",
        location: "Raffles Place, Singapore",
        phone: "+65 6123 4567",
        email: "singapore@elomagroup.com"
      },
      {
        name: "London Office",
        location: "Canary Wharf, London, UK",
        phone: "+44 20 7123 4567",
        email: "london@elomagroup.com"
      },
      {
        name: "New York Office",
        location: "Midtown, New York, USA",
        phone: "+1 212 555 0199",
        email: "newyork@elomagroup.com"
      }
    ]
  },
  australia: {
    title: "Office in Australia",
    cards: [
      {
        name: "Sydney Office",
        location: "Sydney NSW 2000, Australia",
        phone: "+61 2 5550 1234",
        email: "sydney@elomagroup.com"
      },
      {
        name: "Melbourne Office",
        location: "Melbourne VIC 3000, Australia",
        phone: "+61 3 5550 2234",
        email: "melbourne@elomagroup.com"
      },
      {
        name: "Perth Office",
        location: "Perth WA 6000, Australia",
        phone: "+61 8 5550 3234",
        email: "perth@elomagroup.com"
      },
      {
        name: "Brisbane Office",
        location: "Brisbane QLD 4000, Australia",
        phone: "+61 7 5550 4234",
        email: "brisbane@elomagroup.com"
      },
      {
        name: "Adelaide Office",
        location: "Adelaide SA 5000, Australia",
        phone: "+61 8 5550 5234",
        email: "adelaide@elomagroup.com"
      }
    ]
  }
} as const;

export default function ContactPage() {
  const [presenceTab, setPresenceTab] = useState<"global" | "australia">("global");
  const [toggleChecked, setToggleChecked] = useState(presenceTab === "global");
  const presenceContent = presenceBlocks[presenceTab];
  const { ref: presenceRef, inView: presenceInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (switchTimer.current) {
      clearTimeout(switchTimer.current);
    }
    if (cardsTimer.current) {
      clearTimeout(cardsTimer.current);
    }
  }, []);

  useEffect(() => {
    if (presenceInView) {
      setCardsVisible(true);
    }
  }, [presenceInView]);

  useEffect(() => {
    if (cardsTimer.current) {
      clearTimeout(cardsTimer.current);
    }
    setCardsVisible(false);
    cardsTimer.current = setTimeout(() => {
      if (presenceInView) {
        setCardsVisible(true);
      }
    }, 80);
  }, [presenceTab, presenceInView]);

  const handlePresenceToggle = (checked: boolean) => {
    setToggleChecked(checked);
    if (switchTimer.current) {
      clearTimeout(switchTimer.current);
    }
    switchTimer.current = setTimeout(() => {
      setPresenceTab(checked ? "global" : "australia");
    }, 600);
  };

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
            <div className="container-x hero-bleed relative py-24 md:py-28">
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
              <div className="flex items-center gap-3 text-4xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="h-px w-10 bg-slate-300 " />
                Registered Office & Head Office
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-black md:text-3xl">Eloma Group Limited</h2>
                <p className="text-base text-black">
                  L&amp;T House, Ballard Estate, P.O. Box: 278,
                  <br />
                  Mumbai 400 001, India.
                </p>
                <div className="grid gap-3 text-base text-black">
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

            <div className="rounded-2xl  bg-white p-3 shadow-sm">
              <div className="relative h-[360px] overflow-hidden rounded-xl">
                <div className="relative aspect-[16/12] w-full sm:aspect-[16/11]">
                  <GlobeScene />
                </div>
                <div className="absolute inset-0 bg-slate-900/6 pointer-events-none" />
                {/* <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow">
                  Ballard Estate, Mumbai
                </div> */}
                {/* <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700 shadow">
                  View Map
                  <ExternalLink size={14} />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container-x grid gap-12 lg:grid-cols-2">
            {enquiryBlocks.map((block) => (
              <div key={block.title} className="space-y-5">
                <h3 className="text-3xl font-semibold text-black">{block.title}</h3>
                <div className="h-px w-full bg-slate-200" />
                <div className="space-y-2 text-lg text-black">
                  {block.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>



        <section className="bg-slate-50 py-16">
          <div className="container-x">
            <div className="cosmic-toggle-wrapper">
              <label className="cosmic-toggle">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={toggleChecked}
                  onChange={(event) => handlePresenceToggle(event.target.checked)}
                  aria-label="Toggle office presence view"
                />
                <div className="slider">
                  <div className="cosmos" />
                  <div className="energy-line" />
                  <div className="energy-line" />
                  <div className="energy-line" />
                  <div className="toggle-orb">
                    <div className="inner-orb" />
                    <div className="ring" />
                  </div>
                  <div className="particles">
                    <div style={{ "--angle": "30deg" } as React.CSSProperties} className="particle" />
                    <div style={{ "--angle": "60deg" } as React.CSSProperties} className="particle" />
                    <div style={{ "--angle": "90deg" } as React.CSSProperties} className="particle" />
                    <div style={{ "--angle": "120deg" } as React.CSSProperties} className="particle" />
                    <div style={{ "--angle": "150deg" } as React.CSSProperties} className="particle" />
                    <div style={{ "--angle": "180deg" } as React.CSSProperties} className="particle" />
                  </div>
                  <div className="toggle-text">
                    <span className="toggle-text-left">Office in Australia</span>
                    <span className="toggle-text-right">Global Presence</span>
                  </div>
                </div>
              </label>
            </div>
            <div className="mt-8">
              <div ref={presenceRef} className="rounded-2xl border border-transparent bg-transparent p-6 shadow-none">
                <h4 className="text-3xl font-semibold text-black">{presenceContent.title}</h4>
                <div key={presenceTab} className="mt-5 grid gap-4 sm:grid-cols-2">
                  {presenceContent.cards.map((card, index) => (
                    <div
                      key={card.name}
                      className={`office-card${cardsVisible ? " is-visible" : ""}`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <p className="text-base font-semibold">{card.name}</p>
                      <p className="mt-2 text-sm text-slate-700">{card.location}</p>
                      <div className="mt-3 space-y-1 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <Phone size={14} className="text-slate-400" />
                          {card.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-slate-400" />
                          {card.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GlobalPresenceMap />

        <section className="bg-white py-16">
          <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="contact-side-card">
              <div className="contact-side-content">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Contact Form
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  We tailor unique scalable solutions leveraging the power of next-gen technologies for elevated
                  customer experience.
                </p>
              </div>
              <div className="mt-6 support-illustration">
                <div className="support-orbit" />
                <div className="support-orbit support-orbit-alt" />
                <div className="support-center">
                  <div className="support-pulse" />
                  <div className="support-chat" />
                </div>
                <div className="support-dot support-dot-1" />
                <div className="support-dot support-dot-2" />
                <div className="support-dot support-dot-3" />
              </div>
              <div className="mt-8 contact-side-cta">
                <p className="text-base font-semibold text-slate-900">Looking for a new career?</p>
                <Link href="#career" className="text-sm text-slate-600">
                  View job openings →
                </Link>
              </div>
            </div>
            <div className="form-card">
              <form className="contact-form">
                <div className="form-field">
                  <label htmlFor="contact-full-name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input id="contact-full-name" name="fullName" type="text" className="form-input" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-company">
                    Company <span className="required">*</span>
                  </label>
                  <input id="contact-company" name="company" type="text" className="form-input" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-job-title">
                    Job Title <span className="required">*</span>
                  </label>
                  <input id="contact-job-title" name="jobTitle" type="text" className="form-input" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">
                    Email <span className="required">*</span>
                  </label>
                  <input id="contact-email" name="email" type="email" className="form-input" />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <div className="form-row">
                    <select id="contact-code" name="countryCode" className="form-input">
                      <option value="+91">+91</option>
                      <option value="+61">+61</option>
                      <option value="+65">+65</option>
                      <option value="+44">+44</option>
                      <option value="+1">+1</option>
                    </select>
                    <input id="contact-phone" name="phone" type="tel" className="form-input" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-country">
                    Country <span className="required">*</span>
                  </label>
                  <select id="contact-country" name="country" className="form-input">
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">
                    Your Message <span className="required">*</span>
                  </label>
                  <textarea id="contact-message" name="message" rows={3} className="form-input" />
                </div>
                <button type="submit" className="form-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
