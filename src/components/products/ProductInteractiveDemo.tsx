/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  demoType: "guilds" | "pathfinder" | "quiz" | "canvas";
  accentColor: string;
}

export default function ProductInteractiveDemo({ demoType, accentColor }: Props) {
  if (demoType === "guilds") return <OokubbGuildDemo accentColor={accentColor} />;
  if (demoType === "pathfinder") return <LyniqPathfinderDemo accentColor={accentColor} />;
  if (demoType === "quiz") return <QuizzyArenaDemo accentColor={accentColor} />;
  if (demoType === "canvas") return <StudySpaceCanvasDemo accentColor={accentColor} />;
  return null;
}

/* ========================================================
   1. OOKUBB GUILD DEMO (GenZ Social Guilds)
======================================================== */
function OokubbGuildDemo({ accentColor }: { accentColor: string }) {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [activeChannel, setActiveChannel] = useState("genz-lounge");
  const [messages, setMessages] = useState([
    { id: 1, user: "CyberSamurai", avatar: "CS", text: "Yo! Anyone down for a Lyniq speedrun lobby?", time: "Just now", badge: "GUILD MASTER" },
    { id: 2, user: "NeonVibe", avatar: "NV", text: "StudySpace AI literally summarized 40 pages of my notes in 2 secs!", time: "1m ago", badge: "VIP" },
    { id: 3, user: "LoFi_Coder", avatar: "LC", text: "Quizzy 1v1 tournament starting in 10 mins in stage room!", time: "3m ago", badge: "MOD" },
  ]);
  const [customInput, setCustomInput] = useState("");

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || customInput;
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        user: "You (Lab_01)",
        avatar: "01",
        text,
        time: "Now",
        badge: "OPERATOR",
      },
    ]);
    if (!textToSend) setCustomInput("");
  };

  const cannedMessages = [
    "W guild energy!",
    "Dropping into voice lounge now",
    "Novexio infrastructure hits different",
  ];

  return (
    <div className="bg-surface-container-low border border-white/15 rounded-none overflow-hidden font-body-md text-sm shadow-2xl">
      {/* Header */}
      <div className="bg-surface-container-highest px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
          <span className="font-label-mono-bold text-xs tracking-wider uppercase" style={{ color: accentColor }}>
            OOKUBB {"//"} GUILD_SIMULATOR_v3
          </span>
        </div>
        <div className="flex gap-1.5 text-[10px] font-label-mono-sm text-on-surface-variant opacity-60">
          <span>SERVER_ID: #OOK-994</span>
          <span>•</span>
          <span className="text-emerald-400">1,482 ONLINE</span>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[340px]">
        {/* Sidebar Channels */}
        <div className="col-span-12 sm:col-span-4 bg-surface-container-lowest border-r border-white/10 p-3 flex flex-col justify-between">
          <div>
            <div className="font-label-mono-bold text-[10px] text-on-surface-variant/60 mb-2 px-2 uppercase tracking-widest">
              {"// ACTIVE GUILDS"}
            </div>
            <div className="space-y-1">
              {[
                { id: "genz-lounge", label: "# genz-lounge", unread: 3 },
                { id: "voice-stage", label: "# voice-stage", unread: 12 },
                { id: "esports-squad", label: "# esports-squad", unread: 0 },
                { id: "ai-notes-hack", label: "# ai-study-hub", unread: 5 },
              ].map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setActiveChannel(ch.id)}
                  className={`w-full text-left px-3 py-2 font-label-mono-sm text-xs flex items-center justify-between transition-all ${
                    activeChannel === ch.id
                      ? "bg-white/10 text-white font-bold border-l-2"
                      : "text-on-surface-variant/70 hover:bg-white/5 hover:text-white"
                  }`}
                  style={{ borderLeftColor: activeChannel === ch.id ? accentColor : "transparent" }}
                >
                  <span>{ch.label}</span>
                  {ch.unread > 0 && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-label-mono-bold bg-white/15 text-white">
                      {ch.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-2.5 mt-4 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-label-mono-bold text-white font-bold">
                VIP
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-label-mono-bold text-xs truncate">GUILD_VIP_PASS</div>
                <div className="font-label-mono-sm text-[9px] text-emerald-400">ZERO LATENCY MESH</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Stream */}
        <div className="col-span-12 sm:col-span-8 flex flex-col justify-between bg-surface-container/40 p-4">
          <div ref={chatBoxRef} className="space-y-3 overflow-y-auto max-h-[220px] pr-2">
            <AnimatePresence>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex gap-3 bg-surface-container-low/80 p-3 border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center text-lg shrink-0">
                    {m.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-label-mono-bold text-xs text-white">{m.user}</span>
                      <span
                        className="text-[9px] font-label-mono-bold px-1.5 py-0.2 bg-white/10 text-on-surface-variant rounded"
                        style={{ color: m.badge === "OPERATOR" ? accentColor : undefined }}
                      >
                        {m.badge}
                      </span>
                      <span className="text-[10px] text-on-surface-variant/40 ml-auto font-label-mono-sm">{m.time}</span>
                    </div>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quick Actions & Input */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="flex gap-1.5 mb-2 overflow-x-auto pb-1">
              {cannedMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(msg)}
                  className="px-2.5 py-1 text-[11px] font-label-mono-sm bg-white/5 hover:bg-white/15 text-on-surface-variant whitespace-nowrap border border-white/10 transition-all"
                >
                  + {msg}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Drop a message to guild mesh..."
                className="flex-1 bg-surface-container-lowest border border-white/20 px-3 py-2 font-label-mono-sm text-xs text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="px-4 py-2 font-label-mono-bold text-xs uppercase transition-all bg-white text-black hover:bg-white/80"
                style={{ backgroundColor: accentColor, color: "#000" }}
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   2. LYNIQ PATHFINDER DEMO (2D Android Game - Backtrack Trap)
======================================================== */
function LyniqPathfinderDemo({ accentColor }: { accentColor: string }) {
  // 6 rows x 5 columns grid matching screenshot. 0 = empty dot, 1 = normal tile, 2 = Start (Star), 3 = Goal (Destination)
  const LEVEL_GRID = [
    [2, 0, 3, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0],
  ];

  // Exactly 25 nodes Hamiltonian path solution ending at Goal (0,2)
  const SOLUTION_PATH = [
    { r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }, { r: 2, c: 1 },
    { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 2, c: 2 }, { r: 3, c: 2 },
    { r: 3, c: 1 }, { r: 4, c: 1 }, { r: 4, c: 0 }, { r: 5, c: 0 },
    { r: 5, c: 1 }, { r: 5, c: 2 }, { r: 4, c: 2 }, { r: 4, c: 3 },
    { r: 3, c: 3 }, { r: 2, c: 3 }, { r: 2, c: 4 }, { r: 3, c: 4 },
    { r: 4, c: 4 }, { r: 1, c: 4 }, { r: 0, c: 4 }, { r: 0, c: 3 },
    { r: 0, c: 2 },
  ];

  const [path, setPath] = useState<{ r: number; c: number }[]>([{ r: 0, c: 0 }]);
  const [isDragging, setIsDragging] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [timer, setTimer] = useState(0.00);
  const [isRunning, setIsRunning] = useState(false);
  const [hintsLeft, setHintsLeft] = useState(3);

  useEffect(() => {
    let interval: any;
    if (isRunning && !isWon) {
      interval = setInterval(() => {
        setTimer((t) => +(t + 0.05).toFixed(2));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunning, isWon]);

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener("pointerup", handleUp);
    return () => window.removeEventListener("pointerup", handleUp);
  }, []);

  const handleTileEnter = (r: number, c: number) => {
    if (isWon) return;
    if (LEVEL_GRID[r][c] === 0) return; // empty space dot

    const currentHead = path[path.length - 1];
    if (r === currentHead.r && c === currentHead.c) return;

    // Check if backtracking to immediately previous tile
    if (path.length > 1) {
      const prev = path[path.length - 2];
      if (r === prev.r && c === prev.c) {
        setPath((p) => p.slice(0, p.length - 1));
        return;
      }
    }

    // Check adjacency (Manhattan distance === 1)
    const dr = Math.abs(r - currentHead.r);
    const dc = Math.abs(c - currentHead.c);
    const isAdjacent = (dr === 1 && dc === 0) || (dr === 0 && dc === 1);
    if (!isAdjacent) return;

    // Check if already visited
    const isVisited = path.some((p) => p.r === r && p.c === c);
    if (isVisited) return;

    // Check if trying to enter goal before all 24 other tiles are visited
    if (LEVEL_GRID[r][c] === 3 && path.length < 24) {
      // Must fill every block before reaching the end!
      return;
    }

    if (!isRunning) setIsRunning(true);
    const newPath = [...path, { r, c }];
    setPath(newPath);

    // If reached goal and all 25 nodes are visited -> VICTORY!
    if (LEVEL_GRID[r][c] === 3 && newPath.length === 25) {
      setIsWon(true);
      setIsRunning(false);
    }
  };

  const handleContainerPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isWon) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (el) {
      const tileBtn = el.closest("[data-coord]");
      if (tileBtn) {
        const coord = tileBtn.getAttribute("data-coord");
        if (coord) {
          const [rStr, cStr] = coord.split("-");
          handleTileEnter(parseInt(rStr), parseInt(cStr));
        }
      }
    }
  };

  const handleReset = () => {
    setPath([{ r: 0, c: 0 }]);
    setIsWon(false);
    setTimer(0.00);
    setIsRunning(false);
  };

  const handleHint = () => {
    if (isWon || hintsLeft <= 0) return;
    let matchIdx = 0;
    for (let i = 0; i < path.length; i++) {
      if (i < SOLUTION_PATH.length && path[i].r === SOLUTION_PATH[i].r && path[i].c === SOLUTION_PATH[i].c) {
        matchIdx = i;
      } else {
        break;
      }
    }
    const nextStepIdx = matchIdx + 1;
    if (nextStepIdx < SOLUTION_PATH.length) {
      if (!isRunning) setIsRunning(true);
      const newPath = SOLUTION_PATH.slice(0, nextStepIdx + 1);
      setPath(newPath);
      setHintsLeft((h) => h - 1);
      if (newPath.length === 25) {
        setIsWon(true);
        setIsRunning(false);
      }
    }
  };

  return (
    <div className="bg-surface-container-low border border-white/15 font-body-md p-6 sm:p-8 shadow-2xl select-none rounded-2xl">
      {/* Top Header Row */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            title="Reset Level"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all font-bold text-base shadow"
          >
            ←
          </button>
          <div>
            <div className="font-headline-sm text-lg font-bold text-white flex items-center gap-2">
              <span>Backtrack Trap</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-label-mono-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                LEVEL 01
              </span>
            </div>
            <div className="font-label-mono-sm text-[11px] uppercase tracking-wider" style={{ color: accentColor }}>
              LYNIQ {"//"} HAMILTONIAN_PATH_ENGINE
            </div>
          </div>
        </div>
        <div className="bg-slate-900 px-4 py-1.5 rounded-full border border-white/20 font-label-mono-bold text-xs text-white shadow-inner flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{timer.toFixed(2)}s</span>
        </div>
      </div>

      {/* Main 2-Column Split: Perfectly balanced 50/50 without empty space! */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Interactive Puzzle Arena (Col-Span 6) */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center bg-black/70 p-6 sm:p-8 border border-white/15 rounded-2xl relative overflow-hidden shadow-inner min-h-[440px]">
          {isWon && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="font-label-mono-bold text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                VICTORY ACHIEVED
              </div>
              <div className="font-headline-sm text-2xl font-bold text-white tracking-wider mb-1" style={{ color: accentColor }}>
                LEVEL COMPLETE!
              </div>
              <div className="text-on-surface-variant text-sm mb-6 max-w-xs">
                All 25 nodes filled in {timer.toFixed(2)}s! Perfect Hamiltonian Path.
              </div>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl font-label-mono-bold text-xs uppercase text-black font-bold tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105"
                style={{ backgroundColor: accentColor }}
              >
                PLAY AGAIN
              </button>
            </motion.div>
          )}

          {/* Stars & Progress Bar inside Arena */}
          <div className="flex flex-col items-center mb-6 w-full max-w-[340px]">
            <div className="flex items-center justify-between w-full mb-2">
              <div className="flex gap-2 text-2xl text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse">
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="font-label-mono-bold text-xs text-white bg-white/10 px-3 py-1 rounded-full border border-white/10 shadow">
                {path.length} / 25 nodes
              </div>
            </div>
            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                style={{ width: `${(path.length / 25) * 100}%`, backgroundColor: accentColor }}
              />
            </div>
          </div>

          {/* The 5x6 Grid (Enlarged and centered cleanly) */}
          <div
            className="grid grid-cols-5 gap-3 sm:gap-3.5 w-full max-w-[340px] touch-none"
            onPointerDown={() => setIsDragging(true)}
            onPointerMove={handleContainerPointerMove}
          >
            {LEVEL_GRID.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                if (cell === 0) {
                  // Empty space dot
                  return (
                    <div key={`${rIdx}-${cIdx}`} className="aspect-square flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white/25 shadow-sm" />
                    </div>
                  );
                }

                const visitedIdx = path.findIndex((p) => p.r === rIdx && p.c === cIdx);
                const isVisited = visitedIdx !== -1;
                const isHead = visitedIdx === path.length - 1;
                const isStart = rIdx === 0 && cIdx === 0;
                const isGoal = rIdx === 0 && cIdx === 2;

                return (
                  <button
                    key={`${rIdx}-${cIdx}`}
                    data-coord={`${rIdx}-${cIdx}`}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                      handleTileEnter(rIdx, cIdx);
                    }}
                    onPointerEnter={() => {
                      if (isDragging) handleTileEnter(rIdx, cIdx);
                    }}
                    onClick={() => handleTileEnter(rIdx, cIdx)}
                    className={`aspect-square rounded-xl flex items-center justify-center text-lg font-bold transition-all relative select-none shadow-md ${
                      isStart
                        ? "bg-amber-400/95 text-slate-950 shadow-[0_0_18px_rgba(251,191,36,0.7)] z-10 scale-105"
                        : isGoal
                        ? isVisited
                          ? "bg-cyan-400 text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.9)] z-10 scale-105"
                          : "bg-cyan-500/25 border-2 border-cyan-400 text-cyan-400 animate-pulse"
                        : isVisited
                        ? "bg-emerald-400/85 text-slate-950 shadow-[0_0_14px_rgba(52,211,153,0.6)] scale-[1.02]"
                        : "bg-surface-container-highest/90 border border-white/15 text-transparent hover:border-white/40"
                    } ${isHead && !isStart && !isGoal ? "ring-2 ring-white scale-105 z-10" : ""}`}
                  >
                    {isStart ? "★" : isGoal ? "◈" : isVisited ? <span className="text-xs font-label-mono-bold opacity-75">{visitedIdx + 1}</span> : ""}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Mission Console & Telemetry (Col-Span 6) */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-between space-y-5 w-full">
          {/* Box 1: Mission Controls & Hints */}
          <div className="bg-gradient-to-br from-surface-container to-surface-container-high p-6 border border-white/15 rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-label-mono-bold text-xs uppercase text-amber-400 flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-[16px]">sports_esports</span>
                <span>MISSION CONTROLS</span>
              </span>
              <span className="text-[10px] font-label-mono-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                DRAG OR CLICK
              </span>
            </div>

            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed italic">
              {isWon
                ? "[SUCCESS] Perfect path! All 25 nodes filled without overlapping!"
                : path.length === 25
                ? "Reach the destination diamond tile to complete the level!"
                : "Drag continuously from the star to the destination diamond. Every single block must be filled!"}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleReset}
                title="Reset Grid"
                className="w-12 h-12 rounded-xl bg-surface-container-highest hover:bg-white/20 border border-white/20 flex items-center justify-center text-xl text-white transition-all shrink-0 shadow-lg"
              >
                ↻
              </button>

              <button
                onClick={handleHint}
                disabled={hintsLeft === 0 || isWon}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-label-mono-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-lg font-bold tracking-wide"
              >
                <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                <span>USE HINT ({hintsLeft} REMAINING)</span>
              </button>
            </div>
          </div>

          {/* Box 2: Gameplay Telemetry */}
          <div className="bg-surface-container p-6 border border-white/15 rounded-2xl space-y-4 shadow-xl">
            <div className="font-label-mono-bold text-xs text-white uppercase border-b border-white/10 pb-3 flex items-center justify-between">
              <span>GAMEPLAY TELEMETRY</span>
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accentColor }} />
            </div>
            <div className="space-y-3 text-xs font-label-mono-sm">
              <div className="flex justify-between items-center bg-black/30 px-3.5 py-2 rounded border border-white/5">
                <span className="text-on-surface-variant/70">CONTROLS:</span>
                <span className="text-white font-bold">DRAG OR TOUCH ADJACENT</span>
              </div>
              <div className="flex justify-between items-center bg-black/30 px-3.5 py-2 rounded border border-white/5">
                <span className="text-on-surface-variant/70">PHYSICS ENGINE:</span>
                <span className="text-emerald-400 font-bold">120HZ ADAPTIVE MESH</span>
              </div>
              <div className="flex justify-between items-center bg-black/30 px-3.5 py-2 rounded border border-white/5">
                <span className="text-on-surface-variant/70">ALGORITHM:</span>
                <span className="text-cyan-400 font-bold">HAMILTONIAN CYCLE</span>
              </div>
              <div className="flex justify-between items-center bg-black/30 px-3.5 py-2 rounded border border-white/5">
                <span className="text-on-surface-variant/70">GLOBAL RANKING:</span>
                <span className="text-amber-400 font-bold"># 42 SPEEDRUNNER</span>
              </div>
            </div>
          </div>

          {/* Box 3: Android Exclusive Optimization Badge */}
          <div className="bg-gradient-to-r from-surface-container-highest to-surface-container p-5 border border-white/15 rounded-2xl space-y-2 shadow-xl">
            <div className="font-label-mono-bold text-xs text-white uppercase tracking-wide flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span>ANDROID EXCLUSIVE OPTIMIZATION</span>
            </div>
            <p className="text-xs text-on-surface-variant/80 leading-relaxed font-body-sm">
              Engineered with custom OpenGL shaders and zero-alloc pathfinding algorithms for instant tactile responsiveness on Android touchscreens and mobile displays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   3. QUIZZY ARENA DEMO (1v1 Matchmaking Trivia)
======================================================== */
function QuizzyArenaDemo({ accentColor }: { accentColor: string }) {
  const [elo, setElo] = useState(1450);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(3);
  const [timer, setTimer] = useState(12);

  const questions = [
    {
      q: "Which protocol ensures quantum-resistant data sovereignty in modern mesh networks?",
      options: ["OOKUBB Mesh Relay v3", "Standard TCP/IPv4", "Legacy HTTP/1.1", "Basic SSL Handshake"],
      correct: 0,
    },
    {
      q: "In Lyniq's 2D pathfinding engine, what is the maximum locked frame rate on Android?",
      options: ["30 FPS", "60 FPS", "120 FPS Adaptive", "240 FPS Uncapped"],
      correct: 2,
    },
    {
      q: "What feature makes StudySpace unique among global note-taking applications?",
      options: ["Limited 5-page notes", "AI Assistant + Infinite Canvas", "Offline only storage", "Text-only interface"],
      correct: 1,
    },
  ];

  const currentQ = questions[currentQIndex];

  useEffect(() => {
    if (selectedOpt !== null) return;
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          handleSelect(1); // auto select wrong
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQIndex, selectedOpt]);

  const handleSelect = (idx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);
    const correct = idx === currentQ.correct;
    setIsCorrect(correct);
    if (correct) {
      setElo((e) => e + 25);
      setStreak((s) => s + 1);
    } else {
      setElo((e) => Math.max(1000, e - 15));
      setStreak(0);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setIsCorrect(null);
    setTimer(15);
    setCurrentQIndex((i) => (i + 1) % questions.length);
  };

  return (
    <div className="bg-surface-container-low border border-white/15 p-5 shadow-2xl font-body-md">
      {/* Matchmaking Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-5 gap-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs font-label-mono-bold bg-white/10 text-white uppercase border border-white/20">
            1v1 DUEL ARENA
          </span>
          <span className="font-label-mono-bold text-xs" style={{ color: accentColor }}>
            QUIZZY {"//"} LIVE MATCHMAKING
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-label-mono-bold">
          <div className="bg-black/40 px-3 py-1.5 border border-white/10 flex items-center gap-2">
            <span className="text-amber-400">★ ELO RATING:</span>
            <span className="text-white text-sm">{elo}</span>
          </div>
          <div className="bg-black/40 px-3 py-1.5 border border-white/10 flex items-center gap-2">
            <span className="text-emerald-400">STREAK:</span>
            <span className="text-white">{streak}x</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Opponent VS Bar */}
        <div className="col-span-1 md:col-span-4 space-y-4">
          <div className="bg-surface-container p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between font-label-mono-sm text-xs text-on-surface-variant/60 border-b border-white/10 pb-2">
              <span>ACTIVE DUEL</span>
              <span className="text-emerald-400 font-bold animate-pulse">● LIVE</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-primary/20 border border-primary flex items-center justify-center text-lg font-bold">
                P1
              </div>
              <div>
                <div className="font-label-mono-bold text-sm text-white">You (Lab_01)</div>
                <div className="font-label-mono-sm text-[10px] text-primary">ELO: {elo} | READY</div>
              </div>
            </div>
            <div className="text-center font-label-mono-bold text-xs text-on-surface-variant/40 py-1">VS</div>
            <div className="flex items-center gap-3 opacity-80">
              <div className="w-10 h-10 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center text-lg font-bold text-red-400">
                AI
              </div>
              <div>
                <div className="font-label-mono-bold text-sm text-white">Neural_Master_99</div>
                <div className="font-label-mono-sm text-[10px] text-red-400">ELO: 1465 | THINKING...</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-3 border border-white/10 font-label-mono-sm text-xs text-on-surface-variant/70">
            <span className="text-white font-bold">[PRO TIP]</span> Team matchmaking supports up to 4v4 squads with synchronized category voting!
          </div>
        </div>

        {/* Question Card */}
        <div className="col-span-1 md:col-span-8 bg-surface-container-highest/60 p-6 border border-white/15 relative">
          <div className="flex justify-between items-center mb-4 font-label-mono-sm text-xs">
            <span className="text-on-surface-variant/60 uppercase">
              QUESTION {currentQIndex + 1} OF {questions.length} {"//"} AI SYNTHESIZED
            </span>
            <span className={`font-label-mono-bold px-2 py-0.5 border ${timer <= 5 ? "bg-red-500/20 border-red-500 text-red-400 animate-pulse" : "bg-black/40 border-white/20 text-white"}`}>
              {timer}s REMAINING
            </span>
          </div>

          <h4 className="font-headline-lg text-lg text-white mb-6 leading-snug">
            {currentQ.q}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {currentQ.options.map((opt, idx) => {
              let btnStyle = "bg-surface-container hover:bg-white/10 border-white/10 text-on-surface-variant";
              if (selectedOpt !== null) {
                if (idx === currentQ.correct) {
                  btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]";
                } else if (idx === selectedOpt && !isCorrect) {
                  btnStyle = "bg-red-500/20 border-red-500 text-red-300 font-bold";
                } else {
                  btnStyle = "bg-surface-container/40 border-white/5 opacity-40 text-on-surface-variant/40";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selectedOpt !== null}
                  className={`p-3.5 text-left border text-xs font-label-mono-sm transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {selectedOpt !== null && idx === currentQ.correct && <span>✓</span>}
                  {selectedOpt !== null && idx === selectedOpt && !isCorrect && <span>✕</span>}
                </button>
              );
            })}
          </div>

          {selectedOpt !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between pt-4 border-t border-white/10"
            >
              <div className="font-label-mono-bold text-xs">
                {isCorrect ? (
                  <span className="text-emerald-400 flex items-center gap-2">[+] CORRECT! +25 ELO RATING</span>
                ) : (
                  <span className="text-red-400 flex items-center gap-2">[-] MISSED! The correct answer was option #{currentQ.correct + 1}</span>
                )}
              </div>
              <button
                onClick={handleNext}
                className="px-5 py-2 font-label-mono-bold text-xs uppercase text-black font-bold tracking-wider hover:opacity-90 transition-all"
                style={{ backgroundColor: accentColor }}
              >
                NEXT QUESTION →
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   4. STUDYSPACE MAKEVAS DEMO (Interactive Neural Drawing Board)
======================================================== */
function StudySpaceCanvasDemo({ accentColor }: { accentColor: string }) {
  // Drawing Tools & State
  type ToolType = "pan" | "pen" | "brush" | "highlighter" | "eraser" | "line" | "rect" | "circle";
  const [tool, setTool] = useState<ToolType>("pen");
  const [color, setColor] = useState("#38bdf8");
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  const [history, setHistory] = useState<{
    id: number;
    tool: ToolType;
    color: string;
    size: number;
    opacity: number;
    points: { x: number; y: number }[];
  }[]>([
    // Pre-populated handwritten "studyspace" in authentic human highlighter strokes!
    // "study" in Amber Gold (#fbbf24)
    { id: 101, tool: "highlighter", color: "#fbbf24", size: 18, opacity: 0.45, points: [{x:80, y:185}, {x:65, y:180}, {x:55, y:190}, {x:75, y:205}, {x:85, y:215}, {x:75, y:230}, {x:55, y:225}] }, // s
    { id: 102, tool: "highlighter", color: "#fbbf24", size: 18, opacity: 0.45, points: [{x:110, y:140}, {x:110, y:225}, {x:125, y:230}] }, // t stem
    { id: 103, tool: "highlighter", color: "#fbbf24", size: 18, opacity: 0.45, points: [{x:95, y:180}, {x:130, y:178}] }, // t crossbar
    { id: 104, tool: "highlighter", color: "#fbbf24", size: 18, opacity: 0.45, points: [{x:145, y:185}, {x:145, y:220}, {x:160, y:230}, {x:175, y:220}, {x:175, y:185}, {x:175, y:230}] }, // u
    { id: 105, tool: "highlighter", color: "#fbbf24", size: 18, opacity: 0.45, points: [{x:220, y:190}, {x:205, y:185}, {x:195, y:205}, {x:205, y:228}, {x:225, y:225}, {x:225, y:140}, {x:225, y:230}] }, // d
    { id: 106, tool: "highlighter", color: "#fbbf24", size: 18, opacity: 0.45, points: [{x:250, y:185}, {x:250, y:220}, {x:265, y:228}, {x:280, y:220}, {x:280, y:185}, {x:280, y:265}, {x:260, y:275}, {x:245, y:265}] }, // y
    // "space" in Cyan (#38bdf8)
    { id: 107, tool: "highlighter", color: "#38bdf8", size: 18, opacity: 0.45, points: [{x:330, y:185}, {x:315, y:180}, {x:305, y:190}, {x:325, y:205}, {x:335, y:215}, {x:325, y:230}, {x:305, y:225}] }, // s
    { id: 108, tool: "highlighter", color: "#38bdf8", size: 18, opacity: 0.45, points: [{x:355, y:185}, {x:355, y:275}] }, // p stem
    { id: 109, tool: "highlighter", color: "#38bdf8", size: 18, opacity: 0.45, points: [{x:355, y:190}, {x:375, y:185}, {x:385, y:205}, {x:375, y:228}, {x:355, y:225}] }, // p loop
    { id: 110, tool: "highlighter", color: "#38bdf8", size: 18, opacity: 0.45, points: [{x:425, y:190}, {x:410, y:185}, {x:400, y:205}, {x:410, y:228}, {x:428, y:225}, {x:428, y:185}, {x:428, y:230}] }, // a
    { id: 111, tool: "highlighter", color: "#38bdf8", size: 18, opacity: 0.45, points: [{x:478, y:190}, {x:465, y:185}, {x:450, y:205}, {x:465, y:228}, {x:480, y:225}] }, // c
    { id: 112, tool: "highlighter", color: "#38bdf8", size: 18, opacity: 0.45, points: [{x:495, y:210}, {x:520, y:205}, {x:520, y:190}, {x:508, y:185}, {x:495, y:205}, {x:508, y:228}, {x:525, y:225}] }, // e
    // Stylish Rose Pink (#f43f5e) double underline flourish
    { id: 113, tool: "highlighter", color: "#f43f5e", size: 14, opacity: 0.4, points: [{x:45, y:255}, {x:200, y:253}, {x:360, y:256}, {x:535, y:252}] },
    { id: 114, tool: "highlighter", color: "#f43f5e", size: 10, opacity: 0.35, points: [{x:60, y:268}, {x:250, y:266}, {x:500, y:265}] },
  ]);
  const [currentPath, setCurrentPath] = useState<{
    id: number;
    tool: ToolType;
    color: string;
    size: number;
    opacity: number;
    points: { x: number; y: number }[];
  } | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const toolsList: { id: ToolType; label: string; icon: string; size: number; opacity: number }[] = [
    { id: "pan", label: "Pan", icon: "pan_tool", size: 0, opacity: 1 },
    { id: "pen", label: "Pen", icon: "edit", size: 2, opacity: 1 },
    { id: "brush", label: "Brush", icon: "brush", size: 6, opacity: 1 },
    { id: "highlighter", label: "Highlighter", icon: "border_color", size: 16, opacity: 0.35 },
    { id: "eraser", label: "Eraser", icon: "ink_eraser", size: 20, opacity: 1 },
    { id: "line", label: "Arrow", icon: "arrow_outward", size: 2, opacity: 1 },
    { id: "rect", label: "Box", icon: "crop_square", size: 2, opacity: 1 },
    { id: "circle", label: "Circle", icon: "circle", size: 2, opacity: 1 },
  ];

  const colorsList = [
    { hex: "#38bdf8", name: "Cyan" },
    { hex: "#a855f7", name: "Neural Purple" },
    { hex: "#10b981", name: "Emerald" },
    { hex: "#fbbf24", name: "Amber Gold" },
    { hex: "#f43f5e", name: "Rose Pink" },
    { hex: "#ffffff", name: "Pure White" },
  ];

  // Redraw Canvas whenever history, currentPath, or offset changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseWidth = 580;
    const drawScale = canvas.width < baseWidth ? Math.max(0.5, canvas.width / baseWidth) : 1;
    const offsetYAdjust = drawScale !== 1 ? (canvas.height / drawScale - canvas.height) / 4 : 0;

    ctx.save();
    ctx.scale(drawScale, drawScale);
    ctx.translate(0, offsetYAdjust);
    ctx.translate(offset.x, offset.y);

    const itemsToDraw = currentPath ? [...history, currentPath] : history;

    itemsToDraw.forEach((item) => {
      ctx.save();
      ctx.strokeStyle = item.color;
      ctx.fillStyle = item.color;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = item.opacity;

      if (item.tool === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = item.size;
      } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.lineWidth = item.size;
      }

      if (item.tool === "pen" || item.tool === "brush" || item.tool === "highlighter" || item.tool === "eraser") {
        if (item.points.length > 0) {
          ctx.beginPath();
          ctx.moveTo(item.points[0].x, item.points[0].y);
          for (let i = 1; i < item.points.length; i++) {
            ctx.lineTo(item.points[i].x, item.points[i].y);
          }
          ctx.stroke();
        }
      } else if (item.tool === "line" && item.points.length > 1) {
        const start = item.points[0];
        const end = item.points[item.points.length - 1];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        // Draw arrow head
        const angle = Math.atan2(end.y - start.y, end.x - start.x);
        const headLen = 10;
        ctx.beginPath();
        ctx.moveTo(end.x, end.y);
        ctx.lineTo(end.x - headLen * Math.cos(angle - Math.PI / 6), end.y - headLen * Math.sin(angle - Math.PI / 6));
        ctx.moveTo(end.x, end.y);
        ctx.lineTo(end.x - headLen * Math.cos(angle + Math.PI / 6), end.y - headLen * Math.sin(angle + Math.PI / 6));
        ctx.stroke();
      } else if (item.tool === "rect" && item.points.length > 1) {
        const start = item.points[0];
        const end = item.points[item.points.length - 1];
        ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
      } else if (item.tool === "circle" && item.points.length > 1) {
        const start = item.points[0];
        const end = item.points[item.points.length - 1];
        const radius = Math.hypot(end.x - start.x, end.y - start.y) / 2;
        const centerX = (start.x + end.x) / 2;
        const centerY = (start.y + end.y) / 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }

      ctx.restore();
    });

    ctx.restore();
  }, [history, currentPath, offset]);

  const getCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const baseWidth = 580;
    const drawScale = canvas.width < baseWidth ? Math.max(0.5, canvas.width / baseWidth) : 1;
    const offsetYAdjust = drawScale !== 1 ? (canvas.height / drawScale - canvas.height) / 4 : 0;
    return {
      x: ((e.clientX - rect.left) * scaleX) / drawScale - offset.x,
      y: ((e.clientY - rect.top) * scaleY) / drawScale - offsetYAdjust - offset.y,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (tool === "pan" || e.button === 1 || e.button === 2 || e.shiftKey || e.altKey) {
      setIsPanning(true);
      const canvas = canvasRef.current;
      const baseWidth = 580;
      const drawScale = canvas && canvas.width < baseWidth ? Math.max(0.5, canvas.width / baseWidth) : 1;
      const offsetYAdjust = canvas && drawScale !== 1 ? (canvas.height / drawScale - canvas.height) / 4 : 0;
      const rect = canvas ? canvas.getBoundingClientRect() : { left: 0, top: 0 };
      setPanStart({ x: ((e.clientX - rect.left) / drawScale) - offsetYAdjust - offset.x, y: ((e.clientY - rect.top) / drawScale) - offsetYAdjust - offset.y });
      return;
    }
    setIsDrawing(true);
    const pt = getCanvasPoint(e);
    const activeToolObj = toolsList.find((t) => t.id === tool) || toolsList[1];
    setCurrentPath({
      id: Date.now(),
      tool,
      color: tool === "eraser" ? "#000000" : color,
      size: activeToolObj.size,
      opacity: activeToolObj.opacity,
      points: [pt],
    });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isPanning) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const baseWidth = 580;
      const drawScale = canvas.width < baseWidth ? Math.max(0.5, canvas.width / baseWidth) : 1;
      const offsetYAdjust = drawScale !== 1 ? (canvas.height / drawScale - canvas.height) / 4 : 0;
      const rect = canvas.getBoundingClientRect();
      setOffset({ x: ((e.clientX - rect.left) / drawScale) - offsetYAdjust - panStart.x, y: ((e.clientY - rect.top) / drawScale) - offsetYAdjust - panStart.y });
      return;
    }
    if (!isDrawing || !currentPath) return;
    const pt = getCanvasPoint(e);
    if (tool === "pen" || tool === "brush" || tool === "highlighter" || tool === "eraser") {
      setCurrentPath((prev) => prev ? { ...prev, points: [...prev.points, pt] } : null);
    } else {
      // For shapes (line, rect, circle), update the second endpoint dynamically
      setCurrentPath((prev) => prev ? { ...prev, points: [prev.points[0], pt] } : null);
    }
  };

  const handlePointerUp = () => {
    if (isPanning) {
      setIsPanning(false);
      return;
    }
    if (!isDrawing || !currentPath) return;
    setIsDrawing(false);
    if (currentPath.points.length > 0) {
      setHistory((prev) => [...prev, currentPath]);
    }
    setCurrentPath(null);
  };

  return (
    <div className="bg-surface-container-low border border-white/15 p-5 shadow-2xl font-body-md rounded-2xl space-y-4">
      {/* Header & Title Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
          <div>
            <div className="font-label-mono-bold text-xs uppercase flex items-center gap-2" style={{ color: accentColor }}>
              <span>STUDYSPACE {"//"} MAKEVAS_v1 [NEURAL DRAWING BOARD]</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-white/10 text-white border border-white/15">
                INTERACTIVE
              </span>
            </div>
            <div className="text-[11px] text-on-surface-variant/60">Draw diagrams, pan infinitely across spatial coordinates, and sketch vectors with zero cognitive friction</div>
          </div>
        </div>
      </div>

      {/* Drawing Toolbar (Tools, Colors, Actions) */}
      <div className="bg-surface-container p-2.5 sm:p-3 rounded-xl border border-white/15 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3 shadow-inner">
        {/* Tool Selectors */}
        <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center gap-1 sm:gap-1.5 pb-1 xl:pb-0">
          {toolsList.map((t) => (
            <button
              key={t.id}
              onClick={() => setTool(t.id)}
              className={`px-2 py-2 sm:px-3 sm:py-1.5 rounded-lg font-label-mono-bold text-[10px] sm:text-xs uppercase transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 shrink-0 ${
                tool === t.id
                  ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105 z-10"
                  : "bg-black/40 text-on-surface-variant/70 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[16px]">{t.icon}</span>
              <span className="text-[9px] sm:text-xs">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Color Palette & Canvas Controls */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between xl:justify-end gap-2.5 sm:gap-3 pt-2 xl:pt-0 border-t border-white/10 xl:border-t-0">
          {/* Color Swatches (disabled when Eraser or Pan is selected) */}
          <div className={`flex items-center justify-between sm:justify-start gap-1 sm:gap-1.5 bg-black/40 px-2.5 py-2 sm:py-1.5 rounded-lg border border-white/10 ${tool === "eraser" || tool === "pan" ? "opacity-30 pointer-events-none" : ""}`}>
            {colorsList.map((c) => (
              <button
                key={c.hex}
                onClick={() => setColor(c.hex)}
                title={c.name}
                className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full transition-transform ${color === c.hex ? "scale-125 ring-2 ring-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10" : "opacity-70 hover:opacity-100 hover:scale-110"}`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>

          {/* Recenter, Undo & Clear Buttons */}
          <div className="grid grid-cols-3 sm:flex items-center gap-1.5">
            <button
              onClick={() => setOffset({ x: 0, y: 0 })}
              disabled={offset.x === 0 && offset.y === 0}
              title="Reset View / Recenter Canvas"
              className="w-full sm:w-auto justify-center px-2.5 py-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white font-label-mono-bold text-[10px] sm:text-xs transition-all border border-white/10 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">my_location</span>
              <span>RESET</span>
            </button>
            <button
              onClick={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
              disabled={history.length === 0}
              title="Undo Last Stroke"
              className="w-full sm:w-auto justify-center px-2.5 py-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white font-label-mono-bold text-[10px] sm:text-xs transition-all border border-white/10 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">undo</span>
              <span>UNDO</span>
            </button>
            <button
              onClick={() => setHistory([])}
              disabled={history.length === 0}
              title="Clear Drawing Board"
              className="w-full sm:w-auto justify-center px-2.5 py-2 sm:px-3 sm:py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 disabled:opacity-30 text-red-300 font-label-mono-bold text-[10px] sm:text-xs transition-all border border-red-500/30 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">delete</span>
              <span>CLEAR</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Drawing Board Box */}
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="relative h-[360px] sm:h-[420px] bg-surface-container-lowest border border-white/15 overflow-hidden grid-blueprint rounded-xl shadow-inner select-none"
        style={{
          backgroundPosition: `${offset.x}px ${offset.y}px`,
        }}
      >
        {/* Spatial Coordinates & Neural AI Status */}
        <div className="absolute top-3 left-3 right-3 sm:right-auto font-label-mono-sm text-[9px] sm:text-[10px] text-white/40 pointer-events-none z-0 max-w-[calc(100%-24px)] truncate">
          COORDS: [{(-offset.x).toFixed(0)}, {(-offset.y).toFixed(0)}] {"//"} MESH: {history.length} STROKES <span className="hidden sm:inline">{"//"} MAKEVAS ENGINE</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 font-label-mono-sm text-[9px] sm:text-[10px] text-purple-300/90 pointer-events-none flex items-center justify-center sm:justify-start gap-1.5 z-0 bg-black/85 px-3 py-1.5 rounded-lg border border-purple-500/40 backdrop-blur-md max-w-[calc(100%-24px)] mx-auto shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping shrink-0" />
          <span className="truncate">NEURAL CO-PILOT: <span className="hidden sm:inline">VECTORIZING STROKES IN REAL-TIME</span><span className="sm:hidden">ACTIVE</span></span>
        </div>

        {/* HTML5 Interactive Drawing Canvas Layer */}
        <canvas
          ref={canvasRef}
          onContextMenu={(e) => e.preventDefault()}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`absolute inset-0 w-full h-full z-10 touch-none ${
            tool === "pan" || isPanning ? (isPanning ? "cursor-grabbing" : "cursor-grab") : "cursor-crosshair"
          }`}
        />
      </div>

      {/* Footer Info */}
      <div className="flex flex-wrap items-center justify-between text-xs font-label-mono-sm text-on-surface-variant/70 gap-2 px-1">
        <span><strong className="text-white">Makevas Engine:</strong> Zero-latency vector sketching with custom pen, brush, highlighter, and geometric shape tools.</span>
        <span className="text-purple-400 font-bold">100% SOVEREIGN CLOUD STORAGE</span>
      </div>
    </div>
  );
}
