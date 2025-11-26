"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary to-secondary/80 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollAnimation>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 text-balance">
            Siap Merasakan Kenyamanan
            <br />
            <span className="text-primary">Wisma Nusantara?</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <p className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto mb-10">
            Hubungi kami sekarang untuk reservasi kamar atau penyewaan auditorium. Tim kami siap membantu Anda 24/7.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/20XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-foreground text-secondary rounded-full font-semibold text-lg hover:bg-secondary-foreground/90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
