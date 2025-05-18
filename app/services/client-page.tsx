"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Video, Camera, PenTool, Instagram, Megaphone, Palette, CheckCircle } from "lucide-react"
import { useIntersectionAnimation } from "@/hooks/use-intersection-animation"
import { AnimatedText } from "@/components/animated-text"
import { FloatingElement } from "@/components/floating-element"
import { AnimatedHeading } from "@/components/animated-heading"
import { TypingText } from "@/components/typing-text"

export default function ServicesClientPage() {
  const services = [
    {
      icon: <Video className="h-12 w-12 text-cyan-500" />,
      title: "Video Production",
      description:
        "Professional video production services including filming, editing, color grading, and motion graphics.",
      features: [
        "Commercial Video Production",
        "Corporate Videos",
        "Event Coverage",
        "Promotional Videos",
        "Social Media Videos",
        "Motion Graphics",
      ],
      link: "/services/video-production",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Camera className="h-12 w-12 text-pink-500" />,
      title: "Photography",
      description: "High-quality photography services for products, events, portraits, and commercial purposes.",
      features: [
        "Product Photography",
        "Event Photography",
        "Portrait Photography",
        "Commercial Photography",
        "Real Estate Photography",
        "Food Photography",
      ],
      link: "/services/photography",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <PenTool className="h-12 w-12 text-amber-500" />,
      title: "Photo Editing",
      description: "Expert photo editing services including retouching, color correction, and creative manipulation.",
      features: [
        "Professional Retouching",
        "Color Correction",
        "Background Removal",
        "Photo Manipulation",
        "Batch Editing",
        "HDR Processing",
      ],
      link: "/services/photo-editing",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Instagram className="h-12 w-12 text-pink-500" />,
      title: "Social Media Marketing",
      description: "Strategic social media marketing to grow your audience and increase engagement across platforms.",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Community Management",
        "Paid Social Campaigns",
        "Analytics & Reporting",
        "Influencer Marketing",
      ],
      link: "/services/social-media-marketing",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Megaphone className="h-12 w-12 text-cyan-500" />,
      title: "Content Strategy",
      description: "Comprehensive content strategy development to align with your brand goals and target audience.",
      features: [
        "Content Audit",
        "Content Calendar",
        "Brand Voice Development",
        "SEO Content Strategy",
        "Content Distribution",
        "Performance Analysis",
      ],
      link: "/services/content-strategy",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Palette className="h-12 w-12 text-amber-500" />,
      title: "Graphic Design",
      description: "Creative graphic design services for branding, marketing materials, and digital assets.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Web Design",
        "Packaging Design",
      ],
      link: "/services/graphic-design",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]
  const { ref: pricingRef, isVisible: pricingVisible } = useIntersectionAnimation()
  const serviceRefs = services.map(() => useIntersectionAnimation())

  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText animation="fade-in" delay={100}>
            <Badge variant="outline" className="px-3 py-1 mb-4 border-purple-500 text-purple-400">
              Our Services
            </Badge>
          </AnimatedText>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            <AnimatedText animation="fade-up" delay={200} className="block mb-2">
              <span className="text-gradient-pink">Creative Services</span>
            </AnimatedText>
            <AnimatedText animation="fade-up" delay={400} className="block">
              for Your Brand
            </AnimatedText>
          </h1>
          <AnimatedText animation="fade-in" delay={600}>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              We offer a comprehensive range of <span className="text-pink-400 font-medium">creative solutions</span> to
              help your brand stand out in today's competitive market.
            </p>
          </AnimatedText>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <FloatingElement amplitude={5} period={4} delay={0}>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-cyan-400 border border-cyan-500/20">
                Video Production
              </span>
            </FloatingElement>
            <FloatingElement amplitude={5} period={4} delay={0.5}>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-pink-400 border border-pink-500/20">
                Photography
              </span>
            </FloatingElement>
            <FloatingElement amplitude={5} period={4} delay={1}>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-amber-400 border border-amber-500/20">
                Photo Editing
              </span>
            </FloatingElement>
            <FloatingElement amplitude={5} period={4} delay={1.5}>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-cyan-400 border border-cyan-500/20">
                Social Media
              </span>
            </FloatingElement>
            <FloatingElement amplitude={5} period={4} delay={2}>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-pink-400 border border-pink-500/20">
                Content Strategy
              </span>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const { ref, isVisible } = serviceRefs[index]
            return (
              <div
                key={index}
                ref={ref}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  isVisible ? "opacity-100" : "opacity-0 translate-y-10"
                } ${index !== 0 ? "mt-24 pt-24 border-t border-zinc-800" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="mb-4">{service.icon}</div>
                  <AnimatedHeading
                    as="h2"
                    className="text-3xl font-bold tracking-tight text-white"
                    animation="fade-up"
                    delay={200}
                  >
                    {service.title}
                  </AnimatedHeading>
                  <AnimatedText animation="fade-in" delay={300}>
                    <p className="text-zinc-400 text-lg leading-relaxed">{service.description}</p>
                  </AnimatedText>

                  <div className="space-y-4 pt-2">
                    <h3 className="text-xl font-medium text-white inline-flex items-center">
                      <span className="w-8 h-0.5 bg-cyan-500 mr-3"></span>
                      <TypingText text="What We Offer" speed={80} delay={index * 100} />
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger-animation animate">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-2 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50"
                        >
                          <CheckCircle
                            className={`h-5 w-5 ${
                              i % 3 === 0 ? "text-cyan-500" : i % 3 === 1 ? "text-pink-500" : "text-amber-500"
                            } mt-0.5 flex-shrink-0`}
                          />
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <AnimatedText animation="fade-up" delay={400}>
                      <Button asChild className="bg-gradient-1 hover:bg-cyan-600 text-white">
                        <Link href={service.link}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </AnimatedText>
                  </div>
                </div>

                <div className={`relative aspect-[4/3] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="absolute -inset-4 bg-gradient-1 opacity-10 blur-3xl rounded-full"></div>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg relative z-10"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText animation="fade-in" delay={100}>
              <Badge variant="outline" className="px-3 py-1 mb-4 border-purple-500 text-purple-400">
                Pricing
              </Badge>
            </AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              <AnimatedText animation="gradient-shift" delay={200}>
                <span className="text-gradient-pink">Transparent</span>
              </AnimatedText>{" "}
              <AnimatedText animation="fade-up" delay={300}>
                Pricing
              </AnimatedText>
            </h2>
            <AnimatedText animation="fade-in" delay={400}>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We offer competitive pricing for our services with packages tailored to meet your specific needs.
              </p>
            </AnimatedText>
          </div>

          <div
            ref={pricingRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 ${
              pricingVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="bg-zinc-800 border-zinc-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Basic</CardTitle>
                <div className="mt-4 text-4xl font-bold text-white">$499</div>
                <CardDescription className="text-zinc-400">Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">1 Professional Video</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">10 Edited Photos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Basic Social Media Setup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">1 Revision Round</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gradient-1 hover:bg-cyan-600 text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-cyan-500 bg-zinc-800 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-1 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-white">Premium</CardTitle>
                <div className="mt-4 text-4xl font-bold text-white">$999</div>
                <CardDescription className="text-zinc-400">Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">3 Professional Videos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">30 Edited Photos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Complete Social Media Management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">3 Revision Rounds</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Monthly Performance Report</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gradient-1 hover:bg-cyan-600 text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Enterprise</CardTitle>
                <div className="mt-4 text-4xl font-bold text-white">Custom</div>
                <CardDescription className="text-zinc-400">For established businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Custom Video Production</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Unlimited Photo Editing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Full-Service Social Media Strategy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Unlimited Revisions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Dedicated Account Manager</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gradient-1 hover:bg-cyan-600 text-white">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-2">
        <div className="container mx-auto px-4 text-center">
          <AnimatedHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
            animation="fade-up"
            delay={100}
            words
          >
            Ready to Start Your Project?
          </AnimatedHeading>
          <AnimatedText animation="fade-in" delay={500}>
            <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your creative vision to life. Contact us today for a free consultation.
            </p>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={700}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-pink-100">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
