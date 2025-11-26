"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Maximize, Clock, Wifi } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const specs = [
  { icon: Users, label: "Kapasitas", value: "50-70 Orang" },
  { icon: Maximize, label: "Luas", value: "100 m²" },
  { icon: Clock, label: "Durasi Sewa", value: "Min. 3 Jam" },
  { icon: Wifi, label: "Wi-Fi", value: "Tersedia" },
]

export function AuditoriumDetails() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/large-conference-hall-auditorium-with-chairs-arran.jpg"
                  alt="Auditorium Wisma Nusantara"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-secondary/10 text-secondary">
              Spesifikasi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
              Ruangan Modern & Multifungsi
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Auditorium Wisma Nusantara dirancang untuk berbagai kebutuhan acara Anda. Dari seminar akademik hingga
              resepsi pernikahan, ruangan ini dapat disesuaikan dengan berbagai layout dan konfigurasi.
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <motion.div
                  key={spec.label}
                  whileHover={{ y: -3 }}
                  className="bg-muted rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <spec.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{spec.label}</p>
                    <p className="font-semibold text-foreground">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
