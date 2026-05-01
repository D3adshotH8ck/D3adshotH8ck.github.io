"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* Particles only — the mask image is rendered in CSS, not WebGL */
function Particles() {
  const count = 180;

  const { geo, mat } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 4;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({
      color: new THREE.Color(0x00e5ff),
      size: 0.018,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });
    return { geo: g, mat: m };
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0004;
    ref.current.rotation.x += 0.00015;
  });

  return <points ref={ref} geometry={geo} material={mat} />;
}

export default function MaskScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
      aria-hidden="true"
    >
      <Particles />
    </Canvas>
  );
}
