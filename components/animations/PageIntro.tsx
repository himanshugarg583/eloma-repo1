"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import introLogo from "@/assset/logo/icon.png";

export default function PageIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 2200);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-forest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="relative flex items-center justify-center">
                <motion.svg
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  className="absolute"
                  initial={{ rotate: -10, opacity: 0.9 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <defs>
                    <linearGradient id="g1" x1="0%" x2="100%">
                      <stop offset="0%" stopColor="#E0C28A" />
                      <stop offset="100%" stopColor="#FFD88C" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="12"
                    fill="none"
                  />
                  <motion.circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="url(#g1)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="339.292"
                    initial={{ strokeDashoffset: 339.292 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
                  />
                </motion.svg>

                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  <Image src={introLogo} alt="Eloma" width={96} height={96} />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75"
              >
                Powering Businesses
              </motion.p>
            </motion.div>
          </div>

          {/* Curtain reveal layer */}
          <motion.div
            initial={{ y: "100%" }}
            exit={{
              y: "0%",
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute inset-0 -z-10 bg-white"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
