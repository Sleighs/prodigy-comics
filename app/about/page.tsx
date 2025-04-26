import Image from 'next/image';
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <PageHeader 
        title="About"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Meet the creators of Prodigy"
      />


      {/* Who Are We Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-roboto-condensed">Who Are We</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Prodigy Comics is a groundbreaking action-adventure superhero series that explores a world where humans are evolving into something more. 
              Our story begins with the discovery of the GODSTRAND, a mysterious force that is changing humanity forever.
            </p>
            <p className="text-lg leading-relaxed">
              We are passionate about creating compelling stories that push the boundaries of the superhero genre, 
              combining rich character development with high-stakes action and thought-provoking themes.
            </p>
          </div>
          <div className="relative h-[300px] w-full">
            {/* <Image
              src="/images/prodigy-team.jpg"
              alt="Prodigy Team"
              fill
              className="object-cover rounded-lg"
            /> */}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-roboto-condensed text-center">The Creative Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Writer */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  {/* <Image
                    src="/images/writer.jpg"
                    alt="Writer"
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-roboto-condensed">Writer Name</h3>
                  <p className="text-gray-400">Writer & Creator</p>
                </div>
              </div>
              <p className="text-gray-300">
                [Writer bio goes here. Include their background, previous work, and their vision for Prodigy.]
              </p>
            </div>

            {/* Artist */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  {/* <Image
                    src="/images/artist.jpg"
                    alt="Artist"
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-roboto-condensed">Artist Name</h3>
                  <p className="text-gray-400">Artist & Designer</p>
                </div>
              </div>
              <p className="text-gray-300">
                [Artist bio goes here. Include their artistic style, previous work, and their approach to Prodigy's visual design.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-roboto-condensed">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
              <p className="text-gray-400">info@prodigycomics.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Press & Media</h3>
              <p className="text-gray-400">press@prodigycomics.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
              <p className="text-gray-400">partnerships@prodigycomics.com</p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 