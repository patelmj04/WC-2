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
      image: "/dance.webp?height=600&width=600",
      likes: 4570,
      comments: 98,
      link: "https://www.instagram.com/p/CrgEPoqA-pj/",
    },
    {
      id: "2",
      image: "/d6.webp?height=600&width=600",
      likes: 255,
      comments: 12,
      link: "https://www.instagram.com/p/DGsxX4_iBph/",
    },
    {
      id: "3",
      image: "/d3.webp?height=600&width=600",
      likes: 320,
      comments: 24,
      link: "https://www.instagram.com/p/DGmmGOniwMl/",
    },
    {
      id: "4",
      image: "/d4.webp?height=600&width=600",
      likes: 478,
      comments: 15,
      link: "https://www.instagram.com/p/DGnCQw9iDeW/",
    },
    {
      id: "5",
      image: "/d5.webp?height=600&width=600",
      likes: 4152,
      comments: 312,
      link: "https://www.instagram.com/p/DBLD96PNJzo/",
    },
    {
      id: "6",
      image: "/d7.webp?height=600&width=600",
      likes: 156,
      comments: 9,
      link: "https://www.instagram.com/p/DEkhqkKPIoH/",
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