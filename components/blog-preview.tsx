import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { ScrollAnimation, ScrollStagger } from "@/components/scroll-animation"
import { TextReveal } from "@/components/text-reveal"
import { ImageReveal } from "@/components/image-reveal"

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Creating Engaging Social Media Content",
      excerpt:
        "Learn how to create content that resonates with your audience and drives engagement on social media platforms.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Social Media",
      slug: "/blog/10-tips-for-creating-engaging-social-media-content",
    },
    {
      id: 2,
      title: "The Art of Visual Storytelling in Video Production",
      excerpt:
        "Discover how to tell compelling stories through video and captivate your audience with powerful visual narratives.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 28, 2023",
      readTime: "7 min read",
      category: "Video Production",
      slug: "/blog/the-art-of-visual-storytelling-in-video-production",
    },
    {
      id: 3,
      title: "Photography Lighting Techniques for Beginners",
      excerpt:
        "Master the basics of lighting in photography and learn how to create stunning images with proper lighting techniques.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 10, 2023",
      readTime: "6 min read",
      category: "Photography",
      slug: "/blog/photography-lighting-techniques-for-beginners",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollAnimation type="fade" delay={100}>
            <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
              Our Blog
            </Badge>
          </ScrollAnimation>

          <TextReveal
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white"
            delay={200}
            highlight
            highlightColor="rgba(6, 182, 212, 0.2)"
          >
            Latest Articles
          </TextReveal>

          <ScrollAnimation type="fade" delay={400}>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in video production, photography, and social media
              marketing.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          baseDelay={500}
          staggerDelay={200}
          direction="up"
        >
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-zinc-800 border-zinc-700 overflow-hidden flex flex-col h-full hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageReveal
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  direction="top"
                />
                <Badge className="absolute top-4 left-4 z-10 bg-gradient-1 hover:bg-cyan-600 text-white">
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-white">
                  <Link href={post.slug} className="hover:text-purple-400 transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-sm text-zinc-400 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 text-zinc-400">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="ghost" asChild className="p-0 hover:bg-transparent text-cyan-400 hover:text-cyan-300">
                  <Link href={post.slug} className="flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ScrollStagger>

        <div className="text-center mt-12">
          <ScrollAnimation type="slide" direction="up" delay={800}>
            <Button asChild className="bg-gradient-1 hover:bg-cyan-600 text-white">
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
