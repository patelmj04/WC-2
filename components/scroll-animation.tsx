"use client"

import { useState } from "react"

import React, { useEffect, useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationDirection = "up" | "down" | "left" | "right"
type AnimationType = "fade" | "slide" | "scale" | "reveal" | "clip"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
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
  as?: React.ElementType
}

export function ScrollAnimation({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  delay = 0,
  duration = 100,
  direction = "up",
  type = "fade",
  distance = 50,
  staggerChildren = false,
  staggerDelay = 100,
  as: Component = "div",
}: ScrollAnimationProps) {
  const {
    ref,
    isVisible,
    styles,
    staggerDelay: staggerDelayValue,
  } = useScrollAnimation({
    threshold,
    rootMargin,
    once,
    delay,
    duration,
    direction,
    type,
    distance,
    staggerChildren,
    staggerDelay,
  })

  // Handle staggered children animations
  const childrenArray = React.Children.toArray(children)
  const staggeredChildren = staggerChildren
    ? childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              transitionDelay: `${delay + index * staggerDelayValue}ms`,
            },
            key: index,
          })
        }
        return child
      })
    : children

  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={{
        ...styles,
        willChange: "opacity, transform",
      }}
    >
      {staggerChildren ? staggeredChildren : children}
    </Component>
  )
}

export function ScrollReveal({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  delay = 0,
  duration = 200,
}: Omit<ScrollAnimationProps, "type" | "direction" | "distance" | "staggerChildren" | "staggerDelay" | "as">) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    once,
    delay,
    duration,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        {
          "after:absolute after:inset-0 after:bg-background after:origin-right after:transition-transform after:duration-[200ms] after:ease-in-out": true,
          "after:transform-none": !isVisible,
          "after:translate-x-full": isVisible,
        },
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className={cn("transition-opacity duration-[200ms] ease-in-out", {
          "opacity-0": !isVisible,
          "opacity-100": isVisible,
        })}
        style={{
          transitionDelay: `${delay + 300}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function ScrollParallax({
  children,
  className,
  speed = 0.2,
  direction = "up",
  threshold = 0,
  rootMargin = "0px",
}: {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  rootMargin?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!ref.current) return

    const { top, left } = ref.current.getBoundingClientRect()
    const elementTop = top + window.scrollY
    const elementLeft = left + window.scrollX

    const handleParallax = () => {
      if (!ref.current) return

      const relativeScroll = window.scrollY - elementTop + window.innerHeight
      if (relativeScroll > 0) {
        const translateValue = relativeScroll * speed

        switch (direction) {
          case "up":
            ref.current.style.transform = `translateY(-${translateValue}px)`
            break
          case "down":
            ref.current.style.transform = `translateY(${translateValue}px)`
            break
          case "left":
            ref.current.style.transform = `translateX(-${translateValue}px)`
            break
          case "right":
            ref.current.style.transform = `translateX(${translateValue}px)`
            break
        }
      }
    }

    handleParallax()
    window.addEventListener("scroll", handleParallax, { passive: true })
    return () => window.removeEventListener("scroll", handleParallax)
  }, [speed, direction, scrollY])

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}

export function ScrollStagger({
  children,
  className,
  staggerDelay = 100,
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  baseDelay = 0,
  duration = 200,
  direction = "up",
  distance = 30,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
  baseDelay?: number
  duration?: number
  direction?: AnimationDirection
  distance?: number
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    once,
    delay: baseDelay,
  })

  const childrenArray = React.Children.toArray(children)
  const staggeredChildren = childrenArray.map((child, index) => {
    if (React.isValidElement(child)) {
      const delay = baseDelay + index * staggerDelay
      const translateY = direction === "up" ? distance : direction === "down" ? -distance : 0
      const translateX = direction === "left" ? distance : direction === "right" ? -distance : 0

      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0, 0)" : `translate(${translateX}px, ${translateY}px)`,
          transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
          transitionDelay: `${delay}ms`,
        },
        key: index,
      })
    }
    return child
  })

  return (
    <div ref={ref} className={className}>
      {staggeredChildren}
    </div>
  )
}
