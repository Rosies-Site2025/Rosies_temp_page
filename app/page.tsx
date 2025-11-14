'use client';

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

type Particle = {
  left: string;
  delay: string;
  duration: string;
  width: string;
  height: string;
  opacity: string;
};

export default function Home() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  // Parallax mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate dust particles ON CLIENT ONLY (prevents hydration mismatch)
  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 6}s`,
      width: `${2 + Math.random() * 3}px`,
      height: `${2 + Math.random() * 3}px`,
      opacity: `${0.3 + Math.random() * 0.4}`,
    }));

    setParticles(generated);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Layer 1 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#d6f5d6] via-[#e9fbe9] to-white"
        style={{
          transform: `translate(${offset.x / 5}px, ${offset.y / 5}px)`,
        }}
      />

      {/* Background Layer 2 */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #9ae6a3 0%, transparent 40%), radial-gradient(circle at 80% 80%, #75d28a 0%, transparent 45%)",
          transform: `translate(${offset.x / 2.5}px, ${offset.y / 2.5}px)`,
        }}
      />

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.width,
              height: p.height,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Foreground Card */}
      <div className="relative max-w-lg w-full text-center bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-10 border border-green-200 animate-fade-in overflow-hidden">

        {/* Shine sweep */}
        <div className="shine absolute inset-0 pointer-events-none" />

        {/* Icon */}
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
          <Sparkles size={32} className="text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Rosie’s Janitorial Services
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          We’re refreshing things behind the scenes.
          The new website will be live soon.
        </p>

        <p className="text-sm text-gray-500">
          For inquiries, call{" "}
          <span className="font-medium text-gray-700">(949) 687-8297</span>
          <br />
          or email{" "}
          <span className="font-medium text-gray-700">
            rosiesjanitorial_llc@yahoo.com
          </span>
        </p>
      </div>
    </main>
  );
}
