import { Users, Mic, Projector, Armchair } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Users, label: "Kapasitas 50-70 Orang" },
  { icon: Mic, label: "Sound System" },
  { icon: Projector, label: "Proyektor & Layar" },
  { icon: Armchair, label: "Kursi Nyaman" },
]

export default function AuditoriumSection() {
  return (
    <section id="auditorium" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/elegant-auditorium-conference-room-indonesian-deco.jpg"
              alt="Auditorium Wisma Nusantara"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Tersedia untuk Disewa
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Auditorium Serbaguna</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Auditorium Wisma Nusantara cocok untuk berbagai acara komunitas, seminar, pertemuan keluarga, atau
              kegiatan organisasi. Dengan kapasitas 50-70 orang dan dilengkapi fasilitas modern, ruangan ini siap
              menampung kegiatan Anda.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <feature.icon className="w-6 h-6 text-secondary" />
                  <span className="text-foreground font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Sewa Auditorium
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
