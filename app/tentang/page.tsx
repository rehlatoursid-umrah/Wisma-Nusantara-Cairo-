import Header from "@/components/header"
import Footer from "@/components/footer"
import { TentangHero } from "@/components/tentang/tentang-hero"
import { SejarahSection } from "@/components/tentang/sejarah-section"
import { VisiMisiSection } from "@/components/tentang/visi-misi-section"
import { TimSection } from "@/components/tentang/tim-section"

export const metadata = {
  title: "Tentang Kami | Hotel Wisma Nusantara",
  description: "Sejarah, visi misi, dan peran Wisma Nusantara untuk komunitas Indonesia di Mesir.",
}

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TentangHero />
      <SejarahSection />
      <VisiMisiSection />
      <TimSection />
      <Footer />
    </main>
  )
}
