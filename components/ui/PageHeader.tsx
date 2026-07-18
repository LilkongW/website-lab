import AnimatedSection from "@/components/ui/AnimatedSection"
import ParticleField from "@/components/ui/ParticleField"

interface PageHeaderProps {
  subtitle: string
  title: string
  description: string
}

export default function PageHeader({ subtitle, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#060e1a] pt-24 pb-36 sm:pt-32 sm:pb-44">
      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Particles */}
      <ParticleField count={20} />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-secondary/8 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary-light">
              {subtitle}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {description}
          </p>
          {/* Decorative line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
            <div className="h-px w-20 bg-gradient-to-r from-secondary/60 to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
