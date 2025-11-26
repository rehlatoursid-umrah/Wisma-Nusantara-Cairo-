import { Users, Globe, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Komunitas Indonesia",
    description: "Dikelola oleh komunitas Indonesia untuk kenyamanan maksimal",
  },
  {
    icon: Globe,
    title: "Lokasi Strategis",
    description: "Berada di pusat Kairo dengan akses mudah ke berbagai destinasi",
  },
  {
    icon: Heart,
    title: "Keramahan Khas",
    description: "Pelayanan hangat dengan sentuhan budaya Nusantara",
  },
  {
    icon: Shield,
    title: "Aman & Nyaman",
    description: "Keamanan 24 jam untuk ketenangan Anda selama menginap",
  },
]

export default function AboutSection() {
  return (
    <section id="fasilitas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Tentang Kami</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hotel Wisma Nusantara adalah rumah kedua bagi warga Indonesia di Kairo, Mesir. Dikelola dengan penuh
            dedikasi oleh komunitas Indonesia, hotel kami menyediakan akomodasi nyaman dengan nuansa khas Nusantara.
            Cocok untuk diplomat, keluarga, peziarah, dan siapa saja yang merindukan kehangatan Indonesia di negeri
            Piramida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
