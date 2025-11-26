import Header from "@/components/header"
import Footer from "@/components/footer"
import { AuditoriumHero } from "@/components/auditorium/auditorium-hero"
import { AuditoriumDetails } from "@/components/auditorium/auditorium-details"
import { AuditoriumEquipment } from "@/components/auditorium/auditorium-equipment"
import { AuditoriumCTA } from "@/components/auditorium/auditorium-cta"

export const metadata = {
  title: "Auditorium | Hotel Wisma Nusantara",
  description: "Sewa auditorium untuk acara seminar, pernikahan, atau gathering di Wisma Nusantara.",
}

export default function AuditoriumPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AuditoriumHero />
      <AuditoriumDetails />
      <AuditoriumEquipment />
      <AuditoriumCTA />
      <Footer />
    </main>
  )
}
