import { ArrowLeft, CheckCircle2, Download, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const programsData: Record<string, any> = {
  livelihood: {
    title: "Rural Livelihood & Skill Development",
    aim: "To enhance the economic status of hill communities through diversified income sources.",
    activities: [
      "Vocational training for youth in weaving and handicrafts.",
      "Providing startup kits for micro-entrepreneurs.",
      "Market linkage facilitation for rural products.",
      "Financial literacy and micro-savings workshops."
    ],
    outcomes: [
      "Over 400 households have seen a 30% increase in annual income.",
      "15 local SHGs formed and self-sustaining.",
      "Established a community-led handicraft cooperative."
    ],
    images: [
      "/images/work1image.jpg",
      "/images/work2image.jpg"
    ]
  },
  agriculture: {
    title: "Sustainable Agriculture & NRM",
    aim: "To promote organic farming and preserve the natural biodiversity of the hills.",
    activities: [
      "Training on System of Rice Intensification (SRI).",
      "Setting up community seed banks.",
      "Soil health management workshops.",
      "Organic manure production units."
    ],
    outcomes: [
      "Transitioned 200+ acres of land to chemical-free organic farming.",
      "Increased crop yields by 20% through SRI techniques.",
      "5,000+ saplings planted for watershed management."
    ],
    images: [
      "/images/homeImage.jpg",
      "/images/work1image.jpg"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(programsData).map((id) => ({
    id: id,
  }));
}

export default function ProgramDetail({ params }: { params: { id: string } }) {
  const program = programsData[params.id];

  if (!program) {
    notFound();
  }

  return (
    <div className="pt-32 flex flex-col">
      <section className="bg-surface py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <Link href="/programs" className="text-primary font-bold flex items-center mb-8 hover:opacity-70 transition-opacity">
            <ArrowLeft size={16} className="mr-2" /> Back to Programs
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">{program.title}</h1>
          <div className="bg-primary/5 p-8 rounded-[2rem] inline-block max-w-2xl">
            <p className="text-lg text-primary font-medium italic">" {program.aim} "</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6 tracking-tight">Key Activities</h2>
              <ul className="space-y-4">
                {program.activities.map((act: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 size={20} className="mr-4 text-primary mt-1 shrink-0" />
                    <span className="text-gray-700 leading-relaxed font-light">{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6 tracking-tight">Expected Outcomes</h2>
              <ul className="space-y-4">
                {program.outcomes.map((out: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 mr-4 shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed font-light">{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-surface rounded-[3rem] border border-dashed border-primary/20 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-secondary text-xl mb-1">Detailed Brochure</h3>
                <p className="text-sm opacity-50">Download the full program document (PDF)</p>
              </div>
              <button className="bg-primary text-white p-4 rounded-2xl hover:bg-primary-dark transition-all">
                <Download size={24} />
              </button>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-secondary mb-6 tracking-tight flex items-center">
              <ImageIcon className="mr-3 text-primary" /> Program Gallery
            </h2>
            <div className="grid gap-8">
              {program.images.map((img: string, idx: number) => (
                <div key={idx} className="relative h-80 rounded-[4rem] overflow-hidden shadow-xl">
                  <Image 
                    src={img} 
                    alt={`${program.title} gallery ${idx}`} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Support this Program</h2>
          <p className="opacity-70 mb-10 font-light">Your donation can help us expand this initiative to more villages in the Noney district.</p>
          <Link href="/donate" className="btn btn-accent px-12 py-5 text-xl">
            Donate to {program.title.split(' ')[0]}
          </Link>
        </div>
      </section>
    </div>
  );
}
