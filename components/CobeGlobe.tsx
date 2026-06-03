"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── City data ──────────────────────────────────────────────────────── */
const HUB: [number, number] = [-37.8136, 144.9631]; // Melbourne
const CITIES: [number, number][] = [
  [38.9072, -77.0369],
  [43.6532, -79.3832],
  [51.5074, -0.1278],
  [25.2048, 55.2708],
  [28.4595, 77.0266],
  [1.3521, 103.8198],
  [22.3193, 114.1694],
];
const ALL_LOCS = [HUB, ...CITIES];

/* ── Presets ────────────────────────────────────────────────────────── */
type RGB = [number, number, number];
type Preset = {
  label: string;
  dark: number;
  phi: number;
  baseColor: RGB;
  markerColor: RGB;
  glowColor: RGB;
  arcColor: RGB;
  mapBrightness: number;
  diffuse: number;
};

const PRESETS: Preset[] = [
  { label: "GLOBAL NETWORK", dark: 0, phi: 2.2, baseColor: [1, 1, 1], markerColor: [1, .25, .55], glowColor: [.75, .88, 1], arcColor: [.2, .5, 1], mapBrightness: 8, diffuse: 1.4 },
  { label: "NIGHT MODE", dark: 1, phi: 1.8, baseColor: [.05, .1, .22], markerColor: [.3, .85, 1], glowColor: [.06, .18, .45], arcColor: [.3, .85, 1], mapBrightness: 10, diffuse: 1.0 },
  { label: "OCEAN BLUE", dark: 0, phi: 2.0, baseColor: [.82, .94, 1], markerColor: [0, .38, .88], glowColor: [.55, .82, 1], arcColor: [0, .38, .88], mapBrightness: 7, diffuse: 1.3 },
  { label: "GOLD EDITION", dark: 0, phi: 2.5, baseColor: [1, .96, .88], markerColor: [.88, .6, .08], glowColor: [1, .85, .5], arcColor: [.88, .6, .08], mapBrightness: 8, diffuse: 1.4 },
  { label: "DEEP SPACE", dark: 1, phi: 2.2, baseColor: [.02, .04, .14], markerColor: [.6, .4, 1], glowColor: [.1, .06, .3], arcColor: [.6, .4, 1], mapBrightness: 14, diffuse: 0.7 },
  { label: "ASIA PACIFIC", dark: 0, phi: -.5, baseColor: [1, 1, 1], markerColor: [.9, .18, .18], glowColor: [1, .7, .7], arcColor: [.9, .18, .18], mapBrightness: 8, diffuse: 1.4 },
  { label: "ECO VISION", dark: 0, phi: 2.2, baseColor: [.9, 1, .93], markerColor: [.05, .65, .38], glowColor: [.5, .9, .65], arcColor: [.05, .65, .38], mapBrightness: 8, diffuse: 1.3 },
  { label: "PREMIUM DARK", dark: 1, phi: 2.8, baseColor: [.04, .04, .04], markerColor: [.95, .75, .2], glowColor: [.2, .15, .04], arcColor: [.95, .75, .2], mapBrightness: 12, diffuse: 0.75 },
];

/* ── Main component ─────────────────────────────────────────────────── */
export default function CobeGlobe() {
  const [idx, setIdx] = useState(0);
  const total = PRESETS.length;
  const preset = PRESETS[idx];

  /* ── Refs that survive across preset changes ── */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);
  const phiRef = useRef(preset.phi);
  const presetRef = useRef<Preset>(preset);

  /* ── Drag state refs (official cobe v2 pattern) ── */
  const pointerInteracting = useRef<number | null>(null);
  const dragOffset = useRef(0);

  /* Keep presetRef in sync — used inside onRender (no closure stale) */
  useEffect(() => { presetRef.current = preset; }, [preset]);

  /* ── Window-level pointer listeners (official cobe v2 pattern) ──
     pointerdown is on the canvas, but pointermove/pointerup are on
     window so dragging keeps working even when the cursor leaves
     the small circular canvas area.                                  */
  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      dragOffset.current = delta / 200;
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      // Commit the drag offset into phiRef so rotation persists
      phiRef.current += dragOffset.current;
      dragOffset.current = 0;
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  /* ── Globe init / reinit on preset change ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* Reset phi to this preset's starting angle */
    phiRef.current = preset.phi;

    const build = () => {
      const parent = canvas.parentElement;
      const size = parent?.offsetWidth || canvas.offsetWidth;
      if (!size) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;

      /* Destroy previous globe safely */
      if (globeRef.current) {
        try { globeRef.current.destroy(); } catch (_) { }
        globeRef.current = null;
      }

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi: preset.phi,
        theta: 0.2,
        dark: preset.dark,
        diffuse: preset.diffuse,
        mapSamples: 48000,
        mapBrightness: preset.mapBrightness,
        mapBaseBrightness: 0.05,
        baseColor: preset.baseColor,
        markerColor: preset.markerColor,
        glowColor: preset.glowColor,
        arcColor: preset.arcColor,
        arcWidth: 0.5,
        arcHeight: 0.3,
        markers: ALL_LOCS.map((loc) => ({ location: loc, size: 0.06 })),
        arcs: CITIES.map((loc) => ({ from: HUB, to: loc, color: preset.arcColor })),
        onRender(state: Record<string, number>) {
          // Only auto-rotate when not dragging
          if (pointerInteracting.current === null) phiRef.current += 0.004;
          // Apply current phi + live drag offset
          state.phi = phiRef.current + dragOffset.current;
        },
      } as COBEOptions & { onRender: (s: Record<string, number>) => void });

      canvas.style.opacity = "1";
    };

    /* Disconnect any previous ResizeObserver */
    if (roRef.current) { roRef.current.disconnect(); roRef.current = null; }

    const ro = new ResizeObserver(() => {
      /* Only rebuild if canvas is still in the document */
      if (canvas.isConnected) build();
    });
    ro.observe(canvas);
    roRef.current = ro;

    const tid = setTimeout(build, 20);

    return () => {
      clearTimeout(tid);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]); /* re-run only when preset index changes */

  /* ── Final cleanup on unmount ── */
  useEffect(() => {
    return () => {
      roRef.current?.disconnect();
      if (globeRef.current) {
        try { globeRef.current.destroy(); } catch (_) { }
        globeRef.current = null;
      }
    };
  }, []);

  /* ── UI accent colors ── */
  const isDark = preset.dark === 1;
  const accent = isDark ? "#93c5fd" : "#2563eb";
  const dotOn = isDark ? "#93c5fd" : "#2563eb";
  const dotOff = isDark ? "rgba(255,255,255,0.18)" : "#cbd5e1";
  const btnBdr = isDark ? "rgba(147,197,253,0.25)" : "rgba(37,99,235,0.3)";

  return (
    <div className="flex flex-col items-center w-full select-none">

      {/* Preset label */}
      <AnimatePresence mode="wait">
        <motion.p
          key={preset.label}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18 }}
          className="text-[11px] font-bold tracking-[0.3em] mb-3 font-mono"
          style={{ color: accent }}
        >
          {preset.label}
        </motion.p>
      </AnimatePresence>

      {/* Globe + ring wrapper */}
      <div className="relative w-full" style={{ aspectRatio: "1/1" }}>

        {/* Rotating text ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 2 }}>
          <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_28s_linear_infinite]" style={{ opacity: 0.48 }}>
            <defs>
              <path id="elRing" d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0" />
            </defs>
            <text fontSize="6.2" fill={accent} fontFamily="'Courier New',monospace" letterSpacing="2.2" fontWeight="700">
              <textPath href="#elRing">
                ELOMA GROUP · GLOBAL PRESENCE · ELOMA GROUP · GLOBAL PRESENCE ·{" "}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Globe sphere — canvas always stays mounted */}
        <div className="absolute" style={{
          inset: "9%",
          borderRadius: "50%",
          overflow: "hidden",
          zIndex: 1,
          /* Sphere background — light radial so white globe contrasts the page */
          background: preset.dark === 1
            ? "radial-gradient(circle at 38% 32%, #0d2244 0%, #060e24 100%)"
            : "radial-gradient(circle at 38% 32%, #eef4ff 0%, #dce8f8 60%, #c8d8f0 100%)",
          /* 3D depth shadow */
          boxShadow: preset.dark === 1
            ? "0 0 60px rgba(60,100,255,0.18), inset 0 0 40px rgba(0,0,0,0.5)"
            : "0 8px 40px rgba(80,120,200,0.18), inset -8px -8px 30px rgba(120,160,220,0.15)",
        }}>
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block", opacity: 0, transition: "opacity 0.6s ease", cursor: "grab", touchAction: "none" }}
            onPointerDown={(e) => {
              pointerInteracting.current = e.clientX;
              dragOffset.current = 0;
              if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
            }}
          />
        </div>

        {/* City label badges */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, fontFamily: "'Courier New',monospace" }}>
          <div className="absolute flex items-center" style={{ top: "6%", right: "8%" }}>
            <span className="text-white text-[9px] font-bold tracking-[0.15em] px-2 py-0.5 rounded-sm" style={{ background: "rgba(30,60,180,0.88)" }}>MEL → LON</span>
          </div>
          <div className="absolute flex items-center gap-1.5" style={{ top: "38%", left: "2%" }}>
            <span className="text-white text-[9px] font-bold tracking-[0.14em] px-2 py-0.5 rounded-sm" style={{ background: "rgba(30,60,180,0.88)" }}>DUBAI</span>
            <div style={{ width: 10, height: 1, background: "rgba(150,170,255,0.6)" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8" }} />
          </div>
          <div className="absolute flex flex-col items-center gap-0.5" style={{ top: "16%", left: "57%" }}>
            <span className="text-white text-[9px] font-bold tracking-[0.12em] px-2 py-0.5 rounded-sm" style={{ background: "rgba(30,60,180,0.88)" }}>HK</span>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8" }} />
          </div>
          <div className="absolute flex flex-col items-center gap-0.5" style={{ bottom: "17%", left: "52%" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8" }} />
            <span className="text-white text-[9px] font-bold tracking-[0.12em] px-2 py-0.5 rounded-sm" style={{ background: "rgba(30,60,180,0.88)" }}>MELB</span>
          </div>
        </div>
      </div>

      {/* ── Carousel controls ── */}
      <div className="flex items-center gap-[6px] mt-5">
        {PRESETS.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 16 : 8, height: 8, borderRadius: 9999, background: i === idx ? dotOn : dotOff, border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
        ))}
      </div>

      <div style={{ width: 160, height: 2, borderRadius: 9999, background: isDark ? "rgba(255,255,255,0.1)" : "#e2e8f0", marginTop: 8, overflow: "hidden" }}>
        <motion.div
          style={{ height: "100%", borderRadius: 9999, background: dotOn }}
          animate={{ width: `${((idx + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      <div className="flex items-center gap-5 mt-3">
        <button onClick={() => setIdx((i) => (i - 1 + total) % total)}
          style={{ width: 32, height: 32, border: `1px solid ${btnBdr}`, borderRadius: 4, background: "transparent", color: accent, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ChevronLeft size={14} />
        </button>
        <span className="font-mono font-bold text-[11px] tracking-widest" style={{ color: accent }}>
          {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button onClick={() => setIdx((i) => (i + 1) % total)}
          style={{ width: 32, height: 32, border: `1px solid ${btnBdr}`, borderRadius: 4, background: "transparent", color: accent, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ChevronRight size={14} />
        </button>
      </div>

      <p className="font-mono text-[9px] tracking-[0.25em] mt-2" style={{ color: accent, opacity: 0.4 }}>ELOMA V2</p>
    </div>
  );
}
