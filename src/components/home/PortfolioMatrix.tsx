"use client";

import { motion } from "framer-motion";

export default function PortfolioMatrix() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <section className="p-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-end mb-10 border-b border-white/10 pb-4"
      >
        <div>
          <h3 className="font-headline-lg text-[48px] uppercase">PORTFOLIO_MATRIX</h3>
          <p className="font-label-mono-sm text-on-surface-variant opacity-60">ACTIVE_VENTURES_LISTING [N=5]</p>
        </div>
        <div className="text-right font-label-mono-bold text-tertiary">
          TOTAL_VALUATION_ESTIMATED: 1.2B CR
        </div>
      </motion.div>
      
      {/* Bento Grid / Monolithic Blocks */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-12 gap-6 bg-white/10 border border-white/10"
      >
        
        {/* OOKUBB */}
        <motion.div variants={itemVariants} className="col-span-12 md:col-span-8 bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[400px] group border-r border-white/10">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="bg-tertiary text-on-tertiary-fixed font-label-mono-bold px-3 py-1 text-[10px] uppercase">Active Phase</span>
              <span className="font-label-mono-sm text-primary opacity-40">001_OOKB</span>
            </div>
            <h4 className="font-headline-lg text-[64px] leading-tight mb-4">OOKUBB</h4>
            <p className="font-body-md text-on-surface-variant max-w-md">Quantum-resistant infrastructure for sovereign data architectures. Structural integrity verified at scale.</p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-end">
            <div className="space-y-2">
              <div className="flex gap-4 font-label-mono-sm text-xs">
                <span className="opacity-40 uppercase">Efficiency:</span>
                <span className="text-primary">99.98%</span>
              </div>
              <div className="flex gap-4 font-label-mono-sm text-xs">
                <span className="opacity-40 uppercase">Latency:</span>
                <span className="text-primary">0.04ms</span>
              </div>
            </div>
            <button className="bg-transparent border border-white/20 px-6 py-2 font-label-mono-bold hover:bg-white hover:text-black transition-all uppercase">Analyze</button>
          </div>
        </motion.div>

        {/* KNOIX */}
        <motion.div variants={itemVariants} className="col-span-12 md:col-span-4 bg-surface-container p-8 flex flex-col justify-between">
          <div className="mb-6 h-48 overflow-hidden bg-black/40 border border-white/10 relative group-hover:border-primary/50 transition-colors">
            {/* Fallback pattern if image is not available */}
            <div className="absolute inset-0 grid-blueprint opacity-20"></div>
          </div>
          <div>
            <h4 className="font-headline-lg text-[32px] mb-2">KNOIX</h4>
            <p className="font-label-mono-sm text-xs text-on-surface-variant opacity-60">BIOMETRIC_ENCRYPTION_LABS</p>
          </div>
          <div className="mt-6">
            <div className="w-full bg-white/5 h-1">
              <div className="bg-tertiary w-3/4 h-full"></div>
            </div>
            <div className="flex justify-between mt-2 font-label-mono-sm text-[10px]">
              <span className="opacity-40">STABILITY</span>
              <span>75%</span>
            </div>
          </div>
        </motion.div>

        {/* STUDYSPACE */}
        <motion.div variants={itemVariants} className="col-span-12 md:col-span-4 bg-surface-container p-8 border-t border-white/10">
          <div className="mb-4">
            <span className="material-symbols-outlined text-[48px] text-primary">science</span>
          </div>
          <h4 className="font-headline-lg text-[32px] mb-2">STUDYSPACE</h4>
          <p className="font-body-md text-sm text-on-surface-variant mb-6">Cognitive optimization via neural-linked learning clusters.</p>
          <div className="font-label-mono-sm text-[10px] space-y-1">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="opacity-40">U_INDEX</span>
              <span>0.92</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="opacity-40">S_CLASS</span>
              <span>OMEGA</span>
            </div>
          </div>
        </motion.div>

        {/* LINIQ */}
        <motion.div variants={itemVariants} className="col-span-12 md:col-span-4 bg-surface-container-lowest p-8 border-t border-r border-white/10 flex flex-col justify-center items-center text-center">
          <h4 className="font-headline-lg text-[40px] mb-4">LINIQ</h4>
          <div className="bg-primary/10 border border-primary/20 p-6 w-full">
            <div className="text-primary font-label-mono-bold text-2xl">CONNECTED</div>
            <div className="text-[10px] opacity-40 uppercase">Global Mesh Status</div>
          </div>
          <p className="font-body-md text-xs mt-6 opacity-60">High-frequency distributed ledger for autonomous logistics.</p>
        </motion.div>

        {/* RUPEE LENS */}
        <motion.div variants={itemVariants} className="col-span-12 md:col-span-4 bg-surface-container p-8 border-t border-white/10 group overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full grid-blueprint opacity-10 pointer-events-none"></div>
          <div className="relative z-10">
            <h4 className="font-headline-lg text-[32px] mb-2">RUPEE LENS</h4>
            <p className="font-label-mono-sm text-xs text-tertiary mb-6">REAL_TIME_FINANCIAL_ORACLE</p>
            <div className="space-y-4">
              <div className="bg-black/50 p-3 border border-white/10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
                <span className="font-label-mono-sm text-xs">LIVE_FEED: BTC/USDT +2.4%</span>
              </div>
              <div className="bg-black/50 p-3 border border-white/10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="font-label-mono-sm text-xs">NETWORK: STABLE</span>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
