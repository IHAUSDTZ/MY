import { Target, Eye, History } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { AnimatedHeading } from "./AnimatedHeading";
import { AnimatedText } from "./AnimatedText";

export const metadata = {
  title: "About Our Society",
  description: "Learn about the Integrated Hill Areas Upliftment Society (IHAUS), our history, mission, and the team behind our rural development efforts in Manipur."
};

export default function About() {
  return (
    <div className="pt-32 flex flex-col bg-steel-50">
      {/* Header */}
      <section className="bg-secondary-900 text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-8 text-[0.6rem] font-black uppercase tracking-[0.5em] bg-accent text-secondary-900 rounded-full shadow-2xl">
            Our Foundation
          </span>
          <AnimatedHeading className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Story & <br/> <span className="text-accent">Commitment</span>
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="text-xl md:text-2xl opacity-70 font-medium max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between rural potential and sustainable engineering in the hills of Manipur since 2014.
          </AnimatedText>
        </div>
      </section>

      {/* Mission & Vision (Blueprint Grid Layout) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <AnimatedSection 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group bg-steel-50 p-16 rounded-5xl border border-steel-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="p-5 bg-white rounded-2xl w-fit mb-10 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500">
              <Target size={32} className="group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h2 className="text-4xl font-black mb-6 text-secondary-900 uppercase tracking-tighter">Our Mission</h2>
            <p className="text-xl text-secondary-900/70 leading-relaxed font-medium">
              To empower marginalized hill communities through sustainable livelihood initiatives and intensive capacity building, fostering independence and socio-economic resilience.
            </p>
          </AnimatedSection>
          <AnimatedSection 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group bg-secondary-900 p-16 rounded-5xl border border-white/5 hover:shadow-2xl transition-all duration-500 text-white"
          >
            <div className="p-5 bg-white/10 rounded-2xl w-fit mb-10 group-hover:bg-accent group-hover:text-secondary-900 transition-colors duration-500">
              <Eye size={32} className="group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-accent">Our Vision</h2>
            <p className="text-xl text-white/70 leading-relaxed font-medium">
              To build a self-reliant, equitable, and vibrant rural society in the hill areas where every individual has the opportunity to thrive in a sustainable environment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder's Vision (Industrial Elevation) */}
      <section className="py-32 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-10 bg-primary-600/5 rounded-[5rem] rotate-3 scale-110"></div>
              <div className="relative z-10 w-full max-w-lg mx-auto aspect-[4/5] min-h-[500px] overflow-hidden rounded-5xl shadow-2xl border-8 border-white">
                <Image 
                  src="/images/founder.png" 
                  alt="Founder of IHAUS" 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.4em] mb-2 text-accent">Founder & Secretary</p>
                  <p className="text-2xl font-black uppercase tracking-tight">Khonthuingampou Panmei</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6 block">Leadership Architecture</span>
              <h2 className="text-5xl md:text-6xl font-black text-secondary-900 mb-12 leading-[0.95] tracking-tighter uppercase italic">
                "True progress is measured by the <span className="text-primary-600">upliftment</span> of the last person."
              </h2>
              <div className="space-y-8 text-secondary-900/60 font-medium leading-relaxed text-lg border-l-4 border-primary-600 pl-10">
                <p>
                  Integrated Hill Areas Upliftment Society was born out of a simple realization: that the potential of our hill communities is immense, but the infrastructure for growth was missing.
                </p>
                <p>
                  Our goal is not just charity, but community-led change that respects our tribal heritage while embracing modern sustainable practices.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* History (Blueprint Grid Lines) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="h-full w-full border-x border-secondary-900/20 mx-auto max-w-7xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center mb-12">
            <div className="p-4 bg-steel-50 rounded-2xl mr-6">
              <History className="text-primary-600" size={32} />
            </div>
            <h2 className="text-5xl font-black text-secondary-900 uppercase tracking-tighter">Our Genesis</h2>
          </div>
          <AnimatedSection>
            <div className="prose prose-2xl text-secondary-900/70 max-w-none space-y-10 font-medium leading-relaxed">
              <p>
                IHAUS was established in 2014 by a group of dedicated social workers and community leaders who recognized the pressing need for sustainable development in the Noney District of Manipur.
              </p>
              <p>
                Our journey is rooted in a clear vision: to bridge the gap between rural potential and sustainable progress by focusing on education, livelihoods, and basic infrastructure engineering.
              </p>
              <div className="bg-steel-50 p-12 rounded-4xl border border-dashed border-steel-200">
                <p className="text-secondary-900 italic">
                  "We are architecting community-led change that will have the most significant impact on the people of the hills."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
