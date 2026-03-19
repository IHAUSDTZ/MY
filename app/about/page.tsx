import { Target, Eye, History } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Our Society",
  description: "Learn about the Integrated Hill Areas Upliftment Society (IHAUS), our history, mission, and the team behind our rural development efforts in Manipur."
};

export default function About() {
  return (
    <div className="pt-32 flex flex-col">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story & Commitment</h1>
          <p className="text-xl opacity-80 font-light">
            Working since 2014 to bridge the gap between rural potential and sustainable development in the hills of Manipur.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-surface p-12 rounded-[3rem] shadow-sm">
            <Target className="text-primary w-12 h-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-secondary">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              To empower marginalized hill communities through sustainable livelihood initiatives and intensive capacity building, fostering independence and socio-economic resilience.
            </p>
          </div>
          <div className="bg-surface p-12 rounded-[3rem] shadow-sm">
            <Eye className="text-primary w-12 h-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              To build a self-reliant, equitable, and vibrant rural society in the hill areas where every individual has the opportunity to thrive in a sustainable environment.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] rotate-3"></div>
                <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] min-h-[400px] overflow-hidden rounded-[3rem] shadow-2xl">
                  <Image 
                    src="/images/founder.png" 
                    alt="Founder of IHAUS" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Founder's Vision</span>
              <h2 className="text-4xl font-bold text-secondary mb-8 leading-tight italic">
                “True progress is only measured by the upliftment of the last person in the most remote hamlet.”
              </h2>
              <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  Integrated Hill Areas Upliftment Society was born out of a simple realization: that the potential of our hill communities is immense, but the infrastructure for growth was missing.
                </p>
                <p>
                  Our goal is not just charity, but community-led change that respects our tribal heritage while embracing modern sustainable practices.
                </p>
                <div>
                  <p className="font-bold text-secondary text-2xl">Khonthuingampou Panmei</p>
                  <p className="text-primary font-medium">Founder & Secretary, IHAUS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center mb-10">
            <History className="text-primary mr-4" />
            <h2 className="text-4xl font-bold text-secondary">Our Beginning</h2>
          </div>
          <div className="prose prose-lg text-gray-700 max-w-none space-y-8 font-light leading-relaxed">
            <p>
              IHAUS was recently established by a group of dedicated social workers and community leaders who recognized the pressing need for sustainable development in the Noney District of Manipur.
            </p>
            <p>
              Our journey is just starting, but our vision is clear: to bridge the gap between rural potential and sustainable progress by focusing on education, livelihoods, and basic infrastructure.
            </p>
            <p>
              We are currently in the process of building partnerships and identifying key areas where community-led change will have the most significant impact. Every step we take is guided by our commitment to the people of the hills.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Disclaimer */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center opacity-50 text-sm">
          <p>Integrated Hill Areas Upliftment Society is a registered non-profit organization under the Societies Registration Act. All contributions are utilized directly for community development projects.</p>
        </div>
      </section>
    </div>
  );
}
