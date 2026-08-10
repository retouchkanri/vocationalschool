"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ThemeOption = {
  id: string;
  label: string;
  swatch: string;
  vars: { primary: string; primaryDark: string; primaryDeep: string };
};

/** Five selectable brand palettes. Only the primary green tokens change. */
const THEMES: ThemeOption[] = [
  {
    id: "green",
    label: "グリーン",
    swatch: "#00913a",
    vars: { primary: "#00913a", primaryDark: "#007830", primaryDeep: "#024d1f" },
  },
  {
    id: "navy",
    label: "ネイビー",
    swatch: "#1b4f7a",
    vars: { primary: "#1b4f7a", primaryDark: "#163f61", primaryDeep: "#0f2b44" },
  },
  {
    id: "burgundy",
    label: "ワインレッド",
    swatch: "#8a1f34",
    vars: { primary: "#8a1f34", primaryDark: "#6f1929", primaryDeep: "#4a0f1b" },
  },
  {
    id: "brown",
    label: "サドルブラウン",
    swatch: "#8a5a2b",
    vars: { primary: "#8a5a2b", primaryDark: "#6e4620", primaryDeep: "#4a2f16" },
  },
  {
    id: "teal",
    label: "ティール",
    swatch: "#0f766e",
    vars: { primary: "#0f766e", primaryDark: "#0c5d56", primaryDeep: "#083f3a" },
  },
];

const STORAGE_KEY = "site-theme-color";

function applyTheme(theme: ThemeOption) {
  const root = document.documentElement.style;
  root.setProperty("--color-primary", theme.vars.primary);
  root.setProperty("--color-primary-dark", theme.vars.primaryDark);
  root.setProperty("--color-primary-deep", theme.vars.primaryDeep);
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
    >
      <circle cx="12" cy="12" r="3.2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2.06 2.06 0 1 1-2.92 2.92l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2.06 2.06 0 1 1-4.12 0v-.09a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2.06 2.06 0 1 1-2.92-2.92l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2.06 2.06 0 1 1 0-4.12h.09a1.7 1.7 0 0 0 1.56-1.03 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2.06 2.06 0 1 1 2.92-2.92l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2.06 2.06 0 1 1 4.12 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2.06 2.06 0 1 1 2.92 2.92l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.03H21a2.06 2.06 0 1 1 0 4.12h-.09a1.7 1.7 0 0 0-1.56 1.03z"
      />
    </svg>
  );
}

/**
 * Fixed mid-right control that lets visitors switch the site's accent
 * palette. Selection persists via localStorage across page navigations.
 */
export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("green");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const theme = THEMES.find((t) => t.id === saved);
    if (theme) setActiveId(theme.id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickAway = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [open]);

  const handleSelect = (theme: ThemeOption) => {
    applyTheme(theme);
    setActiveId(theme.id);
    window.localStorage.setItem(STORAGE_KEY, theme.id);
  };

  // Fan the 5 swatches across a semicircle centered on the gear, opening
  // to the left (top → left → bottom), so nothing spills off-screen.
  const RADIUS = 62;
  const SWATCH_HALF = 14; // half of h-7/w-7 (28px)
  const START_ANGLE = 90;
  const ANGLE_STEP = 45;

  return (
    <div
      ref={wrapRef}
      className="fixed right-4 top-1/2 z-[65] -translate-y-1/2 md:right-6"
    >
      <div className="relative h-12 w-12">
        <AnimatePresence>
          {open &&
            THEMES.map((theme, i) => {
              const angleRad = ((START_ANGLE + i * ANGLE_STEP) * Math.PI) / 180;
              const arcX = RADIUS * Math.cos(angleRad) - SWATCH_HALF;
              const arcY = -RADIUS * Math.sin(angleRad) - SWATCH_HALF;
              return (
                <motion.button
                  key={theme.id}
                  type="button"
                  aria-label={`配色を${theme.label}に変更`}
                  aria-pressed={activeId === theme.id}
                  onClick={() => handleSelect(theme)}
                  initial={{ opacity: 0, x: -SWATCH_HALF, y: -SWATCH_HALF, scale: 0.3 }}
                  animate={{ opacity: 1, x: arcX, y: arcY, scale: 1 }}
                  exit={{ opacity: 0, x: -SWATCH_HALF, y: -SWATCH_HALF, scale: 0.3 }}
                  transition={{
                    duration: 0.32,
                    delay: i * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute left-1/2 top-1/2 h-7 w-7 rounded-full ring-2 shadow-[0_4px_14px_-2px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:scale-110 ${
                    activeId === theme.id ? "ring-white" : "ring-white/55"
                  }`}
                  style={{ backgroundColor: theme.swatch }}
                  title={theme.label}
                />
              );
            })}
        </AnimatePresence>

        <button
          type="button"
          aria-label={open ? "配色設定を閉じる" : "配色設定を開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_28px_-10px_rgb(31_45_35/0.45)] transition-transform duration-300 hover:scale-105"
        >
          <GearIcon className="h-6 w-6 animate-gear-spin" />
        </button>
      </div>
    </div>
  );
}
