"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <p className="font-display text-3xl font-semibold tracking-wide text-white md:text-5xl">
                Eloma <span className="text-gold">Group</span>
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60">
                Powering Businesses
              </p>
            </motion.div>

            <div className="mt-4 h-px w-44 overflow-hidden bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
                className="h-full w-full bg-gold"
              />
            </div>
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
