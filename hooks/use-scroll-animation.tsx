"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right"
type AnimationType = "fade" | "slide" | "scale" | "reveal" | "clip"

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
  duration?: number
  direction?: AnimationDirection
  type?: AnimationType
  distance?: number
  staggerChildren?: boolean
  staggerDelay?: number
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  delay = 0,
  duration = 400,
  direction = "up",
  type = "fade",
  distance = 50,
  staggerChildren = false,
  staggerDelay = 50,
}: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
        threshold,
        rootMargin,
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
  }, [delay, once, threshold, rootMargin])

  // Generate CSS classes based on animation type and direction
  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: "",
      transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
      transitionDelay: `${delay}ms`,
    }

    if (type === "fade") {
      return baseStyles
    }

    if (type === "slide") {
      let transform = ""
      if (!isVisible) {
        switch (direction) {
          case "up":
            transform = `translateY(${distance}px)`
            break
          case "down":
            transform = `translateY(-${distance}px)`
            break
          case "left":
            transform = `translateX(${distance}px)`
            break
          case "right":
            transform = `translateX(-${distance}px)`
            break
        }
      }
      return {
        ...baseStyles,
        transform,
      }
    }

    if (type === "scale") {
      return {
        ...baseStyles,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
      }
    }

    if (type === "reveal") {
      return {
        ...baseStyles,
        clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      }
    }

    if (type === "clip") {
      return {
        ...baseStyles,
        clipPath: isVisible ? "inset(0 0 0 0)" : "inset(50% 50% 50% 50%)",
      }
    }

    return baseStyles
  }

  return { ref, isVisible, styles: getAnimationStyles(), staggerDelay, staggerChildren }
}
