import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Hotel Wisma Nusantara | Hotel Indonesia di Kairo, Mesir",
  description:
    "Hotel Wisma Nusantara - Akomodasi nyaman dengan nuansa Indonesia di Kairo, Mesir. Melayani diplomat, peziarah, dan komunitas Indonesia dengan keramahan khas Nusantara.",
  keywords: [
    "hotel indonesia kairo",
    "wisma nusantara",
    "hotel diplomat mesir",
    "akomodasi indonesia cairo",
    "hotel peziarah mesir",
  ],
  openGraph: {
    title: "Hotel Wisma Nusantara | Nyaman seperti di Rumah, di Tengah Kairo",
    description: "Pengalaman menginap dengan nuansa Indonesia di jantung kota Kairo.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#462a1c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
