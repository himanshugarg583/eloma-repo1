"use client";

import { PageTransition } from "@/components/PageTransition";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <PageTransition>{children}</PageTransition>
      <CustomCursor />
    </SmoothScrollProvider>
  );
}
