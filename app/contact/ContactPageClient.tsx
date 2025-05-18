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
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Get In Touch</h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
              Have a project in mind? We'd love to hear from you. Reach out to us and let's create something amazing
              together.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Contact Information</h2>
                  <p className="text-zinc-400 text-lg mb-8">
                    Feel free to reach out to us through any of the following channels. We're here to help bring your
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
                      <a href="mailto:info@wecreate.com" className="text-cyan-400 hover:text-cyan-300">
                        info@wecreate.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="bg-pink-900 p-4 rounded-full mb-4">
                        <Phone className="h-6 w-6 text-pink-400" />
                      </div>
                      <h3 className="font-medium text-lg mb-2 text-white">Call Us</h3>
                      <a href="tel:+1234567890" className="text-pink-400 hover:text-pink-300">
                        (123) 456-7890
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
                        123 Creative St, Suite 100
                        <br />
                        New York, NY 10001
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
                        9:00 AM - 6:00 PM
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-6">
                  <h3 className="font-medium text-lg mb-4 text-white">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link href="https://instagram.com/wecreate.com" target="_blank" rel="noopener noreferrer">
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

              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Send Us a Message</h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Our Location</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Visit our studio in the heart of New York City.</p>
            </div>

            <div className="aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620796867952!5m2!1sen!2s"
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

        {/* Quote Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
                  Request a Quote
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
                  Get a Custom Quote for Your Project
                </h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Tell us about your project and we'll provide you with a detailed quote tailored to your specific
                  needs.
                </p>

                <div className="space-y-6">
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
                      <p className="text-zinc-400">We'll get back to you within 24 hours with your custom quote.</p>
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
              </div>

              <div className="bg-zinc-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6 text-white">Project Quote Request</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    // Handle form submission logic here
                    console.log("Quote form submitted")
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-zinc-300">
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-zinc-300">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="video">Video Production</option>
                      <option value="photo">Photography</option>
                      <option value="editing">Photo Editing</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="content">Content Strategy</option>
                      <option value="design">Graphic Design</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-zinc-300">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a budget range</option>
                      <option value="less-than-1000">Less than $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-plus">$10,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project"
                      rows={5}
                      required
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-1 hover:bg-cyan-600 text-white">
                    Request Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavigationBlockerContext.Provider>
  )
}
