import Image from "next/image";
import Link from "next/link";

import { groupName } from "@/lib/data";
import logoFull from "@/assset/logo/eloma logo.jpeg";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src={logoFull}
              alt="Eloma Group logo"
              className="h-10 w-auto"
              sizes="120px"
            />
            <p className="font-display text-lg text-forest">{groupName}</p>
          </div>
          <p className="text-sm text-forest/70">
            Building global businesses with vision, scale, and excellence.
          </p>
          <p className="text-sm text-forest/70">ABN: 00 000 000 000</p>
        </div>
        <div className="space-y-3 text-sm text-forest/70">
          <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
            Partnerships
          </p>
          <ul className="space-y-2">
            <li>Become a Partner</li>
            <li>Customer Login</li>
            <li>Vendor Login</li>
            <li>Toll Free: 1800 000 000</li>
          </ul>
        </div>
        <div className="space-y-3 text-sm text-forest/70">
          <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
            Social
          </p>
          <ul className="space-y-2">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
            Lead Form
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-full border border-forest/10 px-4 py-2 text-sm"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-full border border-forest/10 px-4 py-2 text-sm"
            />
            <Button size="lg">Submit</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-forest/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-forest/60 md:flex-row md:items-center">
          <p>Copyright {new Date().getFullYear()} {groupName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
