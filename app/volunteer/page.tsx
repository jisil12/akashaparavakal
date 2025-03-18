'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'
import { FadeInView } from '@/components/animations/motion-container'

const opportunities = [
  {
    title: 'Care Assistant',
    description:
      'Help our staff in providing daily care and support to our residents.',
    commitment: 'Minimum 4 hours per week',
    requirements: ['18+ years old', 'Basic care training (provided)', 'Police check'],
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Activity Coordinator',
    description:
      'Plan and lead engaging activities for our residents, from arts and crafts to exercise classes.',
    commitment: 'Minimum 2 hours per week',
    requirements: ['Creative mindset', 'Good communication skills', 'Experience with seniors'],
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Administrative Support',
    description:
      'Assist with office tasks, record keeping, and organizing events.',
    commitment: 'Flexible hours',
    requirements: ['Computer literacy', 'Organizational skills', 'Attention to detail'],
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

export default function VolunteerPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.role) {
        toast({
          title: 'Missing Information',
          description: 'Please fill in all required fields.',
          variant: 'destructive',
        })
        return
      }
      
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application')
      }

      toast({
        title: 'Application Submitted',
        description: 'Thank you for your interest in volunteering. We will contact you soon.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        availability: '',
      })
    } catch (error) {
      console.error('Error submitting application:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to submit application. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background/95 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop"
          alt="Volunteer With Us"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 mx-auto px-4 py-16 text-center">
          <FadeInView>
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-md">
              Volunteer With Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Join our team of dedicated volunteers and make a difference in the lives of
              our residents.
            </p>
          </FadeInView>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Opportunities */}
        <section className="mb-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Volunteer Opportunities
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {opportunities.map((opportunity) => (
                <div
                  key={opportunity.title}
                  className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10 h-full flex flex-col"
                >
                  <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {opportunity.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground flex-grow">
                    {opportunity.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-blue-400">
                        Time Commitment:
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {opportunity.commitment}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-400 mb-2 block">
                        Requirements:
                      </span>
                      <ul className="space-y-2">
                        {opportunity.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </section>

        {/* Application Form */}
        <section>
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Volunteer Application
            </h2>
            <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Enter your full name"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="role"
                      className="text-sm font-medium text-primary"
                    >
                      Preferred Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors"
                    >
                      <option value="" className="bg-background">Select a role</option>
                      {opportunities.map((opp) => (
                        <option key={opp.title} value={opp.title} className="bg-background">
                          {opp.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="experience"
                    className="text-sm font-medium text-primary"
                  >
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                    placeholder="Tell us about your relevant experience"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="availability"
                    className="text-sm font-medium text-primary"
                  >
                    Availability
                  </label>
                  <textarea
                    id="availability"
                    name="availability"
                    rows={3}
                    value={formData.availability}
                    onChange={(e) =>
                      setFormData({ ...formData, availability: e.target.value })
                    }
                    required
                    placeholder="Please specify your available days and times"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </FadeInView>
        </section>
      </div>
    </main>
  )
}
