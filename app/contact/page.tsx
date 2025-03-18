'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-center gradient-text">
        Contact Us
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {locations.map((location, index) => (
          <div key={index} className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              {location.name}
            </h2>
            <p className="mb-4 text-sm text-blue-600 dark:text-blue-400">
              {location.subtitle}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="mr-4 mt-1 h-6 w-6 text-blue-600"
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
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Address
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {location.address}<br />
                    {location.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="mr-4 mt-1 h-6 w-6 text-blue-600"
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
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {location.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="mr-4 mt-1 h-6 w-6 text-blue-600"
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
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {location.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}