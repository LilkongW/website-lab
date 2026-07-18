interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  className?: string
  light?: boolean
}

export default function SectionTitle({ subtitle, title, description, className = "", light = false }: SectionTitleProps) {
  return (
    <div className={`mx-auto mb-16 max-w-2xl text-center ${className}`}>
      {subtitle && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-secondary-light" : "text-secondary"}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {/* Decorative gradient line */}
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <div className={`h-px w-8 ${light ? "bg-white/30" : "bg-gray-200"}`} />
        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
        <div className="h-px w-16 bg-gradient-to-r from-secondary to-accent" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        <div className={`h-px w-8 ${light ? "bg-white/30" : "bg-gray-200"}`} />
      </div>
      {description && (
        <p className={`mt-6 text-lg leading-relaxed ${light ? "text-gray-300" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  )
}
