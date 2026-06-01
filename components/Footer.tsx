import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";

import { groupName } from "@/lib/data";
import logoFull from "@/assset/logo/eloma_logo-removebg-preview.png";

const linkColumns = [
  {
    title: "About",
    links: ["Group Overview", "Leadership", "Our Journey", "Vision & Values", "Milestones"]
  },
  {
    title: "Businesses",
    links: [
      "Logistics & Transportation",
      "Digital & Technology",
      "Security & Risk",
      "Travel & Tourism",
      "Customer Support"
    ]
  },
  {
    title: "Resources",
    links: ["News & Press", "Leadership", "Sustainability", "Careers", "Contact"]
  },
  {
    title: "Support",
    links: ["Contact Us", "Customer Login", "Vendor Login", "Become a Partner", "FAQ"]
  }
];

// Additional company names provided by the design/content team
const companies = [
  "EG Digital Australia",
  "EG Foundations",
  "EG Imports",
  "EG Transport",
  "EG Travels"
];

// Build a combined, alphabetically sorted set of columns and links
const footerColumns = [
  ...linkColumns,
  { title: "Companies", links: companies }
]
  .map((col) => ({ ...col, links: (col.links || []).slice().sort((a, b) => a.localeCompare(b)) }))
  .sort((a, b) => a.title.localeCompare(b.title));

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/elomagroup/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/elomagroup2026", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/eloma_group/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/61572138328088/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@elomagroup", label: "YouTube" }
];

function ThreadsIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5c-4.136 0-7.5 3.364-7.5 7.5 0 4.136 3.364 7.5 7.5 7.5 4.136 0 7.5-3.364 7.5-7.5V9.25s-1.75.75-3 1.25v.5c0 2.485-2.015 4.5-4.5 4.5-2.485 0-4.5-2.015-4.5-4.5 0-2.485 2.015-4.5 4.5-4.5.25 0 .5.02.75.06V3.5c-.24-.02-.49-.03-.75-.03z" fill="currentColor" />
    </svg>
  );
}

function TiktokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 6.5a4.5 4.5 0 0 1-4.5-4.5v8.5c0 2.485-2.015 4.5-4.5 4.5-1.24 0-2.36-.49-3.18-1.28v2.03A6.5 6.5 0 0 0 12 21.5c3.59 0 6.5-2.91 6.5-6.5V6.5h-1z" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.5fr]">
          {/* Brand block */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 rounded-md bg-white/95 px-3 py-2 w-fit">
              <Image
                src={logoFull}
                alt={`${groupName} logo`}
                className="h-10 w-auto md:h-12"
                sizes="160px"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Powering businesses across logistics, digital innovation, security, travel, and customer solutions - driven by purpose and sustainability.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <a href="tel:1800 054 555" className="flex items-center gap-2 transition-colors hover:text-gold">
                <Phone size={14} />
                <span>1800 710 388</span>
              </a>
              <a href="mailto:contact@elomagroup.com.au" className="flex items-center gap-2 transition-colors hover:text-gold">
                <Mail size={14} />
                <span>contact@elomagroup.com.au</span>
              </a>
            </div>
            <div className="flex gap-2 pt-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-forest"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
                <a
                  href="https://www.threads.com/@eloma_group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-forest"
                >
                  <ThreadsIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@eloma_group_6?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-forest ml-2"
                >
                  <TiktokIcon />
                </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {column.title}
                </p>
                <ul className="space-y-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-white/70 transition-colors hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x grid grid-cols-1 items-center gap-3 py-6 text-xs text-white/60 md:grid-cols-3">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {groupName}. All rights reserved. ABN: 00 000 000 000
          </p>

          <p className="text-center">
            Made by <a href="https://egdigital.com.au/" target="_blank" rel="noopener noreferrer" className="text-white/80  hover:text-gold">EG Digital</a>
          </p>

          <div className="flex justify-center md:justify-end flex-wrap gap-x-5 gap-y-2">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Cookie Settings
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Modern Slavery Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
