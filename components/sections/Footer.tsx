"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="w-full py-8 relative"
      style={{
        background: "transparent",
        borderTop: "1px solid var(--neon-cyan)",
      }}
      aria-label="Site footer"
    >
      {/* Cyan top line glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
          boxShadow: "0 0 16px rgba(0,229,255,0.4)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <div className="max-w-350 mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: identity */}
        <p
          className="font-mono text-xs text-center sm:text-left"
          style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
        >
          D3ADSHOT&nbsp;
          <span style={{ color: "var(--grid-line)" }}>// </span>© 2026&nbsp;
          <span style={{ color: "var(--grid-line)" }}>// </span>
          ALL RIGHTS RESERVED
        </p>

        {/* Center: coffee */}
        <a
          href="https://buymeacoffee.com/d3adshot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-200 focus-visible:ring-2"
          style={{
            color: "var(--text-muted)",
            border: "1px solid var(--grid-line)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(0,229,255,0.4)";
            el.style.color = "var(--neon-cyan-soft)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--grid-line)";
            el.style.color = "var(--text-muted)";
          }}
          aria-label="Buy D3ADSHOT a coffee"
        >
          <span aria-hidden="true">☕</span>
          Buy Me a Coffee
        </a>

        {/* Right: status */}
        <div
          className="flex items-center gap-2 font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span style={{ letterSpacing: "0.1em" }}>STATUS:</span>
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: "#00c853" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Operational"
          />
          <span style={{ color: "#00c853", letterSpacing: "0.08em" }}>
            OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
