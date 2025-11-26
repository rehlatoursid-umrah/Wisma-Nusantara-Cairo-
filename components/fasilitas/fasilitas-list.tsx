"use client"

import { motion } from "framer-motion"
import {
  Wifi,
  Shield,
  UtensilsCrossed,
  Car,
  WashingMachine,
  Clock,
  Lightbulb,
  Refrigerator,
  Thermometer,
  Coffee,
  Users,
  BookOpen,
} from "lucide-react"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"
import { SectionHeader } from "@/components/section-header"

const facilities = [
  {
    icon: Wifi,
    title: "Wi-Fi Gratis",
    description: "Koneksi internet cepat dan stabil di seluruh area hotel untuk kebutuhan kerja dan hiburan Anda.",
  },
  {
    icon: Shield,
    title: "Keamanan 24 Jam",
    description: "Sistem keamanan dengan CCTV dan petugas keamanan yang bertugas sepanjang waktu.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dapur Bersama",
    description: "Fasilitas dapur lengkap dengan kompor, kulkas, dan peralatan masak untuk memasak sendiri.",
  },
  {
    icon: WashingMachine,
    title: "Layanan Laundry",
    description: "Jasa laundry dengan harga terjangkau dan hasil yang bersih serta rapi.",
  },
  {
    icon: Clock,
    title: "Resepsionis 24/7",
    description: "Layanan front desk sepanjang waktu untuk membantu kebutuhan Anda kapan saja.",
  },
  {
    icon: Car,
    title: "Parkir Gratis",
    description: "Area parkir yang aman dan luas untuk kendaraan tamu hotel.",
  },
  {
    icon: Thermometer,
    title: "AC di Setiap Kamar",
    description: "Sistem pendingin udara di setiap kamar untuk kenyamanan maksimal.",
  },
  {
    icon: Refrigerator,
    title: "Kulkas Bersama",
    description: "Fasilitas kulkas bersama untuk menyimpan makanan dan minuman Anda.",
  },
  {
    icon: Coffee,
    title: "Dispenser Air",
    description: "Air minum gratis tersedia di setiap lantai untuk kemudahan akses.",
  },
  {
    icon: BookOpen,
    title: "Musholla",
    description: "Tempat ibadah yang bersih dan nyaman untuk kebutuhan spiritual Anda.",
  },
  {
    icon: Users,
    title: "Ruang Tamu Bersama",
    description: "Area berkumpul yang nyaman untuk bersosialisasi dengan tamu lain.",
  },
  {
    icon: Lightbulb,
    title: "Listrik 24 Jam",
    description: "Pasokan listrik stabil sepanjang waktu dengan backup generator.",
  },
]

export function FasilitasList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Lengkap & Nyaman"
          title="Semua yang Anda Butuhkan"
          subtitle="Fasilitas modern dengan sentuhan keramahan Indonesia"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <StaggerItem key={facility.title}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-muted rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <facility.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
