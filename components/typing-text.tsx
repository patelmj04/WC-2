"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypingText({ text, className, speed = 50, delay = 0 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [startTyping, setStartTyping] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!startTyping) return

    let currentIndex = 0
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, speed)

    return () => clearInterval(typingInterval)
  }, [text, speed, startTyping])

  return (
    <div
      ref={containerRef}
      className={cn(
        "inline-block",
        isTyping && "after:content-['|'] after:ml-0.5 after:animate-blink after:text-white",
        className,
      )}
      aria-label={text}
    >
      {displayText}
    </div>
  )
}
