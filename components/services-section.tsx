"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Video, Camera, PenTool, Instagram, Megaphone, Palette } from "lucide-react"
import { ScrollAnimation, ScrollStagger } from "@/components/scroll-animation"
import { TextReveal } from "@/components/text-reveal"

export default function ServicesSection() {
  const services = [
    {
      icon: <Video className="h-10 w-10 text-cyan-500" />,
      title: "Video Production",
      description:
        "Professional video production services including filming, editing, color grading, and motion graphics.",
      link: "/services/video-production",
    },
    {
      icon: <Camera className="h-10 w-10 text-pink-500" />,
      title: "Photography",
      description: "High-quality photography services for products, events, portraits, and commercial purposes.",
      link: "/services/photography",
    },
    {
      icon: <PenTool className="h-10 w-10 text-amber-500" />,
      title: "Photo Editing",
      description: "Expert photo editing services including retouching, color correction, and creative manipulation.",
      link: "/services/photo-editing",
    },
    {
      icon: <Instagram className="h-10 w-10 text-pink-500" />,
      title: "Social Media Marketing",
      description: "Strategic social media marketing to grow your audience and increase engagement across platforms.",
      link: "/services/social-media-marketing",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-cyan-500" />,
      title: "Content Strategy",
      description: "Comprehensive content strategy development to align with your brand goals and target audience.",
      link: "/services/content-strategy",
    },
    {
      icon: <Palette className="h-10 w-10 text-amber-500" />,
      title: "Graphic Design",
      description: "Creative graphic design services for branding, marketing materials, and digital assets.",
      link: "/services/graphic-design",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollAnimation type="fade" delay={100}>
            <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
              Our Services
            </Badge>
          </ScrollAnimation>

          <TextReveal
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white"
            delay={200}
            highlight
            highlightColor="rgba(6, 182, 212, 0.2)"
          >
            What We Offer
          </TextReveal>

          <ScrollAnimation type="fade" delay={400}>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We provide a comprehensive range of creative services to help your brand
              <span className="text-cyan-400 font-medium"> stand out</span> in today's competitive market.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          baseDelay={500}
          staggerDelay={150}
          direction="up"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-800 border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" asChild className="p-0 hover:bg-transparent text-cyan-400 hover:text-cyan-300">
                  <Link href={service.link} className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ScrollStagger>

        <div className="text-center mt-12">
          <ScrollAnimation type="slide" direction="up" delay={900}>
            <Button asChild className="bg-gradient-1 hover:bg-cyan-600 text-white">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
