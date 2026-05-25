"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

import {
  groupName,
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

const navItems: Array<{ key: Exclude<MenuKey, null>; label: string }> = [
  { key: "about", label: "About Us" },
  { key: "businesses", label: "Our Businesses" },
  { key: "sustainability", label: "Sustainability" },
  { key: "media", label: "Media" },
  { key: "careers", label: "Careers" },
  { key: "contact", label: "Contact Us" }
];

const phoneNumber = "1800 710 388";
const phoneHref = "tel:1800710388";

const navMenu: Record<Exclude<MenuKey, null>, {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  ctaLabel?: string;
  ctaHref?: string;
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
    title: "Six focused operating platforms",
    description: "Diversified businesses delivering scale across critical sectors.",
    items: navBusinesses,
    ctaLabel: "View Companies",
    ctaHref: "#subsidiaries"
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Building trust through ESG",
    description: "Programs that strengthen communities and responsible growth.",
    items: navSustainability,
    ctaLabel: "ESG Focus",
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
    ctaLabel: "Contact Form",
    ctaHref: "#contact"
  }
};

function MegaMenu({ menuKey }: { menuKey: MenuKey }) {
  if (!menuKey) {
    return null;
  }

  const menu = navMenu[menuKey];
  const listColumns = menu.items.length > 6 ? "grid-cols-2" : "grid-cols-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      className="absolute left-0 right-0 top-full z-40"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="glass-panel mt-4 grid w-full grid-cols-2 gap-6 rounded-3xl bg-white p-8 text-sm text-forest/80 shadow-xl backdrop-blur-0">
          <ul className={cn("grid gap-x-8 gap-y-3", listColumns)}>
            {menu.items.map((item) => (
              <li key={item} className="font-medium text-forest/90">
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-forest/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-forest/60">
              {menu.eyebrow}
            </p>
            <p className="mt-4 text-lg font-semibold text-forest">
              {menu.title}
            </p>
            <p className="mt-3 text-sm text-forest/70">{menu.description}</p>
            {menu.ctaLabel && menu.ctaHref ? (
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link href={menu.ctaHref}>{menu.ctaLabel}</Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollY(32);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full px-3 pt-3 transition-all sm:px-4 sm:pt-4 md:px-6",
        isScrolled ? "" : ""
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div
        className={cn(
          "relative mx-auto flex max-w-[900px] items-center justify-between rounded-full border border-forest/10 bg-white/95 px-4 py-2 backdrop-blur sm:px-5 sm:py-3",
          isScrolled
            ? "shadow-2xl shadow-forest/20"
            : "shadow-[0_18px_50px_-30px_rgba(12,47,42,0.45)]"
        )}
      >
        <span className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <Link href="#home" className="group flex items-center">
          <span className="flex items-center">
            <Image
              src={logoMark}
              alt="Eloma Group logo"
              className="h-22 w-auto sm:h-14"
              priority
              sizes="120px"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex 2xl:gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              className="group relative whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-forest/70"
              onMouseEnter={() => setActiveMenu(item.key)}
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={phoneHref}
            className="flex items-center gap-2 rounded-full border border-forest/10 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-forest/80 transition-colors hover:border-forest/30"
          >
            <Phone size={16} className="text-forest/70" />
            <span>{phoneNumber}</span>
          </Link>
          <Button size="lg">Request a Quote</Button>
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-forest/10 p-2 text-forest lg:hidden"
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mt-4 rounded-3xl border border-forest/10 bg-white/95 px-6 py-6 shadow-lg backdrop-blur lg:hidden"
          >
            <div className="space-y-6">
              {navItems.map((item) => (
                <div key={item.key} className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                    {item.label}
                  </p>
                  <ul className="space-y-2 text-sm text-forest">
                    {navMenu[item.key].items.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col gap-3">
                <Link
                  href={phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-forest/10 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest/80"
                >
                  <Phone size={16} className="text-forest/70" />
                  <span>{phoneNumber}</span>
                </Link>
                <Button size="lg">Request a Quote</Button>
                <Link href="#career" className="text-sm font-medium text-forest">
                  Careers
                </Link>
                <Link href="#contact" className="text-sm font-medium text-forest">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
