import AnimatedSection from "@/components/ui/AnimatedSection"
import PageHeader from "@/components/ui/PageHeader"
import { siteConfig } from "@/constants"

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        subtitle="Contacto"
        title="Contáctanos"
        description="Estamos a tu disposición para consultas, colaboraciones y servicios."
      />

      <section className="relative -mt-20 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection delay={100} animation="fade-left">
              <div className="card-premium rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="mb-2 text-2xl font-bold text-primary">Envíanos un mensaje</h2>
                <p className="mb-6 text-sm text-muted">Te responderemos a la brevedad posible.</p>
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">Nombre completo</label>
                      <input type="text" id="contact-name" className="w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-secondary focus:bg-white" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">Correo electrónico</label>
                      <input type="email" id="contact-email" className="w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-secondary focus:bg-white" placeholder="tu@correo.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-foreground">Asunto</label>
                    <input type="text" id="contact-subject" className="w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-secondary focus:bg-white" placeholder="Asunto del mensaje" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">Mensaje</label>
                    <textarea id="contact-message" rows={5} className="w-full resize-none rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-secondary focus:bg-white" placeholder="Escribe tu mensaje aquí..." />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-secondary to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-secondary/25"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Enviar mensaje
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection delay={200} animation="fade-right">
                <div className="card-premium rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-bold text-primary">Información de contacto</h2>
                  <div className="space-y-5">
                    <div className="group flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-gradient text-secondary transition-all group-hover:scale-105">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Dirección</h3>
                        <p className="mt-1 text-sm text-muted">{siteConfig.address}</p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-gradient text-secondary transition-all group-hover:scale-105">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Teléfono</h3>
                        <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-sm text-muted hover:text-secondary transition-colors">{siteConfig.phone}</a>
                      </div>
                    </div>
                    <div className="group flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl icon-gradient text-secondary transition-all group-hover:scale-105">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Correo electrónico</h3>
                        <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm text-muted hover:text-secondary transition-colors">{siteConfig.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300} animation="fade-right">
                <div className="card-premium rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h2 className="mb-5 text-2xl font-bold text-primary">Horario de atención</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center rounded-lg bg-surface px-4 py-3">
                      <span className="text-muted">Lunes - Viernes</span>
                      <span className="font-semibold text-primary">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center rounded-lg bg-surface px-4 py-3">
                      <span className="text-muted">Sábado</span>
                      <span className="font-semibold text-primary">9:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center rounded-lg bg-surface px-4 py-3">
                      <span className="text-muted">Domingo</span>
                      <span className="font-medium text-muted/60">Cerrado</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
