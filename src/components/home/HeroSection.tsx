"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const PrimalMonolith = dynamic(() => import("../3d/PrimalMonolith"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  return (
    <section className="relative h-[819px] border-b border-white/10 grid-blueprint overflow-hidden flex flex-col justify-center items-center">
      {/* Coordinate Markers */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 font-label-mono-sm text-primary/40 space-y-1"
      >
        <div>SEC_ALPHA: 88.01.44</div>
        <div>LAT: 40.7128 N</div>
        <div>LNG: 74.0060 W</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-8 right-8 font-label-mono-sm text-primary/40 text-right space-y-1"
      >
        <div>CORE_TEMP: 42.4°C</div>
        <div>UPTIME: 144:12:09</div>
        <div>FREQ: 5.4 GHZ</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 left-8 font-label-mono-sm text-primary/40"
      >
        <div className="flex gap-4 items-center">
          <span className="w-12 h-px bg-primary/40"></span>
          SYSTEM_OVERSIGHT_ACTIVE
        </div>
      </motion.div>

      {/* 3D Monolith */}
      <PrimalMonolith />

      {/* Floating Overlay Data – mix-blend-mode difference inverts text over the monolith */}
      <div
        className="absolute flex flex-col items-center pointer-events-none z-20"
        style={{ mixBlendMode: "difference" }}
      >
        <h2 className="font-headline-lg text-[120px] leading-none text-white uppercase tracking-tighter mb-4 select-none">
          NOVEXIO
        </h2>
        <div className="border border-white/60 bg-transparent px-4 py-1 text-white font-label-mono-bold text-sm tracking-[0.2em]">
          PRIMAL LOGIC v4.0
        </div>
      </div>

      {/* Crosshair Accents */}
      <span className="material-symbols-outlined absolute top-4 left-4 text-primary opacity-20">add</span>
      <span className="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20">add</span>
      <span className="material-symbols-outlined absolute bottom-4 left-4 text-primary opacity-20">add</span>
      <span className="material-symbols-outlined absolute bottom-4 right-4 text-primary opacity-20">add</span>
    </section>
  );
}
