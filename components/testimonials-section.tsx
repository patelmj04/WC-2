"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ScrollAnimation } from "@/components/scroll-animation"
import { TextReveal } from "@/components/text-reveal"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Fashion Brand Co.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "WeCreate transformed our brand's visual identity with stunning photography and video content. Their team was professional, creative, and delivered beyond our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Tech Innovations Inc.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The social media marketing strategy developed by WeCreate helped us increase our engagement by 200%. Their content is top-notch and their team is responsive and easy to work with.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "Lifestyle Blog",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I've worked with many creative agencies, but WeCreate stands out for their attention to detail and commitment to quality. They truly understand my vision and bring it to life beautifully.",
    },
    {
      id: 4,
      name: "David Wilson",
      company: "Event Management Co.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "WeCreate's event coverage is exceptional. They captured all the key moments of our corporate event and delivered a highlight video that perfectly showcased the atmosphere and energy.",
    },
  ]

  useEffect(() => {
    let interval

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handleDotClick = (index) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollAnimation type="fade" delay={100}>
            <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
              Testimonials
            </Badge>
          </ScrollAnimation>

          <TextReveal
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
            delay={200}
            highlight
            highlightColor="rgba(6, 182, 212, 0.2)"
          >
            What Our Clients Say
          </TextReveal>

          <ScrollAnimation type="fade" delay={400}>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation type="scale" delay={500} className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-zinc-700 bg-zinc-800 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-cyan-500">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-lg mb-6 italic text-zinc-300">"{testimonial.text}"</p>
                        <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                        <p className="text-purple-400">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full z-10 bg-zinc-800 border-zinc-700 text-white hover:bg-cyan-500/20 hover:border-cyan-500 md:flex hidden"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full z-10 bg-zinc-800 border-zinc-700 text-white hover:bg-cyan-500/20 hover:border-cyan-500 md:flex hidden"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  currentIndex === index ? "bg-cyan-500" : "bg-zinc-700",
                )}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
