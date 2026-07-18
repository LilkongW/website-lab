import Hero from "@/components/sections/Hero"
import AboutSection from "@/components/sections/AboutSection"
import StatsSection from "@/components/sections/StatsSection"
import ServicesPreview from "@/components/sections/ServicesPreview"
import CTASection from "@/components/sections/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
    </>
  )
}
