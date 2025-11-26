"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Kamar", href: "/kamar" },
  { name: "Fasilitas", href: "/fasilitas" },
  { name: "Auditorium", href: "/auditorium" },
  { name: "Kontak", href: "/kontak" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              // Hapus background dan styling placeholder lama
              className="relative w-12 h-12 flex items-center justify-center"
            >
              {/* Gunakan komponen Image */}
              {/* Ganti '/logo.png' dengan nama file logo Anda di folder public */}
              <Image 
                src="/LOGO wisnu siluet.png" 
                alt="Logo Wisma Nusantara"
                fill
                className="object-contain" // Agar logo pas dan tidak terpotong
                priority // Logo dimuat duluan agar tidak kedip (layout shift)
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg font-bold text-secondary group-hover:text-secondary/80 transition-colors">
                Wisma Nusantara
              </h1>
              <p className="text-xs text-muted-foreground">Cairo, Egypt</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-foreground hover:text-secondary transition-colors font-medium py-2 ${
                    pathname === item.href ? "text-secondary" : ""
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="hidden lg:block">
            <Link
              href="/kontak"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Reservasi
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="mt-4 pb-4 space-y-2 border-t border-border pt-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium ${
                        pathname === item.href ? "bg-muted text-secondary" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  <Link
                    href="/kontak"
                    className="block py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold text-center mt-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Reservasi Sekarang
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
