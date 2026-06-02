"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroFigure from "@/assset/nb.webp";
import accentImage from "@/assset/ns2.webp";

const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7 } } };
const fadeUp = (delay = 0) => ({ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } });
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const microsoftLogo = "/partner-logos/microsoft.svg";
const teslaLogo = "/partner-logos/tesla.svg";
const isuzuLogo = "/partner-logos/isuzu.svg";
const directCouriersLogo = "/partner-logos/direct-couriers.svg";

const partnerLogos = [microsoftLogo, teslaLogo, isuzuLogo, directCouriersLogo, microsoftLogo, teslaLogo, isuzuLogo, directCouriersLogo];
const brandMarqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

const partnerPrograms = [
  {
    key: "our-partners",
    label: "Our Partners",
    title: "Our Partners",
    intro: [
      "Strong partnerships are at the heart of everything we do.",
      "Over the years, Eloma Group has built relationships with leading global brands, technology providers, manufacturers, and industry specialists who help us deliver reliable solutions across logistics, transportation, digital transformation, and business services."
    ],
    benefits: [
      "Deliver reliable and scalable solutions",
      "Improve operational efficiency",
      "Leverage the latest technologies",
      "Expand our capabilities across industries",
      "Create greater value for our customers"
    ],
    eligibility: [
      "Leading global brands",
      "Technology providers",
      "Manufacturers",
      "Industry specialists"
    ],
    responsibilities: [
      "Deliver dependable partnership value",
      "Support innovation and quality",
      "Build long-term growth together"
    ]
  },
  {
    key: "building-success",
    label: "Building Success Together",
    title: "Building Success Together",
    intro: [
      "Every successful business journey is powered by the right partnerships.",
      "By collaborating with trusted organizations across different industries, we gain access to advanced technology, industry expertise, and global best practices that strengthen the services we provide to our clients."
    ],
    benefits: [
      "Access to advanced technology",
      "Industry expertise",
      "Global best practices",
      "Stronger services for clients",
      "Sustainable business outcomes"
    ],
    eligibility: [
      "Organizations focused on quality",
      "Partners aligned to innovation",
      "Businesses with long-term vision"
    ],
    responsibilities: [
      "Collaborate with trust and clarity",
      "Share expertise and resources",
      "Work toward shared success"
    ]
  },
  {
    key: "trusted-partners",
    label: "Our Trusted Partners",
    title: "Our Trusted Partners",
    intro: [
      "Our partners are more than vendors or collaborators - they are an extension of our commitment to quality, innovation, and long-term growth.",
      "Together, we work towards creating efficient systems, better customer experiences, and sustainable business outcomes."
    ],
    benefits: [
      "Microsoft - digital solutions and cloud technologies",
      "Tesla - innovation and future-ready engineering",
      "Isuzu - reliable commercial transportation",
      "Direct Couriers - dependable delivery and distribution"
    ],
    eligibility: [
      "Trusted organizations with a shared commitment to quality",
      "Partners that support innovation and growth",
      "Businesses focused on long-term collaboration"
    ],
    responsibilities: [
      "Maintain dependable relationships",
      "Support better business outcomes",
      "Help create long-term value"
    ]
  }
];

const partners = [
  {
    name: "Microsoft",
    logo: microsoftLogo,
    category: "Technology Partner",
    desc: "As one of the world\'s leading technology companies, Microsoft supports businesses through digital solutions, cloud technologies, productivity tools, and enterprise systems.",
    since: "Ongoing",
    collab: "Cloud / Digital Solutions",
    url: "https://www.microsoft.com"
  },
  {
    name: "Tesla",
    logo: teslaLogo,
    category: "Innovation Partner",
    desc: "Known for its forward-thinking approach, Tesla represents excellence in engineering, sustainability, and technological advancement.",
    since: "Ongoing",
    collab: "Engineering / Sustainability",
    url: "https://www.tesla.com"
  },
  {
    name: "Isuzu",
    logo: isuzuLogo,
    category: "Transportation Partner",
    desc: "A trusted name in commercial transportation, Isuzu is recognized worldwide for reliability, durability, and performance.",
    since: "Ongoing",
    collab: "Transport / Supply Chain",
    url: "https://www.isuzu.com"
  },
  {
    name: "Direct Couriers",
    logo: directCouriersLogo,
    category: "Logistics Partner",
    desc: "Direct Couriers plays an important role in supporting efficient and customer-focused delivery operations across business networks.",
    since: "Ongoing",
    collab: "Courier / Distribution",
    url: "https://www.directcouriers.com.au"
  }
];

export default function PartnersPage() {
  const logoSwiperRef = useRef<any>(null);
  const [activeProgram, setActiveProgram] = useState(partnerPrograms[0].key);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", business: "", category: "", website: "", message: "" });

  const selectedProgram = partnerPrograms.find((program) => program.key === activeProgram) ?? partnerPrograms[0];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: wire to API
    console.log("Partner inquiry submitted", form);
    alert("Thank you — your inquiry was submitted (demo).");
  }

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* PARTNER ECOSYSTEM HERO */}
        <section className="partners-hero relative overflow-hidden bg-[#08213C] text-white">
          {/* left illustration */}
          <Image src={heroFigure} alt="partner-figure" width={260} height={260} className="hidden lg:block absolute left-3 top-2 w-[180px] xl:w-[240px] 2xl:w-[280px] z-20" />
          {/* right-side background image */}
          <div className="absolute inset-y-0 right-0 w-1/3 hidden lg:block -z-10">
            <div className="relative h-full w-full">
              <Image src={accentImage} alt="decor-bg" fill className="object-cover opacity-20" />
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_30%),radial-gradient(circle_at_right,_rgba(255,255,255,0.03),_transparent_25%)]" />
          <div className="container-x relative py-10 sm:py-12 md:py-16">
            <div className="mx-auto max-w-4xl text-center mr-12">
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-lg font-semibold leading-tight sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                Trusted Partnerships Driving Innovation, Logistics Excellence, and Business Growth
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg lg:text-xl">
                Strong partnerships are at the heart of everything we do. Over the years, Eloma Group has built relationships with leading global brands, technology providers, manufacturers, and industry specialists who help us deliver reliable solutions across logistics, transportation, digital transformation, and business services.
              </motion.p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
                {partnerPrograms.map((program) => {
                  const active = program.key === activeProgram;
                  return (
                    <button
                      key={program.key}
                      type="button"
                      onClick={() => setActiveProgram(program.key)}
                      className={`w-full sm:w-auto rounded-sm border px-3 py-2 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.11em] transition-all md:px-5 md:py-2.5 lg:px-6 lg:py-3 ${active ? "border-white bg-white text-[#a7158a]" : "border-white/40 bg-transparent text-white hover:bg-white/10"}`}
                    >
                      {program.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-12 pt-8 md:pb-16">
          <div className="container-x">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} className="mx-auto max-w-5xl">
              <div className="rounded-2xl bg-white px-0 py-4 md:px-2">
                <p className="mx-auto max-w-3xl text-sm leading-7 text-[#2b2f36] sm:text-base md:text-lg lg:text-xl md:leading-8">
                  {selectedProgram.intro[0]} <span className="font-semibold text-[#a7158a]">We prioritize partnerships that create real value.</span> {selectedProgram.intro[1]}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    { title: "How We Grow", items: selectedProgram.benefits },
                    { title: "Partner Focus", items: selectedProgram.eligibility },
                    { title: "Shared Value", items: selectedProgram.responsibilities }
                  ].map((panel) => (
                    <motion.div key={panel.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }} className="rounded-xl border border-[#f1d4ea] bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(167,21,138,0.06)]">
                      <h3 className="border-b border-[#2f4b7c] pb-3 text-xl md:text-2xl font-semibold text-[#a7158a]">{panel.title}</h3>
                      <ul className="mt-4 space-y-3 text-sm sm:text-base md:text-lg leading-7 text-[#2b2f36]">
                        {panel.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#a7158a]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HERO */}
        <section className="container-x py-12 md:py-20 lg:py-24">
          <motion.div initial="hidden" animate="show" variants={fadeIn} className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">Our Partners</h1>
                <p className="mt-6 max-w-xl text-base sm:text-lg text-[#333]">Strong partnerships are at the heart of everything we do.</p>
                <div className="mt-8">
                  <Link href="#become" className="inline-flex items-center gap-3 rounded-full bg-[#08213C] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-md transition-transform hover:scale-105">
                    Building Success Together
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="hidden md:block">
                <div className="rounded-xl bg-[#f8fafb] p-6 shadow-sm">
                  <p className="text-sm text-[#666]">Trusted by</p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {partnerLogos.slice(0, 6).map((src, i) => (
                      <div key={i} className="flex items-center justify-center p-3">
                        <Image src={src} alt={`logo-${i}`} width={160} height={80} className="h-12 w-auto grayscale transition-all hover:grayscale-0 hover:scale-105" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* LOGO SHOWCASE */}
        <section className="border-t border-b border-[#f2f3f5] py-12">
          <div className="container-x">
            <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Our Trusted Partners</motion.h3>
            <motion.div variants={fadeUp(0.08)} initial="hidden" whileInView="show" className="mt-6 overflow-hidden rounded-2xl border border-[#edf0f2] bg-[#fbfcfd] py-4 shadow-sm">
              <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView="auto"
                spaceBetween={20}
                loop
                loopAdditionalSlides={brandMarqueeLogos.length}
                speed={7000}
                freeMode={{ enabled: true, momentum: false, sticky: false }}
                allowTouchMove={false}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: false,
                  waitForTransition: false
                }}
                onSwiper={(swiper) => {
                  logoSwiperRef.current = swiper;
                }}
                onMouseEnter={() => logoSwiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => logoSwiperRef.current?.autoplay?.start()}
                className="partners-logo-swiper"
              >
                {brandMarqueeLogos.map((src, i) => (
                  <SwiperSlide key={i} className="!w-[160px] sm:!w-[180px] md:!w-[200px] lg:!w-[240px] xl:!w-[280px]">
                    <div className="flex h-20 items-center justify-center rounded-xl bg-white px-4 py-3 shadow-[0_1px_10px_rgba(8,33,60,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Image src={src} alt={`brand-${i}`} width={160} height={80} className="h-10 w-auto grayscale transition-all duration-300 hover:grayscale-0" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* PARTNER CARDS */}
        <section className="container-x py-12 md:py-16">
          <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Our Trusted Partners</motion.h3>

          <motion.div variants={stagger} initial="hidden" whileInView="show" className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <motion.article key={p.name} variants={fadeUp(0.06 * i)} className="group rounded-xl border bg-white p-6 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-[#f6f7f9] p-2">
                    <Image src={p.logo} alt={p.name} width={64} height={64} className="h-full w-full object-contain transition-transform group-hover:scale-105" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold">{p.name}</h4>
                    <p className="mt-1 text-sm md:text-base text-[#5b6770]">{p.category} • Since {p.since}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-[#444]">{p.desc}</p>

                <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <p className="text-sm md:text-base text-[#6b6f73]">Collaboration: {p.collab}</p>
                  <Link href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#08213C] px-3 py-2 text-sm font-semibold text-white transition-transform hover:scale-105">Visit Website</Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* WHY PARTNER */}
        <section className="border-t border-b border-[#f2f3f5] py-12">
          <div className="container-x">
            <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Building Success Together</motion.h3>

            <motion.div variants={stagger} initial="hidden" whileInView="show" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Reliable Solutions", desc: "Deliver reliable and scalable solutions." },
                { title: "Operational Efficiency", desc: "Improve operational efficiency." },
                { title: "Latest Technologies", desc: "Leverage the latest technologies." },
                { title: "Greater Value", desc: "Create greater value for our customers." }
              ].map((b, i) => (
                <motion.div key={b.title} variants={fadeUp(0.06 * i)} className="rounded-lg bg-white p-5 sm:p-6 shadow-sm">
                  <div className="h-10 w-10 rounded-md bg-[#eaf4f2] flex items-center justify-center font-semibold text-[#0f5b61]">{b.title.split(' ').map(w=>w[0]).join('')}</div>
                  <h4 className="mt-4 text-lg md:text-xl font-semibold">{b.title}</h4>
                  <p className="mt-2 text-sm md:text-base text-[#5b6770]">{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BECOME A PARTNER */}
        <section id="become" className="container-x py-12 md:py-16">
          <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Our Trusted Partners</motion.h3>
          <motion.div variants={stagger} initial="hidden" whileInView="show" className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_460px]">
            <div>
              <p className="text-sm sm:text-base md:text-lg text-[#444]">Our partners are more than vendors or collaborators - they are an extension of our commitment to quality, innovation, and long-term growth.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  'Microsoft', 'Tesla', 'Isuzu', 'Direct Couriers', 'Efficiency', 'Sustainable outcomes'
                ].map((b) => (
                  <div key={b} className="rounded-lg bg-white p-4 shadow-sm">
                    <h5 className="text-sm sm:text-base font-semibold">{b}</h5>
                  </div>
                ))}
              </div>
            </div>

            <motion.form onSubmit={handleSubmit} variants={fadeUp(0.06)} className="rounded-xl border p-6 shadow-sm">
              <div className="grid gap-3">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none" />
                <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none" />
                <input name="business" value={form.business} onChange={handleChange} placeholder="Business Type" className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none" />
                <select name="category" value={form.category} onChange={handleChange} className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none">
                  <option value="">Partnership Category</option>
                  <option>Technology Partner</option>
                  <option>Strategic Partner</option>
                  <option>Supplier Partner</option>
                </select>
                <input name="website" value={form.website} onChange={handleChange} placeholder="Company Website" className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none" />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your business" className="rounded-md border px-3 py-2 text-sm sm:text-base outline-none" rows={4} />
                <button type="submit" className="mt-2 rounded-full bg-[#08213C] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">Apply for Partnership</button>
              </div>
            </motion.form>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-12">
          <div className="container-x text-center">
            <motion.h3 variants={fadeIn} initial="hidden" whileInView="show" className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">As We Grow, We Stay Committed</motion.h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#444]">As we grow, we remain committed to building relationships founded on trust, innovation, and shared success.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link href="#become" className="rounded-full bg-[#08213C] px-6 py-3 text-sm font-semibold text-white hover:scale-105">Our Trusted Partners</Link>
              <Link href="/contact" className="rounded-full border px-6 py-3 text-sm font-semibold">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
