/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export default function PortfolioMatrix() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <section className="p-4 sm:p-6 md:p-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 border-b border-white/10 pb-4 gap-4"
      >
        <div>
          <h3 className="font-headline-lg text-[32px] sm:text-[40px] md:text-[48px] uppercase tracking-tight text-white">PORTFOLIO_MATRIX</h3>
          <p className="font-label-mono-sm text-on-surface-variant opacity-60">
            ACTIVE_VENTURES_LISTING [N=4] {"//"} SOVEREIGN ARCHITECTURES
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end font-label-mono-bold text-xs space-y-1">
          <div className="text-tertiary">TOTAL_VALUATION_ESTIMATED: 1.8B CR</div>
          <Link href="/products" className="text-primary hover:underline flex items-center gap-1 mt-1">
            <span>ENTER MATRIX DIRECTORY</span>
            <span>→</span>
          </Link>
        </div>
      </motion.div>
      
      {/* Bento Grid / Monolithic Blocks */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 bg-white/5 border border-white/10"
      >
        {PRODUCTS.map((prod, idx) => {
          // Bento spanning: OOKUBB (8 col), QUIZZY (4 col), STUDYSPACE (7 col), LYNIQ (5 col)
          const span = idx === 0 ? "col-span-1 md:col-span-8" : idx === 1 ? "col-span-1 md:col-span-4" : idx === 2 ? "col-span-1 md:col-span-5" : "col-span-1 md:col-span-7";
          return (
            <motion.div
              key={prod.id}
              variants={itemVariants}
              className={`${span} bg-surface-container-low p-5 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] group border border-white/10 hover:border-white/40 transition-all relative overflow-hidden shadow-2xl`}
            >
              {/* Subtle background glow */}
              <div
                className="absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity"
                style={{ backgroundColor: prod.accentColor }}
              />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="font-label-mono-bold px-3 py-1 text-[10px] uppercase text-black font-bold"
                    style={{ backgroundColor: prod.accentColor }}
                  >
                    {prod.status}
                  </span>
                  <span className="font-label-mono-sm text-xs text-on-surface-variant/50">{prod.code}</span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-black/50 border border-white/15 p-1.5 flex items-center justify-center shrink-0">
                    <img src={prod.logo} alt={prod.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <h4 className="font-headline-lg text-[28px] sm:text-[40px] md:text-[48px] leading-tight text-white tracking-tight group-hover:text-primary transition-colors">
                    {prod.name}
                  </h4>
                </div>

                {/* Tagline highlight */}
                <div
                  className="border-l-2 pl-3 py-1 mb-4 font-label-mono-bold text-xs text-white uppercase tracking-wider bg-white/5"
                  style={{ borderLeftColor: prod.accentColor }}
                >
                  &quot;{prod.tagline}&quot;
                </div>

                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant/80 max-w-xl leading-relaxed line-clamp-3">
                  {prod.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-between items-end gap-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {prod.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="font-label-mono-sm text-[9px] text-on-surface-variant/50 uppercase">{m.label}</div>
                      <div className="font-label-mono-bold text-base text-white font-bold" style={{ color: prod.accentColor }}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/products/${prod.id}`}
                  className="w-full sm:w-auto justify-center sm:justify-start px-6 py-2.5 bg-surface-container hover:bg-white text-white hover:text-black font-label-mono-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2 group-hover:border-white shadow-lg"
                >
                  <span>EXPLORE SPEC & DEMO</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
