import { Wheat, BookOpen, HeartPulse, Sprout, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Programs",
  description: "Explore the core programs of IHAUS focusing on livelihood, education, health, and environmental conservation in the hill areas of Manipur."
};

const programs = [
  {
    id: "livelihood",
    title: "Rural Livelihood & Skill Development",
    icon: Wheat,
    aim: "To enhance the economic status of hill communities through diversified income sources.",
    activities: [
      "Vocational training for youth in weaving and handicrafts.",
      "Providing startup kits for micro-entrepreneurs.",
      "Market linkage facilitation for rural products."
    ],
    outcomes: "Planned: Impacting 100+ households in the first phase.",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    id: "agriculture",
    title: "Sustainable Agriculture & NRM",
    icon: Sprout,
    aim: "To promote organic farming and preserve the natural biodiversity of the hills.",
    activities: [
      "Training on System of Rice Intensification (SRI).",
      "Setting up community seed banks.",
      "Soil health management workshops."
    ],
    outcomes: "Planned: Transitioning 50+ acres of land to chemical-free farming.",
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    id: "education",
    title: "Education Support Programs",
    icon: BookOpen,
    aim: "To ensure quality education reach for children in remote hill hamlets.",
    activities: [
      "Establishing community learning centers.",
      "Providing school supplies and scholarships.",
      "Digital literacy camps for rural students."
    ],
    outcomes: "Goal: Supporting 200+ students in remote hamlets.",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    id: "health",
    title: "Community Health & Sanitation",
    icon: HeartPulse,
    aim: "To improve access to basic healthcare and hygiene practices.",
    activities: [
      "Mobile health clinics in remote areas.",
      "Sanitation awareness and toilet construction.",
      "Maternal and child health counseling."
    ],
    outcomes: "Target: Providing safe drinking water access to initial pilot villages.",
    color: "bg-red-50",
    iconColor: "text-red-600"
  }
];

export default function Programs() {
  return (
    <div className="pt-32 flex flex-col bg-steel-50">
      <section className="bg-secondary-900 text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-8 text-[0.6rem] font-black uppercase tracking-[0.5em] bg-accent text-secondary-900 rounded-full shadow-2xl">
            Strategic Initiatives
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
            Empowerment <br/> <span className="text-accent">Through Action</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-70 font-medium max-w-3xl mx-auto leading-relaxed">
            Our integrated programs are designed to engineer sustainable solutions for the unique socio-economic challenges of Manipur's hill communities.
          </p>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <div key={program.id} className="group bg-white rounded-5xl shadow-xl overflow-hidden flex flex-col h-full border border-steel-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`md:w-1/3 p-12 ${program.color} flex flex-col items-center justify-center border-r border-steel-50 group-hover:bg-primary-600 transition-colors duration-500`}>
                    <program.icon className={`${program.iconColor} w-20 h-20 group-hover:text-white transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-12 transform transition-transform`} />
                  </div>
                  <div className="md:w-2/3 p-12 flex flex-col">
                    <div className="mb-8 flex justify-between items-start">
                      <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary-600">Phase I Deployment</span>
                    </div>
                    <h3 className="text-3xl font-black mb-6 text-secondary-900 leading-tight uppercase tracking-tighter group-hover:text-primary-600 transition-colors">
                      {program.title}
                    </h3>
                    <div className="space-y-8 flex-grow">
                      <div>
                        <h4 className="font-black text-[0.65rem] uppercase tracking-widest text-secondary-900/40 mb-3">Operational Aim</h4>
                        <p className="text-secondary-900/70 leading-relaxed font-medium">{program.aim}</p>
                      </div>
                      <div className="p-6 bg-steel-50 rounded-3xl border border-steel-100 group-hover:border-primary-600/20 transition-colors">
                        <h4 className="font-black text-[0.6rem] uppercase tracking-[0.2em] text-primary-600 mb-2 italic">Target Outcome</h4>
                        <p className="text-sm font-bold text-secondary-900">{program.outcomes}</p>
                      </div>
                    </div>
                    <div className="mt-10 pt-8 border-t border-steel-50">
                      <Link href="/contact" className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-secondary-900 group-hover:text-primary-600 inline-flex items-center transition-all">
                        Request Protocol Details <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-32 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <div className="h-full w-full border-x border-white/20 mx-auto max-w-7xl flex justify-between">
            <div className="h-full border-r border-white/20 w-px"></div>
            <div className="h-full border-r border-white/20 w-px"></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Users className="w-20 h-20 mx-auto mb-10 text-accent opacity-30" />
          <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">Partner with <br/>Our Mission</h2>
          <p className="text-xl md:text-2xl opacity-80 mb-14 font-medium leading-relaxed max-w-2xl mx-auto">
            We are looking for strategic partners to launch our initial rural development protocols.
          </p>
          <Link href="/contact" className="btn btn-accent px-16 py-6 text-lg uppercase tracking-widest">
            Initiate Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
