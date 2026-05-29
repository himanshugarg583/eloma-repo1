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
  navSustainability
} from "@/lib/data";
import logoMark from "@/assset/logo/eloma_logo-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollY } from "@/hooks/useScrollY";

type MenuKey = "about" | "businesses" | "sustainability" | "careers" | "contact" | null;

type MenuItem =
  | string
  | {
      type: "header" | "item";
      label: string;
    };

const navItems: Array<{ key: Exclude<MenuKey, null>; label: string; href: string }> = [
  { key: "about", label: "About Us", href: "/about" },
  { key: "businesses", label: "Our Businesses", href: "#subsidiaries" },
  { key: "sustainability", label: "Sustainability", href: "#services" },
  { key: "careers", label: "Careers", href: "#career" },
  { key: "contact", label: "Contact Us", href: "/contact" }
];

const dropdownMenuKeys: Exclude<MenuKey, null>[] = ["about", "businesses"];
const phoneNumber = "1800 710 388";
const phoneHref = "tel:1800710388";

const navMenu: Record<
  Exclude<MenuKey, null>,
  {
    eyebrow: string;
    title: string;
    description: string;
    items: MenuItem[];
    ctaLabel: string;
    ctaHref: string;
  }
> = {
  about: {
    eyebrow: "About Us",
    title: "Who we are and how we lead",
    description: "A unified group driven by innovation, scalability, and sustainable growth.",
    items: navAbout,
    ctaLabel: "Explore Group",
    ctaHref: "/about"
  },
  businesses: {
    eyebrow: "Our Businesses",
    title: "Focused business verticals",
    description: "Logistics, digital innovation, security, travel, and customer solutions working as one.",
    items: navBusinesses,
    ctaLabel: "View Companies",
    ctaHref: "#subsidiaries"
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Responsible growth",
    description: "Eco-conscious operations, ethical practices, and long-term impact.",
    items: navSustainability,
    ctaLabel: "Our ESG Focus",
    ctaHref: "#services"
  },
  careers: {
    eyebrow: "Careers",
    title: "Grow with Eloma",
    description: "Learn, grow, and build something meaningful with a global team.",
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
    ctaHref: "/contact"
  }
};

function MegaMenu({ menuKey }: { menuKey: MenuKey }) {
  if (!menuKey) return null;

  const menu = navMenu[menuKey];
  const isHeader = (item: MenuItem) => typeof item === "object" && item.type === "header";
  const getLabel = (item: MenuItem) => (typeof item === "string" ? item : item.label);
  const itemCount = menu.items.filter((item) => !isHeader(item)).length;
  const useTwoColumns = itemCount > 5;

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
          <p className="eyebrow text-slate-500">{menu.eyebrow}</p>
          <h3 className="mt-4 font-display text-[22px] font-semibold text-slate-900">{menu.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{menu.description}</p>
          <Button asChild className="mt-6" size="sm">
            <Link href={menu.ctaHref}>{menu.ctaLabel}</Link>
          </Button>
        </div>

        <ul className={cn("grid gap-x-8 gap-y-3 text-[15px]", useTwoColumns ? "grid-cols-2" : "grid-cols-1")}>
          {menu.items.map((item) => {
            const label = getLabel(item);

            if (isHeader(item)) {
              return (
                <li
                  key={label}
                  className={cn(
                    "pt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400",
                    useTwoColumns && "col-span-2"
                  )}
                >
                  {label}
                </li>
              );
            }

            return (
              <li key={label}>
                <Link
                  href={menu.ctaHref}
                  className="group flex items-center justify-between border-b border-slate-100 py-2 font-medium text-black transition-colors hover:text-black"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1">{label}</span>
                  <span className="translate-x-0 text-black opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollY(20);
  const isTransparent = !isScrolled;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-all duration-300",
        isTransparent ? "absolute bg-transparent" : "fixed bg-white shadow-sm"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {isTransparent ? (
        <div className="hidden bg-white/5 lg:block">
          <div className="container-x flex h-9 items-center justify-between text-xs text-white/80">
            <div className="flex items-center gap-5">
              <span>Global Group Company</span>
              <span className="text-white/30">|</span>
            </div>
            <div className="flex items-center gap-5">
              <Link href={phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone size={12} />
                <span>{phoneNumber}</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                EN
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center">
          <span
            className={cn(
              "inline-flex items-center rounded-md px-2 py-1 transition-colors",
              isTransparent ? "bg-white/90 shadow-sm" : "bg-transparent"
            )}
          >
            <Image src={logoMark} alt="Eloma Group" className="h-10 w-auto md:h-12" priority sizes="140px" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const hasDropdown = dropdownMenuKeys.includes(item.key);

            if (!hasDropdown) {
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className="relative px-3 py-2 text-[15px] font-medium text-black transition-colors hover:text-black md:text-base"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <button
                key={item.key}
                className={cn(
                  "group relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-black transition-colors hover:text-black md:text-base",
                  activeMenu === item.key && "text-black"
                )}
                onMouseEnter={() => setActiveMenu(item.key)}
                type="button"
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={14}
                  className={cn("text-black transition-transform duration-200", activeMenu === item.key && "rotate-180 text-black")}
                />
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-3 right-3 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300",
                    activeMenu === item.key && "scale-x-100"
                  )}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            className={cn(
              "rounded-md p-2 transition-colors",
              isTransparent ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-forest"
            )}
            aria-label="Search"
            type="button"
          >
            <Search size={18} />
          </button>
          <Button size="sm" className={cn(isTransparent ? "bg-white text-forest hover:bg-white/90" : "bg-forest text-white hover:bg-forest/90")}>
            Request a Quote
          </Button>
        </div>

        <button
          className={cn(
            "flex items-center justify-center rounded-md border p-2 lg:hidden",
            isTransparent ? "border-white/40 text-white" : "border-slate-200 text-forest"
          )}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          type="button"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {activeMenu && dropdownMenuKeys.includes(activeMenu) ? <MegaMenu menuKey={activeMenu} /> : null}
      </AnimatePresence>

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
              {navItems.map((item) => {
                const hasDropdown = dropdownMenuKeys.includes(item.key);

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="flex items-center justify-between border-b border-slate-100 pb-4 text-sm font-semibold text-black"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <details key={item.key} className="group border-b border-slate-100 pb-4">
                    <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-black">
                      {item.label}
                      <ChevronDown size={16} className="text-slate-400 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-3 space-y-2 pl-2 text-sm text-slate-600">
                      {navMenu[item.key].items.map((entry) => {
                        const label = typeof entry === "string" ? entry : entry.label;

                        if (typeof entry === "object" && entry.type === "header") {
                          return (
                            <li key={label} className="pt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                              {label}
                            </li>
                          );
                        }

                        return (
                          <li key={label}>
                            <Link href={navMenu[item.key].ctaHref} className="block py-1 text-black transition-colors hover:text-black">
                              {label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                );
              })}

              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href={phoneHref}
                  className="flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-forest"
                >
                  <Phone size={14} />
                  <span>{phoneNumber}</span>
                </Link>
                <Button size="lg" className="bg-forest text-white">
                  Request a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
