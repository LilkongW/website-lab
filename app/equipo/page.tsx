import Image from "next/image"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Card from "@/components/ui/Card"
import PageHeader from "@/components/ui/PageHeader"
import { teamMembers } from "@/constants"

const memberGradients = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-indigo-500 to-blue-600",
  "from-sky-500 to-indigo-600",
  "from-fuchsia-500 to-pink-600",
  "from-teal-500 to-green-600",
  "from-red-500 to-rose-600",
]

export default function EquipoPage() {
  return (
    <>
      <PageHeader
        subtitle="Equipo"
        title="Nuestro equipo"
        description="Conoce a los investigadores y colaboradores que hacen posible nuestro trabajo."
      />

      <section className="relative -mt-20 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 120}>
                <Card className="group h-full text-center">
                  {/* Avatar with gradient ring */}
                  <div className="relative mx-auto mb-5 h-24 w-24">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${memberGradients[i]} opacity-20 transition-opacity duration-300 group-hover:opacity-40`} />
                    <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${memberGradients[i]} transition-transform duration-500 group-hover:scale-105`} />
                    <div className="absolute inset-2 overflow-hidden rounded-full bg-white">
                      {member.photo ? (
                        <Image src={member.photo} alt={member.name} width={80} height={80} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-2xl font-bold text-primary/60">
                            {member.name.split(" ").slice(-1)[0]?.[0]}{member.name.split(" ").slice(-2, -1)[0]?.[0]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium gradient-text">{member.role}</p>
                  <p className="mb-4 text-sm leading-relaxed text-muted">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="group/link inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary transition-all hover:bg-secondary/10 hover:text-secondary"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    Contactar
                  </a>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
