"use client"

import AnimatedSection from "@/components/ui/AnimatedSection"
import Card from "@/components/ui/Card"
import PageHeader from "@/components/ui/PageHeader"
import { services } from "@/constants"
import { useLanguage } from "@/contexts/LanguageContext"

const serviceGradients = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-rose-500 to-pink-600",
  "from-indigo-500 to-blue-600",
]

export default function ServiciosPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader
        subtitle={t("servicios.subtitle")}
        title={t("servicios.title")}
        description={t("servicios.description")}
      />

      <section className="relative -mt-20 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <Card className="group h-full text-center">
                  <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${serviceGradients[i]} text-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="drop-shadow-sm">{service.icon}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
