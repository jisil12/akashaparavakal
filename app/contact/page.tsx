'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'
import { FadeInView } from '@/components/animations/motion-container'

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Message Sent',
      description: 'Thank you for contacting us. We will get back to you soon.',
    })
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const locations = [
    {
      name: "THIRUMUGHA ASHRAM",
      subtitle: "PSYCHIATRIC HOME FOR GENTS",
      address: "No.28, Voderahalli Village, Vidyaranjapura",
      city: "MS Palya, Bengaluru - 560097",
      phone: "+91 9886623996",
      email: "thirumughaashram@gmail.com"
    },
    {
      name: "THRITHWA ASHRAMA",
      subtitle: "PSYCHIATRIC HOME FOR LADIES",
      address: "No.6, Bharath Nagar, Ashrama Road,",
      city: "Tanisandra, Dr. SRK Nagar Post, Bengaluru - 560077",
      phone: "+91 9886623996",
      email: "thirumughaashram@gmail.com"
    },
    {
      name: "THRITHWA ELIZABETH MANE",
      subtitle: "REHABILITATION CENTRE",
      address: "No.170/1, kalathamanahalli, Byalakere Village",
      city: "Shivakote P.O, Bengaluru - 560039",
      phone: "+91 9886623996",
      email: "thirumughaashram@gmail.com"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background/95 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 mx-auto px-4 py-16 text-center">
          <FadeInView>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us to learn more about our services or how you can help.
            </p>
          </FadeInView>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Locations */}
        <FadeInView>
          <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
            Our Locations
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {locations.map((location, index) => (
              <div key={index} className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <h3 className="mb-2 text-2xl font-semibold text-primary">
                  {location.name}
                </h3>
                <p className="mb-6 text-sm text-blue-400">
                  {location.subtitle}
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="rounded-xl bg-primary/10 p-2 mr-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary">
                        Address
                      </h4>
                      <p className="mt-1 text-muted-foreground">
                        {location.address}<br />
                        {location.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="rounded-xl bg-primary/10 p-2 mr-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary">
                        Phone
                      </h4>
                      <p className="mt-1 text-muted-foreground">
                        {location.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="rounded-xl bg-primary/10 p-2 mr-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-primary">
                        Email
                      </h4>
                      <p className="mt-1 text-muted-foreground">
                        {location.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Contact Form */}
        <FadeInView>
          <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
            Send us a Message
          </h2>
          <div className="mx-auto max-w-2xl rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-primary"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Type your message here"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </FadeInView>
      </div>
    </main>
  )
}
