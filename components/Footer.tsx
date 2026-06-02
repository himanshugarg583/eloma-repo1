import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";

import { groupName } from "@/lib/data";
import logoFull from "@/assset/New Eloma Group Logo/PNG/Final Eloma Group Logo white.png";

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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
</svg>
   
  );
}

function TiktokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
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
            <div className="flex items-center gap-3 rounded-md px-[11] py-[-11] w-fit">
              <Image
                src={logoFull}
                alt={`${groupName} logo`}
                className="h-32 w-32 md:h-32"
                sizes="560px"
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
                  className="flex h-9 w-9 3xl:h-11 3xl:w-11 4xl:h-12 4xl:w-12 items-center justify-center rounded-md border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-forest"
                >
                  <social.icon size={15} className="3xl:h-[18px] 3xl:w-[18px] 4xl:h-5 4xl:w-5" />
                </a>
              ))}
              <a
                href="https://www.threads.com/@eloma_group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="flex h-9 w-9 3xl:h-11 3xl:w-11 4xl:h-12 4xl:w-12 items-center justify-center rounded-md border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-forest"
              >
                <ThreadsIcon />
              </a>
              <a
                href="https://www.tiktok.com/@eloma_group_6?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 3xl:h-11 3xl:w-11 4xl:h-12 4xl:w-12 items-center justify-center rounded-md border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-forest ml-2"
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
            © {new Date().getFullYear()} {groupName}. All rights reserved. ABN:  69 683 543 713
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
