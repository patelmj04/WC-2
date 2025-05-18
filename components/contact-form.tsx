"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-form"
import { useNavigationBlocker } from "@/app/contact/ContactPageClient"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { setIsBlocked } = useNavigationBlocker()

  const handleInputChange = () => {
    if (!isSubmitting && !isSubmitted) {
      setIsBlocked(true)
    }
  }

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setIsSubmitted(true)
        setIsBlocked(false)
      } else {
        // Handle error
        console.error(result.message)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-zinc-800 p-8 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-1 p-4 rounded-full">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">Message Sent!</h3>
        <p className="text-zinc-400 mb-6">Thank you for contacting us. We'll get back to you as soon as possible.</p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-1 hover:bg-cyan-600 text-white">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6" onChange={handleInputChange}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">
            Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
            required
            name="name"
            className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            required
            name="email"
            className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
          Subject
        </label>
        <Input
          id="subject"
          placeholder="Message subject"
          required
          name="subject"
          className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-300">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Your message"
          rows={6}
          required
          name="message"
          className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
        />
      </div>

      <Button type="submit" className="w-full bg-gradient-1 hover:bg-cyan-600 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
