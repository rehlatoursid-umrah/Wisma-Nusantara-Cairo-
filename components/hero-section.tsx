import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/elegant-hotel-lobby-with-indonesian-decor--warm-li.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
            Hotel Wisma Nusantara – Nyaman seperti di Rumah, di Tengah Kairo
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary/90 max-w-2xl">
            Pengalaman menginap dengan nuansa Indonesia di jantung kota Kairo. Melayani diplomat, peziarah, dan
            komunitas Indonesia dengan keramahan khas Nusantara.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Pesan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Lihat Kamar
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient to background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
