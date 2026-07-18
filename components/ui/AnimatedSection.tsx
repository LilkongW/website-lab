"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/useInView"

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-in"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: AnimationType
}

const animationClasses: Record<AnimationType, { visible: string; hidden: string }> = {
  "fade-up": {
    visible: "translate-y-0 opacity-100",
    hidden: "translate-y-8 opacity-0",
  },
  "fade-left": {
    visible: "translate-x-0 opacity-100",
    hidden: "-translate-x-8 opacity-0",
  },
  "fade-right": {
    visible: "translate-x-0 opacity-100",
    hidden: "translate-x-8 opacity-0",
  },
  "scale-in": {
    visible: "scale-100 opacity-100",
    hidden: "scale-95 opacity-0",
  },
  "fade-in": {
    visible: "opacity-100",
    hidden: "opacity-0",
  },
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useInView(ref, { threshold: 0.1 })
  const classes = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? classes.visible : classes.hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
