import { Milestone, Search, History, Target } from "lucide-react";

export const metadata = {
  title: "Impact & Goals",
  description: "Explore the roadmap and upcoming goals of IHAUS. We are committed to transparency and community-driven development in the hill areas of Manipur."
};

const goals = [
  { year: "Phase 1", event: "Establishment of core team and community consultation in Khoupum." },
  { year: "Phase 2", event: "Launch of organic farming pilot program with 50 households." },
  { year: "Phase 3", event: "Implementation of youth skill development workshops." },
  { year: "Phase 4", event: "Expanding reach to neighboring remote hamlets in Noney District." },
];

export default function Impact() {
  return (
    <div className="pt-32 flex flex-col">
      <section className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tight underline decoration-accent decoration-8 underline-offset-8">Our Roadmap</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">IHAUS is currently in its foundational phase. We are committed to building a transparent and impactful organization from the ground up.</p>
      </section>

      {/* Mission Focus Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <Target className="text-accent w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-secondary">Clear Vision</h3>
            <p className="text-gray-600 font-light">Identifying high-impact projects that directly benefit the most remote communities.</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <Search className="text-accent w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-secondary">Deep Research</h3>
            <p className="text-gray-600 font-light">Conducting on-ground surveys to understand the unique needs of each village.</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <Milestone className="text-accent w-12 h-12 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-secondary">Sustainable Growth</h3>
            <p className="text-gray-600 font-light">Building long-term partnerships with local leaders for lasting change.</p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-16 justify-center">
            <History className="text-primary mr-4 w-10 h-10" />
            <h2 className="text-4xl font-bold text-secondary">Projected Roadmap</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-primary/10 hidden md:block"></div>
            
            <div className="space-y-16">
              {goals.map((item, idx) => (
                <div key={idx} className={`relative flex items-center justify-between md:flex-row flex-col gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-5/12 w-full text-center md:text-left">
                    <div className="p-8 bg-surface rounded-[2.5rem] shadow-sm border border-gray-100">
                      <span className="text-2xl font-black text-primary block mb-2">{item.year}</span>
                      <p className="text-gray-700 font-light leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-accent border-4 border-white rounded-full shadow-lg z-10 hidden md:block"></div>
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Transparency */}
      <section className="py-24 bg-surface text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-secondary tracking-tight">Committed to Transparency</h2>
          <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
            As we begin our work, we will provide regular updates on our progress, resource allocation, and community feedback. Check back soon for our first impact reports.
          </p>
        </div>
      </section>
    </div>
  );
}
