"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import logoIcon from "@/assset/New Eloma Group Logo/JPEG/Final Eloma Group icon white.jpg";
import logoText from "@/assset/New Eloma Group Logo/JPEG/Final Eloma Group Logo white.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  { key: "sustainability", label: "Sustainability", href: "/sustainability" },
  { key: "careers", label: "Careers", href: "/careers" },
  { key: "contact", label: "Contact Us", href: "/contact" }
];

const dropdownMenuKeys: Exclude<MenuKey, null>[] = ["about", "businesses", "sustainability"];
const phoneNumber = "1800 054 555";
const phoneHref = "tel:1800 054 555";

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
    ctaHref: "/sustainability"
  },
  careers: {
    eyebrow: "Careers",
    title: "Grow with Eloma",
    description: "Learn, grow, and build something meaningful with a global team.",
    items: navCareers,
    ctaLabel: "View Openings",
    ctaHref: "/careers"
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

        {/* Render items grouped by header in columns (vertical lists per header) */}
        {(() => {
          const groups: Array<{ header: string; items: { label: string; href?: string }[] }> = [];
          let current: { header: string; items: { label: string; href?: string }[] } | null = null;

          menu.items.forEach((it) => {
            if (typeof it === "object" && it.type === "header") {
              current = { header: it.label, items: [] };
              groups.push(current);
            } else {
              const label = getLabel(it);
              const href = typeof it === "object" && (it as any).href ? (it as any).href : undefined;
              if (!current) {
                current = { header: "", items: [] };
                groups.push(current);
              }
              current.items.push({ label, href });
            }
          });

          return (
            <div className="grid grid-cols-1 gap-8 text-[15px] sm:grid-cols-2 lg:grid-cols-2">
              {groups.map((g) => (
                <div key={g.header}>
                  <div className="pt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {g.header}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <Link
                          href={it.href ?? menu.ctaHref}
                          className="block border-b border-slate-100 py-2 font-medium text-black transition-colors hover:text-black"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Logo click: if already on the home page, jump straight to the hero (#top)
  // instead of letting Next.js no-op the same-route navigation. Otherwise the
  // <Link href="/"> handles normal navigation back home.
  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      setMobileOpen(false);
      const hero = document.getElementById("top");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full bg-white shadow-sm transition-all duration-300"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* <div className="border-b border-slate-200 bg-white lg:block"> */}
      {/* <div className="container-x flex h-9 items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-5">
            <span>Global Group Company</span>
            <span className="text-slate-300">|</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href={phoneHref} className="flex items-center gap-2 transition-colors hover:text-forest">
              <Phone size={12} />
              <span>{phoneNumber}</span>
            </Link>
            <Link href="#" className="transition-colors hover:text-forest">
              EN
            </Link>
          </div>
        </div> */}
      {/* </div> */}

      <div className="container-x flex h-16 items-center justify-between md:h-20 3xl:h-24 4xl:h-28">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-1.5 md:gap-1 3xl:gap-0"
        >
          <Image
            src={logoIcon}
            alt="Eloma Group"
            className="h-12 w-auto md:h-14 3xl:h-16 4xl:h-20 -pr-10"
            priority
            sizes="90px"
          />
          <Image
            src={logoText}
            alt="Eloma Group"
            className="h-9 w-auto md:h-11 3xl:h-12 4xl:h-14 pt-2 -pl-20"
            priority
            sizes="240px"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const hasDropdown = dropdownMenuKeys.includes(item.key);

            if (!hasDropdown) {
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className="relative px-3 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-forest md:text-base 3xl:text-[17px] 4xl:text-[19px] 3xl:px-4"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <button
                key={item.key}
                className={cn(
                  "group relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-forest md:text-base 3xl:text-[17px] 4xl:text-[19px] 3xl:px-4",
                  activeMenu === item.key && "text-forest"
                )}
                onMouseEnter={() => setActiveMenu(item.key)}
                type="button"
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={14}
                  className={cn("text-slate-500 transition-transform duration-200", activeMenu === item.key && "rotate-180 text-forest")}
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

        <div className="hidden items-center gap-2 3xl:gap-3 lg:flex">
          <button
            className={cn(
              "rounded-md p-2 3xl:p-2.5 4xl:p-3 transition-colors",
              "text-slate-600 hover:bg-slate-100 hover:text-forest"
            )}
            aria-label="Search"
            type="button"
          >
            <Search size={18} className="3xl:h-5 3xl:w-5 4xl:h-6 4xl:w-6" />
          </button>
          <Button asChild size="sm" className="bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-100 3xl:h-11 3xl:px-5 3xl:text-[15px] 4xl:h-12 4xl:px-6 4xl:text-base">
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" className={cn("bg-forest text-white hover:bg-forest/90 3xl:h-11 3xl:px-5 3xl:text-[15px] 4xl:h-12 4xl:px-6 4xl:text-base")}>
            1800 054 555
          </Button>
        </div>

        <button
          className={cn(
            "flex items-center justify-center rounded-md border p-2 lg:hidden",
            "border-slate-200 text-forest"
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
                        const isObj = typeof entry === "object";
                        const label = isObj ? (entry as any).label : (entry as any);

                        if (isObj && (entry as any).type === "header") {
                          return (
                            <li key={label} className="pt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                              {label}
                            </li>
                          );
                        }

                        const href = isObj && (entry as any).href ? (entry as any).href : navMenu[item.key].ctaHref;

                        return (
                          <li key={label}>
                            <Link href={href} className="block py-1 text-black transition-colors hover:text-black">
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
                <Link href="/login" className="flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-black">
                  Login
                </Link>
                <Link
                  href={phoneHref}
                  className="flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-forest"
                >
                  <Phone size={14} />
                  <span>{phoneNumber}</span>
                </Link>
                <Button size="lg" className="bg-forest text-white">
                  1800 054 555
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
