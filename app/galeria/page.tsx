"use client"

import AnimatedSection from "@/components/ui/AnimatedSection"
import PageHeader from "@/components/ui/PageHeader"
import GalleryClient from "@/components/ui/GalleryClient"
import { useLanguage } from "@/contexts/LanguageContext"

const items = [
  {
    type: "image" as const,
    src: "/images/logo_laboratorio.png",
    alt: "Logo del Laboratorio de Física Aplicada",
    title: "Laboratorio de Física Aplicada",
    category: "Identidad",
    gradient: "from-primary/5 via-white to-secondary/5",
  },
  {
    type: "placeholder" as const,
    title: "Laboratorio de Materiales",
    category: "Instalaciones",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    type: "placeholder" as const,
    title: "Equipo de Espectroscopía",
    category: "Equipamiento",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    type: "placeholder" as const,
    title: "Sala de Cómputo",
    category: "Instalaciones",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    type: "placeholder" as const,
    title: "Microscopio Electrónico",
    category: "Equipamiento",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    type: "placeholder" as const,
    title: "Equipo de Investigación",
    category: "Equipo",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
]

export default function GaleriaPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader
        subtitle={t("galeria.subtitle")}
        title={t("galeria.title")}
        description={t("galeria.description")}
      />

      <section className="relative -mt-20 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <GalleryClient items={items} />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
