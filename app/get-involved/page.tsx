import { Users, Handshake, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Get Involved",
  description: "Join IHAUS in our mission to uplift hill communities. Volunteer, partner with us, or apply for an internship in Manipur."
};

export default function GetInvolved() {
  return (
    <div className="pt-32 flex flex-col">
      <section className="bg-secondary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Movement</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
          Whether you're an individual, a student, or a corporate entity, there are many ways to contribute to the upliftment of hill communities.
        </p>
      </section>

      {/* Options Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Volunteer */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Users className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Lend your skills to our field projects. From teaching to road construction support, your time makes a difference.
            </p>
            <Link href="#form" className="btn btn-primary w-full text-center">Apply as Volunteer</Link>
          </div>

          {/* Partner */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Handshake className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              For corporates and government bodies looking to implement high-impact rural development projects in Manipur.
            </p>
            <Link href="/contact" className="btn btn-primary w-full text-center">Discuss Partnership</Link>
          </div>

          {/* Internship */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <GraduationCap className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Internships</h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Gain firsthand experience in grassroots development. Ideal for social work, agriculture, and public health students.
            </p>
            <Link href="#form" className="btn btn-primary w-full text-center">View Openings</Link>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="form" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-surface p-12 md:p-20 rounded-[4rem] shadow-2xl border border-gray-100">
            <h2 className="text-4xl font-bold mb-10 text-secondary tracking-tight">Express Your Interest</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Full Name</label>
                  <input type="text" className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Email</label>
                  <input type="email" className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-40 ml-2">Interest Type</label>
                <select className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50">
                  <option>Volunteer</option>
                  <option>Internship</option>
                  <option>Research Partner</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-40 ml-2">Why do you want to join IHAUS?</label>
                <textarea rows={4} className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50" placeholder="Tell us about your motivation..."></textarea>
              </div>
              <button type="submit" className="w-full btn btn-primary py-6 text-xl">
                Submit Application <ArrowRight className="inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
