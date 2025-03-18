'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeInView, ScaleOnHover } from '@/components/animations/motion-container';

export default function Home() {
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
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background/95 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Welcome to Akasha Paravakal
            </h1>
            <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
              Let us come together in the name of our Lord to make the least the best, The last the first, and The lost the choicest
            </p>
            <div className="flex justify-center gap-6">
              <ScaleOnHover>
                <Link
                  href="/donate"
                  className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                >
                  Donate Now
                </Link>
              </ScaleOnHover>
              <ScaleOnHover>
                <Link
                  href="/volunteer"
                  className="rounded-full border-2 border-primary px-8 py-4 text-lg font-medium text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  Volunteer
                </Link>
              </ScaleOnHover>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Gallery
            </h2>
            <ScaleOnHover>
              <Link
                href="/gallery"
                className="group flex items-center gap-2 text-primary/80 hover:text-primary transition-colors"
              >
                View All
                <svg 
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScaleOnHover>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { src: '/image1.jpg', alt: 'Main Building' },
              { src: '/image5.jpg', alt: 'Garden Area' },
              { src: '/image3.jpg', alt: 'Common Area' },
            ].map((image, index) => (
              <FadeInView key={index}>
                <Link href="/gallery" className="block group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <div className="relative h-80 w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Link>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4">
          <FadeInView>
            <h2 className="mb-12 text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our Services
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    className="h-8 w-8 text-primary"
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
                title: "Psychiatric Care",
                description:
                  "Professional psychiatric treatment and daily care for those who require special attention",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                title: "Family Environment",
                description:
                  "A loving community where every member experiences the warmth of family through 'appa' and 'amma' figures",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8 text-primary"
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
                title: "Holistic Care",
                description:
                  "Complete support including accommodation, medical care, grooming, and spiritual guidance",
              },
            ].map((feature, index) => (
              <FadeInView key={index}>
                <div className="group rounded-2xl p-8 text-center bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-primary/10 hover:border-primary/30">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-xl bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <FadeInView>
            <h2 className="mb-12 text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our Locations
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {locations.map((location, index) => (
              <FadeInView key={index}>
                <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10 hover:border-primary/30">
                  <h3 className="mb-2 text-xl font-semibold text-primary">
                    {location.name}
                  </h3>
                  <p className="mb-4 text-sm text-blue-400">
                    {location.subtitle}
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      {location.address}<br />
                      {location.city}
                    </p>
                    <p>
                      Phone: {location.phone}
                    </p>
                    <p>
                      Email: {location.email}
                    </p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ScaleOnHover>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScaleOnHover>
          </div>
        </div>
      </section>
    </main>
  );
}
