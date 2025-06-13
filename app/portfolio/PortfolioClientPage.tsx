"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export default function PortfolioClientPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const portfolioItems = [
    {
      id: 1,
      title: "Performance Videography",
      category: "videography",
      image: "/dc.png?height=600&width=800",
      videoUrl: "https://www.youtube.com/@danceclubrcoem8040",
    },
    {
      id: 2,
      title: "Gym Shoot & Edit",
      category: "photography",
      image: "/gym.png?height=600&width=800",
    },
    {
      id: 3,
      title: "Social Media Coverage",
      category: "social",
      image: "/smc.png?height=600&width=800",
      videoUrl: "https://www.instagram.com/p/DBLD96PNJzo/",
    },
    {
      id: 4,
      title: "Corporate Event Coverage",
      category: "video",
      image: "/ed.png?height=600&width=800",
      videoUrl: "https://drive.google.com/drive/u/0/folders/16TQqcMF4kCDUNt2mJEQQ1qejKJ1xVzKV",
    },
    {
      id: 5,
      title: "Full Event Coverage",
      category: "Videography",
      image: "/fm.png?height=600&width=800",
      videoUrl: "https://drive.google.com/drive/u/0/folders/16TQqcMF4kCDUNt2mJEQQ1qejKJ1xVzKV",
    },
    {
      id: 6,
      title: "Video Edits",
      category: "Editing",
      image: "/e.png?height=600&width=800",
      videoUrl: "https://www.instagram.com/p/DKjRKr8ypSr/",
    },
    {
      id: 7,
      title: "Interior Design Showcase",
      category: "Videography",
      image: "/id.png?height=600&width=800",
      videoUrl: "https://www.instagram.com/p/DJv4utAyKNj/?hl=en",  
    },
    {
      id: 8,
      title: "Social Media Content Creation",
      category: "social",
      image: "/smca.png?height=600&width=800",
      videoUrl: "https://www.instagram.com/reel/DKhKzIvB2hh/?hl=en",
    },
    {
      id: 9,
      title: "Brand Promotion Video",
      category: "video",
      image: "/bd.png?height=600&width=800",
      videoUrl: "http://instagram.com/p/DEmLHNhJ-Od/",
    },
    {
      id: 10,
      title: "Website Redesign",
      category: "design",
      image: "/ns.png?height=600&width=800",
    },
    {
      id: 11,
      title: "Youtube Shots",
      category: "Video Editing",
      image: "/ytb.png?height=600&width=800",
      videoUrl: "https://www.youtube.com/shorts/kP36DGiqaik",
    },
    {
      id: 12,
      title: "Instagram Strategy",
      category: "social",
      image: "/wcc.png?height=600&width=800",
      videoUrl: "https://www.instagram.com/reel/DE4OEmvK6kb/",
    },
  ]

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
   
   <div className="flex flex-col bg-black text-white">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute top-0w left-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
  ><div className="absolute inset-0 bg-black/90 z-0" />
    <source src="/12.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Overlay (optional for darkening the video) */}
  
     
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Creative Work</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Explore our latest projects and see how we've helped bring ideas to life.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => item.videoUrl && window.open(item.videoUrl, "_blank")}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3 text-white">
                        <Play className="h-8 w-8 fill-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                      <Badge variant="outline" className="mt-2 text-cyan-400 border-cyan-500/50">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          <div className="flex justify-center mb-12">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white hover:text-black hover:from-pink-500 hover:to-purple-600 shadow-lg"
        >
          <Link
            href="https://drive.google.com/drive/folders/1MRiXxE3mA90jiYOgn6BzIeenXo_uweSu?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Portfolio on Google Drive
          </Link>
        </Button>
      </div>
   

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-2">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your creative vision to life. Contact us today for a free consultation.
          </p>
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
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
