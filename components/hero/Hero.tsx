"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLATFORMS = ["BUGCROWD", "HACKERONE", "INTIGRITI", "YESWEHACK", "OWLSEC"];
const marqueeText = Array(4).fill(PLATFORMS).flat();

export default function Hero() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [booted, setBooted] = useState(false);

  /* Track cursor normalised -1..1 */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* Boot sequence — reveal after scan finishes */
  useEffect(() => {
    const id = setTimeout(() => setBooted(true), 700);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ background: "transparent" }}
      aria-label="Hero section"
    >
      {/* Boot scan line */}
      <AnimatePresence>
        {!booted && (
          <motion.div
            className="boot-scan-line"
            initial={{ top: 0, opacity: 1 }}
            animate={{ top: "100vh", opacity: [1, 1, 0] }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Radial void center fade */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, transparent 20%, rgba(4,6,10,0.6) 70%, rgba(4,6,10,1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center flex-1 px-6 lg:px-20 pt-24 pb-32 gap-12 lg:gap-20 max-w-350 mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* ── Left: text ── */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl order-2 lg:order-1 text-center lg:text-left">
          {/* Eyebrow */}
          <motion.p
            className="font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--neon-cyan)", opacity: 0.7 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            // IDENTITY :: D3ADSHOT
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-display font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ color: "var(--text-primary)" }}>I</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>AM</span>
            <br />
            <span
              className="text-glow-cyan"
              style={{ color: "var(--neon-cyan)" }}
            >
              D3ADSHOT.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-base leading-relaxed max-w-md mx-auto lg:mx-0"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Bug bounty hunter &amp; offensive security researcher.
            <br />I find what shouldn&apos;t be there.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#arsenal"
              className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-sm font-mono text-sm font-medium transition-all duration-300 overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "var(--neon-cyan)",
                color: "var(--bg-void)",
                boxShadow: "0 0 24px rgba(0,229,255,0.35), 0 0 60px rgba(0,229,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 40px rgba(0,229,255,0.6), 0 0 80px rgba(0,229,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 24px rgba(0,229,255,0.35), 0 0 60px rgba(0,229,255,0.12)";
              }}
            >
              View Engagements
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-sm font-mono text-sm font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                border: "1px solid rgba(232, 238, 245, 0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,42,61,0.6)";
                el.style.color = "var(--neon-red-soft)";
                el.style.boxShadow = "0 0 20px rgba(255,42,61,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(232,238,245,0.2)";
                el.style.color = "var(--text-primary)";
                el.style.boxShadow = "none";
              }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Section index */}
          <motion.span
            className="font-mono text-xs hidden lg:block"
            style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            01 / 06
          </motion.span>
        </div>

        {/* ── Right: Avatar ── */}
        <motion.div
          className="relative shrink-0 order-1 lg:order-2 flex items-center justify-center"
          style={{ width: "min(480px, 80vw)", height: "min(480px, 80vw)" }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Outer ambient aura */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "-10%",
              background:
                "radial-gradient(circle at 50% 50%, rgba(0,229,255,0.15) 0%, transparent 60%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Breathing inner glow */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              inset: "0%",
              background:
                "radial-gradient(circle at 50% 50%, rgba(0,229,255,0.2) 0%, transparent 50%)",
              filter: "blur(20px)",
              zIndex: 0,
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          {/* Avatar image floating effect */}
          <motion.div
            className="relative w-full h-full z-10"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/avatar.png"
              alt="D3ADSHOT Avatar"
              fill
              priority
              unoptimized
              className="object-contain"
              style={{ filter: "drop-shadow(0 0 30px rgba(0,229,255,0.25))" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Platform marquee ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        aria-hidden="true"
      >
        <div className="marquee-track flex gap-10 whitespace-nowrap w-max">
          {marqueeText.map((platform, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.3em]"
              style={{ color: "var(--text-muted)", opacity: 0.4 }}
            >
              {platform}
              <span className="ml-10" style={{ color: "var(--neon-cyan)", opacity: 0.3 }}>
                ·
              </span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-10 origin-top"
          style={{ background: "linear-gradient(to bottom, var(--neon-cyan), transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
