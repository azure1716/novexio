/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, ProductData } from "@/data/products";
import ProductInteractiveDemo from "./ProductInteractiveDemo";
import ProductScreenshotGallery from "./ProductScreenshotGallery";
import TopNav from "@/components/layout/TopNav";
import SideNav from "@/components/layout/SideNav";
import Footer from "@/components/layout/Footer";

interface Props {
  initialProductId?: string;
}

export default function ProductsShowcaseClient({ initialProductId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams?.get("tab") || initialProductId || "all";

  const handleTabChange = (id: string) => {
    if (id === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products/${id}`, { scroll: false });
    }
  };

  const activeProduct: ProductData | undefined = PRODUCTS.find((p) => p.id === activeTab);

  return (
    <>
      <TopNav />
      <div className="flex min-h-screen">
        <SideNav />
        <main className="flex-1 ml-64 p-0 bg-background min-h-[calc(100vh-64px)] flex flex-col justify-between">
          <div>
            {/* Top Header / Telemetry Bar */}
            <div className="bg-surface-container-low border-b border-white/10 px-10 py-8 relative overflow-hidden grid-blueprint">
              <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 bg-primary animate-pulse" />
                    <span className="font-label-mono-bold text-xs text-primary uppercase tracking-widest">
                      NOVEXIO {"//"} DIGITAL_FOUNDRY_VENTURES
                    </span>
                    <span className="bg-white/10 px-2 py-0.5 font-label-mono-sm text-[10px] text-on-surface-variant">
                      ACTIVE_VENTURES: 4
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-[48px] md:text-[64px] leading-none uppercase tracking-tight text-white">
                    {activeTab === "all" ? "PORTFOLIO_MATRIX" : activeProduct?.name || "VENTURE_SPEC"}
                  </h1>
                  <p className="font-label-mono-sm text-sm text-on-surface-variant/70 mt-2 max-w-2xl">
                    {activeTab === "all"
                      ? "Sovereign digital architectures, real-time spatial meshes, and competitive game engines engineered for permanence."
                      : activeProduct?.tagline}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end font-label-mono-bold text-xs space-y-1 bg-black/40 p-4 border border-white/10">
                  <div className="text-tertiary">ESTIMATED PORTFOLIO VALUATION: 1.8B CR</div>
                  <div className="text-on-surface-variant/60">SYSTEM STATUS: ALL UNITS OPERATIONAL</div>
                  <div className="text-emerald-400">ZERO LATENCY CLOUD RELAY CONNECTED</div>
                </div>
              </div>

              {/* Venture Navigation Tabs */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                <button
                  onClick={() => handleTabChange("all")}
                  className={`px-5 py-2.5 font-label-mono-bold text-xs uppercase transition-all flex items-center gap-2 border ${
                    activeTab === "all"
                      ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      : "bg-surface-container-highest/60 text-on-surface-variant/70 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">grid_view</span>
                  <span>ALL_VENTURES [OVERVIEW]</span>
                </button>

                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleTabChange(prod.id)}
                    className={`px-5 py-2.5 font-label-mono-bold text-xs uppercase transition-all flex items-center gap-2 border ${
                      activeTab === prod.id
                        ? "text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-102 z-10"
                        : "bg-surface-container-highest/60 text-on-surface-variant/70 border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                    style={
                      activeTab === prod.id
                        ? { backgroundColor: prod.accentColor, borderColor: prod.accentColor }
                        : undefined
                    }
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: prod.accentColor }} />
                    <span>{prod.code} {"//"} {prod.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Display Area */}
            <div className="p-10">
              <AnimatePresence mode="wait">
                {activeTab === "all" ? (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-12"
                  >
                    {/* Bento Grid Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                      {PRODUCTS.map((prod, idx) => {
                        const isLarge = idx === 0 || idx === 3; // OOKUBB & STUDYSPACE get larger spans
                        return (
                          <motion.div
                            key={prod.id}
                            whileHover={{ y: -4 }}
                            className={`col-span-1 md:${isLarge ? "col-span-7" : "col-span-5"} bg-surface-container-low border border-white/15 p-8 flex flex-col justify-between group relative overflow-hidden transition-all hover:border-white/40 shadow-xl`}
                          >
                            {/* Glow accent */}
                            <div
                              className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                              style={{ backgroundColor: prod.accentColor }}
                            />
                            
                            <div>
                              <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                  <span
                                    className="px-3 py-1 font-label-mono-bold text-[10px] uppercase text-black font-bold"
                                    style={{ backgroundColor: prod.accentColor }}
                                  >
                                    {prod.status}
                                  </span>
                                  <span className="font-label-mono-sm text-xs text-on-surface-variant/60">
                                    {prod.code}
                                  </span>
                                </div>
                                <div className="w-12 h-12 bg-black/40 border border-white/10 p-1.5 flex items-center justify-center rounded">
                                  <img src={prod.logo} alt={prod.name} className="max-w-full max-h-full object-contain" />
                                </div>
                              </div>

                              <h3 className="font-headline-lg text-[40px] md:text-[48px] text-white leading-tight mb-3 tracking-tight group-hover:text-primary transition-colors">
                                {prod.name}
                              </h3>

                              {/* Prominent User Tagline */}
                              <div
                                className="border-l-2 pl-3 py-1 mb-6 font-label-mono-bold text-xs text-white uppercase tracking-wider bg-white/5"
                                style={{ borderLeftColor: prod.accentColor }}
                              >
                                &quot;{prod.tagline}&quot;
                              </div>

                              <p className="font-body-md text-sm text-on-surface-variant/80 leading-relaxed mb-8 line-clamp-3">
                                {prod.description}
                              </p>
                            </div>

                            <div>
                              {/* Key metrics preview */}
                              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-6">
                                {prod.metrics.slice(0, 2).map((m, i) => (
                                  <div key={i}>
                                    <div className="font-label-mono-sm text-[10px] text-on-surface-variant/50 uppercase">
                                      {m.label}
                                    </div>
                                    <div className="font-label-mono-bold text-lg text-white font-bold" style={{ color: prod.accentColor }}>
                                      {m.value}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <button
                                onClick={() => handleTabChange(prod.id)}
                                className="w-full py-3 px-6 bg-surface-container hover:bg-white text-white hover:text-black font-label-mono-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center justify-between group-hover:border-white"
                              >
                                <span>LAUNCH SPEC & DEMO MATRIX</span>
                                <span>→</span>
                              </button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : activeProduct ? (
                  <motion.div
                    key={activeProduct.id}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-12"
                  >
                    {/* Deep Dive Banner Section */}
                    <div className="bg-surface-container-low border border-white/15 p-8 md:p-10 relative overflow-hidden shadow-2xl">
                      <div
                        className="absolute right-0 top-0 w-1/3 h-full blur-3xl pointer-events-none opacity-20"
                        style={{ backgroundColor: activeProduct.accentColor }}
                      />

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        <div className="lg:col-span-8 space-y-6">
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className="px-3 py-1 font-label-mono-bold text-xs uppercase text-black font-bold"
                              style={{ backgroundColor: activeProduct.accentColor }}
                            >
                              {activeProduct.status}
                            </span>
                            <span className="font-label-mono-bold text-xs text-on-surface-variant uppercase bg-white/10 px-3 py-1 border border-white/10">
                              {activeProduct.category}
                            </span>
                            <span className="font-label-mono-sm text-xs text-on-surface-variant/60">
                              VERSION: {activeProduct.version}
                            </span>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black/60 border border-white/20 p-2.5 flex items-center justify-center shrink-0 shadow-2xl">
                              <img src={activeProduct.logo} alt={activeProduct.name} className="max-w-full max-h-full object-contain" />
                            </div>
                            <div>
                              <h2 className="font-headline-lg text-[48px] sm:text-[64px] leading-none text-white tracking-tight">
                                {activeProduct.name}
                              </h2>
                              <div className="font-label-mono-sm text-xs text-on-surface-variant/60 mt-1 uppercase">
                                ARCHITECTURAL_CODE: {activeProduct.code}
                              </div>
                            </div>
                          </div>

                          {/* Highlighted User Tagline */}
                          <div
                            className="p-4 bg-black/40 border-l-4 font-label-mono-bold text-sm sm:text-base text-white uppercase tracking-wider"
                            style={{ borderLeftColor: activeProduct.accentColor }}
                          >
                            &quot;{activeProduct.tagline}&quot;
                          </div>

                          <p className="font-body-md text-sm sm:text-base text-on-surface-variant/90 leading-relaxed max-w-3xl">
                            {activeProduct.description}
                          </p>
                        </div>

                        {/* Telemetry Metrics Dials */}
                        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                          {activeProduct.metrics.map((m, i) => (
                            <div
                              key={i}
                              className="bg-surface-container/80 p-5 border border-white/10 flex flex-col justify-between"
                            >
                              <div className="font-label-mono-sm text-[10px] text-on-surface-variant/60 uppercase mb-2">
                                {m.label}
                              </div>
                              <div>
                                <div className="font-label-mono-bold text-2xl text-white font-bold mb-1">
                                  {m.value}
                                </div>
                                {m.change && (
                                  <div
                                    className="font-label-mono-sm text-[10px] uppercase font-bold"
                                    style={{ color: activeProduct.accentColor }}
                                  >
                                    ● {m.change}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Simulation Section */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="font-label-mono-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                          <span className="material-symbols-outlined text-[20px]" style={{ color: activeProduct.accentColor }}>
                            play_circle
                          </span>
                          <span>LIVE INTERACTIVE SIMULATION MATRIX {"//"} {activeProduct.name}</span>
                        </div>
                        <span className="font-label-mono-sm text-xs text-emerald-400 font-bold animate-pulse">
                          ● RUNNING CLIENT-SIDE
                        </span>
                      </div>

                      <ProductInteractiveDemo
                        demoType={activeProduct.demoType}
                        accentColor={activeProduct.accentColor}
                      />
                    </div>

                    {/* Key Innovations & System Features */}
                    <div className="space-y-6">
                      <div className="font-label-mono-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]" style={{ color: activeProduct.accentColor }}>
                          architecture
                        </span>
                        <span>CORE INNOVATIONS & ARCHITECTURAL SPECS</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activeProduct.features.map((feat, i) => (
                          <div
                            key={i}
                            className="bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between hover:border-white/30 transition-all group"
                          >
                            <div>
                              <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[28px]" style={{ color: activeProduct.accentColor }}>
                                  {feat.icon}
                                </span>
                              </div>
                              <h4 className="font-label-mono-bold text-sm text-white uppercase mb-2">
                                {feat.title}
                              </h4>
                              <p className="font-body-md text-xs text-on-surface-variant/80 leading-relaxed">
                                {feat.description}
                              </p>
                            </div>
                            <div className="mt-6 pt-3 border-t border-white/5 font-label-mono-sm text-[9px] text-on-surface-variant/40 flex justify-between">
                              <span>SPEC_ID: 0{i + 1}</span>
                              <span style={{ color: activeProduct.accentColor }}>VERIFIED</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actual Screenshot Gallery Carousel */}
                    <div className="space-y-6 pt-4">
                      <ProductScreenshotGallery
                        screenshots={activeProduct.screenshots}
                        productName={activeProduct.name}
                        accentColor={activeProduct.accentColor}
                      />
                    </div>

                    {/* Bottom Action / Deployment Toolbar */}
                    <div className="bg-surface-container-lowest border border-white/15 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <div className="font-label-mono-bold text-sm text-white uppercase">
                          READY TO DEPLOY {activeProduct.name} IN YOUR WORKFLOW?
                        </div>
                        <div className="font-label-mono-sm text-xs text-on-surface-variant/60 mt-1">
                          Enterprise infrastructure, sovereign relay nodes, and developer API keys available immediately.
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                        <button
                          onClick={() => handleTabChange("all")}
                          className="px-6 py-3 bg-surface-container hover:bg-white/10 border border-white/20 text-white font-label-mono-bold text-xs uppercase tracking-wider transition-all"
                        >
                          ← MATRIX OVERVIEW
                        </button>
                        <button
                          onClick={() => alert(`[NOVEXIO FOUNDRY] Initiating enterprise deployment sequence for ${activeProduct.name}... API key generated.`)}
                          className="px-6 py-3 font-label-mono-bold text-xs uppercase tracking-wider text-black font-bold transition-all hover:opacity-90 shadow-xl"
                          style={{ backgroundColor: activeProduct.accentColor }}
                        >
                          DEPLOY INSTANCE & API KEY
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
