"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ─── Matrix intro ─────────────────────────────────────────────────────────────
const MATRIX_LINES = [
  { text: "Wake up...",          delay: 150  },
  { text: "",                    delay: 950  },
  { text: "The matrix has you.", delay: 1700 },
  { text: "",                    delay: 2500 },
  { text: "Follow D3ADSHOT...", delay: 3100 },
];
const TERMINAL_START = 4500;

// ─── Terminal dump ────────────────────────────────────────────────────────────
interface Line {
  text: string;
  color: "cyan" | "red" | "primary" | "muted" | "dim" | "blink";
  delay: number;
}

const TERMINAL_LINES: Line[] = [
  { text: "root@d3adshot:~$ whoami",                                          color: "cyan",    delay: 0    },
  { text: "bash: permission denied — escalating override...",                 color: "red",     delay: 700  },
  { text: "",                                                                  color: "dim",     delay: 1000 },
  { text: "─────────────────────────────────────────────────────────",        color: "dim",     delay: 1100 },
  { text: "  IDENTITY MODULE  //  CLEARANCE: OVERRIDE GRANTED",               color: "dim",     delay: 1150 },
  { text: "─────────────────────────────────────────────────────────",        color: "dim",     delay: 1200 },
  { text: "",                                                                  color: "dim",     delay: 1350 },
  { text: "OPERATOR ......... D3ADSHOT",                                       color: "primary", delay: 1500 },
  { text: "ALIAS ............ [CLASSIFIED]",                                   color: "muted",   delay: 1650 },
  { text: "ORIGIN ........... CyberSpace",                                     color: "primary", delay: 1800 },
  { text: "ROLE ............. Bug Bounty Hunter  ·  Red Team Operator",        color: "primary", delay: 1950 },
  { text: "",                                                                  color: "dim",     delay: 2050 },
  { text: "PLATFORMS:",                                                        color: "cyan",    delay: 2150 },
  { text: "  ├─ Bugcrowd        [ ACTIVE ]",                                  color: "primary", delay: 2280 },
  { text: "  ├─ HackerOne       [ ACTIVE ]",                                  color: "primary", delay: 2400 },
  { text: "  ├─ Intigriti       [ ACTIVE ]",                                  color: "primary", delay: 2520 },
  { text: "  └─ YesWeHack       [ ACTIVE ]",                                  color: "primary", delay: 2640 },
  { text: "",                                                                  color: "dim",     delay: 2740 },
  { text: "SPECIALIZATIONS:",                                                  color: "cyan",    delay: 2840 },
  { text: "  [✓] Phishing Infrastructure  (D3adphish — Go 1.18+)",           color: "primary", delay: 2970 },
  { text: "  [✓] OSINT Collection & Target Attribution",                       color: "primary", delay: 3090 },
  { text: "  [✓] Web Application Exploitation",                               color: "primary", delay: 3210 },
  { text: "  [✓] Social Engineering",                                          color: "primary", delay: 3330 },
  { text: "",                                                                  color: "dim",     delay: 3430 },
  { text: "KNOWN TOOLS ...... kali · burp-pro · private-osint-collection · [+more]", color: "muted", delay: 3540 },
  { text: "",                                                                  color: "dim",     delay: 3660 },
  { text: "THREAT LEVEL ..... ████████░░  CRITICAL",                          color: "red",     delay: 3800 },
  { text: "STATUS ........... HUNTING",                                        color: "cyan",    delay: 3950 },
  { text: "",                                                                  color: "dim",     delay: 4100 },
  { text: "[ PRESS ESC TO TERMINATE SESSION ]",                               color: "blink",   delay: 4250 },
];

const COLOR: Record<Line["color"], string> = {
  cyan:    "#00e5ff",
  red:     "#ff2a3d",
  primary: "#e8eef5",
  muted:   "#6b7785",
  dim:     "rgba(0,229,255,0.25)",
  blink:   "#6b7785",
};

type Phase = null | "matrix" | "terminal";

// ─── Root component ───────────────────────────────────────────────────────────
export default function WhoamiEgg() {
  const [phase, setPhase] = useState<Phase>(null);
  const [matrixCount, setMatrixCount]   = useState(0);
  const [terminalCount, setTerminalCount] = useState(0);
  const bufferRef  = useRef("");
  const timersRef  = useRef<ReturnType<typeof setTimeout>[]>([]);


  // Global keystream
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "Escape") { setPhase(null); return; }
      if (e.key.length !== 1) return;
      bufferRef.current = (bufferRef.current + e.key).slice(-10);
      if (bufferRef.current.toLowerCase().endsWith("whoami")) {
        bufferRef.current = "";
        setPhase("matrix");
        setMatrixCount(0);
        setTerminalCount(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Matrix phase timers
  useEffect(() => {
    if (phase !== "matrix") return;
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setMatrixCount(0);

    MATRIX_LINES.forEach((line, i) => {
      const t = setTimeout(() => setMatrixCount(i + 1), line.delay);
      timersRef.current.push(t);
    });
    const t = setTimeout(() => setPhase("terminal"), TERMINAL_START);
    timersRef.current.push(t);

    return () => timersRef.current.forEach(clearTimeout);
  }, [phase]);

  // Terminal phase timers
  useEffect(() => {
    if (phase !== "terminal") return;
    setTerminalCount(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => setTerminalCount(i + 1), line.delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  const close = () => setPhase(null);

  return (
    <>
      <CornerPrompt hidden={phase !== null} />

      {/* Single backdrop — fades in once, persists across phase swap */}
      <AnimatePresence>
        {phase !== null && (
          <motion.div
            key="whoami-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9000,
              background: "rgba(4,6,10,0.97)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,229,255,0.012) 0px, rgba(0,229,255,0.012) 1px, transparent 1px, transparent 3px)",
            }}
          >
            {/* Ambient green/cyan glow shifts between phases */}
            <motion.div
              animate={{
                background: phase === "matrix"
                  ? "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,65,0.05) 0%, transparent 70%)"
                  : "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)",
              }}
              transition={{ duration: 1.2 }}
              style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            />

            {/* Content — swaps between Matrix and Terminal */}
            <AnimatePresence mode="wait">
              {phase === "matrix" && (
                <MatrixContent
                  key="matrix"
                  lines={MATRIX_LINES}
                  shownCount={matrixCount}
                />
              )}
              {phase === "terminal" && (
                <TerminalContent
                  key="terminal"
                  lines={TERMINAL_LINES}
                  shownCount={terminalCount}
                  onClose={close}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Matrix phase content ─────────────────────────────────────────────────────
function MatrixContent({
  lines,
  shownCount,
}: {
  lines: typeof MATRIX_LINES;
  shownCount: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      transition={{ duration: 0.4 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.2rem",
        fontFamily: "var(--font-mono), monospace",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      {lines.slice(0, shownCount).map((line, i) => {
        if (!line.text) return <div key={i} style={{ height: "1.6rem" }} />;

        const isWakeUp = i === 0;
        const hasHandle = line.text.includes("D3ADSHOT");

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              color: "#00ff41",
              fontSize: isWakeUp ? "clamp(1.6rem, 4vw, 2.4rem)" : "clamp(0.9rem, 2vw, 1.15rem)",
              fontWeight: isWakeUp ? 500 : 400,
              letterSpacing: isWakeUp ? "0.12em" : "0.06em",
              textShadow: "0 0 20px rgba(0,255,65,0.6), 0 0 60px rgba(0,255,65,0.2)",
            }}
          >
            {hasHandle ? (
              <>
                {line.text.split("D3ADSHOT")[0]}
                <span style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.7), 0 0 60px rgba(0,229,255,0.3)" }}>
                  D3ADSHOT
                </span>
                {line.text.split("D3ADSHOT")[1]}
              </>
            ) : (
              line.text
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ─── Terminal phase content ───────────────────────────────────────────────────
function TerminalContent({
  lines,
  shownCount,
  onClose,
}: {
  lines: Line[];
  shownCount: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "min(720px, 92vw)",
        maxHeight: "80vh",
        overflowY: "auto",
        padding: "2rem 2.5rem",
        background: "rgba(10,14,20,0.92)",
        border: "1px solid rgba(0,229,255,0.18)",
        borderRadius: 8,
        boxShadow:
          "0 0 60px rgba(0,229,255,0.08), 0 0 120px rgba(0,229,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: "1.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgba(0,229,255,0.1)",
        }}
      >
        <div
          style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff2a3d", opacity: 0.8, cursor: "pointer" }}
          onClick={onClose}
        />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f7df1e", opacity: 0.5 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00e5ff", opacity: 0.4 }} />
        <span
          style={{
            marginLeft: 12,
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            color: "rgba(0,229,255,0.35)",
            userSelect: "none",
          }}
        >
          bash — d3adshot@kali: ~
        </span>
      </div>

      {/* Lines */}
      <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.78rem", lineHeight: 1.9 }}>
        {lines.slice(0, shownCount).map((line, i) => (
          <div
            key={i}
            style={{
              color: COLOR[line.color],
              whiteSpace: "pre",
              minHeight: "1.4em",
              letterSpacing: line.color === "dim" ? "0.05em" : "0.02em",
            }}
          >
            {line.color === "blink" ? <BlinkLine text={line.text} /> : line.text}
          </div>
        ))}
        {shownCount > 0 && shownCount < lines.length && <BlinkCursor />}
      </div>
    </motion.div>
  );
}

// ─── Visual breadcrumb ────────────────────────────────────────────────────────
function CornerPrompt({ hidden }: { hidden: boolean }) {
  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 36,
        left: 36,
        zIndex: 9999,
        fontFamily: "var(--font-mono), monospace",
        fontSize: "0.72rem",
        letterSpacing: "0.1em",
        color: "#00e5ff",
        userSelect: "none",
        cursor: "default",
        whiteSpace: "nowrap",
        textShadow: "0 0 10px rgba(0,229,255,0.6)",
        animation: "whoami-hint 4s ease-in-out infinite",
      }}
    >
      &gt;_ type <strong style={{ color: "#fff" }}>whoami</strong> anywhere
    </div>
  );
}

// ─── Utility ──────────────────────────────────────────────────────────────────
function BlinkCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span style={{ color: "#00e5ff", opacity: on ? 1 : 0, userSelect: "none" }}>█</span>;
}

function BlinkLine({ text }: { text: string }) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 800);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 0.55 : 0.2, transition: "opacity 0.4s" }}>{text}</span>;
}
