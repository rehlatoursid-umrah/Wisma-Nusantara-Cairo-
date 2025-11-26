"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, FileText } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AuditoriumCTA() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">Tertarik Menyewa Auditorium?</h2>
          <p className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto mb-10">
            Hubungi kami untuk informasi harga, ketersediaan, dan konsultasi kebutuhan acara Anda. Tim kami siap
            membantu merencanakan acara yang sempurna.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/20XXXXXXXXX?text=Halo, saya ingin menyewa auditorium Wisma Nusantara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Ajukan Penyewaan via WhatsApp
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-secondary-foreground text-secondary-foreground rounded-full font-semibold text-lg hover:bg-secondary-foreground/10 transition-all"
              >
                <FileText className="w-5 h-5" />
                Form Kontak
              </Link>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
