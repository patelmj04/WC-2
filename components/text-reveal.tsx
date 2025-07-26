"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  children: string
  className?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
  duration?: number
  staggerDelay?: number
  as?: React.ElementType
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  highlight?: boolean
  highlightColor?: string
}

export function TextReveal({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  delay = 0,
  duration = 200,
  staggerDelay = 30,
  as: Component = "div",
  direction = "up",
  distance = 20,
  highlight = false,
  highlightColor = "rgba(6, 182, 212, 0.2)",
}: TextRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    once,
    delay,
  })

  // Split text into words
  const words = children.split(" ")

  return (
    <Component ref={ref} className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em] overflow-hidden">
          <span
            className={cn("inline-block", {
              "bg-gradient-to-r from-transparent to-transparent bg-no-repeat bg-bottom transition-[background-size] duration-1000 ease-out":
                highlight,
            })}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translate(0, 0)"
                : direction === "up"
                  ? `translateY(${distance}px)`
                  : direction === "down"
                    ? `translateY(-${distance}px)`
                    : direction === "left"
                      ? `translateX(${distance}px)`
                      : `translateX(-${distance}px)`,
              transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
              transitionDelay: `${delay + wordIndex * staggerDelay}ms`,
              backgroundImage: highlight ? `linear-gradient(${highlightColor}, ${highlightColor})` : "none",
              backgroundSize: isVisible && highlight ? "100% 40%" : "0% 40%",
              backgroundPosition: "0 90%",
              transitionProperty: highlight ? "opacity, transform, background-size" : "opacity, transform",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  )
}
