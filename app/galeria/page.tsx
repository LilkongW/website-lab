"use client"

import AnimatedSection from "@/components/ui/AnimatedSection"
import PageHeader from "@/components/ui/PageHeader"
import GalleryClient from "@/components/ui/GalleryClient"
import { useLanguage } from "@/contexts/LanguageContext"

const items = [
  {
    type: "image" as const,
    src: "/images/laboratorio/Entrada_del_laboratorio.JPG",
    alt: "Entrada del laboratorio",
    title: "Entrada del Laboratorio",
    category: "Instalaciones",
  },
  {
    type: "image" as const,
    src: "/images/laboratorio/Salon_general.JPG",
    alt: "Salón general",
    title: "Salón General",
    category: "Instalaciones",
  },
  {
    type: "image" as const,
    src: "/images/laboratorio/Salon_General_2.JPG",
    alt: "Salón general 2",
    title: "Salón General",
    category: "Instalaciones",
  },
  {
    type: "image" as const,
    src: "/images/laboratorio/Salon_de_Clases.JPG",
    alt: "Salón de clases",
    title: "Salón de Clases",
    category: "Instalaciones",
  },
  {
    type: "image" as const,
    src: "/images/laboratorio/Cubiculo_Juan_Villegas.JPG",
    alt: "Cubículo de Juan Villegas",
    title: "Cubículo Juan Villegas",
    category: "Instalaciones",
  },
  {
    type: "image" as const,
    src: "/images/laboratorio/Cocina.JPG",
    alt: "Cocina del laboratorio",
    title: "Cocina",
    category: "Instalaciones",
  },
  {
    type: "image" as const,
    src: "/images/laboratorio/Imagen_Artistica_1.JPG",
    alt: "Imagen artística del laboratorio",
    title: "Vista artística",
    category: "Laboratorio",
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
