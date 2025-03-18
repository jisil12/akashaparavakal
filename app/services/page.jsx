import Image from 'next/image'

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
          className="h-12 w-12 text-blue-600"
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
          className="h-12 w-12 text-blue-600"
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
          className="h-12 w-12 text-blue-600"
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
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
        Our Services
      </h1>
      <p className="mb-12 text-xl text-gray-600 dark:text-gray-300">
        We provide comprehensive care with Christian values, focusing on uplifting mentally disabled individuals and the homeless through love, support, and holistic care.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="mr-2 h-4 w-4 text-blue-600"
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
        ))}
      </div>

      {/* Facilities */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Our Facilities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              Thirumugha Ashram
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Psychiatric Home for Gents located in Voderahalli Village, providing specialized care and support.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              Thrithwa Ashrama
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Psychiatric Home for Ladies in Bharath Nagar, offering dedicated care in a safe environment.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              Thrithwa Elizabeth Mane
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rehabilitation Centre in Byalakere Village, focusing on recovery and reintegration.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}