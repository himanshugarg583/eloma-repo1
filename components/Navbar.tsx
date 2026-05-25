"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";

import {
  navAbout,
  navBusinesses,
  navCareers,
  navContact,
  navMedia,
  navSustainability
} from "@/lib/data";
import logoMark from "@/assset/logo/eloma_logo-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollY } from "@/hooks/useScrollY";

type MenuKey =
  | "about"
  | "businesses"
  | "sustainability"
  | "media"
  | "careers"
  | "contact"
  | null;

const navItems: Array<{ key: Exclude<MenuKey, null>; label: string; href: string }> = [
  { key: "about", label: "About Us", href: "#about" },
  { key: "businesses", label: "Our Businesses", href: "#subsidiaries" },
  { key: "sustainability", label: "Sustainability", href: "#" },
  { key: "media", label: "Media", href: "#blogs" },
  { key: "careers", label: "Careers", href: "#career" },
  { key: "contact", label: "Contact Us", href: "#contact" }
];

const phoneNumber = "1800 710 388";
const phoneHref = "tel:1800710388";

const navMenu: Record<Exclude<MenuKey, null>, {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}> = {
  about: {
    eyebrow: "About Us",
    title: "Group overview and leadership",
    description: "A legacy of stewardship, governance, and long-term value creation.",
    items: navAbout,
    ctaLabel: "Explore Group",
    ctaHref: "#about"
  },
  businesses: {
    eyebrow: "Our Businesses",
    title: "Eight focused operating platforms",
    description: "Diversified businesses delivering scale across critical sectors.",
    items: navBusinesses,
    ctaLabel: "View Companies",
    ctaHref: "#subsidiaries"
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Building trust through ESG",
    description: "Programs that strengthen communities and drive responsible growth.",
    items: navSustainability,
    ctaLabel: "Our ESG Focus",
    ctaHref: "#"
  },
  media: {
    eyebrow: "Media",
    title: "News and recognition",
    description: "Updates, announcements, and awards across the group.",
    items: navMedia,
    ctaLabel: "Visit Newsroom",
    ctaHref: "#blogs"
  },
  careers: {
    eyebrow: "Careers",
    title: "Work with the group",
    description: "Opportunities across operations, strategy, and innovation.",
    items: navCareers,
    ctaLabel: "View Openings",
    ctaHref: "#career"
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Connect with our teams",
    description: "Reach corporate offices or local branch teams quickly.",
    items: navContact,
    ctaLabel: "Get in touch",
    ctaHref: "#contact"
  }
};

function MegaMenu({ menuKey }: { menuKey: MenuKey }) {
  if (!menuKey) {
    return null;
  }

  const menu = navMenu[menuKey];
  const useTwoColumns = menu.items.length > 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-0 right-0 top-full z-40 border-b border-slate-200 bg-white shadow-lg"
    >
      <div className="container-x grid gap-10 py-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">{menu.eyebrow}</p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-forest">
            {menu.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            {menu.description}
          </p>
          <Button asChild className="mt-6" size="sm">
            <Link href={menu.ctaHref}>{menu.ctaLabel}</Link>
          </Button>
        </div>
        <ul
          className={cn(
            "grid gap-x-8 gap-y-3 text-sm",
            useTwoColumns ? "grid-cols-2" : "grid-cols-1"
          )}
        >
          {menu.items.map((item) => (
            <li key={item}>
              <Link
                href={menu.ctaHref}
                className="group flex items-center justify-between border-b border-slate-100 py-2 font-medium text-slate-700 transition-colors hover:text-forest"
              >
                <span>{item}</span>
                <span className="translate-x-0 text-gold opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollY(20);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full bg-white transition-all duration-200",
        isScrolled
          ? "border-b border-slate-200 shadow-sm"
          : "border-b border-slate-100"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Top utility bar */}
      <div className="hidden border-b border-slate-100 bg-slate-50 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-5">
            <span>Global Group Company</span>
            <span className="text-slate-300">|</span>
            <Link href="#" className="transition-colors hover:text-forest">
              Investor Relations
            </Link>
            <Link href="#" className="transition-colors hover:text-forest">
              Newsroom
            </Link>
            <Link href="#" className="transition-colors hover:text-forest">
              Sustainability
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href={phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-forest"
            >
              <Phone size={12} />
              <span>{phoneNumber}</span>
            </Link>
            <Link href="#" className="transition-colors hover:text-forest">
              EN
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="#home" className="flex items-center">
          <Image
            src={logoMark}
            alt="Eloma Group"
            className="h-12 w-auto md:h-14"
            priority
            sizes="140px"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={cn(
                "group relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-forest",
                activeMenu === item.key && "text-forest"
              )}
              onMouseEnter={() => setActiveMenu(item.key)}
            >
              <span>{item.label}</span>
              <ChevronDown
                size={14}
                className={cn(
                  "text-slate-400 transition-transform duration-200",
                  activeMenu === item.key && "rotate-180 text-forest"
                )}
              />
              <span
                className={cn(
                  "absolute -bottom-0.5 left-3 right-3 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300",
                  activeMenu === item.key && "scale-x-100"
                )}
              />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-forest"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <Button size="sm">Request a Quote</Button>
        </div>

        <button
          className="flex items-center justify-center rounded-md border border-slate-200 p-2 text-forest lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>{activeMenu && <MegaMenu menuKey={activeMenu} />}</AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="container-x space-y-5 py-6">
              {navItems.map((item) => (
                <details
                  key={item.key}
                  className="group border-b border-slate-100 pb-4"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-forest">
                    {item.label}
                    <ChevronDown
                      size={16}
                      className="text-slate-400 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="mt-3 space-y-2 pl-2 text-sm text-slate-600">
                    {navMenu[item.key].items.map((entry) => (
                      <li key={entry}>
                        <Link
                          href={navMenu[item.key].ctaHref}
                          className="block py-1 transition-colors hover:text-forest"
                        >
                          {entry}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href={phoneHref}
                  className="flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-forest"
                >
                  <Phone size={14} />
                  <span>{phoneNumber}</span>
                </Link>
                <Button size="lg">Request a Quote</Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
