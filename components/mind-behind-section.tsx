"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { TextReveal } from "@/components/text-reveal"
import { useIntersectionAnimation } from "@/hooks/use-intersection-animation"

export default function MindBehindSection() {
  const { ref: quoteRef, isVisible: quoteVisible } = useIntersectionAnimation()
  const { ref: skillsRef, isVisible: skillsVisible } = useIntersectionAnimation()

  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollAnimation type="fade" delay={100}>
            <Badge variant="outline" className="px-3 py-1 mb-4 border-amber-500 text-amber-400">
              The Mind Behind WeCreate
            </Badge>
          </ScrollAnimation>

          <TextReveal
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
            delay={200}
            highlight
            highlightColor="rgba(245, 158, 11, 0.2)"
          >
            Meet Our Founder
          </TextReveal>

          <ScrollAnimation type="fade" delay={300}>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              The creative vision and leadership driving our innovative approach to visual storytelling.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ScrollAnimation type="fade" delay={400} className="block">
              <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-3 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-amber-500/30">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Alex Morgan - Founder & Creative Director"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <div className="absolute -bottom-6 -right-6 bg-gradient-3 p-4 rounded-full hidden md:flex">
              <Quote className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="space-y-6">
            <ScrollAnimation type="fade" delay={500} className="block">
              <div>
                <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
                <p className="text-amber-400 font-medium">Founder & Creative Director</p>
              </div>
            </ScrollAnimation>

            <div
              ref={quoteRef}
              className={`relative pl-6 border-l-2 border-amber-500 italic text-lg text-zinc-300 transition-all duration-500 ${quoteVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
            >
              <p>
                "I founded WeCreate with a simple mission: to help brands tell authentic stories through powerful visual
                content. In today's digital landscape, the ability to connect emotionally with your audience is what
                sets successful brands apart."
              </p>
            </div>

            <ScrollAnimation type="fade" delay={700} className="block">
              <p className="text-zinc-400">
                With over 15 years of experience in the creative industry, Alex has worked with global brands across
                various sectors. Their innovative approach to visual storytelling has earned numerous industry awards
                and recognition.
              </p>
            </ScrollAnimation>

            <ScrollAnimation type="fade" delay={800} className="block">
              <p className="text-zinc-400">
                Alex's background spans film production, photography, and digital marketing, bringing a
                multidisciplinary perspective to every project. They are passionate about mentoring the next generation
                of creative professionals and regularly speak at industry events about the future of visual content.
              </p>
            </ScrollAnimation>

            <div
              ref={skillsRef}
              className={`pt-4 flex flex-wrap gap-3 transition-all duration-700 ${skillsVisible ? "opacity-100" : "opacity-0"}`}
            >
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-cyan-400 shimmer">Film Production</span>
              <span
                className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-pink-400 shimmer"
                style={{ animationDelay: "0.5s" }}
              >
                Creative Direction
              </span>
              <span
                className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-amber-400 shimmer"
                style={{ animationDelay: "1s" }}
              >
                Visual Storytelling
              </span>
              <span
                className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-cyan-400 shimmer"
                style={{ animationDelay: "1.5s" }}
              >
                Brand Strategy
              </span>
            </div>

            <ScrollAnimation type="fade" delay={1000} className="block pt-4">
              <Button asChild className="bg-gradient-3 hover:bg-amber-600 text-white">
                <Link href="/about">Learn More About Our Team</Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
