import Link from "next/link";
import Image from "next/image";
import { Briefcase, GraduationCap, Building2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* rural hill background using next/image for automatic path handling */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/homeImage.jpg" 
            alt="Rural hill village in Manipur" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 z-10"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            Integrated Hill Areas Upliftment Society (IHAUS)
          </h1>
          <p className="text-xl md:text-3xl mb-10 font-light opacity-95 italic max-w-2xl mx-auto">
            “Empowering Hill Communities for Sustainable Rural Development”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/get-involved" className="btn btn-accent px-12 py-5 rounded-2xl text-xl shadow-2xl">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Feature Cards */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Focus</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">Uplifting Manipur's Hill Communities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <Briefcase className="text-primary group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Livelihoods</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Equipping local farmers and youth with organic agricultural practices and market linkages.
              </p>
              <Link href="/programs" className="text-primary font-bold flex items-center hover:underline">
                Learn more <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <GraduationCap className="text-primary group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Training & Education</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Intensive capacity building for youth and women to foster socio-economic independence.
              </p>
              <Link href="/programs" className="text-primary font-bold flex items-center hover:underline">
                Learn more <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <Building2 className="text-primary group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Improving rural roads, water access, and sanitation facilities in remote hamlets.
              </p>
              <Link href="/programs" className="text-primary font-bold flex items-center hover:underline">
                Learn more <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission Focus / Upcoming Impact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">Our Mission in Noney District</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              IHAUS is dedicated to bringing sustainable development to the remote hill areas of Manipur. We are currently laying the groundwork for community-driven initiatives in organic farming, youth education, and essential infrastructure.
            </p>
            <div className="grid grid-cols-1 gap-8 mb-10">
              <div className="bg-surface p-8 rounded-3xl border border-primary/10">
                <p className="text-2xl font-bold text-primary mb-2">Join Our Journey</p>
                <p className="text-gray-600">Be part of our inaugural projects as we work to empower the first of many villages in the Khoupum area.</p>
              </div>
            </div>
            <Link href="/get-involved" className="btn btn-primary px-10">
              Get Involved Today
            </Link>
          </div>
          <div className="bg-secondary p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <MountainLogo className="absolute -bottom-20 -right-20 opacity-10 w-80 h-80" />
            <h3 className="text-3xl font-bold mb-6">Upcoming Initiatives</h3>
            <div className="space-y-6">
              <div className="pb-6 border-b border-white/10">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Coming Soon</p>
                <h4 className="text-xl font-bold mb-2">Organic Farming Pilot Program</h4>
                <p className="opacity-70 text-sm">Empowering local farmers with sustainable, chemical-free agricultural techniques.</p>
              </div>
              <div className="pb-6">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Planning Phase</p>
                <h4 className="text-xl font-bold mb-2">Youth Skill Development Center</h4>
                <p className="opacity-70 text-sm">A dedicated space for vocational training and digital literacy for hill youth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MountainLogo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
