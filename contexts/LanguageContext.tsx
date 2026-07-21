"use client"

import { createContext, useContext, useState, useEffect, startTransition, type ReactNode } from "react"
import { type Lang, t as translate } from "@/constants/translations"

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved === "en" || saved === "es") {
      startTransition(() => setLang(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const tt = (key: string) => translate(lang, key)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: tt }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
