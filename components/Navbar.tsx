"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

import {
  groupName,
  navIndustries,
  navLocations,
  navServices,
  navWhyUs
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollY } from "@/hooks/useScrollY";

type MenuKey = "services" | "why" | "industries" | "locations" | null;

const navItems = [
  { key: "services" as const, label: "Services" },
  { key: "why" as const, label: "Why Us" },
  { key: "industries" as const, label: "Industries" }
];

const phoneNumber = "1800 710 388";
const phoneHref = "tel:1800710388";

function MegaMenu({ menuKey }: { menuKey: MenuKey }) {
  const baseItems =
    menuKey === "services"
      ? navServices
      : menuKey === "why"
      ? navWhyUs
      : menuKey === "industries"
      ? navIndustries
      : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      className="absolute left-0 right-0 top-full z-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel mt-4 grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 text-sm text-forest/80 shadow-xl backdrop-blur-0">
          {menuKey === "locations" ? (
            <div className="grid grid-cols-2 gap-6">
              {navLocations.map((location) => (
                <div key={location.country} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-forest/60">
                    {location.country}
                  </p>
                  <ul className="space-y-1">
                    {location.cities.map((city) => (
                      <li key={city} className="font-medium text-forest">
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {baseItems.map((item) => (
                <li key={item} className="font-medium text-forest/90">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="rounded-2xl border border-forest/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-forest/60">
              Global excellence
            </p>
            <p className="mt-4 text-lg font-semibold text-forest">
              Delivering premium logistics with cinematic precision.
            </p>
            <p className="mt-3 text-sm text-forest/70">
              Explore our group capabilities, experience, and partner network.
            </p>
            <div className="mt-6 flex gap-3">
              <Button size="lg">Explore Group</Button>
              <Button variant="outline" size="lg">
                View Companies
              </Button>
            </div>
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
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-forest/10 bg-white/90 px-4 py-2 backdrop-blur sm:px-5 sm:py-3",
          isScrolled ? "shadow-2xl shadow-forest/20" : "shadow-xl shadow-forest/10"
        )}
      >
        <Link href="#home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 text-lg font-semibold text-forest sm:h-10 sm:w-10">
            E
          </span>
          <span className="font-display text-sm tracking-[0.12em] text-forest sm:text-lg sm:tracking-[0.16em]">
            {groupName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              className="group relative text-xs font-semibold uppercase tracking-[0.22em] text-forest/70"
              onMouseEnter={() => setActiveMenu(item.key)}
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          ))}
          <Link
            href="#career"
            className="group relative text-xs font-semibold uppercase tracking-[0.22em] text-forest/70"
          >
            <span className="relative">
              Career
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
          <button
            className="group relative text-xs font-semibold uppercase tracking-[0.22em] text-forest/70"
            onMouseEnter={() => setActiveMenu("locations")}
          >
            <span className="relative">
              Contact
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </span>
          </button>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={phoneHref}
            className="flex items-center gap-2 rounded-full border border-forest/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest/80 transition-colors hover:border-forest/30"
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
                    {(item.key === "services"
                      ? navServices
                      : item.key === "why"
                      ? navWhyUs
                      : navIndustries
                    ).map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                  Contact locations
                </p>
                <ul className="space-y-3 text-sm text-forest">
                  {navLocations.map((location) => (
                    <li key={location.country}>
                      <span className="font-semibold">{location.country}</span>
                      <span className="block text-forest/70">
                        {location.cities.join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
                  Career
                </Link>
                <Link href="#contact" className="text-sm font-medium text-forest">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
