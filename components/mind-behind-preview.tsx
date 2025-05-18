import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation, ScrollReveal } from "@/components/scroll-animation"
import { TextReveal } from "@/components/text-reveal"

export default function MindBehindPreview() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <ScrollReveal delay={200} duration={1000}>
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-3 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-amber-500/30">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Alex Morgan - Founder & Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center md:text-left">
            <ScrollAnimation type="slide" direction="up" delay={400}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Alex Morgan</h3>
              <p className="text-amber-400 font-medium mb-4">Founder & Creative Director</p>
            </ScrollAnimation>

            <TextReveal
              className="text-zinc-300 italic mb-4"
              delay={600}
              highlight
              highlightColor="rgba(245, 158, 11, 0.1)"
            >
              "I founded WeCreate with a simple mission: to help brands tell authentic stories through powerful visual
              content."
            </TextReveal>

            <ScrollAnimation type="slide" direction="up" delay={800}>
              <Button asChild variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10">
                <Link href="/about" className="flex items-center">
                  Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
