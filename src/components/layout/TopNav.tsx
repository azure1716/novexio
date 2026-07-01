"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 w-full sticky top-0 z-50 border-b border-white/10 bg-surface-container-low/95 backdrop-blur-xl h-16">
      <div className="flex items-center gap-4 md:gap-8">
        <Link href="/" className="font-headline-lg text-[20px] sm:text-[24px] tracking-widest text-primary uppercase hover:opacity-80 transition-opacity">
          NOVEXIO
        </Link>
        <div className="hidden md:flex items-center gap-4 pl-6 border-l border-white/10">
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-label-mono-bold text-[10px] text-primary tracking-widest uppercase">
              FOUNDRY_OS // v4.0.8
            </span>
          </div>
          <span className="font-label-mono-sm text-[11px] text-on-surface-variant/60 tracking-wider uppercase">
            SOVEREIGN DIGITAL FOUNDRY & VENTURE LABS
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile Nav Toggle */}
        <button
          onClick={() => window.dispatchEvent(new Event("toggle-sidenav"))}
          className="lg:hidden p-2 border border-white/20 bg-white/5 hover:bg-white/10 text-primary flex items-center justify-center rounded transition-all"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
      </div>
    </header>
  );
}

