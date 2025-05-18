"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  amplitude?: number
  period?: number
  delay?: number
}

export function FloatingElement({ children, className, amplitude = 10, period = 3, delay = 0 }: FloatingElementProps) {
  return (
    <div
      className={cn("inline-block", className)}
      style={{
        animation: `floating ${period}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-${amplitude}px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
      {children}
    </div>
  )
}
