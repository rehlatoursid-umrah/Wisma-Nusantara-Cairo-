import { Bed, Wifi, Bath, Snowflake, Check, Monitor } from "lucide-react" // Tambahkan Check & Monitor
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const rooms = [
  {
    name: "Single Bed Room",
    price: 30,
    available: 4,
    image: "/103.jpg",
    features: ["AC/Heat", "Kamar Mandi Dalam", "Wi-Fi Gratis","Lemari Es", "Handuk & Toiletries", "Meja Kerja/Rias"]
  },
  {
    name: "Double Bed Room+",
    price: 35,
    available: 5,
    image: "/106-A.jpg",
    features: ["AC/Heat", "Kamar Mandi Dalam", "Wi-Fi Gratis","Lemari Es", "Handuk & Toiletries", "Meja Kerja/Rias",]
  },
]

// Mapping icon manual agar sesuai urutan fitur, atau gunakan logic switch case jika ingin lebih rapi
// Urutan fitur di array: 
// 0: AC -> Snowflake
// 1: Mandi -> Bath
// 2: Wifi -> Wifi
// 3: Kulkas -> Snowflake (atau ikon lain)
// 4: Handuk -> Check (general)
// 5: Meja -> Monitor/Check
const featureIcons = [Snowflake, Bath, Wifi, Snowflake, Check, Monitor] 

export default function RoomsSection() {
  return (
    <section id="kamar" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Kamar & Harga</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilih kamar yang sesuai dengan kebutuhan Anda. Semua kamar dilengkapi fasilitas modern dengan sentuhan
            kenyamanan khas Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tambahkan '?' setelah rooms untuk mencegah error jika data kosong */}
          {rooms?.map((room) => (
            <Card key={room.name} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {room.available} tersedia
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-foreground">{room.name}</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-secondary">${room.price}</span>
                    <span className="text-muted-foreground text-sm">/malam</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {room.features.map((feature, index) => {
                    // Logic perbaikan: Ambil icon berdasarkan index, jika habis gunakan 'Check'
                    const Icon = featureIcons[index] || Check 
                    
                    return (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Icon className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Cek Ketersediaan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
