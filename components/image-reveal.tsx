"use client"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  imageClassName?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
  duration?: number
  direction?: "left" | "right" | "top" | "bottom"
  fill?: boolean
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  delay = 0,
  duration = 150,
  direction = "left",
  fill = false,
}: ImageRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    once,
    delay,
  })

  const clipPathValue = () => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "inset(0 100% 0 0)"
        case "right":
          return "inset(0 0 0 100%)"
        case "top":
          return "inset(100% 0 0 0)"
        case "bottom":
          return "inset(0 0 100% 0)"
        default:
          return "inset(0 100% 0 0)"
      }
    }
    return "inset(0 0 0 0)"
  }

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden relative", className)}
      style={{
        width: fill ? "100%" : width ? `${width}px` : "auto",
        height: fill ? "100%" : height ? `${height}px` : "auto",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          clipPath: clipPathValue(),
          transition: `clip-path ${duration}ms ease`,
          transitionDelay: `${delay}ms`,
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("object-cover", imageClassName)}
          fill={fill}
        />
      </div>
    </div>
  )
}
