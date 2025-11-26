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
                  src="/vintage-hotel-building-facade-with-egyptian-archit.jpg"
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
                Wisma Nusantara didirikan sebagai respons terhadap kebutuhan komunitas Indonesia di Kairo akan tempat
                tinggal yang nyaman, aman, dan terjangkau. Berlokasi strategis di kawasan Dokki, hotel ini telah menjadi
                rumah kedua bagi ribuan mahasiswa, peziarah, dan diplomat Indonesia.
              </p>
              <p>
                Dengan nuansa Indonesia yang kental, Wisma Nusantara bukan hanya tempat menginap, tetapi juga pusat
                kegiatan komunitas. Dari pertemuan mahasiswa hingga acara keagamaan, dari seminar hingga pernikahan,
                auditorium kami telah menjadi saksi berbagai momen berharga diaspora Nusantara.
              </p>
              <p>
                Kami berkomitmen untuk terus memberikan pelayanan terbaik dengan keramahan khas Indonesia, menjadikan
                setiap tamu merasa seperti di rumah sendiri.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
