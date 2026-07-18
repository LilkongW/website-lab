import AnimatedSection from "@/components/ui/AnimatedSection"
import PageHeader from "@/components/ui/PageHeader"

const items = [
  { title: "Laboratorio de Materiales", category: "Instalaciones", gradient: "from-blue-500/20 to-cyan-500/20" },
  { title: "Equipo de Espectroscopía", category: "Equipamiento", gradient: "from-violet-500/20 to-purple-500/20" },
  { title: "Sala de Cómputo", category: "Instalaciones", gradient: "from-emerald-500/20 to-teal-500/20" },
  { title: "Microscopio Electrónico", category: "Equipamiento", gradient: "from-amber-500/20 to-orange-500/20" },
  { title: "Equipo de Investigación", category: "Equipo", gradient: "from-rose-500/20 to-pink-500/20" },
  { title: "Taller de Mecánica Fina", category: "Instalaciones", gradient: "from-indigo-500/20 to-blue-500/20" },
  { title: "Síntesis de Nanomateriales", category: "Procesos", gradient: "from-cyan-500/20 to-sky-500/20" },
  { title: "Mediciones Ópticas", category: "Procesos", gradient: "from-fuchsia-500/20 to-purple-500/20" },
  { title: "Coloquio Científico", category: "Eventos", gradient: "from-lime-500/20 to-green-500/20" },
]

const categoryColors: Record<string, string> = {
  Instalaciones: "bg-blue-500/10 text-blue-600",
  Equipamiento: "bg-violet-500/10 text-violet-600",
  Equipo: "bg-rose-500/10 text-rose-600",
  Procesos: "bg-cyan-500/10 text-cyan-600",
  Eventos: "bg-lime-500/10 text-lime-600",
}

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        subtitle="Galería"
        title="Nuestra galería"
        description="Imágenes de nuestras instalaciones, equipos y actividades de investigación."
      />

      <section className="relative -mt-20 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80} animation="scale-in">
                <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${item.gradient}`}>
                    <div className="flex flex-col items-center gap-3 transition-transform duration-500 group-hover:scale-110">
                      <svg className="h-12 w-12 text-gray-400/60" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-50">
                    <p className="text-sm font-semibold text-primary">{item.title}</p>
                    <p className="text-xs text-muted">{item.category}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
