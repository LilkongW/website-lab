import { useState, useEffect, type RefObject } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
}

export function useInView(ref: RefObject<Element | null>, options: UseInViewOptions = {}): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, options.threshold, options.rootMargin])

  return isVisible
}
