"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"
import { SectionHeader } from "@/components/section-header"

const team = [
  {
    name: "Muhammad Naufal Baharuddin, Lc.",
    role: "Board of Commissioners",
    image: "/bng nofal.png",
  },
  {
    name: "Usamah Abu Zaif Al Jundi, Lc.",
    role: "Board of Commissioners",
    image: "/bng nofal.png",
  },
  {
    name: "Qolbi Zuhri Ali Murtadho,Lc.",
    role: "President Director",
    image: "/qolbi .png",
  },
  {
    name: "Obeid Albar Abdhie",
    role: "General Secretary & Finance",
    image: "/obet.png",
  },
]

export function TimSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Tim Kami"
          title="Orang-Orang di Balik Layanan"
          subtitle="Tim profesional yang siap melayani dengan keramahan khas Indonesia"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div whileHover={{ y: -5 }} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
