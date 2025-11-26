import Header from "@/components/header"
import Footer from "@/components/footer"
import { FasilitasHero } from "@/components/fasilitas/fasilitas-hero"
import { FasilitasList } from "@/components/fasilitas/fasilitas-list"

export const metadata = {
  title: "Fasilitas | Hotel Wisma Nusantara",
  description: "Fasilitas lengkap untuk kenyamanan tamu di Hotel Wisma Nusantara, Kairo.",
}

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FasilitasHero />
      <FasilitasList />
      <Footer />
    </main>
  )
}
