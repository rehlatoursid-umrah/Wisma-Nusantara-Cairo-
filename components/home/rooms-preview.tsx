"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Bed, Bath, Wind } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"
import { SectionHeader } from "@/components/section-header"

const rooms = [
  {
    name: "Single Room",
    price: 30,
    image: "/cozy-single-hotel-room-with-warm-lighting-indonesi.jpg",
    features: ["1 Kasur Single", "AC", "Kamar Mandi Dalam"],
    available: 4,
  },
  {
    name: "Double Room",
    price: 35,
    image: "/101.jpg",
    features: ["1 Kasur Double", "AC", "Kamar Mandi Dalam"],
    available: 5,
  },
]

export function RoomsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Akomodasi"
          title="Kamar yang Nyaman"
          subtitle="Pilihan kamar dengan harga terjangkau dan fasilitas lengkap"
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {rooms.map((room) => (
            <StaggerItem key={room.name}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <p className="text-primary text-sm font-medium mb-1">{room.available} kamar tersedia</p>
                      <h3 className="font-serif text-2xl font-bold text-background">{room.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-background/70 text-sm">mulai dari</p>
                      <p className="font-serif text-3xl font-bold text-primary">
                        ${room.price}
                        <span className="text-sm font-normal text-background/80">/malam</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-6">
                    {room.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        {idx === 0 && <Bed className="w-4 h-4" />}
                        {idx === 1 && <Wind className="w-4 h-4" />}
                        {idx === 2 && <Bath className="w-4 h-4" />}
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/kamar"
                    className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all"
                  >
                    Lihat Detail
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollAnimation className="text-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/kamar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg"
            >
              Lihat Semua Kamar
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
