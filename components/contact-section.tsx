import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Kairo, Mesir",
    subtitle: "Lokasi strategis di pusat kota",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "+20 XXX XXX XXXX",
    subtitle: "Respon cepat 24 jam",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@wismanusantara-cairo.com",
    subtitle: "Kirim pertanyaan Anda",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "24 Jam",
    subtitle: "Setiap hari",
  },
]

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Hubungi Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ada pertanyaan atau ingin melakukan reservasi? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-secondary font-medium">{item.content}</p>
                  <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-border">
              <img
                src="/cairo-egypt-city-map-location-pin-hotel.jpg"
                alt="Lokasi Hotel Wisma Nusantara"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
                  <Input placeholder="Masukkan nama Anda" className="border-border focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="email@contoh.com" className="border-border focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subjek</label>
                <Input placeholder="Tujuan pesan Anda" className="border-border focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Pesan</label>
                <Textarea
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  className="border-border focus:border-primary"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                size="lg"
              >
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
