"use client"

import AnimatedSection from "@/components/ui/AnimatedSection"
import Card from "@/components/ui/Card"
import Icon from "@/components/ui/Icon"
import PageHeader from "@/components/ui/PageHeader"
import { researchAreas } from "@/constants"
import { useLanguage } from "@/contexts/LanguageContext"

const areaIcons = ["ImageSearch", "Analytics", "Psychology", "WbSunny"]
const areaGradients = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
]

export default function InvestigacionPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader
        subtitle={t("investigacion.subtitle")}
        title={t("investigacion.title")}
        description={t("investigacion.description")}
      />

      <section className="relative -mt-20 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {researchAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 150} animation={i % 2 === 0 ? "fade-left" : "fade-right"}>
                <Card className="group h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${areaGradients[i]} text-xl text-white shadow-lg`}>
                      <Icon name={areaIcons[i]} fontSize="inherit" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">{area.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{area.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <ul className="grid grid-cols-2 gap-2">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted">
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-secondary to-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
