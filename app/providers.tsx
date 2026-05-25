"use client";

import { PageTransition } from "@/components/PageTransition";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <PageTransition>{children}</PageTransition>
    </SmoothScrollProvider>
  );
}
