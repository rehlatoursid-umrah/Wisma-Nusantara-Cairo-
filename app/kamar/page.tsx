import Header from "@/components/header"
import Footer from "@/components/footer"
import { KamarHero } from "@/components/kamar/kamar-hero"
import { KamarList } from "@/components/kamar/kamar-list"
import { KamarCTA } from "@/components/kamar/kamar-cta"

export const metadata = {
  title: "Kamar & Harga | Hotel Wisma Nusantara",
  description: "Pilihan kamar nyaman dengan harga terjangkau di Hotel Wisma Nusantara, Kairo.",
}

export default function KamarPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <KamarHero />
      <KamarList />
      <KamarCTA />
      <Footer />
    </main>
  )
}
