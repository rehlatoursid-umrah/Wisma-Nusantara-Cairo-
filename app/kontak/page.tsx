import Header from "@/components/header"
import Footer from "@/components/footer"
import { KontakHero } from "@/components/kontak/kontak-hero"
import { KontakContent } from "@/components/kontak/kontak-content"

export const metadata = {
  title: "Kontak | Hotel Wisma Nusantara",
  description: "Hubungi Hotel Wisma Nusantara untuk reservasi kamar atau penyewaan auditorium.",
}

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <KontakHero />
      <KontakContent />
      <Footer />
    </main>
  )
}
