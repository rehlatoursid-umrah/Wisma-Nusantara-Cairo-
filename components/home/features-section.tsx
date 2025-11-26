"use client"

import { Wifi, Shield, UtensilsCrossed, Sparkles, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"
import { SectionHeader } from "@/components/section-header"

const features = [
  {
    icon: Wifi,
    title: "Wi-Fi Gratis",
    description: "Koneksi internet cepat di seluruh area hotel",
  },
  {
    icon: Shield,
    title: "Keamanan 24 Jam",
    description: "Sistem keamanan dan CCTV untuk kenyamanan Anda",
  },
  {
    icon: UtensilsCrossed,
    title: "Dapur Bersama",
    description: "Fasilitas dapur lengkap untuk memasak sendiri",
  },
  {
    icon: Sparkles,
    title: "Kebersihan Terjamin",
    description: "Housekeeping rutin setiap hari",
  },
  {
    icon: Clock,
    title: "Resepsionis 24/7",
    description: "Layanan front desk sepanjang waktu",
  },
  {
    icon: Users,
    title: "Komunitas Indonesia",
    description: "Tempat berkumpul diaspora Nusantara",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Mengapa Kami"
          title="Kenyamanan Terbaik untuk Anda"
          subtitle="Fasilitas lengkap dengan sentuhan keramahan Indonesia"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
