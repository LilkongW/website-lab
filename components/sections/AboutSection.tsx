import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionTitle from "@/components/ui/SectionTitle"

const items = [
  {
    icon: "🎯",
    title: "Misión",
    text: "Generar conocimiento científico de vanguardia en física aplicada, formando recursos humanos de alto nivel y transfiriendo tecnología al sector productivo.",
    gradient: "from-secondary to-cyan-600",
  },
  {
    icon: "👁️",
    title: "Visión",
    text: "Ser un laboratorio de referencia nacional e internacional en investigación aplicada, reconocido por la calidad y el impacto de sus contribuciones científicas.",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    icon: "💡",
    title: "Valores",
    text: "Integridad científica, innovación, colaboración interdisciplinaria, compromiso social y responsabilidad ambiental en cada proyecto que emprendemos.",
    gradient: "from-accent to-orange-500",
  },
]

export default function AboutSection() {
  return (
    <section className="relative py-28 mesh-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            subtitle="Sobre nosotros"
            title="Comprometidos con la excelencia científica"
            description="Somos un centro de investigación dedicado al análisis de datos y al desarrollo de soluciones tecnológicas con impacto social. Aplicamos técnicas de procesamiento de imágenes, machine learning e instrumentación para resolver problemas reales."
          />
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 150} animation={i === 0 ? "fade-left" : i === 2 ? "fade-right" : "fade-up"}>
              <div className="card-premium group relative overflow-hidden rounded-xl bg-white p-8 pl-10 text-center shadow-sm">
                {/* Left accent bar */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-1 rounded-r-full bg-gradient-to-b ${item.gradient} transition-all duration-300 group-hover:h-3/4`} />

                <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-2xl shadow-lg`}>
                  <span className="drop-shadow-sm">{item.icon}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
