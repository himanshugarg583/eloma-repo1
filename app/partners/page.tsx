"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoMark from "@/assset/logo/eloma_logo-removebg-preview.png";
import blogImage from "@/assset/blog/blog.png";
import travelImage from "@/assset/blog/travel.png";
import itImage from "@/assset/blog/IT.png";
import nbImg from "@/assset/nb.webp";
import ns2Img from "@/assset/ns2.webp";

const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7 } } };
const fadeUp = (delay = 0) => ({ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } });
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const partnerLogos = [blogImage, itImage, travelImage, logoMark, blogImage, travelImage, itImage, logoMark];
const brandMarqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

const partnerPrograms = [
  {
    key: "associate",
    label: "Associate Partnership",
    title: "Associate Partnership",
    intro: [
      "In our associate partner program, you can either outsource the whole project to us or collaborate on a project with us.",
      "We support the emerging needs of our partners through our cutting-edge technologies and highly experienced design and development teams."
    ],
    benefits: [
      "Highly skilled design and development support",
      "Priority handling for eligible work",
      "Discounted pricing for ongoing projects",
      "Access to shared resources when required"
    ],
    eligibility: [
      "A well-maintained business and delivery system",
      "Prior experience in web, software or school management software",
      "Ability to close business deals and manage projects"
    ],
    responsibilities: [
      "Maintain the required infrastructure",
      "Bring credibility in the digital solutions space",
      "Support sales and marketing execution"
    ]
  },
  {
    key: "strategic",
    label: "Strategic Partnership",
    title: "Strategic Partnership",
    intro: [
      "Strategic partners collaborate with us on growth, delivery and long-term market opportunities.",
      "This model is designed for organizations that want to build shared value through scale and consistency."
    ],
    benefits: [
      "Shared growth roadmap",
      "Co-branded market opportunities",
      "Long-term collaboration model",
      "Flexible engagement structure"
    ],
    eligibility: [
      "Strong market reputation",
      "Relevant operational capability",
      "Commitment to long-term collaboration"
    ],
    responsibilities: [
      "Align on business objectives",
      "Maintain communication and reporting",
      "Support joint planning and execution"
    ]
  },
  {
    key: "referral",
    label: "Referral Partnership",
    title: "Referral Partnership",
    intro: [
      "Referral partners introduce qualified business opportunities and earn value through each successful collaboration.",
      "It is ideal for people and firms who have strong networks and want a low-friction partnership route."
    ],
    benefits: [
      "Simple entry model",
      "Performance-based opportunity flow",
      "Easy collaboration process",
      "Fast onboarding"
    ],
    eligibility: [
      "Active network and business reach",
      "Clear referral communication",
      "Ability to identify relevant opportunities"
    ],
    responsibilities: [
      "Share accurate lead details",
      "Coordinate introductions promptly",
      "Maintain confidentiality and trust"
    ]
  }
];

const partners = [
  {
    name: "Aquila Tech",
    logo: logoMark,
    category: "Technology Partner",
    desc: "Aquila Tech has been working with us to deliver innovative and reliable solutions with a shared focus on quality and growth.",
    since: "2021",
    collab: "Product Development / Technology",
    url: "#"
  },
  {
    name: "BlueWave Logistics",
    logo: travelImage,
    category: "Strategic Partner",
    desc: "BlueWave supports our logistics and distribution channels, improving speed and reliability.",
    since: "2019",
    collab: "Distribution / Services",
    url: "#"
  },
  {
    name: "Nexus Solutions",
    logo: itImage,
    category: "Supplier Partner",
    desc: "Nexus provides reliable hardware and integration services for our platform deployments.",
    since: "2020",
    collab: "Infrastructure / Deployment",
    url: "#"
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
          <Image src={nbImg} alt="partner-figure" width={260} height={260} className="hidden lg:block absolute left-3 top-2 w-[180px] xl:w-[240px] 2xl:w-[280px] z-20" />
          {/* right-side background image */}
          <div className="absolute inset-y-0 right-0 w-1/3 hidden lg:block -z-10">
            <div className="relative h-full w-full">
              <Image src={ns2Img} alt="decor-bg" fill className="object-cover opacity-20" />
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_30%),radial-gradient(circle_at_right,_rgba(255,255,255,0.03),_transparent_25%)]" />
          <div className="container-x relative py-10 sm:py-12 md:py-16">
            <div className="mx-auto max-w-5xl text-center">
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
                Join Our Partner Ecosystem - You Will be Valued
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg lg:text-xl">
                The success of Eloma is inseparably tied to our relationships. Through our partnership program, we support the emerging needs of our partners and share in both collaboration and success.
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
                    { title: "Benefits", items: selectedProgram.benefits },
                    { title: "Eligibility", items: selectedProgram.eligibility },
                    { title: "Responsibilities", items: selectedProgram.responsibilities }
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
                <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">Our Trusted Partners</h1>
                <p className="mt-6 max-w-xl text-base sm:text-lg text-[#333]">We proudly collaborate with trusted partners and organizations who help us deliver quality, innovation and long-term value.</p>
                <div className="mt-8">
                  <Link href="#become" className="inline-flex items-center gap-3 rounded-full bg-[#08213C] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-md transition-transform hover:scale-105">
                    Become a Partner
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="hidden md:block">
                <div className="rounded-xl bg-[#f8fafb] p-6 shadow-sm">
                  <p className="text-sm text-[#666]">Trusted by</p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {partnerLogos.slice(0, 6).map((src, i) => (
                      <div key={i} className="flex items-center justify-center p-3">
                        <Image src={src} alt={`logo-${i}`} className="h-12 w-auto grayscale transition-all hover:grayscale-0 hover:scale-105" />
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
            <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Brands We Work With</motion.h3>
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
                      <Image src={src} alt={`brand-${i}`} className="h-10 w-auto grayscale transition-all duration-300 hover:grayscale-0" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* PARTNER CARDS */}
        <section className="container-x py-12 md:py-16">
          <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Our Current Partners</motion.h3>

          <motion.div variants={stagger} initial="hidden" whileInView="show" className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <motion.article key={p.name} variants={fadeUp(0.06 * i)} className="group rounded-xl border bg-white p-6 shadow-sm transition-transform hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-[#f6f7f9] p-2">
                    <Image src={p.logo} alt={p.name} className="h-full w-full object-contain transition-transform group-hover:scale-105" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold">{p.name}</h4>
                    <p className="mt-1 text-sm md:text-base text-[#5b6770]">{p.category} • Since {p.since}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-[#444]">{p.desc}</p>

                <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <p className="text-sm md:text-base text-[#6b6f73]">Collaboration: {p.collab}</p>
                  <Link href={p.url} className="inline-flex items-center gap-2 rounded-full bg-[#08213C] px-3 py-2 text-sm font-semibold text-white transition-transform hover:scale-105">Visit Website</Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* WHY PARTNER */}
        <section className="border-t border-b border-[#f2f3f5] py-12">
          <div className="container-x">
            <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Why Partner With Us</motion.h3>

            <motion.div variants={stagger} initial="hidden" whileInView="show" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Trusted Collaboration", desc: "We build partnerships based on transparency and shared goals." },
                { title: "Long-Term Growth", desc: "Collaborate for sustainable value and market expansion." },
                { title: "Shared Innovation", desc: "Joint product development and co-innovation programs." },
                { title: "Strong Market Network", desc: "Access to our distribution and partner network." }
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
          <motion.h3 variants={fadeUp(0)} initial="hidden" whileInView="show" className="font-display text-2xl md:text-3xl font-semibold">Become a Partner</motion.h3>
          <motion.div variants={stagger} initial="hidden" whileInView="show" className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_460px]">
            <div>
              <p className="text-sm sm:text-base md:text-lg text-[#444]">We’re always looking to build strong partnerships with businesses and organizations that share our vision. Join us and grow together through innovation, trust and long-term collaboration.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  'Access to new business opportunities', 'Long-term collaboration', 'Growth-focused partnership', 'Dedicated support', 'Shared success strategy', 'Strong industry network'
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
            <motion.h3 variants={fadeIn} initial="hidden" whileInView="show" className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">Let’s Build Something Great Together</motion.h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#444]">We believe strong partnerships create stronger results. Let’s connect and grow together.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link href="#become" className="rounded-full bg-[#08213C] px-6 py-3 text-sm font-semibold text-white hover:scale-105">Become a Partner</Link>
              <Link href="/contact" className="rounded-full border px-6 py-3 text-sm font-semibold">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
