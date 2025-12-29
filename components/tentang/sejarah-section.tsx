"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

export function SejarahSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/wisnus.png"
                  alt="Gedung Wisma Nusantara"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-secondary/10 text-secondary">
              Sejarah Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
              Melayani Diaspora Nusantara Sejak Lama
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wisma Nusantara Cairo didirikan pada tahun 1997 sebagai respons atas kebutuhan komunitas Indonesia 
                di Kairo akan akomodasi yang nyaman, aman, terjangkau, dan layanan yang terpercaya. Berbekal pengalaman 
                panjang di bidang perhotelan, kami terus menjaga kualitas layanan dengan standar yang baik serta pendekatan 
                yang mengutamakan kenyamanan tamu.
              </p>
              <p>
                Berlokasi strategis di kawasan Rabea eladawea, Wisma Nusantara telah menjadi rumah kedua bagi ribuan mahasiswa, 
                peziarah, diplomat, dan tamu Indonesia lainnya yang datang ke Mesir. Dengan nuansa Indonesia yang kental, 
                kami menghadirkan suasana akrab yang membuat setiap tamu merasa lebih dekat dengan rumah, sekaligus 
                mendapatkan layanan yang profesional dan konsisten.
              </p>
              <p>
                Lebih dari sekadar tempat menginap, Wisma Nusantara juga berkembang sebagai pusat aktivitas komunitas dan event 
                management bagi diaspora Nusantara di Kairo. Auditorium dan fasilitas kami telah menjadi ruang bagi berbagai kegiatan—mulai 
                dari pertemuan, seminar, acara keagamaan, hingga pernikahan—dan kami berkomitmen untuk terus meningkatkan layanan melalui 
                inovasi berkelanjutan serta keramahan khas Indonesia..
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
