'use client';

import Image from 'next/image';
import { FadeInView } from '@/components/animations/motion-container';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background/95 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="container relative z-20 mx-auto px-4 py-16 text-center">
          <FadeInView>
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-md">
              About Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Serving humanity with love and compassion since 1983
            </p>
          </FadeInView>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* History Section */}
        <section className="mb-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our History
            </h2>
            <div className="space-y-12">
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <h3 className="text-2xl font-semibold text-primary mb-6">History of Friends and Birds of the Air (FBA)</h3>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    In 1983, Fr. George Kuttickal M.C.B.S, during his visit to the Bird's Sanctuary at Bharatpur, was inspired by the meticulous care given to the migratory birds by bird lovers. They closely observed these birds and tenderly administered medical aid. At this moment of divine inspiration, Fr. George was reminded of millions of human beings who, despite being created in the divine image, were abandoned on our streets.
                  </p>
                  <p>
                    Many of these individuals die on the streets without anyone to mourn or give them a respectful funeral. There are hundreds of sick people on the pavements, yet hardly anyone turns an eye to them. They have neither homes, nor friends, nor relatives. They are totally forsaken by their societies, without ration cards or identity cards, and their names are not enrolled in the voters list of the country.
                  </p>
                  <p>
                    The mother house (first unit) at Chennaipara (Thrissur, Kerala), functioning as a training and retreat centre, was inaugurated by Blessed Mother Teresa on 19th July 1994. Thereafter, similar units of F.B.A have been formed in different states in India.
                  </p>
                </div>
              </div>
              
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <h3 className="text-2xl font-semibold text-primary mb-6">History of Thirumugha Ashram</h3>
                <p className="text-muted-foreground">
                  The Ashram started at Nagvare in Bengaluru in 1997 in a rented place with 15-20 inmates. As more wandering individuals were taken in, K.K Mathukutty Vaidyan, who visited the Nagavare ashram, provided land in Voderahalli village to establish Thirumugha Ashram. Starting with just 2 rooms, by 2008, the facility grew into a 2-floor building through God's grace. Today, these centers function through the loving providence of God, inspiring generous support from the local community, without any foreign aid or government financial assistance. Currently, there are 125 members from different parts of India who were rescued from the streets of Bangalore.
                </p>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our Mission
            </h2>
            <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
              <p className="text-muted-foreground mb-8">
                Our mission follows Jesus's work at Galilee, focusing on those who live in the shadow of death and in darkness. Our key missions include:
              </p>
              <ul className="grid gap-6 md:grid-cols-3">
                <li className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                  <h4 className="text-lg font-semibold text-primary mb-3">Intercession before the Blessed Sacrament</h4>
                  <p className="text-sm text-muted-foreground">
                    Our ashram is a perpetual adoration center where the Blessed Sacrament is exposed 24 hours. Volunteers take turns to pray with the inmates, participate in Holy Mass, and community prayers.
                  </p>
                </li>
                <li className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                  <h4 className="text-lg font-semibold text-primary mb-3">Divine Mercy Devotion</h4>
                  <p className="text-sm text-muted-foreground">
                    We spread the Divine Mercy devotion through mission retreats, workshops, and spiritual guidance.
                  </p>
                </li>
                <li className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                  <h4 className="text-lg font-semibold text-primary mb-3">Outreach Ministry</h4>
                  <p className="text-sm text-muted-foreground">
                    Our volunteers regularly visit nearby cities and towns, carrying food packets and befriending those in need at roadsides, markets, railway stations, and hospitals.
                  </p>
                </li>
              </ul>
            </div>
          </FadeInView>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our Vision
            </h2>
            <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10 space-y-6">
              <p className="text-muted-foreground">
                Our vision includes establishing the KRISTHU AVATHARA HOSPITAL, as envisioned by our founder director, Rev Fr George Kuttikkal. With our existing hospital license and compassionate service-minded doctors and nurses, we aim to provide better medical care to our inmates and the underprivileged in our community.
              </p>
              <p className="text-muted-foreground">
                We are planning to purchase the plot next to the ashram to establish hospital facilities where we can provide necessary treatment to both our inmates and nearby residents who cannot afford expensive medical care elsewhere.
              </p>
            </div>
          </FadeInView>
        </section>

        {/* Aims & Objectives Section */}
        <section className="mb-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Aims & Objectives
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <h3 className="text-2xl font-semibold text-primary mb-6">Our Aims</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "To serve and love wandering brothers and sisters",
                    "To enable the least and lost of our brethren to grow in virtues",
                    "Live together to give the experience of a true family",
                    "To help them grow as main pillars of our nation",
                    "To identify and rehabilitate persons with mental challenges",
                    "To provide residential facilities",
                    "To aid and support deserving persons with disabilities and the aged",
                  ].map((aim, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {aim}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <h3 className="text-2xl font-semibold text-primary mb-6">Our Objectives</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "To establish and support voluntary organizations for social upliftment",
                    "To focus on career development and job placement",
                    "To facilitate rehabilitation through vocational skill development",
                    "To assist with family and social adjustment",
                    "To improve quality of life through mental health care",
                    "To create public awareness about disabilities",
                    "To provide psychological counseling",
                    "To create opportunities for social and cultural activities",
                  ].map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <h3 className="text-2xl font-semibold text-primary mb-6">20 Years of Service</h3>
                <ul className="space-y-4">
                  {[
                    "Wandering persons admitted: 303",
                    "Persons fully rehabilitated: 120",
                    "Current inmates: 118",
                    "Branch at Kalathamanahalli: 18 inmates",
                  ].map((stat, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                <h3 className="text-2xl font-semibold text-primary mb-6">Our Activities</h3>
                <ul className="space-y-4">
                  {[
                    "Rehabilitation services",
                    "Healthcare services & medical camps",
                    "Picnics and entertainment",
                    "Festival celebrations",
                    "Agricultural activities",
                    "Vocational training",
                  ].map((activity, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* Our Facilities Section */}
        <section className="mb-20">
          <FadeInView>
            <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              Our Facilities
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Thirumugha Ashram",
                  type: "Psychiatric Home for Gents",
                  address: [
                    "No.28, Voderahalli Village, Vidyaranjapura",
                    "MS Palya, Bengaluru - 560097"
                  ]
                },
                {
                  name: "Thrithwa Ashrama",
                  type: "Psychiatric Home for Ladies",
                  address: [
                    "No.6, Bharath Nagar, Ashrama Road,",
                    "Tanisandra, Dr. SRK Nagar Post,",
                    "Bengaluru - 560077"
                  ]
                },
                {
                  name: "Thrithwa Elizabeth Mane",
                  type: "Rehabilitation Centre",
                  address: [
                    "No.170/1, kalathamanahalli, Byalakere Village",
                    "Shivakote P.O, Bengaluru - 560089"
                  ]
                }
              ].map((facility, index) => (
                <div key={index} className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 border border-primary/10">
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-blue-400 mb-4 text-sm">
                    {facility.type}
                  </p>
                  <div className="text-muted-foreground space-y-1">
                    {facility.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </section>
      </div>
    </main>
  );
}
