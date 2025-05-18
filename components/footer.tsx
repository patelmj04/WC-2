"use client"

import type React from "react"

import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">WeCreate</h3>
            <p className="text-zinc-400">
              Professional video and photo editing, production, and social media marketing services.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/wecreate.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Instagram"
                  className="text-zinc-400 hover:text-pink-400"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook" className="text-zinc-400 hover:text-cyan-400">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter" className="text-zinc-400 hover:text-amber-400">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="YouTube" className="text-zinc-400 hover:text-pink-400">
                  <Youtube className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-zinc-400 hover:text-pink-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-500" />
                <a href="mailto:info@wecreate.com" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  info@wecreate.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pink-500" />
                <a href="tel:+1234567890" className="text-zinc-400 hover:text-pink-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-500 mt-1" />
                <span className="text-zinc-400">
                  123 Creative St, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Newsletter</h3>
            <p className="text-zinc-400">Subscribe to our newsletter for the latest updates and offers.</p>
            <form
              className="space-y-2"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                // Handle newsletter subscription logic here
                console.log("Newsletter form submitted")
              }}
            >
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
              />
              <Button type="submit" className="w-full bg-gradient-1 hover:bg-cyan-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} WeCreate. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
