import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import AboutGroup from "@/sections/AboutGroup";
import Blog from "@/sections/Blog";
import CaseStudies from "@/sections/CaseStudies";
import Careers from "@/sections/Careers";
import Contact from "@/sections/Contact";
import GlobalPresence from "@/sections/GlobalPresence";
import Hero from "@/sections/Hero";
import Industries from "@/sections/Industries";
import Investors from "@/sections/Investors";
import Services from "@/sections/Services";
import Subsidiaries from "@/sections/Subsidiaries";

export default function Home() {
  return (
    <div className="relative bg-white">
      <Navbar />
      <main className="pt-24 md:pt-20">
        <Hero />
        <AboutGroup />
        <Subsidiaries />
        <Services />
        <Industries />
        <GlobalPresence />
        <CaseStudies />
        <Blog />
        <Investors />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
