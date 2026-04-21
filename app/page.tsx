"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  Mountain, 
  Target, 
  Eye, 
  History, 
  Wheat, 
  HeartPulse, 
  Sprout, 
  Users,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Milestone,
  Search,
  Handshake
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { contactFormSchema } from "@/lib/validations";
import type { ZodError } from "zod";
import { AnimatedSection, AnimatedHeading, AnimatedText } from "@/components/Animations";

// Note: EmailJS configuration
const SERVICE_ID = "service_rinb7pi";
const TEMPLATE_ID = "template_vh4kfll";
const PUBLIC_KEY = "6NMbf23hFLlnvZBSH"; 

const programs = [
  {
    id: "livelihood",
    title: "Rural Livelihood",
    icon: Wheat,
    aim: "To enhance the economic status of hill communities through diversified income sources.",
    outcomes: "Planned: Impacting 100+ households in the first phase.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    tag: "Economic"
  },
  {
    id: "agriculture",
    title: "Organic Farming",
    icon: Sprout,
    aim: "To promote organic farming and preserve the natural biodiversity of the hills.",
    outcomes: "Planned: Transitioning 50+ acres of land to chemical-free farming.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    tag: "Environment"
  },
  {
    id: "education",
    title: "Education Support",
    icon: BookOpen,
    aim: "To ensure quality education reach for children in remote hill hamlets.",
    outcomes: "Goal: Supporting 200+ students in remote hamlets.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    tag: "Social"
  },
  {
    id: "health",
    title: "Health & Sanitation",
    icon: HeartPulse,
    aim: "To improve access to basic healthcare and hygiene practices.",
    outcomes: "Target: Providing safe drinking water access to initial pilot villages.",
    color: "bg-red-50",
    iconColor: "text-red-600",
    tag: "Health"
  }
];

function BookOpen(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

const roadmap = [
  { phase: "Phase 1", event: "Establishment of core team and community consultation in Khoupum." },
  { phase: "Phase 2", event: "Launch of organic farming pilot program with 50 households." },
  { phase: "Phase 3", event: "Implementation of youth skill development workshops." },
  { phase: "Phase 4", event: "Expanding reach to neighboring remote hamlets." },
];

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    const validation = contactFormSchema.safeParse(data);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((issue: ZodError["issues"][number]) => {
        if (issue.path[0]) errors[issue.path[0] as string] = issue.message;
      });
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Please fix the errors below.");
      return;
    }

    setFieldErrors({});
    setStatus("sending");
    emailjs.init(PUBLIC_KEY);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        form.current?.reset();
      }, (error) => {
        setStatus("error");
        setErrorMessage(`Failed to send message. Please try again later.`);
      });
  };

  const inputClasses = "w-full bg-steel-50 p-5 rounded-2xl border border-steel-100 focus:ring-2 focus:ring-primary/50 transition-all font-medium text-secondary-900";
  const errorClasses = "border-red-500 focus:ring-red-500/50";

  return (
    <div className="flex flex-col bg-steel-50 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/homeImage.jpg" 
            alt="Rural hill village in Manipur" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-secondary-900/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent z-15"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.4em] bg-accent text-secondary-900 rounded-full shadow-2xl">
              Established 2014
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl uppercase">
              Integrated <br/> 
              <span className="text-accent">Hill Areas</span> <br/>
              Upliftment
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium opacity-90 max-w-2xl mx-auto tracking-tight">
              Empowering Manipur's Hill Communities through sustainable engineering of rural development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="#get-involved"
                className="btn btn-accent px-12 py-5 text-lg uppercase tracking-widest"
              >
                Start Your Impact
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 z-10 pointer-events-none opacity-10">
          <div className="h-full w-full border-x border-white/20 mx-auto max-w-7xl flex justify-between">
            <div className="h-full border-r border-white/20 w-px"></div>
            <div className="h-full border-r border-white/20 w-px"></div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <AnimatedSection initial={{ x: -50, opacity: 0 }}>
              <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6 block">Our Foundation</span>
              <h2 className="text-5xl md:text-7xl font-black text-secondary-900 mb-10 leading-[0.9] tracking-tighter uppercase">
                Story & <br/> <span className="text-primary-600">Commitment</span>
              </h2>
              <p className="text-xl text-secondary-900/70 leading-relaxed font-medium mb-12">
                IHAUS was established in 2014 to bridge the gap between rural potential and sustainable engineering in the hills of Manipur. We architect community-led change that respects our tribal heritage while embracing modern sustainable practices.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-steel-50 rounded-4xl border border-steel-100">
                  <Target className="text-primary-600 mb-4" size={32} />
                  <h4 className="font-black text-secondary-900 uppercase tracking-tight mb-2">Our Mission</h4>
                  <p className="text-xs text-secondary-900/80 font-bold leading-relaxed">Empowering marginalized communities through livelihood and education.</p>
                </div>
                <div className="p-8 bg-secondary-900 text-white rounded-4xl">
                  <Eye className="text-accent mb-4" size={32} />
                  <h4 className="font-black uppercase tracking-tight mb-2">Our Vision</h4>
                  <p className="text-xs text-white/90 font-bold leading-relaxed">Building a self-reliant, equitable, and vibrant rural society.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection initial={{ scale: 0.9, opacity: 0 }} className="relative">
              <div className="absolute -inset-10 bg-primary-600/5 rounded-[5rem] rotate-3 scale-110"></div>
              <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-5xl shadow-2xl border-8 border-white">
                <Image 
                  src="/images/founder.png" 
                  alt="Founder of IHAUS" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] mb-2 text-accent">Founder & Secretary</p>
                  <p className="text-2xl font-black uppercase tracking-tight">Khonthuingampou Panmei</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Programs Section */}
      <section id="programs" className="py-32 bg-steel-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[0.65rem] mb-4 block">Operational Protocol</span>
            <h2 className="text-5xl md:text-7xl font-black text-secondary-900 leading-[0.9] tracking-tighter uppercase">
              Core <span className="text-primary-600">Initiatives</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection 
                key={program.id} 
                className="group bg-white rounded-5xl shadow-xl overflow-hidden flex flex-col h-full border border-steel-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`md:w-1/3 p-12 ${program.color} flex flex-col items-center justify-center border-r border-steel-50 group-hover:bg-primary-600 transition-colors duration-500`}>
                    <program.icon className={`${program.iconColor} w-20 h-20 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 transform`} />
                  </div>
                  <div className="md:w-2/3 p-12 flex flex-col">
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary-600 mb-4">{program.tag} Protocol</span>
                    <h3 className="text-3xl font-black mb-6 text-secondary-900 leading-tight uppercase tracking-tighter group-hover:text-primary-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-secondary-900/70 leading-relaxed font-medium mb-8 flex-grow">
                      {program.aim}
                    </p>
                    <div className="p-6 bg-steel-50 rounded-3xl border border-steel-100">
                      <h4 className="font-black text-[0.6rem] uppercase tracking-[0.2em] text-primary-600 mb-2 italic">Goal</h4>
                      <p className="text-sm font-bold text-secondary-900">{program.outcomes}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact / Roadmap Section */}
      <section id="impact" className="py-32 bg-secondary-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6 block">Strategic Roadmap</span>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
                Projected <br/> <span className="text-accent">Milestones</span>
              </h2>
            </div>
            <p className="text-white/40 font-medium max-w-xs border-l-2 border-accent pl-6 italic">
              Architecting sustainable futures through precision planning and community feedback.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-white/10 hidden md:block"></div>
            <div className="space-y-20">
              {roadmap.map((item, index) => (
                <AnimatedSection 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-5/12 w-full">
                    <div className="p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-5xl hover:border-accent/50 transition-all group">
                      <span className="text-accent text-3xl font-black mb-4 block group-hover:scale-110 transition-transform origin-left">{item.phase}</span>
                      <p className="text-white/70 font-medium leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_rgba(249,168,38,0.5)] z-10 hidden md:block"></div>
                  <div className="md:w-5/12"></div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Get Involved Section */}
      <section id="get-involved" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[0.65rem] mb-4 block">Open Network</span>
            <h2 className="text-5xl md:text-7xl font-black text-secondary-900 leading-[0.9] tracking-tighter uppercase">
              Join the <span className="text-primary-600">Movement</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              { icon: Users, title: "Volunteer", desc: "Lend your skills to field projects. From teaching to construction, your time matters.", action: "Apply Now" },
              { icon: Handshake, title: "Partner", desc: "For corporates and government bodies looking to implement high-impact projects.", action: "Discuss" },
              { icon: GraduationCap, title: "Intern", desc: "Gain grassroots experience. Ideal for social work, agriculture, and public health.", action: "View Openings" }
            ].map((option, index) => (
              <AnimatedSection 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-steel-50 p-12 rounded-5xl border border-steel-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="p-5 bg-white rounded-2xl w-fit mb-10 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500">
                  <option.icon size={32} className="group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-secondary-900 uppercase tracking-tighter">{option.title}</h3>
                <p className="text-secondary-900/80 font-medium mb-10 leading-relaxed">{option.desc}</p>
                <Link href="#contact" className="text-xs font-black uppercase tracking-widest text-primary-600 inline-flex items-center group-hover:translate-x-2 transition-transform">
                  {option.action} <ArrowRight size={16} className="ml-2" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-32 bg-steel-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <AnimatedSection initial={{ x: -50 }}>
              <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[0.65rem] mb-6 block">Contact Infrastructure</span>
              <h2 className="text-5xl md:text-7xl font-black text-secondary-900 mb-12 leading-[0.9] tracking-tighter uppercase">
                Connect <br/> <span className="text-primary-600">With Us</span>
              </h2>
              
              <div className="space-y-12 mb-16">
                <div className="flex items-start">
                  <div className="p-4 bg-white rounded-2xl shadow-xl mr-8 text-primary-600 border border-steel-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary-900 uppercase tracking-tighter mb-1">Office Hub</h4>
                    <p className="text-secondary-900/80 font-medium">Duithanjang Village, Khoupum,<br/>Noney, Manipur 795147</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-4 bg-white rounded-2xl shadow-xl mr-8 text-primary-600 border border-steel-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary-900 uppercase tracking-tighter mb-1">Direct Protocol</h4>
                    <p className="text-secondary-900/80 font-medium">IHAUSDTZ@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="h-80 rounded-5xl overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115858.73038676612!2d93.44755146059247!3d24.84386927951268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374eb3666f7f57cb%3A0xc3f5a287950c455c!2sKhoupum!5e0!3m2!1sen!2sin!4v1710682000000!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                ></iframe>
              </div>
            </AnimatedSection>

            <AnimatedSection initial={{ x: 50 }} className="bg-white p-12 md:p-20 rounded-5xl shadow-2xl border border-steel-100">
              <h3 className="text-4xl font-black mb-10 text-secondary-900 uppercase tracking-tighter">Initiate <span className="text-primary-600">Message</span></h3>
              
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 p-10 rounded-4xl text-center">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h4 className="text-3xl font-black text-green-800 mb-4 uppercase tracking-tight">Transmission Sent</h4>
                  <p className="text-green-700 font-medium mb-8">Our team will process your inquiry and reach out within 48 operational hours.</p>
                  <button onClick={() => setStatus("idle")} className="btn btn-primary px-10">New Transmission</button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-900/60 ml-2">Identity</label>
                    <input 
                      name="user_name" type="text" placeholder="FULL NAME" 
                      className={`${inputClasses} placeholder:text-secondary-900/30 ${fieldErrors.user_name ? errorClasses : ""}`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-900/60 ml-2">Channel</label>
                    <input 
                      name="user_email" type="email" placeholder="EMAIL ADDRESS" 
                      className={`${inputClasses} placeholder:text-secondary-900/30 ${fieldErrors.user_email ? errorClasses : ""}`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-900/60 ml-2">Objective</label>
                    <select 
                      name="subject" 
                      className={`${inputClasses} ${fieldErrors.subject ? errorClasses : ""}`}
                    >
                      <option value="">SELECT SUBJECT</option>
                      <option>General Inquiry</option>
                      <option>Volunteer Opportunity</option>
                      <option>Partnership Proposal</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-900/60 ml-2">Information Packet</label>
                    <textarea 
                      name="message" rows={5} placeholder="MESSAGE CONTENT" 
                      className={`${inputClasses} placeholder:text-secondary-900/30 ${fieldErrors.message ? errorClasses : ""}`}
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center text-red-600 bg-red-50 p-5 rounded-2xl text-sm font-bold border border-red-100">
                      <AlertCircle size={18} className="mr-3" />
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" disabled={status === "sending"}
                    className="w-full btn btn-primary py-7 text-xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(45,90,39,0.2)]"
                  >
                    {status === "sending" ? "Processing..." : "Submit Message"}
                    <Send className="inline ml-4 w-6 h-6" />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
