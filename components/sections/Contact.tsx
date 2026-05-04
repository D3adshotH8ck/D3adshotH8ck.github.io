"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INSTAGRAM_URL = "https://instagram.com/d3adshotsec";
const DISCORD_URL   = "https://discord.com";

const channels = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@d3adshotsec",
    href: INSTAGRAM_URL,
    description: "DMs open. Best for quick questions, collabs, and community stuff.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "discord",
    label: "Discord",
    handle: "custos_lucis",
    href: DISCORD_URL,
    description: "Preferred channel for longer conversations, bug bounty talk, and OwlSec.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="w-full py-24"
      style={{ background: "rgba(10, 14, 20, 0.4)", borderTop: "1px solid var(--grid-line)" }}
      aria-labelledby="contact-heading"
    >
      <div ref={ref} className="max-w-350 mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex items-end gap-6 mb-14">
          <div className="flex flex-col gap-2">
            <motion.span
              className="font-orbitron text-xs tracking-widest uppercase"
              style={{ color: "var(--neon-cyan)", opacity: 0.6 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.5 }}
            >
              05 / 06
            </motion.span>
            <motion.h2
              id="contact-heading"
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              INITIATE CONTACT
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

        {/* Intro */}
        <motion.p
          className="text-base mb-12 max-w-lg"
          style={{ color: "var(--text-muted)", lineHeight: 1.8 }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Found something I should know about?{" "}
          <span style={{ color: "var(--text-primary)" }}>Let&apos;s talk.</span>
          {" "}Bug bounty collabs, red team engagements, OwlSec community, or just a good recon story.
        </motion.p>

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.id}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex flex-col gap-5 p-7 rounded-sm focus-visible:ring-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`Contact on ${ch.label}`}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center transition-colors duration-200"
                style={{
                  color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--grid-line)",
                }}
              >
                {ch.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5">
                <span
                  className="font-display font-bold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  {ch.label}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--neon-cyan)", opacity: 0.7 }}
                >
                  {ch.handle}
                </span>
                <p
                  className="text-sm mt-1 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {ch.description}
                </p>
              </div>

              {/* Arrow */}
              <span
                className="font-mono text-xs mt-auto transition-all duration-200 group-hover:translate-x-1"
                style={{ color: "var(--neon-cyan)" }}
              >
                Open {ch.label} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
