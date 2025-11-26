"use client"

import { Target, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"
import { SectionHeader } from "@/components/section-header"

const items = [
  {
    icon: Eye,
    title: "Visi",
    content:
      "Menjadi pusat akomodasi dan kegiatan terpercaya bagi komunitas Indonesia di Mesir, dengan standar pelayanan terbaik dan nuansa Nusantara yang hangat.",
  },
  {
    icon: Target,
    title: "Misi",
    content:
      "Menyediakan fasilitas nyaman dan terjangkau, memfasilitasi kegiatan komunitas, dan menjaga nilai-nilai kebersamaan diaspora Indonesia.",
  },
  {
    icon: Heart,
    title: "Nilai",
    content:
      "Keramahan, Integritas, Kekeluargaan, dan Profesionalisme menjadi landasan dalam setiap pelayanan yang kami berikan.",
  },
]

export function VisiMisiSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Tujuan Kami"
          title="Visi, Misi & Nilai"
          subtitle="Landasan yang mendasari setiap langkah pelayanan kami"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 text-center h-full"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
