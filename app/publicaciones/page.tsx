import AnimatedSection from "@/components/ui/AnimatedSection"
import PageHeader from "@/components/ui/PageHeader"
import { publications } from "@/constants"

export default function PublicacionesPage() {
  return (
    <>
      <PageHeader
        subtitle="Publicaciones"
        title="Publicaciones científicas"
        description="Artículos de investigación publicados en revistas internacionales indexadas."
      />

      <section className="relative -mt-20 pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {publications.map((pub, i) => (
              <AnimatedSection key={`pub-${i}`} delay={i * 100} animation={i % 2 === 0 ? "fade-left" : "fade-right"}>
                <div className="card-premium group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-1 rounded-r-full bg-gradient-to-b from-secondary to-cyan-400 transition-all duration-300 group-hover:h-1/2" />

                  <div className="flex items-start justify-between gap-4 pl-3">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                        {pub.title}
                      </h3>
                      <p className="mb-1 text-sm text-muted">{pub.authors}</p>
                      <p className="text-sm font-medium text-secondary/80">{pub.journal}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-gradient-to-r from-secondary/10 to-cyan-500/10 px-3 py-1 text-xs font-bold text-secondary">
                      {pub.year}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-3 pl-3 border-t border-gray-50 pt-3">
                    {pub.doi ? (
                      <span className="font-mono text-xs text-muted/70">DOI: {pub.doi}</span>
                    ) : (
                      <span className="text-xs text-muted/50">—</span>
                    )}
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-all hover:bg-secondary/10 hover:text-secondary"
                      >
                        Ver en ResearchGate
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                      </a>
                    ) : pub.doi ? (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-all hover:bg-secondary/10 hover:text-secondary"
                      >
                        Ver artículo
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                      </a>
                    ) : null}
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
