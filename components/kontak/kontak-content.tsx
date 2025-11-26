"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Dokki, Giza Governorate, Cairo, Egypt",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+20 XXX XXX XXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@wismanusantara.com",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "24/7 (Front Desk)",
  },
]

export function KontakContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.")
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollAnimation direction="left">
            <div className="bg-muted rounded-3xl p-8 lg:p-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subjek</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="reservasi">Reservasi Kamar</option>
                    <option value="auditorium">Penyewaan Auditorium</option>
                    <option value="info">Informasi Umum</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </motion.button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Info & Map */}
          <ScrollAnimation direction="right">
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ y: -3 }}
                    className="bg-muted rounded-xl p-5 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/20XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-green-600 text-white rounded-xl p-5 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Chat via WhatsApp</p>
                  <p className="text-white/80 text-sm">Respons cepat untuk pertanyaan Anda</p>
                </div>
              </motion.a>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27627.95994285842!2d31.18946397910156!3d30.04419879999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847ead8e6f9a7%3A0x3ef7e46bcb0f33e5!2sDokki%2C%20Giza%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Wisma Nusantara"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
