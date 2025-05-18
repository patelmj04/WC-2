"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimatedTextProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "highlight" | "reveal" | "gradient-shift"
  once?: boolean
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  animation = "fade-up",
  once = true,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, once])

  const animationClasses = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    highlight: "animate-highlight",
    reveal: "animate-reveal",
    "gradient-shift": "animate-gradient-shift",
  }

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block",
        isVisible ? animationClasses[animation] : "opacity-0",
        animation === "fade-up" && "translate-y-4",
        animation === "reveal" && "after:w-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </span>
  )
}

export function AnimatedHeading({
  children,
  className,
  as: Component = "h2",
  animation = "fade-up",
  delay = 0,
  words = false,
}: {
  children: string
  className?: string
  as?: React.ElementType
  animation?: "fade-up" | "fade-in" | "highlight" | "reveal" | "gradient-shift"
  delay?: number
  words?: boolean
}) {
  const content = words
    ? children.split(" ").map((word, i) => (
        <React.Fragment key={i}>
          <AnimatedText animation={animation} delay={delay + i * 100}>
            {word}
          </AnimatedText>{" "}
        </React.Fragment>
      ))
    : children

  return <Component className={className}>{content}</Component>
}
