"use client";

import { PageTransition } from "@/components/PageTransition";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import PageIntro from "@/components/animations/PageIntro";
import ScrollProgress from "@/components/animations/ScrollProgress";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <PageIntro />
      <ScrollProgress />
      <PageTransition>{children}</PageTransition>
    </SmoothScrollProvider>
  );
}
