"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function BlogClientPage() {
//   const blogPosts = [
    // {
//       id: 1,
//       title: "10 Tips for Creating Engaging Social Media Content",
//       excerpt:
//         "Learn how to create content that resonates with your audience and drives engagement on social media platforms.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "May 15, 2023",
//       readTime: "5 min read",
//       category: "Social Media",
//       slug: "/blog/10-tips-for-creating-engaging-social-media-content",
//     },
//     {
//       id: 2,
//       title: "The Art of Visual Storytelling in Video Production",
//       excerpt:
//         "Discover how to tell compelling stories through video and captivate your audience with powerful visual narratives.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "April 28, 2023",
//       readTime: "7 min read",
//       category: "Video Production",
//       slug: "/blog/the-art-of-visual-storytelling-in-video-production",
//     },
//     {
//       id: 3,
//       title: "Photography Lighting Techniques for Beginners",
//       excerpt:
//         "Master the basics of lighting in photography and learn how to create stunning images with proper lighting techniques.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "April 10, 2023",
//       readTime: "6 min read",
//       category: "Photography",
//       slug: "/blog/photography-lighting-techniques-for-beginners",
//     },
//     {
//       id: 4,
//       title: "How to Build a Strong Brand Presence on Instagram",
//       excerpt:
//         "Learn strategies to establish and grow your brand's presence on Instagram to reach and engage with your target audience.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "March 22, 2023",
//       readTime: "8 min read",
//       category: "Social Media",
//       slug: "/blog/how-to-build-a-strong-brand-presence-on-instagram",
//     },
//     {
//       id: 5,
//       title: "Color Grading Tips for Cinematic Videos",
//       excerpt: "Elevate your videos with professional color grading techniques that create a cinematic look and feel.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "March 5, 2023",
//       readTime: "6 min read",
//       category: "Video Production",
//       slug: "/blog/color-grading-tips-for-cinematic-videos",
//     },
//     {
//       id: 6,
//       title: "The Power of User-Generated Content in Marketing",
//       excerpt:
//         "Discover how to leverage user-generated content to build trust, authenticity, and engagement with your audience.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "February 18, 2023",
//       readTime: "5 min read",
//       category: "Marketing",
//       slug: "/blog/the-power-of-user-generated-content-in-marketing",
//     },
//     {
//       id: 7,
//       title: "Essential Equipment for Professional Photography",
//       excerpt:
//         "A comprehensive guide to the essential equipment every professional photographer needs in their toolkit.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "February 3, 2023",
//       readTime: "7 min read",
//       category: "Photography",
//       slug: "/blog/essential-equipment-for-professional-photography",
//     },
//     {
//       id: 8,
//       title: "Creating a Content Calendar for Social Media",
//       excerpt: "Learn how to plan and organize your social media content with an effective content calendar strategy.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "January 20, 2023",
//       readTime: "6 min read",
//       category: "Social Media",
//       slug: "/blog/creating-a-content-calendar-for-social-media",
//     },
//     {
//       id: 9,
//       title: "Video Editing Techniques to Enhance Storytelling",
//       excerpt:
//         "Explore advanced video editing techniques that can elevate your storytelling and captivate your audience.",
//       image: "/placeholder.svg?height=400&width=600",
//       date: "January 5, 2023",
//       readTime: "8 min read",
//       category: "Video Production",
//       slug: "/blog/video-editing-techniques-to-enhance-storytelling",
//     },
//   ]

//   const categories = ["All", "Video Production", "Photography", "Social Media", "Marketing", "Design"]

//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted">
//         <div className="container mx-auto px-4 text-center">
//           <Badge variant="outline" className="px-3 py-1 mb-4">
//             Our Blog
//           </Badge>
//           <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Insights & Resources</h1>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
//             Stay updated with the latest trends, tips, and insights in video production, photography, and social media
//             marketing.
//           </p>

//           <div className="max-w-md mx-auto relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//             <Input type="search" placeholder="Search articles..." className="pl-10" />
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-8 border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-2">
//             {categories.map((category, index) => (
//               <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Blog Posts */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post) => (
//               <Card key={post.id} className="overflow-hidden flex flex-col h-full">
//                 <div className="relative aspect-video overflow-hidden">
//                   <Image
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     fill
//                     className="object-cover transition-transform duration-500 hover:scale-105"
//                   />
//                   <Badge className="absolute top-4 left-4 z-10">{post.category}</Badge>
//                 </div>
//                 <CardHeader>
//                   <CardTitle className="line-clamp-2">
//                     <Link href={post.slug} className="hover:text-primary transition-colors">
//                       {post.title}
//                     </Link>
//                   </CardTitle>
//                   <div className="flex items-center text-sm text-muted-foreground space-x-4">
//                     <div className="flex items-center">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       <span>{post.date}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-1" />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
//                 </CardContent>
//                 <CardFooter className="mt-auto">
//                   <Button variant="ghost" asChild className="p-0 hover:bg-transparent">
//                     <Link href={post.slug} className="flex items-center text-primary">
//                       Read More <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>

//           <div className="flex justify-center mt-12">
//             <Button variant="outline">Load More Articles</Button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 md:py-24 bg-muted/30">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-2xl mx-auto">
//             <Badge variant="outline" className="px-3 py-1 mb-4">
//               Stay Updated
//             </Badge>
//             <h2 className="text-3xl font-bold tracking-tight mb-4">Subscribe to Our Newsletter</h2>
//             <p className="text-muted-foreground text-lg mb-8">
//               Get the latest articles, resources, and tips delivered directly to your inbox.
//             </p>
//             <form
//               className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
//               onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault()
//                 // Handle newsletter subscription logic here
//                 console.log("Blog newsletter form submitted")
//               }}
//             >
//               <Input type="email" placeholder="Your email address" className="flex-1" required />
//               <Button type="submit">Subscribe</Button>
//             </form>
//             <p className="text-xs text-muted-foreground mt-4">
//               By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
}
