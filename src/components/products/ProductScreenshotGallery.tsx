/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  screenshots: string[];
  productName: string;
  accentColor: string;
}

export default function ProductScreenshotGallery({ screenshots, productName, accentColor }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevProductName, setPrevProductName] = useState(productName);

  // Default to Mobile Phone Frame mode only for LYNIQ and QUIZZY; STUDYSPACE defaults to Landscape (Desktop Matrix)
  const defaultIsPortrait = productName === "LYNIQ" || productName === "QUIZZY";
  const [isPortraitMode, setIsPortraitMode] = useState(defaultIsPortrait);

  if (productName !== prevProductName) {
    setPrevProductName(productName);
    setIsPortraitMode(productName === "LYNIQ" || productName === "QUIZZY");
    setActiveIdx(0);
  }

  if (!screenshots || screenshots.length === 0) return null;

  const currentImg = screenshots[activeIdx];
  const prevIdx = (activeIdx - 1 + screenshots.length) % screenshots.length;
  const nextIdx = (activeIdx + 1) % screenshots.length;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Layout Mode Toggles */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="font-label-mono-bold text-xs uppercase text-on-surface-variant flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px]" style={{ color: accentColor }}>
            photo_library
          </span>
          <span>SYSTEM_ARCHIVES {"//"} ACTUAL_SCREENSHOTS [{screenshots.length}]</span>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          {/* Viewport Mode Toggle */}
          <div className="flex items-center bg-surface-container p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setIsPortraitMode(true)}
              className={`px-3 py-1.5 rounded font-label-mono-bold text-[10px] uppercase transition-all flex items-center gap-1.5 ${
                isPortraitMode
                  ? "bg-white text-black font-bold shadow"
                  : "text-on-surface-variant/70 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">smartphone</span>
              <span>PHONE FRAMES</span>
            </button>
            <button
              onClick={() => setIsPortraitMode(false)}
              className={`px-3 py-1.5 rounded font-label-mono-bold text-[10px] uppercase transition-all flex items-center gap-1.5 ${
                !isPortraitMode
                  ? "bg-white text-black font-bold shadow"
                  : "text-on-surface-variant/70 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">desktop_mac</span>
              <span>DESKTOP MATRIX</span>
            </button>
          </div>

          <div className="font-label-mono-sm text-xs text-on-surface-variant/80 bg-black/40 px-3 py-1.5 rounded border border-white/10">
            VIEWING {activeIdx + 1} OF {screenshots.length}
          </div>
        </div>
      </div>

      {/* VIEWPORT 1: MOBILE SMARTPHONE SHOWCASE ARRAY (For LYNIQ, STUDYSPACE, portrait apps) */}
      {isPortraitMode ? (
        <div className="relative bg-gradient-to-b from-black/80 via-black/50 to-black/80 border border-white/15 rounded-2xl p-4 sm:p-6 overflow-hidden shadow-2xl">
          {/* Cyberpunk Background Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[100px] pointer-events-none opacity-20"
            style={{ backgroundColor: accentColor }}
          />

          {/* Enlarged Bounded-Height 3-Panel Grid */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 max-w-5xl mx-auto py-2">
            {/* Left Panel (Previous Screenshot) */}
            {screenshots.length > 1 ? (
              <motion.div
                key={`left-${prevIdx}`}
                whileHover={{ scale: 0.98 }}
                onClick={() => setActiveIdx(prevIdx)}
                className="hidden md:flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-all scale-95 transform -rotate-2"
              >
                <div className="h-[360px] sm:h-[410px] lg:h-[440px] aspect-[9/18.5] bg-slate-950/90 border border-white/20 rounded-[32px] p-2 shadow-2xl flex flex-col justify-between relative group hover:border-white/50 transition-colors">
                  <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-1.5 shrink-0" />
                  <div className="flex-1 rounded-[24px] overflow-hidden bg-black relative flex items-center justify-center">
                    <img
                      src={screenshots[prevIdx]}
                      alt="Previous Screen"
                      className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <span className="font-label-mono-bold text-[9px] uppercase bg-black/90 text-white px-2.5 py-1 rounded border border-white/20 shadow">
                        ← PREV
                      </span>
                    </div>
                  </div>
                  <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-1.5 shrink-0" />
                </div>
                <div className="font-label-mono-sm text-[10px] text-on-surface-variant/60 mt-2 uppercase font-bold">
                  SCREEN 0{prevIdx + 1}
                </div>
              </motion.div>
            ) : null}

            {/* Center Panel (Active Featured Screenshot - Enlarged for maximum prominence!) */}
            <motion.div
              key={`center-${activeIdx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center z-20 w-full md:w-auto"
            >
              <div
                onClick={() => setIsModalOpen(true)}
                className="h-[400px] sm:h-[500px] lg:h-[530px] aspect-[9/18.5] max-w-[85vw] sm:max-w-none bg-slate-950 border-2 rounded-[36px] sm:rounded-[40px] p-2 sm:p-2.5 flex flex-col justify-between relative group cursor-pointer shadow-2xl transition-all hover:scale-[1.01]"
                style={{ borderColor: accentColor, boxShadow: `0 0 45px ${accentColor}45` }}
              >
                {/* Glowing status badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-3 py-0.5 rounded-full border border-white/20 font-label-mono-bold text-[9px] uppercase text-white tracking-widest shadow z-30 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: accentColor }} />
                  <span>ACTIVE VIEWPORT</span>
                </div>

                {/* Top speaker indicator */}
                <div className="w-14 h-1.5 bg-white/15 rounded-full mx-auto mb-1.5 shrink-0" />

                {/* Screen Display - Optimized padding so screenshot is HUGE and prominent! */}
                <div className="flex-1 rounded-[28px] overflow-hidden bg-black relative flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                  <img
                    src={currentImg}
                    alt={`${productName} Active Screen ${activeIdx + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 pointer-events-none">
                    <span className="font-label-mono-bold text-xs text-white bg-black/95 px-4 py-1.5 rounded-full border border-white/30 shadow-2xl flex items-center gap-1.5 scale-105">
                      <span className="material-symbols-outlined text-[14px]">fullscreen</span>
                      <span>CLICK TO FULLSCREEN</span>
                    </span>
                  </div>
                </div>

                {/* Bottom home indicator */}
                <div className="w-20 h-1.5 bg-white/30 rounded-full mx-auto mt-1.5 shrink-0" />
              </div>

              <div className="font-label-mono-bold text-xs text-white mt-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                <span>{productName}_CAPTURE_0{activeIdx + 1}.PNG</span>
              </div>
            </motion.div>

            {/* Right Panel (Next Screenshot) */}
            {screenshots.length > 1 ? (
              <motion.div
                key={`right-${nextIdx}`}
                whileHover={{ scale: 0.98 }}
                onClick={() => setActiveIdx(nextIdx)}
                className="hidden md:flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-all scale-95 transform rotate-2"
              >
                <div className="h-[360px] sm:h-[410px] lg:h-[440px] aspect-[9/18.5] bg-slate-950/90 border border-white/20 rounded-[32px] p-2 shadow-2xl flex flex-col justify-between relative group hover:border-white/50 transition-colors">
                  <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-1.5 shrink-0" />
                  <div className="flex-1 rounded-[24px] overflow-hidden bg-black relative flex items-center justify-center">
                    <img
                      src={screenshots[nextIdx]}
                      alt="Next Screen"
                      className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <span className="font-label-mono-bold text-[9px] uppercase bg-black/90 text-white px-2.5 py-1 rounded border border-white/20 shadow">
                        NEXT →
                      </span>
                    </div>
                  </div>
                  <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-1.5 shrink-0" />
                </div>
                <div className="font-label-mono-sm text-[10px] text-on-surface-variant/60 mt-2 uppercase font-bold">
                  SCREEN 0{nextIdx + 1}
                </div>
              </motion.div>
            ) : null}
          </div>

          {/* Navigation Controls for Mobile Mode */}
          {screenshots.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-4 relative z-20">
              <button
                onClick={handlePrev}
                className="px-5 py-2 rounded-xl bg-surface-container hover:bg-white text-white hover:text-black border border-white/20 font-label-mono-bold text-xs uppercase transition-all shadow flex items-center gap-2"
              >
                <span>← PREV</span>
              </button>
              <div className="font-label-mono-bold text-xs text-on-surface-variant px-4">
                {activeIdx + 1} / {screenshots.length}
              </div>
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-xl bg-surface-container hover:bg-white text-white hover:text-black border border-white/20 font-label-mono-bold text-xs uppercase transition-all shadow flex items-center gap-2"
              >
                <span>NEXT →</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* VIEWPORT 2: WIDESCREEN DESKTOP MATRIX (For Ookubb, widescreen screens) */
        <div className="relative bg-black/60 border border-white/15 aspect-video overflow-hidden group flex items-center justify-center rounded-2xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImg}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative cursor-pointer flex items-center justify-center p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={currentImg}
                alt={`${productName} Screenshot ${activeIdx + 1}`}
                className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6 pointer-events-none">
                <span className="font-label-mono-bold text-xs text-white bg-black/90 px-4 py-2 rounded-full border border-white/20 shadow-xl flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">fullscreen</span>
                  <span>CLICK TO EXPAND FULLSCREEN</span>
                </span>
                <span className="font-label-mono-sm text-xs font-bold" style={{ color: accentColor }}>
                  {productName}_CAPTURE_0{activeIdx + 1}.PNG
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all opacity-70 hover:opacity-100 z-10 shadow-xl"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all opacity-70 hover:opacity-100 z-10 shadow-xl"
              >
                →
              </button>
            </>
          )}
        </div>
      )}

      {/* Thumbnails Row: Automatically formats as portrait phone cards in Mobile Mode, widescreen in Desktop Mode! */}
      {screenshots.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 overflow-x-auto pb-2">
          {screenshots.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIdx(idx)}
              className={`bg-black/70 border relative overflow-hidden transition-all rounded-xl h-20 sm:h-24 flex items-center justify-center ${
                idx === activeIdx
                  ? "border-2 scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10"
                  : "border-white/15 opacity-50 hover:opacity-100 hover:border-white/40"
              }`}
              style={{ borderColor: idx === activeIdx ? accentColor : undefined }}
            >
              <img
                src={img}
                alt={`Thumb ${idx + 1}`}
                className="w-full h-full object-contain bg-black"
              />
              {idx === activeIdx && (
                <div className="absolute inset-0 border-2 rounded-xl pointer-events-none" style={{ borderColor: accentColor }} />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="flex justify-between items-center border-b border-white/15 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-label-mono-bold text-sm text-white">{productName} {"//"} FULLSCREEN_VIEWPORT</span>
                <span className="font-label-mono-sm text-xs text-on-surface-variant opacity-60">
                  [{activeIdx + 1} / {screenshots.length}]
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 font-label-mono-bold text-xs uppercase transition-all shadow"
              >
                ✕ CLOSE VIEWPORT
              </button>
            </div>

            <div
              className="flex-1 flex items-center justify-center my-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImg}
                alt="Fullscreen view"
                className="max-h-[82vh] max-w-full object-contain drop-shadow-2xl border border-white/15 rounded-2xl"
              />
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 sm:left-10 w-14 h-14 rounded-full bg-black/80 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center text-xl transition-all shadow-2xl"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 sm:right-10 w-14 h-14 rounded-full bg-black/80 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center text-xl transition-all shadow-2xl"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="text-center font-label-mono-sm text-xs text-on-surface-variant/50">
              PRESS ESC OR CLICK ANYWHERE OUTSIDE THE IMAGE TO CLOSE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

