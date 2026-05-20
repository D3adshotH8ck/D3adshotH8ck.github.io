"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Cert {
  id: string;
  title: string;
  issuer: string;
  image: string;
  url: string;
}

const certs: Cert[] = [
  {
    id: "01",
    title: "Web Development",
    issuer: "Certified By IT Academy",
    image: "/it-academy-logo.png",
    url: "https://itacademy.co.za/",
  },
  {
    id: "02",
    title: "Cyber Threat Intelligence",
    issuer: "Certified by ArcX",
    image: "/CTI101.png",
    url: "https://arcx.io/courses/cyber-threat-intelligence-101",
  },
  {
    id: "03",
    title: "Pro Hacker",
    issuer: "Rank On Hack The Box",
    image: "/HTB.PNG",
    url: "https://app.hackthebox.com/users/1179303?profile-top-tab=machines&ownership-period=1M&profile-bottom-tab=prolabs",
  },
];

export default function Certs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certs"
      className="w-full py-24"
      style={{ background: "transparent", borderTop: "1px solid var(--grid-line)" }}
      aria-labelledby="certs-heading"
    >
      <div ref={ref} className="max-w-350 mx-auto px-6 lg:px-20">
        <div className="flex items-end gap-6 mb-14">
          <div className="flex flex-col gap-2">
            <motion.span
              className="font-orbitron text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)", opacity: 0.6 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.5 }}
            >
              05 / 07
            </motion.span>
            <motion.h2
              id="certs-heading"
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              CERTIFICATIONS
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center text-center gap-6 p-7 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "rgba(10, 14, 20, 0.4)",
                border: "1px solid rgba(204,0,0,0.12)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 0 20px rgba(204,0,0,0.08), inset 0 1px 0 rgba(204,0,0,0.04)",
                transition: "border-color 300ms ease, box-shadow 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(204,0,0,0.5)";
                el.style.boxShadow = "0 0 40px rgba(204,0,0,0.14), inset 0 1px 0 rgba(204,0,0,0.07)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(204,0,0,0.12)";
                el.style.boxShadow = "0 0 20px rgba(204,0,0,0.08), inset 0 1px 0 rgba(204,0,0,0.04)";
                el.style.transform = "";
              }}
            >
              <div className="w-full h-40 relative flex items-center justify-center">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <h3
                  className="font-display font-bold leading-tight"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "var(--text-primary)" }}
                >
                  {cert.title}
                </h3>
                <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
