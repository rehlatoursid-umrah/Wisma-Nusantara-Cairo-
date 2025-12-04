"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bed, Bath, Check, Users } from "lucide-react"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const rooms = [
  {
    id: 1,
    name: "Single Bed Room",
    description: "Kamar nyaman untuk satu orang dengan kasur single berkualitas.",
    price: 30,
    image: "/103.jpg",
    capacity: 1,
    bedType: "King Size Single Bed",
    size: "Air Panas",
    available: 4,
    amenities: ["AC/Heat", "Kamar Mandi Dalam", "Wi-Fi Gratis","Lemari Es", "Handuk & Toiletries", "Meja Kerja/Rias",]
  },
  {
    id: 2,
    name: "Double Bed Room",
    description: "Kamar luas untuk pasangan atau keluarga kecil dengan kasur double.",
    price: 35,
    image: "/106-A.jpg",
    capacity: 2,
    bedType: "Twin Size Double Bed",
    size: "Air Panas",
    available: 5,
    amenities: ["AC/Heat", "Kamar Mandi Dalam", "Wi-Fi Gratis","Lemari Es", "Handuk & Toiletries", "Meja Kerja/Rias",]
  },
  {
  },
  {
    id: 3,
    name: "Family Homestay Room",
    description: "Kamar besar untuk keluarga dengan fasilitas tambahan.",
    price: 105,
    image: "/large-family-hotel-room-multiple-beds-spacious.jpg",
    capacity: 8,
    bedType: "2 Double Room + 1 Quadrupple Room + 1 Toilet + Kitchen + Living Room",
    size: "Air Panas",
    available: 1,
    amenities: ["AC/Heat", "Kamar Mandi Sharing", "Wi-Fi Gratis","Lemari Es", "Handuk & Toiletries",]
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
