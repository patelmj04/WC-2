"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AnimatedText } from "@/components/animated-text"
import { ScrollParallax } from "@/components/scroll-animation"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/ph2-b.jpeg?height=1080&width=1920"
        >
          <source src="/p1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Parallax Elements */}
      <ScrollParallax className="absolute inset-0 pointer-events-none" speed={0.2} direction="up">
        <div className="absolute top-[20%] left-[10%] w-[20vw] h-[20vw] rounded-full bg-cyan-900/20 blur-[80px]" />
        <div className="absolute bottom-[30%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-pink-900/20 blur-[100px]" />
      </ScrollParallax>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div
          className={`space-y-6 max-w-3xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-2">
            <AnimatedText
              animation="fade-in"
              delay={300}
              className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-cyan-300 border border-cyan-500/20"
            >
              Creative Media Production
            </AnimatedText>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <AnimatedText animation="fade-up" delay={500} className="block text-gradient mb-2">
              Bringing Your Creative
            </AnimatedText>
            <AnimatedText animation="fade-up" delay={700} className="block">
              Vision to Life
            </AnimatedText>
          </h1>
          <AnimatedText animation="fade-in" delay={900} className="block">
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Professional <span className="text-pink-400 font-medium">video production</span>,
              <span className="text-cyan-400 font-medium"> photography</span>, and
              <span className="text-amber-400 font-medium"> social media marketing</span> services to help your brand
              stand out.
            </p>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={1100} className="block">
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" className="text-base bg-gradient-1 hover:bg-cyan-600 text-white">
                <Link href="/services">Explore Our Services</Link>
              </Button>
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white/10 text-base"
                  >
                    <Play className="mr-2 h-4 w-4" /> Watch Showreel
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-zinc-900 border-zinc-800">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="WeCreate Showreel"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog> */}
            </div>
          </AnimatedText>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  )
}
