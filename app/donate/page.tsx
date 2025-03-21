'use client'

import { useState, useRef, useEffect } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'
import { FadeInView } from '@/components/animations/motion-container'

const donationTiers = [
  {
    amount: 2000,
    title: 'Friend',
    description: 'Provides meals for one resident for a day',
    impact: 'Your donation helps ensure our residents receive nutritious meals.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    amount: 4000,
    title: 'Supporter',
    description: 'Funds recreational activities for a week',
    impact: 'Enables engaging activities that promote mental and physical well-being.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    amount: 8000,
    title: 'Champion',
    description: 'Covers medical supplies for a month',
    impact: 'Ensures residents receive proper medical care and attention.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    amount: 20000,
    title: 'Guardian',
    description: 'Sponsors a resident for a month',
    impact: 'Provides comprehensive care including accommodation, meals, and activities.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

export default function DonatePage() {
  const { toast } = useToast()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  
  // Update customAmount when selectedAmount changes
  useEffect(() => {
    if (selectedAmount) {
      setCustomAmount(selectedAmount.toString())
    }
  }, [selectedAmount])
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    isMonthly: false,
  })
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!paymentScreenshot) {
      toast({
        title: 'Payment Verification Required',
        description: 'Please upload a screenshot of your payment to complete your donation.',
        variant: 'destructive'
      })
      return
    }

    setIsUploading(true)
    
    try {
      // Create form data to send the file
      const formData = new FormData()
      formData.append('screenshot', paymentScreenshot)
      formData.append('amount', selectedAmount?.toString() || customAmount)
      formData.append('name', donorInfo.name)
      formData.append('email', donorInfo.email)
      formData.append('isMonthly', donorInfo.isMonthly.toString())
      
      // Send the form data to our API
      const response = await fetch('/api/donations', {
        method: 'POST',
        body: formData
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to process donation')
      }
      
      toast({
        title: 'Thank You!',
        description: 'Your donation has been received. We will send you a confirmation email shortly.',
      })
      
      // Reset form
      setSelectedAmount(null)
      setCustomAmount('')
      setDonorInfo({
        name: '',
        email: '',
        isMonthly: false,
      })
      setPaymentScreenshot(null)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem processing your donation. Please try again.',
        variant: 'destructive'
      })
      console.error(error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentScreenshot(e.target.files[0])
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background/95 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
          alt="Support Our Mission"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 mx-auto px-4 py-16 text-center">
          <FadeInView>
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-md">
              Support Our Mission
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Your donation helps us provide quality care and support for our elderly
              residents.
            </p>
          </FadeInView>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Donation Tiers */}
        <FadeInView>
          <div className="mb-20 grid gap-8 md:grid-cols-4">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                  selectedAmount === tier.amount
                    ? 'bg-primary/10 border-2 border-primary'
                    : 'bg-white/5 hover:bg-white/10 border border-primary/10'
                }`}
                onClick={() => {
                  setSelectedAmount(tier.amount)
                  setCustomAmount('')
                }}
              >
                <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                  {tier.icon}
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ₹{tier.amount}
                  </span>
                  <span className="ml-2 text-muted-foreground">/donation</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-primary">
                  {tier.title}
                </h3>
                <p className="mb-6 text-muted-foreground flex-grow">
                  {tier.description}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {tier.impact}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Donation Form */}
        <FadeInView>
          <div className="mx-auto max-w-2xl rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
            <form onSubmit={handleDonate} className="space-y-8">
              <div className="space-y-2">
                <label
                  htmlFor="custom-amount"
                  className="text-sm font-medium text-primary"
                >
                  Custom Amount
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-muted-foreground">₹</span>
                  </div>
                  <input
                    type="number"
                    name="custom-amount"
                    id="custom-amount"
                    min="1"
                    value={customAmount}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Only set positive values
                      if (parseFloat(value) >= 0 || value === '') {
                        setCustomAmount(value)
                        setSelectedAmount(null)
                      }
                    }}
                    className="w-full px-8 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

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
                  value={donorInfo.name}
                  onChange={(e) =>
                    setDonorInfo({ ...donorInfo, name: e.target.value })
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
                  value={donorInfo.email}
                  onChange={(e) =>
                    setDonorInfo({ ...donorInfo, email: e.target.value })
                  }
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/10 text-muted-foreground focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              {/* <div className="flex items-center">
                <input
                  type="checkbox"
                  id="monthly"
                  name="monthly"
                  checked={donorInfo.isMonthly}
                  onChange={(e) =>
                    setDonorInfo({ ...donorInfo, isMonthly: e.target.checked })
                  }
                  className="h-5 w-5 rounded-md border-primary/10 text-primary focus:ring-primary/30"
                />
                <label
                  htmlFor="monthly"
                  className="ml-3 text-sm text-muted-foreground cursor-pointer"
                >
                  Make this a monthly donation
                </label>
              </div> */}

              {/* Payment QR Code */}
              <div className="space-y-4 border border-primary/10 rounded-xl p-6 bg-white/5">
                <h3 className="text-lg font-medium text-primary text-center">
                  Scan to Pay with Google Pay
                </h3>
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg">
                    <Image 
                      src="/gpay.png" 
                      alt="Google Pay QR Code" 
                      width={200} 
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  UPI ID: akashaparavakal@okicici
                </p>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Upload Payment Screenshot
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 rounded-xl bg-white/5 border border-primary/10 px-4 py-3 text-muted-foreground hover:bg-white/10 transition-colors"
                    >
                      {paymentScreenshot ? paymentScreenshot.name : 'Choose File'}
                    </button>
                    {paymentScreenshot && (
                      <button
                        type="button"
                        onClick={() => setPaymentScreenshot(null)}
                        className="text-red-400 hover:text-red-500"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {paymentScreenshot && (
                    <p className="text-xs text-green-400">
                      ✓ Screenshot uploaded successfully
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isUploading}
                className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isUploading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    Donate ₹{selectedAmount || customAmount || ''}
                    {donorInfo.isMonthly ? ' Monthly' : ''}
                  </>
                )}
              </button>
            </form>
          </div>
        </FadeInView>

        {/* Impact Section */}
        <section className="mt-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Your Impact
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Quality Care
                </h3>
                <p className="text-muted-foreground">
                  Your donation helps us maintain high standards of care and provide
                  personalized attention to each resident.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Enriching Activities
                </h3>
                <p className="text-muted-foreground">
                  Support programs that keep our residents active, engaged, and
                  connected with the community.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Better Facilities
                </h3>
                <p className="text-muted-foreground">
                  Help us maintain and improve our facilities to create a comfortable
                  and safe environment.
                </p>
              </div>
            </div>
          </FadeInView>
        </section>
      </div>
    </main>
  )
}
