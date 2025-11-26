"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function KamarCTA() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Butuh bantuan memilih kamar?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Tim kami siap membantu Anda menemukan kamar yang tepat sesuai kebutuhan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
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
