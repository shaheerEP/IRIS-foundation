"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/siteConfig"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

return (
    <>
      {/* SECTION 1: Added pb-24 sm:pb-32 to make room for the wave */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pb-24 sm:pb-32">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Contact"
            title="Get in Touch"
            subtitle="We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work."
            light
          />
        </Container>

        {/* --- WAVE SVG START --- */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            className="relative block w-full h-[60px] sm:h-[120px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" 
              className="fill-white" 
            />
          </svg>
        </div>
        {/* --- WAVE SVG END --- */}

      </section>

      <section className="py-24 bg-white">
        <Container size="large">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>

              <div className="space-y-6 mb-12">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted">{siteConfig.contact.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-secondary hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-secondary hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAP */}
              <div className="aspect-video rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.1923469207061!2d76.39522116495891!3d30.66967044086105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101dcffc187bad%3A0xf2b8ae80408d64ce!2sIRIS%20EDUCATION%20CENTER!5e1!3m2!1sen!2sin!4v1764752493215!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            {/* RIGHT SIDE – FORM */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-700">Something went wrong. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

    </>
)
}
