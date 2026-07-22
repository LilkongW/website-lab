"use client"

import Link from "next/link"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Card from "@/components/ui/Card"
import Icon from "@/components/ui/Icon"
import SectionTitle from "@/components/ui/SectionTitle"
import { services } from "@/constants"
import { useLanguage } from "@/contexts/LanguageContext"

const iconGradients = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
]

export default function ServicesPreview() {
  const { t } = useLanguage()
  const preview = services.slice(0, 3)
  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            subtitle={t("services.subtitle")}
            title={t("services.title")}
            description={t("services.description")}
          />
        </AnimatedSection>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 150}>
              <Card className="group h-full">
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${iconGradients[i]} text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon name={service.icon} className="drop-shadow-sm" fontSize="inherit" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{service.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={300}>
          <div className="mt-14 text-center">
            <Link
              href="/servicios"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
            >
              {t("services.cta")}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
