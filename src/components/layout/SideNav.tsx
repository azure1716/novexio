/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function SideNav() {
  const [isScanning, setIsScanning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleClose = () => setIsOpen(false);
    window.addEventListener("toggle-sidenav", handleToggle);
    window.addEventListener("close-sidenav", handleClose);
    return () => {
      window.removeEventListener("toggle-sidenav", handleToggle);
      window.removeEventListener("close-sidenav", handleClose);
    };
  }, []);

  const handleScan = () => {
    setIsScanning(true);
    console.log("SCAN_INITIATED: Searching for network anomalies...");
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  const navItems = [
    { label: "PORTFOLIO MATRIX", href: "/products", icon: "grid_view" },
    { label: "OOKUBB", href: "/products/ookubb", icon: "groups" },
    { label: "LYNIQ", href: "/products/lyniq", icon: "route" },
    { label: "QUIZZY", href: "/products/quizzy", icon: "sports_esports" },
    { label: "STUDYSPACE", href: "/products/studyspace", icon: "auto_awesome" },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-16 bg-black/80 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 } as any}
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-white/10 bg-surface-container-lowest flex flex-col py-6 z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div className="px-6 mb-8 flex items-center justify-between">
          <div>
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
              className={`w-full py-2 border border-primary text-primary font-label-mono-bold text-[12px] hover:bg-primary hover:text-background transition-all uppercase ${isScanning ? "animate-pulse" : ""}`}
            >
              {isScanning ? "SCANNING..." : "INITIATE SCAN"}
            </button>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1.5 text-on-surface-variant hover:text-white transition-colors self-start -mt-1 -mr-2"
            aria-label="Close Navigation"
          >
            ✕
          </button>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/products" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`p-3 flex items-center gap-4 transition-all ${
                  isActive
                    ? "bg-primary-container/10 text-primary border-r-2 border-primary font-bold"
                    : "text-on-surface-variant opacity-60 hover:opacity-100 hover:bg-surface-variant/30"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="font-label-mono-bold text-xs tracking-wider uppercase">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-white/10 pt-4">
          <Link
            className="text-on-surface-variant p-3 flex items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined text-[20px]">home</span>
            <span className="font-label-mono-sm text-xs">Home Command</span>
          </Link>
        </div>
      </motion.aside>
    </>
  );
}

