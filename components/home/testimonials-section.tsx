"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { StaggerContainer, StaggerItem } from "@/components/scroll-animation"
import { SectionHeader } from "@/components/section-header"

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Mahasiswa Al-Azhar",
    content:
      "Tempat yang sangat nyaman untuk mahasiswa Indonesia. Suasananya seperti di rumah sendiri, dan harganya sangat terjangkau.",
  },
  {
    name: "Ibu Siti Aminah",
    role: "Peziarah",
    content:
      "Alhamdulillah, selama perjalanan umroh transit di Kairo, Wisma Nusantara sangat membantu. Pelayanannya ramah dan makanan Indonesianya enak.",
  },
  {
    name: "Bapak Hendra",
    role: "Diplomat KBRI",
    content: "Fasilitas auditoriumnya sangat membantu untuk acara-acara komunitas Indonesia di Mesir. Recommended!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Testimoni"
          title="Kata Mereka"
          subtitle="Pengalaman tamu yang pernah menginap di Wisma Nusantara"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">{`"${testimonial.content}"`}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
