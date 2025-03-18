'use client';

import Image from 'next/image';
import { FadeInView } from '@/components/animations/motion-container';

export default function ServicesPage() {
  const services = [
    {
      title: 'Welcome & Initial Care',
      description:
        'We welcome vagabonds and refugees from the streets with dignity and compassion, following Jesus\'s path of humility and love.',
      features: [
        'Welcome ceremony with flower garland and bouquet',
        'Cleansing and grooming services',
        'New clothing provision',
        'Initial health assessment',
      ],
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Psychiatric Care',
      description:
        'Professional psychiatric treatment and specialized care for those requiring mental health support.',
      features: [
        'Psychiatric evaluations',
        'Regular treatment sessions',
        'Medication management',
        'Specialized daily care',
      ],
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: 'Spiritual & Community Care',
      description:
        'A family-like environment where residents experience love, care, and spiritual growth through our community.',
      features: [
        'Daily prayer sessions',
        'Community activities',
        'Family-like environment',
        'Personal attention from coordinators',
      ],
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background/95 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
          alt="Our Services"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="container relative z-20 mx-auto px-4 py-16 text-center">
          <FadeInView>
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-md">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              We provide comprehensive care with Christian values, focusing on uplifting mentally disabled individuals and the homeless through love, support, and holistic care.
            </p>
          </FadeInView>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <FadeInView key={service.title}>
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10 h-full flex flex-col">
                <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                  {service.icon}
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  {service.title}
                </h2>
                <p className="mb-6 text-muted-foreground flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Facilities */}
        <section className="mt-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our Facilities
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Thirumugha Ashram",
                  description: "Psychiatric Home for Gents located in Voderahalli Village, providing specialized care and support."
                },
                {
                  name: "Thrithwa Ashrama",
                  description: "Psychiatric Home for Ladies in Bharath Nagar, offering dedicated care in a safe environment."
                },
                {
                  name: "Thrithwa Elizabeth Mane",
                  description: "Rehabilitation Centre in Byalakere Village, focusing on recovery and reintegration."
                }
              ].map((facility, index) => (
                <div key={index} className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {facility.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInView>
        </section>
      </div>
    </main>
  );
}
