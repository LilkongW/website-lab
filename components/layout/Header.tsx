"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { navLinks, siteConfig } from "@/constants"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass py-2 shadow-lg shadow-primary/5"
          : "bg-transparent py-3 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 items-center justify-center rounded-xl bg-white px-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo_laboratorio.png"
              alt="Logo del Laboratorio"
              width={66}
              height={40}
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="block text-lg font-bold text-primary leading-tight">{siteConfig.name}</span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-muted">{siteConfig.parentInstitution}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-secondary"
                  : "text-muted hover:text-primary"
              }`}
            >
              {t(`nav.${link.href === "/" ? "inicio" : link.href.replace("/", "")}`)}
              <span
                className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-secondary to-secondary-light transition-all duration-300 ${
                  pathname === link.href ? "w-4" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="hidden md:flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted transition-all hover:border-secondary/30 hover:text-secondary"
          aria-label="Cambiar idioma"
        >
          <span className={`${lang === "es" ? "text-secondary" : "text-muted/50"}`}>ES</span>
          <span className="text-muted/30">/</span>
          <span className={`${lang === "en" ? "text-secondary" : "text-muted/50"}`}>EN</span>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Menú"
        >
          <span className={`block h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-out md:hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-gray-100 bg-white/95 backdrop-blur-lg px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                pathname === link.href
                  ? "bg-secondary/10 text-secondary"
                  : "text-muted hover:bg-gray-50 hover:text-primary"
              }`}
            >
              {pathname === link.href && (
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              )}
              {t(`nav.${link.href === "/" ? "inicio" : link.href.replace("/", "")}`)}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted transition-all hover:border-secondary/30 hover:text-secondary"
          >
            <span className={`${lang === "es" ? "text-secondary" : "text-muted/50"}`}>ES</span>
            <span className="text-muted/30">/</span>
            <span className={`${lang === "en" ? "text-secondary" : "text-muted/50"}`}>EN</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
