import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Mission & Vision */}
      <section className="mb-16">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          About Akashaparavakal
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Our Aim
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Akashaparavakal aims to build up the Holy Church and Holy Trinity. The main motto is to serve and love our wandering brothers. FBA's (Friends and Birds of the Air) goal is to uplift individuals by helping them overcome challenges and experience a sense of belongingness within a loving community. In this ministry, we eagerly welcome people from our communities and societies to co-operate with us.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Akashaparavakal is deep-rooted in the Christian principles of Compassion, Love, and Social Justice. Our patron, Our Lady of Mount Carmel's vision helped us to create an organization where every mentally disabled individual and homeless person, irrespective of their background, finds a haven of love, support, and holistic care. We strive to create a society where the demeaned are not only accepted but embraced, and the power of faith fuels a journey toward healing, inclusion, and empowerment. This vision focuses on including and helping mentally disabled individuals and the homeless by including Christian values to offer them full support.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Our History
        </h2>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            Our Ashrams were started in Bengaluru in 1997, caring for the mentally disturbed orphans on the streets. The Thirumugha Ashramam was started on December 18, 2004, and the Elizabeth Mane was started on February 1, 2015. The foundation for both were laid by Fr. George Kuttickal.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          What We Do
        </h2>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            We bring vagabonds and the refugees from the streets and welcome them to our Ashrams. They are greeted with a flower garland and a bouquet by the Ashram's Coordinator. They clean the new son's (vagabond from the street) feet as a gesture of humbleness and follow the path of compassion that Jesus showed us. The son will be cleansed, wounds attended to, groomed, and given a new pair of clothes. The ashram's routine is to greet every lost child who's homeless. The ashram coordinators stay, have food, and pray with them. Psychiatric treatment is also provided those who require it and they are specially taken care of for their daily needs.
          </p>
        </div>
      </section>

      {/* Our Ashram Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Our Ashram
        </h2>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            Our Ashrams are not mere institutions but joint families filled with love and care. Our Community has father and mother figures, and they are addressed as 'appa' and 'amma' respectively. Thus every member is given a chance to experience their fatherhood and motherhood to its fullest. The people who serve and are served together bring up God's choicest family.
          </p>
        </div>
      </section>

      {/* Founding Inspiration Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Founding Inspiration
        </h2>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            In 1983, Fr. George Kuttickal M.C.B.S, during his visit to the Bird's Sanctuary at Bharatpur, was inspired by the meticulous care given to the migratory birds by bird lovers. They closely observed these birds and took care of their medical aids. At this moment of divine inspiration, Fr. George Kuttickal was reminded about the millions of human beings who despite being created as a mirror image of our Divine Father, have been abandoned. He received a divine revelation to address these forsaken human beings as 'Birds Of The Air' (Akashaparavakal).
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full bg-white py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Photos
          </h2> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                src: '/image4.jpg',
                alt: 'Main Building',
              },
              {
                src: '/image5.jpg',
                alt: 'Garden Area',
              },
              {
                src: '/image6.jpg',
                alt: 'Common Area',
              },
              // {
              //   src: '/images/facility/dining.jpg', // Replace with actual image path
              //   alt: 'Dining Hall',
              // },
              // {
              //   src: '/images/facility/activity-room.jpg', // Replace with actual image path
              //   alt: 'Activity Room',
              // },
              // {
              //   src: '/images/facility/medical-center.jpg', // Replace with actual image path
              //   alt: 'Medical Center',
              // },
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="bg-white p-4 dark:bg-gray-800">
                  <p className="text-center text-lg font-semibold text-gray-900 dark:text-white">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Our Facilities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              Thirumugha Ashram
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Psychiatric Home for Gents<br />
              No.28, Voderahalli Village, Vidyaranjapura<br />
              MS Palya, Bengaluru - 560097
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              Thrithwa Ashrama
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Psychiatric Home for Ladies<br />
              No.6, Bharath Nagar, Ashrama Road,<br />
              Tanisandra, Dr. SRK Nagar Post,<br />
              Bengaluru - 560077
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
              Thrithwa Elizabeth Mane
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rehabilitation Centre<br />
              No.170/1, kalathamanahalli, Byalakere Village<br />
              Shivakote P.O, Bengaluru - 560089
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}