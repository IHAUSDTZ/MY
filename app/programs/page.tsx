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
    <div className="pt-32 flex flex-col">
      <section className="bg-secondary text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowerment Through Action</h1>
          <p className="text-xl opacity-80 font-light">Our integrated programs are designed to address the unique socio-economic challenges of hill communities. We are currently in the planning and resource-gathering phase for these core initiatives.</p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col h-full border border-gray-100">
                <div className={`p-10 ${program.color} flex items-center justify-between`}>
                  <program.icon className={`${program.iconColor} w-12 h-12`} />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-40">Program Details</span>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="text-3xl font-bold mb-4 text-secondary">{program.title}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-sm uppercase text-primary mb-2">Our Aim</h4>
                      <p className="text-gray-600 leading-relaxed">{program.aim}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-primary mb-2">Key Activities</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {program.activities.map((act, idx) => (
                          <li key={idx} className="text-sm">{act}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-surface rounded-2xl border border-dashed border-gray-200">
                      <h4 className="font-bold text-xs uppercase opacity-50 mb-1">Upcoming Goal</h4>
                      <p className="text-sm font-medium text-secondary italic">{program.outcomes}</p>
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-0 flex justify-between items-center mt-auto">
                  <Link href="/contact" className="text-primary font-bold inline-flex items-center hover:underline">
                    Inquire for Details <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <Users className="w-16 h-16 mx-auto mb-8 text-accent opacity-50" />
          <h2 className="text-4xl font-bold mb-6">Partner with Our Mission</h2>
          <p className="text-xl opacity-80 mb-10 font-light leading-relaxed">We are looking for partners to help us launch our initial programs. Let's work together for the hills.</p>
          <Link href="/contact" className="btn btn-accent px-10 py-4 text-lg">
            Discuss Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
