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
    title: "Australia",
    lines: [
      "Melbourne - 71, Gipps Street, Collingwood, Melbourne, VIC 3066",
      "Sydney - 60 Martin Place, Levels 1, 2, & 3, Sydney 2000",
      "Brisbane - 71 Eagle Street Brisbane QLD 4000",
      "Adelaide - 2-3 Greenhill Road, Wayville, Adelaide 5034",
      "Perth - 300 Murray Street, Level 2 East, The Wentworth Building, Perth 6000"
    ]
  },
  {
    title: "International Offices",
    lines: [
      "US - 20 F St NW, Washington, DC 20001, USA",
      "Canada - First Canadian Place, 100 King St W #5600, Toronto, ON M5X 1C9, Canada",
      "UK - 107-111, Fleet St, London EC4A 2AB, United Kingdom",
      "United Arab Emirates - Level 9 Sheikh Mohammed bin Rashid Blvd - Burj Khalifa - Downtown Dubai - Dubai - United Arab Emirates",
      "India - Tower A, Spaze iTech Park, 5th Floor, Sohna - Gurgaon Rd, Gurugram - 122018",
      "Singapore - 1 Raffles Pl, #19-20 One Raffles Place Tower 2, Singapore 048616",
      "China - 18, 35/F Harbour Rd, Wan Chai, Hong Kong"
    ]
  }
];

const presenceBlocks = {
  global: {
    title: "Global Presence",
    cards: [
      {
        name: "US",
        location: "20 F St NW, Washington, DC 20001, USA",
        // phone: "+1 202 555 0100",
        email: "washington@elomagroup.com"
      },
      {
        name: "Canada",
        location: "First Canadian Place, 100 King St W #5600, Toronto, ON M5X 1C9, Canada",
        phone: "+1 416 555 0100",
        email: "toronto@elomagroup.com"
      },
      {
        name: "UK",
        location: "107-111, Fleet St, London EC4A 2AB, United Kingdom",
        phone: "+44 20 5555 0100",
        email: "london@elomagroup.com"
      },
      {
        name: "United Arab Emirates",
        location: "Level 9 Sheikh Mohammed bin Rashid Blvd - Burj Khalifa - Downtown Dubai - Dubai - United Arab Emirates",
        phone: "+971 4 555 0100",
        email: "dubai@elomagroup.com"
      },
      {
        name: "India",
        location: "Tower A, Spaze iTech Park, 5th Floor, Sohna - Gurgaon Rd, Gurugram - 122018",
        phone: "+91 124 555 0100",
        email: "gurugram@elomagroup.com"
      },
      {
        name: "Singapore",
        location: "1 Raffles Pl, #19-20 One Raffles Place Tower 2, Singapore 048616",
        phone: "+65 6123 4567",
        email: "singapore@elomagroup.com"
      },
      {
        name: "China",
        location: "18, 35/F Harbour Rd, Wan Chai, Hong Kong",
        phone: "+852 5555 0100",
        email: "hongkong@elomagroup.com"
      }
    ]
  },
  australia: {
    title: "Office in Australia",
    cards: [
      {
        name: "Melbourne",
        location: "71, Gipps Street, Collingwood, Melbourne, VIC 3066",
        phone: "+61 3 5550 1200",
        email: "melbourne@elomagroup.com"
      },
      {
        name: "Sydney",
        location: "60 Martin Place, Levels 1, 2, & 3, Sydney 2000",
        phone: "+61 2 5550 1300",
        email: "sydney@elomagroup.com"
      },
      {
        name: "Brisbane",
        location: "71 Eagle Street Brisbane QLD 4000",
        phone: "+61 7 5550 1400",
        email: "brisbane@elomagroup.com"
      },
      {
        name: "Adelaide",
        location: "2-3 Greenhill Road, Wayville, Adelaide 5034",
        phone: "+61 8 5550 1500",
        email: "adelaide@elomagroup.com"
      },
      {
        name: "Perth",
        location: "300 Murray Street, Level 2 East, The Wentworth Building, Perth 6000",
        phone: "+61 8 5550 1600",
        email: "perth@elomagroup.com"
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
              <p className="text-base text-slate-200 md:text-lg">Find our office locations and addresses across Australia, North America, Europe, the Middle East, India, Singapore, and Hong Kong.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-4xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="h-px w-10 bg-slate-300 " />
                Head Office
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-black md:text-3xl">Melbourne</h2>
                <p className="text-base text-black">
                  71, Gipps Street, Collingwood,
                  <br />
                  Melbourne, VIC 3066
                </p>
                <div className="grid gap-3 text-base text-black">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-slate-400" />
                    1800 054 555
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-slate-400" />
                    Available: 9 am to 6 pm EST
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" />
                    connect@elomagroup.com.au
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

        {/* <section className="bg-slate-50 py-16">
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
        </section> */}



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
                        {/* <div className="flex items-center gap-2">
                          <Phone size={14} className="text-slate-400" />
                          {card.phone}
                        </div> */}
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
                <h3 className="text-2xl font-semibold text-slate-900">Contact Form</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Use this form to get in touch with the relevant office or team for your region.
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
