"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}