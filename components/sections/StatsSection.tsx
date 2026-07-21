"use client"

import AnimatedSection from "@/components/ui/AnimatedSection"
import CountUp from "@/components/ui/CountUp"
import { useLanguage } from "@/contexts/LanguageContext"

const statKeys = ["stats.years", "stats.publications", "stats.projects", "stats.researchers"] as const

const stats = [
  { value: 10, prefix: "+", icon: "📅" },
  { value: 20, prefix: "+", icon: "📄" },
  { value: 30, prefix: "+", icon: "🔬" },
  { value: 10, prefix: "+", icon: "👥" },
]

export default function StatsSection() {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary py-20">
      {/* Decorative grid */}
      <div className="absolute inset-0 hero-grid opacity-50" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-32 w-32 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={statKeys[i]} delay={i * 150} animation="scale-in">
              <div className="stat-divider text-center px-4">
                <div className="mb-3 text-2xl">{stat.icon}</div>
                <p className="text-4xl font-bold text-white sm:text-5xl">
                  <CountUp end={stat.value} prefix={stat.prefix} className="gradient-text" />
                </p>
                <p className="mt-3 text-sm font-medium text-gray-400">{t(statKeys[i])}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
