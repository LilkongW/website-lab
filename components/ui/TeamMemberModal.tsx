"use client"

import { useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import AppImage from "@/components/ui/AppImage"
import { useLanguage } from "@/contexts/LanguageContext"
import type { TeamMember } from "@/types"

interface TeamMemberModalProps {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState<"email" | "phone" | null>(null)

  const close = useCallback(() => onClose(), [onClose])

  const copyToClipboard = useCallback((text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }, [])

  useEffect(() => {
    if (!member) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [member, close])

  useEffect(() => {
    document.body.style.overflow = member ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [member])

  if (!member) return null

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
  const gradientIndex = Math.floor(Math.random() * memberGradients.length)

  return typeof window !== "undefined" ? createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
          aria-label={t("galeria.cerrar")}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Photo section */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-10 sm:w-2/5">
            <div className="relative h-64 w-64">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${memberGradients[gradientIndex]} opacity-15 blur-xl`} />
              <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${memberGradients[gradientIndex]} opacity-30`} />
              <div className={`absolute inset-3 rounded-full bg-gradient-to-br ${memberGradients[gradientIndex]} shadow-lg`} />
              <div className="absolute inset-4 overflow-hidden rounded-full bg-white shadow-xl">
                {member.photo ? (
                  <AppImage src={member.photo} alt={member.name} width={240} height={240} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    <span className="text-5xl font-bold text-primary/50">
                      {member.name.split(" ").slice(-1)[0]?.[0]}{member.name.split(" ").slice(-2, -1)[0]?.[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info section */}
          <div className="flex flex-col p-8 sm:w-3/5">
            <h2 className="text-3xl font-bold text-primary">{member.name}</h2>
            <p className="mb-4 text-xl font-medium gradient-text">{member.role}</p>

            {member.bio && (
              <p className="mb-8 text-base leading-relaxed text-muted">{member.bio}</p>
            )}

            <div className="mt-auto space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted">{t("equipo.email")}</p>
                  <p className="truncate text-base font-medium text-primary">{member.email}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(member.email, "email")}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all hover:bg-primary/90 hover:scale-105"
                  title={copied === "email" ? t("equipo.copiado") : t("equipo.copiar")}
                >
                  {copied === "email" ? (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Phone (if available) */}
              {member.phone && (
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted">{t("equipo.telefono")}</p>
                    <p className="truncate text-base font-medium text-primary">{member.phone}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(member.phone!, "phone")}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all hover:bg-primary/90 hover:scale-105"
                    title={copied === "phone" ? t("equipo.copiado") : t("equipo.copiar")}
                  >
                    {copied === "phone" ? (
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null
}
