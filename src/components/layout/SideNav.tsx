"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SideNav() {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    console.log("SCAN_INITIATED: Searching for network anomalies...");
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 } as any}
      className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-white/10 bg-surface-container-lowest flex flex-col py-6 z-40"
    >
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 border border-primary bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[20px]">person</span>
          </div>
          <div>
            <div className="font-label-mono-bold text-[10px] text-primary">LAB_UNIT_01</div>
            <div className="font-label-mono-sm text-[8px] text-tertiary">STATUS: OPERATIONAL</div>
          </div>
        </div>
        <button
          onClick={handleScan}
          className={`w-full py-2 border border-primary text-primary font-label-mono-bold text-[12px] hover:bg-primary hover:text-background transition-all uppercase ${isScanning ? 'animate-pulse' : ''}`}
        >
          {isScanning ? "SCANNING..." : "INITIATE SCAN"}
        </button>
      </div>
      <nav className="flex-1">
        <a className="bg-primary-container/10 text-primary border-r-2 border-primary p-3 flex items-center gap-4 group transition-all" href="#">
          <span className="material-symbols-outlined text-[20px]">query_stats</span>
          <span className="font-label-mono-bold text-sm">OOKUBB</span>
        </a>
        <a className="text-on-surface-variant p-3 flex items-center gap-4 opacity-50 hover:opacity-100 hover:bg-surface-variant/30 transition-all" href="#">
          <span className="material-symbols-outlined text-[20px]">biotech</span>
          <span className="font-label-mono-bold text-sm">KNOIX</span>
        </a>
        <a className="text-on-surface-variant p-3 flex items-center gap-4 opacity-50 hover:opacity-100 hover:bg-surface-variant/30 transition-all" href="#">
          <span className="material-symbols-outlined text-[20px]">science</span>
          <span className="font-label-mono-bold text-sm">STUDYSPACE</span>
        </a>
        <a className="text-on-surface-variant p-3 flex items-center gap-4 opacity-50 hover:opacity-100 hover:bg-surface-variant/30 transition-all" href="#">
          <span className="material-symbols-outlined text-[20px]">terminal</span>
          <span className="font-label-mono-bold text-sm">LINIQ</span>
        </a>
        <a className="text-on-surface-variant p-3 flex items-center gap-4 opacity-50 hover:opacity-100 hover:bg-surface-variant/30 transition-all" href="#">
          <span className="material-symbols-outlined text-[20px]">visibility</span>
          <span className="font-label-mono-bold text-sm">RUPEE LENS</span>
        </a>
      </nav>
      <div className="mt-auto border-t border-white/10 pt-4">
        <a className="text-on-surface-variant p-3 flex items-center gap-4 opacity-50 hover:opacity-100" href="#">
          <span className="material-symbols-outlined text-[20px]">settings_input_component</span>
          <span className="font-label-mono-sm text-xs">Diagnostics</span>
        </a>
        <a className="text-on-surface-variant p-3 flex items-center gap-4 opacity-50 hover:opacity-100" href="#">
          <span className="material-symbols-outlined text-[20px]">code</span>
          <span className="font-label-mono-sm text-xs">Terminal</span>
        </a>
      </div>
    </motion.aside>
  );
}
