'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

const opportunities = [
  {
    title: 'Care Assistant',
    description:
      'Help our staff in providing daily care and support to our residents.',
    commitment: 'Minimum 4 hours per week',
    requirements: ['18+ years old', 'Basic care training (provided)', 'Police check'],
  },
  {
    title: 'Activity Coordinator',
    description:
      'Plan and lead engaging activities for our residents, from arts and crafts to exercise classes.',
    commitment: 'Minimum 2 hours per week',
    requirements: ['Creative mindset', 'Good communication skills', 'Experience with seniors'],
  },
  {
    title: 'Administrative Support',
    description:
      'Assist with office tasks, record keeping, and organizing events.',
    commitment: 'Flexible hours',
    requirements: ['Computer literacy', 'Organizational skills', 'Attention to detail'],
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
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
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
        description: 'Failed to submit application. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
        Volunteer With Us
      </h1>
      <p className="mb-12 text-xl text-gray-600 dark:text-gray-300">
        Join our team of dedicated volunteers and make a difference in the lives of
        our residents.
      </p>

      {/* Opportunities */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Volunteer Opportunities
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {opportunity.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {opportunity.description}
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Time Commitment:
                </span>
                <span className="ml-2 text-gray-900 dark:text-white">
                  {opportunity.commitment}
                </span>
              </div>
              <div>
                <span className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400">
                  Requirements:
                </span>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-300">
                  {opportunity.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Volunteer Application
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a role</option>
                  {opportunities.map((opp) => (
                    <option key={opp.title} value={opp.title}>
                      {opp.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={3}
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Availability
              </label>
              <textarea
                id="availability"
                name="availability"
                rows={2}
                value={formData.availability}
                onChange={(e) =>
                  setFormData({ ...formData, availability: e.target.value })
                }
                required
                placeholder="Please specify your available days and times"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}