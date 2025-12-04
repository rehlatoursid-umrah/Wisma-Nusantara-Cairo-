"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bed, Bath, Check, Users } from "lucide-react"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const rooms = [
  {
    id: 1,
    name: "Single Room",
    description: "Kamar nyaman untuk satu orang dengan kasur single berkualitas.",
    price: 30,
    image: "/cozy-single-hotel-room-warm-lighting-clean-minimal.jpg",
    capacity: 2,
    bedType: "King Single Bed ",
    size: "Air Panas",
    available: 4,
    amenities: ["AC/Heater Room", "Kamar Mandi Dalam", "Wi-Fi Gratis","Lemari Es", "Handuk & Toiletries", "Meja Kerja/Rias",],
  },
  {
    id: 2,
    name: "Double Room",
    description: "Kamar luas untuk pasangan atau keluarga kecil dengan kasur double.",
    price: 35,
    image: "/spacious-double-hotel-room-elegant-indonesian-deco.jpg",
    capacity: 2,
    bedType: "1 Kasur Double",
    size: "20 m²",
    available: 5,
    amenities: ["AC", "Kamar Mandi Dalam", "Wi-Fi Gratis", "Handuk & Toiletries", "Meja Kerja", "Lemari"],
  },
  {
    id: 3,
    name: "Twin Room",
    description: "Kamar dengan dua kasur single, cocok untuk teman atau keluarga.",
    price: 35,
    image: "/twin-bed-hotel-room-clean-bright-indonesian-style.jpg",
    capacity: 2,
    bedType: "2 Kasur Single",
    size: "22 m²",
    available: 3,
    amenities: ["AC", "Kamar Mandi Dalam", "Wi-Fi Gratis", "Handuk & Toiletries", "Meja Kerja", "Lemari"],
  },
  {
    id: 4,
    name: "Family Room",
    description: "Kamar besar untuk keluarga dengan fasilitas tambahan.",
    price: 50,
    image: "/large-family-hotel-room-multiple-beds-spacious.jpg",
    capacity: 4,
    bedType: "1 Double + 2 Single",
    size: "30 m²",
    available: 2,
    amenities: ["AC", "Kamar Mandi Dalam", "Wi-Fi Gratis", "Handuk & Toiletries", "Meja Kerja", "Lemari", "Sofa"],
  },
]

export function KamarList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <StaggerContainer className="space-y-12">
          {rooms.map((room, index) => (
            <StaggerItem key={room.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-muted rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } flex flex-col lg:flex-row`}
              >
                {/* Image */}
                <div className="lg:w-1/2 relative h-72 lg:h-auto">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                      {room.available} tersedia
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">{room.name}</h3>
                      <p className="text-muted-foreground">{room.description}</p>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      {room.capacity} orang
                    </span>
                    <span className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-secondary" />
                      {room.bedType}
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-secondary" />
                      {room.size}
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.amenities.map((amenity) => (
                      <span key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-sm text-muted-foreground">Mulai dari</p>
                      <p className="font-serif text-3xl font-bold text-secondary">
                        ${room.price}
                        <span className="text-base font-normal text-muted-foreground">/malam</span>
                      </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/kontak"
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md"
                      >
                        Reservasi
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
