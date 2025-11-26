"use client"

import { ScrollAnimation } from "./scroll-animation"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeader({ badge, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <ScrollAnimation>
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              light ? "bg-primary/20 text-primary" : "bg-secondary/10 text-secondary"
            }`}
          >
            {badge}
          </span>
        </ScrollAnimation>
      )}
      <ScrollAnimation delay={0.1}>
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance ${
            light ? "text-background" : "text-secondary"
          }`}
        >
          {title}
        </h2>
      </ScrollAnimation>
      {subtitle && (
        <ScrollAnimation delay={0.2}>
          <p
            className={`text-lg max-w-2xl leading-relaxed ${
              center ? "mx-auto" : ""
            } ${light ? "text-background/80" : "text-muted-foreground"}`}
          >
            {subtitle}
          </p>
        </ScrollAnimation>
      )}
    </div>
  )
}
