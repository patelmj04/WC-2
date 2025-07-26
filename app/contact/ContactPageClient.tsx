"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import ContactForm from "@/components/contact-form"

// Create a context for navigation blocking
const NavigationBlockerContext = createContext({
  isBlocked: false,
  setIsBlocked: (blocked: boolean) => {},
})

export const useNavigationBlocker = () => useContext(NavigationBlockerContext)

export default function ContactPageClient() {
  const [isNavigationBlocked, setIsNavigationBlocked] = useState(false)

  return (
    <NavigationBlockerContext.Provider
      value={{
        isBlocked: isNavigationBlocked,
        setIsBlocked: setIsNavigationBlocked,
      }}
    >
      <div className="flex flex-col bg-black text-white">
   {/* Hero Section */}
<section className="relative h-[100vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-zinc-900">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/cu.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}w
  <div className="absolute inset-0 bg-black/80 z-10" />

  {/* Content */}
  <div className="relative z-20 text-center px-4 text-white max-w-3xl">
    <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
      Contact Us
    </Badge>
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h1>
    <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
      Have a project in mind? We'd love to hear from you. Reach out to us and let's create something amazing together.
    </p>
  </div>
</section>

        {/* Contact and Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side: Quote Form and details */}
              <div className="lg:pr-8">
                <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
                  Request a Quote
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
                  Get a Custom Quote for Your Project
                </h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Tell us about your project and we&apos;ll provide you with a detailed quote tailored to your specific
                  needs.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-900 p-2 rounded-full mt-1">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Detailed Proposal</h3>
                      <p className="text-zinc-400">
                        Receive a comprehensive proposal outlining all aspects of your project.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-900 p-2 rounded-full mt-1">
                      <Clock className="h-5 w-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Quick Response</h3>
                      <p className="text-zinc-400">We&apos;ll get back to you within 24 hours with your custom quote.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-900 p-2 rounded-full mt-1">
                      <Phone className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Free Consultation</h3>
                      <p className="text-zinc-400">Schedule a free consultation to discuss your project in detail.</p>
                    </div>
                  </div>
                </div>
                {/* <ContactForm /> */}
                <div className="pt-6">
                  <h3 className="font-medium text-lg mb-4 text-white">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link href="https://instagram.com/wecreate.__" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Instagram"
                        className="border-zinc-700 text-zinc-400 hover:text-pink-400 hover:border-pink-500"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Facebook"
                        className="border-zinc-700 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500"
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Twitter"
                        className="border-zinc-700 text-zinc-400 hover:text-amber-400 hover:border-amber-500"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>

              {/* Right side: Contact Information */}
              <div className="space-y-8 lg:pl-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Contact Information</h2>
                  <p className="text-zinc-400 text-lg mb-8">
                    Feel free to reach out to us through any of the following channels. We&apos;re here to help bring your
                    creative vision to life.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="bg-cyan-900 p-4 rounded-full mb-4">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="font-medium text-lg mb-2 text-white">Email Us</h3>
                      <a href="mailto:wecreated31553@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                        wecreated31553@gmail.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="bg-pink-900 p-4 rounded-full mb-4">
                        <Phone className="h-6 w-6 text-pink-400" />
                      </div>
                      <h3 className="font-medium text-lg mb-2 text-white">Call Us</h3>
                      <a href="tel:+91-9595299039" className="text-pink-400 hover:text-pink-300">
                        (+91) 9595299039
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="bg-amber-900 p-4 rounded-full mb-4">
                        <MapPin className="h-6 w-6 text-amber-400" />
                      </div>
                      <h3 className="font-medium text-lg mb-2 text-white">Visit Us</h3>
                      <address className="not-italic text-zinc-400">
                        Nagpur
                        <br />
                        Maharashtra, IND
                      </address>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="bg-cyan-900 p-4 rounded-full mb-4">
                        <Clock className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="font-medium text-lg mb-2 text-white">Business Hours</h3>
                      <p className="text-zinc-400">
                        Monday - Friday
                        <br />
                        10:00 AM - 5:00 PM
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Our Location</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Visit our studio in the heart of the city.</p>
            </div>

            <div className="aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4268352747454!2d79.0781203!3d21.1354053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c090518ab6c9%3A0x9ad347d59239fc7f!2sNetcom%20System%20-%20Data%20Recovery%20Centre!5e0!3m2!1sen!2sin!4v1747654671978!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="WeCreate Studio Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </NavigationBlockerContext.Provider>
  )
}
