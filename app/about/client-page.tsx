"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock, Target } from "lucide-react"
import MindBehindSection from "@/components/mind-behind-section"
import { useIntersectionAnimation } from "@/hooks/use-intersection-animation"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedHeading } from "@/components/animated-heading"

export default function AboutClientPage() {
  const { ref: valuesRef, isVisible: valuesVisible } = useIntersectionAnimation()
  const { ref: teamRef, isVisible: teamVisible } = useIntersectionAnimation()

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in the creative industry, Sarah leads our team with vision and expertise.",
    },
    {
      name: "Michael Chen",
      role: "Lead Videographer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael's cinematic approach to video production has earned him recognition in the industry.",
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Photographer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Emma's eye for detail and composition brings a unique perspective to every photoshoot.",
    },
    {
      name: "David Wilson",
      role: "Social Media Strategist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David's innovative social media strategies have helped numerous brands increase their online presence.",
    },
    {
      name: "Jessica Lee",
      role: "Photo Editor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Jessica's retouching skills transform good photos into extraordinary visual stories.",
    },
    {
      name: "Alex Thompson",
      role: "Motion Graphics Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Alex brings static designs to life with captivating motion graphics and animations.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText animation="fade-in" delay={100}>
            <Badge variant="outline" className="px-3 py-1 mb-4">
              About Us
            </Badge>
          </AnimatedText>
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            animation="fade-up"
            delay={200}
            words
          >
            Our Story
          </AnimatedHeading>
          <AnimatedText animation="fade-in" delay={500}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              We're a team of passionate creatives dedicated to helping brands tell their stories through compelling
              visual content.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedText animation="fade-in" delay={100}>
                <Badge variant="outline" className="px-3 py-1">
                  Our Mission
                </Badge>
              </AnimatedText>
              <AnimatedHeading
                as="h2"
                className="text-3xl md:text-4xl font-bold tracking-tight"
                animation="fade-up"
                delay={200}
              >
                Bringing creative visions to life
              </AnimatedHeading>
              <AnimatedText animation="fade-in" delay={300}>
                <p className="text-muted-foreground text-lg">
                  At WeCreate, our mission is to help brands connect with their audience through authentic, high-quality
                  visual content. We believe in the power of storytelling and its ability to create meaningful
                  connections between brands and their customers.
                </p>
              </AnimatedText>
              <AnimatedText animation="fade-in" delay={400}>
                <p className="text-muted-foreground text-lg">
                  Founded in 2015, we've grown from a small team of passionate creatives to a full-service creative
                  agency serving clients across various industries. Our commitment to excellence and innovation drives
                  everything we do.
                </p>
              </AnimatedText>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <AnimatedText animation="fade-up" delay={500}>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Quality</h4>
                      <p className="text-sm text-muted-foreground">Exceptional content</p>
                    </div>
                  </div>
                </AnimatedText>
                <AnimatedText animation="fade-up" delay={600}>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Creativity</h4>
                      <p className="text-sm text-muted-foreground">Innovative approach</p>
                    </div>
                  </div>
                </AnimatedText>
                <AnimatedText animation="fade-up" delay={700}>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Reliability</h4>
                      <p className="text-sm text-muted-foreground">Consistent delivery</p>
                    </div>
                  </div>
                </AnimatedText>
                <AnimatedText animation="fade-up" delay={800}>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Collaboration</h4>
                      <p className="text-sm text-muted-foreground">Client partnership</p>
                    </div>
                  </div>
                </AnimatedText>
              </div>
            </div>
            <AnimatedText animation="fade-in" delay={900} className="block">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="WeCreate Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Mind Behind Section */}
      <MindBehindSection />

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText animation="fade-in" delay={100}>
              <Badge variant="outline" className="px-3 py-1 mb-4">
                Our Values
              </Badge>
            </AnimatedText>
            <AnimatedHeading
              as="h2"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              animation="fade-up"
              delay={200}
            >
              What Drives Us
            </AnimatedHeading>
            <AnimatedText animation="fade-in" delay={300}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </AnimatedText>
          </div>

          <div
            ref={valuesRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${valuesVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do, from the quality of our work to the service we
                    provide.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of collaboration, both within our team and with our clients.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reliability</h3>
                  <p className="text-muted-foreground">
                    We deliver on our promises, meeting deadlines and exceeding expectations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We embrace new technologies and creative approaches to deliver innovative solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText animation="fade-in" delay={100}>
              <Badge variant="outline" className="px-3 py-1 mb-4">
                Our Team
              </Badge>
            </AnimatedText>
            <AnimatedHeading
              as="h2"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              animation="fade-up"
              delay={200}
            >
              Meet the Creatives
            </AnimatedHeading>
            <AnimatedText animation="fade-in" delay={300}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our talented team of professionals brings expertise and passion to every project.
              </p>
            </AnimatedText>
          </div>

          <div
            ref={teamRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${teamVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedHeading
            as="h2"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            animation="fade-up"
            delay={100}
          >
            Ready to Work With Us?
          </AnimatedHeading>
          <AnimatedText animation="fade-in" delay={200}>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your creative vision to life. Contact us today for a free consultation.
            </p>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  )
}
