import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Instagram, CheckCircle } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
// import PortfolioPreview from "@/components/portfolio-preview"
import TestimonialsSection from "@/components/testimonials-section"
import InstagramFeed from "@/components/instagram-feed"
// import BlogPreview from "@/components/blog-preview"
import MindBehindPreview from "@/components/mind-behind-preview"
import { ScrollAnimation, ScrollReveal, ScrollStagger, ScrollParallax } from "@/components/scroll-animation"
import { TextReveal } from "@/components/text-reveal"

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white">
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <ScrollParallax className="absolute inset-0 opacity-30" speed={0.1} direction="up">
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-900/20 blur-[100px]" />
          <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-pink-900/20 blur-[100px]" />
        </ScrollParallax>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollAnimation type="fade" delay={100}>
                <Badge variant="outline" className="px-3 py-1 border-cyan-500 text-cyan-400 mb-4">
                  About WeCreate
                </Badge>
              </ScrollAnimation>

              <TextReveal
                className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
                delay={200}
                highlight
              >
                We bring your creative vision to life
              </TextReveal>

              <ScrollAnimation type="fade" delay={400}>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  WeCreate is a full-service creative agency specializing in video production, photography, and social
                  media marketing. With our team of experienced professionals, we deliver high-quality content that
                  helps businesses connect with their audience.
                </p>
              </ScrollAnimation>

              <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6" baseDelay={500} staggerDelay={150}>
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Professional Team</h4>
                    <p className="text-sm text-zinc-400">Experienced creatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">High-Quality</h4>
                    <p className="text-sm text-zinc-400">Premium deliverables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Fast Turnaround</h4>
                    <p className="text-sm text-zinc-400">Meet tight deadlines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Client Focused</h4>
                    <p className="text-sm text-zinc-400">Your vision, our priority</p>
                  </div>
                </div>
              </ScrollStagger>

              <ScrollAnimation type="slide" direction="up" delay={900}>
                <Button asChild className="bg-gradient-1 hover:bg-cyan-600 text-white">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollAnimation>
            </div>

            <ScrollReveal delay={300} duration={1200}>
              <div className="relative aspect-square">
                <div className="absolute -inset-4 bg-gradient-1 opacity-10 blur-3xl rounded-full"></div>
                <Image
                  src="/gd1.jpg?height=600&width=600"
                  alt="WeCreate Team"
                  fill
                  className="object-cover rounded-lg relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <ScrollStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" staggerDelay={200}>
            <div className="p-6">
              <span className="text-4xl md:text-5xl font-bold text-cyan-400 block mb-2">75+</span>
              <p className="text-zinc-300">Projects Completed</p>
            </div>
            <div className="p-6">
              <span className="text-4xl md:text-5xl font-bold text-pink-400 block mb-2">30+</span>
              <p className="text-zinc-300">Happy Clients</p>
            </div>
            <div className="p-6">
              <span className="text-4xl md:text-5xl font-bold text-amber-400 block mb-2">5+</span>
              <p className="text-zinc-300">Years Experience</p>
            </div>
            <div className="p-6">
              <span className="text-4xl md:text-5xl font-bold text-cyan-400 block mb-2">12</span>
              <p className="text-zinc-300">Team Members</p>
            </div>
          </ScrollStagger>
        </div>
      </section>

      {/* Mind Behind Preview */}
      <MindBehindPreview />

      {/* Services Section */}
      <ServicesSection />

      

      {/* Portfolio Preview */}
      {/* <PortfolioPreview /> */}

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollAnimation type="fade" delay={100}>
              <Badge variant="outline" className="px-3 py-1 mb-4 border-pink-500 text-pink-400">
                Follow Us @wecreate.__
              </Badge>
            </ScrollAnimation>

            <TextReveal
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
              delay={200}
              highlight
              highlightColor="rgba(236, 72, 153, 0.2)"
            >
              Our Latest Instagram Posts
            </TextReveal>

            <ScrollAnimation type="fade" delay={400}>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Follow us on Instagram to see our latest work, behind-the-scenes content, and creative inspiration.
              </p>
            </ScrollAnimation>
          </div>
          <InstagramFeed />
          <div className="text-center mt-8">
            <ScrollAnimation type="slide" direction="up" delay={300}>
              <Button variant="outline" asChild className="border-pink-800 text-pink-100 hover:bg-pink-500/50">
                <Link href="https://instagram.com/wecreate.__" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" /> Follow on Instagram
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {/* <BlogPreview /> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-2 relative overflow-hidden">
        <ScrollParallax className="absolute inset-0" speed={0.2} direction="up">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-pink-600/40 blur-[80px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/40 blur-[100px]" />
          </div>
        </ScrollParallax>

        <div className="container mx-auto px-4 text-center relative z-10">
          <TextReveal
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
            delay={100}
            highlight
            highlightColor="rgba(255, 255, 255, 0.2)"
          >
            Ready to Start Your Project?
          </TextReveal>

          <ScrollAnimation type="fade" delay={300}>
            <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your creative vision to life. Contact us today for a free consultation.
            </p>
          </ScrollAnimation>

          <ScrollStagger className="flex flex-col sm:flex-row justify-center gap-4" baseDelay={400} staggerDelay={200}>
            <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-pink-100">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button> */}
          </ScrollStagger>
        </div>
      </section>
    </div>
  )
}
