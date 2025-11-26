import Header from "@/components/header"
import Footer from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { RoomsPreview } from "@/components/home/rooms-preview"
import { AuditoriumPreview } from "@/components/home/auditorium-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RoomsPreview />
      <AuditoriumPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
