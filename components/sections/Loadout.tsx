"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface LoadoutItem {
  name: string;
  role: string;
  /* SVG path data or short text logo */
  symbol: string;
  isText?: boolean;
}

const items: LoadoutItem[] = [
  { name: "Kali Linux",    role: "Daily driver",           symbol: "K" },
  { name: "Parrot OS",     role: "Recon & analysis",       symbol: "P" },
  { name: "Burp Suite Pro",role: "Web app testing",        symbol: "B", isText: true },
  { name: "Hyprland",      role: "Tiling WM",              symbol: "H" },
  { name: "fish shell",    role: "Shell environment",      symbol: "~" },
  { name: "Mullvad VPN",   role: "Privacy layer",          symbol: "M" },
  { name: "Claude Code",   role: "AI pair programmer",     symbol: "CC", isText: true },
];

export default function Loadout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="loadout"
      className="w-full py-24"
      style={{ background: "transparent", borderTop: "1px solid var(--grid-line)" }}
      aria-labelledby="loadout-heading"
    >
      <div ref={ref} className="max-w-350 mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex items-end gap-6 mb-14">
          <div className="flex flex-col gap-2">
            <motion.span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--neon-cyan)", opacity: 0.6 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.5 }}
            >
              04 / 06
            </motion.span>
            <motion.h2
              id="loadout-heading"
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              THE LOADOUT
            </motion.h2>
          </div>
          <motion.div
            className="flex-1 h-px mb-3 origin-left hidden md:block"
            style={{ background: "var(--grid-line)" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            aria-hidden="true"
          />
        </div>

        {/* Descriptor */}
        <motion.p
          className="font-mono text-sm mb-10 max-w-md"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Multi-VM operator. Riced to perfection.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              className="group relative flex flex-col items-center gap-3 p-5 rounded-sm cursor-default"
              style={{
                background: "rgba(10, 14, 20, 0.4)",
                border: "1px solid var(--grid-line)",
                transition: "border-color 250ms, background 250ms",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,229,255,0.35)";
                el.style.background = "rgba(0,229,255,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--grid-line)";
                el.style.background = "var(--bg-carbon)";
              }}
            >
              {/* Symbol / logo placeholder — greyscale to color on hover */}
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center font-display font-bold text-lg transition-all duration-250"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-muted)",
                  filter: "grayscale(1)",
                  transition: "filter 250ms, color 250ms",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.filter = "grayscale(0)";
                  el.style.color = "var(--neon-cyan)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.filter = "grayscale(1)";
                  el.style.color = "var(--text-muted)";
                }}
                aria-hidden="true"
              >
                {item.symbol}
              </div>

              <div className="text-center">
                <p
                  className="font-mono text-xs font-medium leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.name}
                </p>
                <p
                  className="font-mono text-xs mt-0.5"
                  style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}
                >
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
