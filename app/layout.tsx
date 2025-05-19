import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  img: "/wc.png",
  url: "https://www.instagram.com/wecreate.__/",
  title: "WeCreate | Video, Photo & SMM",
  description: "Professional video and photo editing, production, and social media marketing services.",
    generator: 'Mj'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
