"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation, ScrollStagger } from "@/components/scroll-animation"
import { TextReveal } from "@/components/text-reveal"
import { ImageReveal } from "@/components/image-reveal"

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    // { id: "all", label: "All" },
    // { id: "video", label: "Video" },
    // { id: "photo", label: "Photo" },
    // { id: "design", label: "Design" },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Campaign Video",
      category: "Storyline Video",
      image: "/Texium_YTB.png?height=800&width=3200",
      link: "https://www.youtube.com/watch?v=oofwPoSecwI",
    },
    {
      id: 2,
      title: "Event Coverage",
      category: "Videography",
      image: "/dc.png?height=600&width=800",
      link: "https://drive.google.com/file/d/1VU6M_ZTXB3OnzLtH2GqBZ8lTyge03oqN/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Social Media Management",
      category: "SMM",
      image: "/smm.png?height=600&width=800",
      link: "https://drive.google.com/file/d/1gQBUhrehkQiG6eSz9F5qlmRt3xRk4vz6/view?usp=drive_link",
    },
    {
      id: 4,
      title: "Corporate Event Coverage",
      category: "Event Coverage",
      image: "/cec.png?height=600&width=800",
      link: "https://drive.google.com/file/d/1bpMJUQ7pulYwo5kQs-gUnrNn4CVBmFNv/view?usp=sharing",
    },
    {
      id: 5,
      title: "Video Production",
      category: "Video Production",
      image: "/vp.png?height=600&width=800",
      link: "https://drive.google.com/file/d/1cAMP8BpAaBK6XlxIGXyzCPzmSnjg-Sdv/view?usp=drive_link",
    },
    {
      id: 6,
      title: "Brand Shoot/Reveal",
      category: "Design, Photography & Shoot",
      image: "/bis.png?height=600&width=800",
      link: "https://drive.google.com/file/d/1SwmNrD6toRd7ZgLqXvTmAN9YQo6lXhoF/view?usp=drive_link",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollAnimation type="fade" delay={100}>
            <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
              Our Portfolio
            </Badge>
          </ScrollAnimation>

          <TextReveal
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
            delay={200}
            highlight
            highlightColor="rgba(6, 182, 212, 0.2)"
          >
            Featured Work
          </TextReveal>

          <ScrollAnimation type="fade" delay={400}>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
              Explore our latest projects and see how we've helped our clients achieve their creative goals.
            </p>
          </ScrollAnimation>

          <ScrollStagger className="flex flex-wrap justify-center gap-2 mb-8" baseDelay={500} staggerDelay={100}>
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={`min-w-[80px] ${
                  activeFilter === filter.id
                    ? "bg-gradient-1 hover:bg-cyan-600 text-white"
                    : "border-zinc-700 text-zinc-400 hover:text-white hover:border-cyan-500"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </ScrollStagger>
        </div>

        <ScrollStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          baseDelay={600}
          staggerDelay={150}
          direction="up"
        >
          {filteredItems.map((item) => (
            <Link key={item.id} href={item.link} className="group overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <ImageReveal
                  src={item.image || "/ph1.png"}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  direction="left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <Badge variant="outline" className="mt-2 text-cyan-400 border-cyan-500/50">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ScrollStagger>

        {/* <div className="text-center mt-12">
          <ScrollAnimation type="slide" direction="up" delay={800}>
            <Button asChild className="bg-gradient-1 hover:bg-cyan-600 text-white">
              <Link href="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div> */}
      </div>
    </section>
  )
}
