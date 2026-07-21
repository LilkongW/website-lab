"use client"

import { useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

interface GalleryItem {
  type: "image" | "placeholder"
  src?: string
  alt?: string
  title: string
  category: string
  gradient?: string
}

interface GalleryClientProps {
  items: GalleryItem[]
}

export default function GalleryClient({ items }: GalleryClientProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  const close = useCallback(() => setOpen(false), [])

  const go = useCallback(
    (delta: number) => {
      setCurrent((prev) => (prev + delta + items.length) % items.length)
    },
    [items.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close, go])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setOpen(true) }}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md text-left"
          >
            <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${item.gradient ?? "from-gray-100 to-gray-200"}`}>
              {item.type === "image" && item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt ?? ""}
                  width={400}
                  height={300}
                  className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 transition-transform duration-500 group-hover:scale-110">
                  <svg className="h-12 w-12 text-gray-400/60" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="border-t border-gray-50 p-4">
              <p className="text-sm font-semibold text-primary">{item.title}</p>
              <p className="text-xs text-muted">{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      {open && typeof window !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105"
            aria-label={t("galeria.anterior")}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); go(1) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105"
            aria-label={t("galeria.siguiente")}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          </button>

          <div
            className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
              aria-label={t("galeria.cerrar")}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            </button>

            <div className="relative flex items-center justify-center bg-gray-100">
              {items[current].type === "image" && items[current].src ? (
                <Image
                  src={items[current].src!}
                  alt={items[current].alt ?? ""}
                  width={900}
                  height={675}
                  className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
                  priority
                />
              ) : (
                <div className={`flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br ${items[current].gradient ?? "from-gray-100 to-gray-200"}`}>
                  <svg className="h-24 w-24 text-gray-400/40" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
              <div>
                <p className="font-semibold text-primary">{items[current].title}</p>
                <p className="text-sm text-muted">{items[current].category}</p>
              </div>
              <p className="text-xs text-muted/50">{current + 1} / {items.length}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
