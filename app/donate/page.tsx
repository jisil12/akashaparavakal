'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

const donationTiers = [
  {
    amount: 2000,
    title: 'Friend',
    description: 'Provides meals for one resident for a day',
    impact: 'Your donation helps ensure our residents receive nutritious meals.',
  },
  {
    amount: 4000,
    title: 'Supporter',
    description: 'Funds recreational activities for a week',
    impact: 'Enables engaging activities that promote mental and physical well-being.',
  },
  {
    amount: 8000,
    title: 'Champion',
    description: 'Covers medical supplies for a month',
    impact: 'Ensures residents receive proper medical care and attention.',
  },
  {
    amount: 20000,
    title: 'Guardian',
    description: 'Sponsors a resident for a month',
    impact: 'Provides comprehensive care including accommodation, meals, and activities.',
  },
]

export default function DonatePage() {
  const { toast } = useToast()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    isMonthly: false,
  })

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically integrate with Stripe or another payment processor
    toast({
      title: 'Thank You!',
      description: 'Your donation will help make a difference in our residents\' lives.',
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
        Support Our Mission
      </h1>
      <p className="mb-12 text-xl text-gray-600 dark:text-gray-300">
        Your donation helps us provide quality care and support for our elderly
        residents.
      </p>

      {/* Donation Tiers */}
      <div className="mb-12 grid gap-6 md:grid-cols-4">
        {donationTiers.map((tier) => (
          <div
            key={tier.amount}
            className={`cursor-pointer rounded-lg p-6 shadow-lg transition-colors ${
              selectedAmount === tier.amount
                ? 'bg-blue-50 ring-2 ring-blue-500 dark:bg-blue-900'
                : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
            onClick={() => {
              setSelectedAmount(tier.amount)
              setCustomAmount('')
            }}
          >
            <div className="mb-4">
              <span className="text-3xl font-bold text-blue-600">
                ₹{tier.amount}
              </span>
              <span className="ml-1 text-gray-500">/donation</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {tier.title}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {tier.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tier.impact}
            </p>
          </div>
        ))}
      </div>

      {/* Donation Form */}
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <form onSubmit={handleDonate} className="space-y-6">
          <div>
            <label
              htmlFor="custom-amount"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Custom Amount
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">₹</span>
              </div>
              <input
                type="number"
                name="custom-amount"
                id="custom-amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                placeholder="0.00"
              />
            </div>
          </div>

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
              value={donorInfo.name}
              onChange={(e) =>
                setDonorInfo({ ...donorInfo, name: e.target.value })
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
              value={donorInfo.email}
              onChange={(e) =>
                setDonorInfo({ ...donorInfo, email: e.target.value })
              }
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="monthly"
              name="monthly"
              checked={donorInfo.isMonthly}
              onChange={(e) =>
                setDonorInfo({ ...donorInfo, isMonthly: e.target.checked })
              }
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="monthly"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
            >
              Make this a monthly donation
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Donate ₹{selectedAmount || customAmount || ''}
            {donorInfo.isMonthly ? ' Monthly' : ''}
          </button>
        </form>
      </div>

      {/* Impact Section */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Your Impact
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Quality Care
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your donation helps us maintain high standards of care and provide
              personalized attention to each resident.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Enriching Activities
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Support programs that keep our residents active, engaged, and
              connected with the community.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Better Facilities
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Help us maintain and improve our facilities to create a comfortable
              and safe environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 