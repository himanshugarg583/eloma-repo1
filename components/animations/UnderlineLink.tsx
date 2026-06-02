"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface UnderlineLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}

export default function UnderlineLink({
  href,
  children,
  className,
  arrow = true
}: UnderlineLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold text-forest",
        className
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-forest transition-transform duration-500 group-hover:scale-x-0" />
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      {arrow ? (
        <ArrowUpRight
          size={15}
          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </Link>
  );
}
