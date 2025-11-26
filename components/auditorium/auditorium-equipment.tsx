"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Armchair,
  Crown,
  RectangleVertical,
  CircleDot,
  GlassWater,
  UtensilsCrossed,
  Projector,
  MonitorPlay,
  Speaker,
  Mic,
  ChevronDown,
} from "lucide-react"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"
import { SectionHeader } from "@/components/section-header"

const equipment = [
  {
    icon: Armchair,
    name: "Kursi Standar",
    description: "Kursi lipat berkualitas untuk peserta acara",
    price: "Termasuk",
    included: true,
  },
  {
    icon: Crown,
    name: "Kursi VIP",
    description: "Kursi premium dengan bantalan empuk untuk tamu kehormatan",
    price: "$2/kursi",
    included: false,
  },
  {
    icon: RectangleVertical,
    name: "Meja Persegi",
    description: "Meja persegi panjang untuk seminar atau workshop",
    price: "$5/meja",
    included: false,
  },
  {
    icon: CircleDot,
    name: "Meja Bundar",
    description: "Meja bundar untuk acara makan bersama atau gathering",
    price: "$8/meja",
    included: false,
  },
  {
    icon: GlassWater,
    name: "Gelas",
    description: "Gelas kaca untuk minuman tamu",
    price: "$0.5/gelas",
    included: false,
  },
  {
    icon: UtensilsCrossed,
    name: "Piring & Alat Makan",
    description: "Set piring dan alat makan untuk acara makan",
    price: "$1/set",
    included: false,
  },
  {
    icon: Projector,
    name: "Proyektor",
    description: "Proyektor HD untuk presentasi dan video",
    price: "$15",
    included: false,
  },
  {
    icon: MonitorPlay,
    name: "Layar Proyektor",
    description: "Layar proyektor ukuran besar (3x2 meter)",
    price: "$10",
    included: false,
  },
  {
    icon: Speaker,
    name: "Sound System",
    description: "Sistem audio lengkap dengan speaker dan amplifier",
    price: "$20",
    included: false,
  },
  {
    icon: Mic,
    name: "Mikrofon",
    description: "Mikrofon wireless untuk pembicara",
    price: "$5/unit",
    included: false,
  },
]

export function AuditoriumEquipment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Perlengkapan"
          title="Peralatan yang Dapat Disewa"
          subtitle="Lengkapi acara Anda dengan perlengkapan berkualitas"
        />

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="space-y-4">
            {equipment.map((item, index) => (
              <StaggerItem key={item.name}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-background rounded-2xl shadow-sm border border-border/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          item.included ? "bg-primary/20" : "bg-muted"
                        }`}
                      >
                        <item.icon
                          className={`w-6 h-6 ${item.included ? "text-secondary" : "text-muted-foreground"}`}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          {item.name}
                          {item.included && (
                            <span className="text-xs px-2 py-0.5 bg-primary/20 text-secondary rounded-full">
                              Termasuk
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground hidden sm:block">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-secondary">{item.price}</span>
                      <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="p-4 bg-muted rounded-xl">
                            <p className="text-muted-foreground sm:hidden mb-2">{item.description}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.included
                                ? "Perlengkapan ini sudah termasuk dalam biaya sewa ruangan dasar."
                                : "Hubungi kami untuk pemesanan dan informasi lebih lanjut mengenai ketersediaan."}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
