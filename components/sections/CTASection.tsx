"use client"

import Link from "next/link"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CTASection() {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection animation="scale-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{t("cta.badge")}</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mb-10 text-lg text-muted max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contacto"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-secondary to-cyan-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-secondary/25 glow-secondary-hover"
            >
              <span className="relative z-10">{t("cta.cta1")}</span>
              <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/equipo"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
            >
              {t("cta.cta2")}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
