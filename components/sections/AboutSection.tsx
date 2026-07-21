"use client"

import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionTitle from "@/components/ui/SectionTitle"
import { useLanguage } from "@/contexts/LanguageContext"

const items = [
  {
    icon: "🎯",
    titleKey: "about.mission",
    textKey: "about.missionText",
    gradient: "from-secondary to-cyan-600",
  },
  {
    icon: "👁️",
    titleKey: "about.vision",
    textKey: "about.visionText",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    icon: "💡",
    titleKey: "about.values",
    textKey: "about.valuesText",
    gradient: "from-accent to-orange-500",
  },
]

export default function AboutSection() {
  const { t } = useLanguage()
  return (
    <section className="relative py-28 mesh-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            subtitle={t("about.subtitle")}
            title={t("about.title")}
            description={t("about.description")}
          />
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <AnimatedSection key={item.titleKey} delay={i * 150} animation={i === 0 ? "fade-left" : i === 2 ? "fade-right" : "fade-up"}>
              <div className="card-premium group relative overflow-hidden rounded-xl bg-white p-8 pl-10 text-center shadow-sm">
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-1 rounded-r-full bg-gradient-to-b ${item.gradient} transition-all duration-300 group-hover:h-3/4`} />

                <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-2xl shadow-lg`}>
                  <span className="drop-shadow-sm">{item.icon}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">{t(item.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted">{t(item.textKey)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
