"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Projector, Speaker, ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AuditoriumPreview() {
  return (
    <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("https://raw.githubusercontent.com/rehlatoursid-umrah/Wisma-Nusantara-Cairo-/refs/heads/main/public/aula%202.png")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/elegant-conference-auditorium-with-chairs-and-proj.jpg"
                  alt="Auditorium Wisma Nusantara"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <p className="text-4xl font-bold font-serif">50-70</p>
                <p className="text-sm">Kapasitas Orang</p>
              </motion.div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary/20 text-primary">
              Sewa Ruangan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
              Auditorium Serba Guna
            </h2>
            <p className="text-background/80 text-lg leading-relaxed mb-8">
              Ruangan ideal untuk seminar, pertemuan komunitas, acara pernikahan, atau gathering. Dilengkapi dengan
              fasilitas lengkap yang dapat disewa sesuai kebutuhan.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-background/5 rounded-xl">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-background/80">50-70 Orang</p>
              </div>
              <div className="text-center p-4 bg-background/5 rounded-xl">
                <Projector className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-background/80">Proyektor</p>
              </div>
              <div className="text-center p-4 bg-background/5 rounded-xl">
                <Speaker className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-background/80">Sound System</p>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/auditorium"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg"
              >
                Lihat Detail & Harga
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
