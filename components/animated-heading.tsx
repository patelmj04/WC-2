"use client"

import React from "react"
import { AnimatedText } from "@/components/animated-text"

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
