"use client"

import { useMemo } from "react"

interface Particle {
  id: number
  left: string
  top: string
  size: number
  delay: string
  duration: string
  type: "circle" | "diamond" | "ring"
}

interface ParticleFieldProps {
  count?: number
  className?: string
}

export default function ParticleField({ count = 30, className = "" }: ParticleFieldProps) {
  const particles: Particle[] = useMemo(() => {
    // Use seeded pseudo-random for deterministic SSR
    const seed = 42
    const mulberry32 = (a: number) => {
      return () => {
        let t = (a += 0x6d2b79f5)
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
      }
    }
    const rand = mulberry32(seed)

    return Array.from({ length: count }, (_, i) => {
      const types: Array<"circle" | "diamond" | "ring"> = ["circle", "diamond", "ring"]
      return {
        id: i,
        left: `${rand() * 100}%`,
        top: `${rand() * 100}%`,
        size: rand() * 4 + 2,
        delay: `${rand() * 8}s`,
        duration: `${rand() * 10 + 8}s`,
        type: types[Math.floor(rand() * 3)],
      }
    })
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationName: p.type === "diamond" ? "particle-drift" : "pulse-glow",
            background:
              p.type === "ring"
                ? "transparent"
                : p.type === "diamond"
                  ? "rgba(245, 158, 11, 0.4)"
                  : "rgba(6, 182, 212, 0.5)",
            border: p.type === "ring" ? "1px solid rgba(6, 182, 212, 0.3)" : "none",
            borderRadius: p.type === "diamond" ? "2px" : "50%",
            transform: p.type === "diamond" ? "rotate(45deg)" : "none",
          }}
        />
      ))}
    </div>
  )
}
