"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Film } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={closeMenu}>
          <img
            src="/wc.png"
            alt="WeCreate Logo"
            className="h-auto w-auto max-h-25  max-w-40"
          />
        </Link>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-400",
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-cyan-500"
                    : "text-muted-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-gradient-1 hover:bg-cyan-600 text-white">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-cyan-400",
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-cyan-500"
                    : "text-muted-foreground",
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-gradient-1 hover:bg-cyan-600 text-white">
              <Link href="/contact" onClick={closeMenu}>
                Get a Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
