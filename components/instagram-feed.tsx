"use client"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"

export default function InstagramFeed() {
  // In a real implementation, you would fetch this data from Instagram's API
  // For this example, we'll use mock data
  const instagramPosts = [
    {
      id: "1",
      image: "/ph1.png?height=600&width=600",
      likes: 245,
      comments: 18,
      link: "https://www.instagram.com/p/CrgEPoqA-pj/",
    },
    {
      id: "2",
      image: "/placeholder.svg?height=600&width=600",
      likes: 189,
      comments: 12,
      link: "https://instagram.com/p/example2",
    },
    {
      id: "3",
      image: "/placeholder.svg?height=600&width=600",
      likes: 320,
      comments: 24,
      link: "https://instagram.com/p/example3",
    },
    {
      id: "4",
      image: "/placeholder.svg?height=600&width=600",
      likes: 278,
      comments: 15,
      link: "https://instagram.com/p/example4",
    },
    {
      id: "5",
      image: "/placeholder.svg?height=600&width=600",
      likes: 412,
      comments: 32,
      link: "https://instagram.com/p/example5",
    },
    {
      id: "6",
      image: "/placeholder.svg?height=600&width=600",
      likes: 156,
      comments: 9,
      link: "https://instagram.com/p/example6",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {instagramPosts.map((post) => (
        <Link
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-md"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt="Instagram post"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-1 fill-white text-white" />
                <span className="text-sm">{post.likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="text-sm">{post.comments}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
