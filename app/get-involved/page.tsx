"use client";
import { useState, useRef, FormEvent } from "react";
import { Users, Handshake, GraduationCap, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

// Note: In a production environment, you should use environment variables for keys.
const SERVICE_ID = "service_rinb7pi";
const TEMPLATE_ID = "template_vh4kfll";
const PUBLIC_KEY = "6NMbf23hFLlnvZBSH"; // Public key from EmailJS dashboard

export default function GetInvolved() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    if (!PUBLIC_KEY || PUBLIC_KEY.includes("YOUR_")) {
      setStatus("error");
      setErrorMessage("Public Key is not configured correctly.");
      return;
    }

    setStatus("sending");

    // Initialize EmailJS with Public Key
    emailjs.init(PUBLIC_KEY);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          const errorText = error?.text || error?.message || "Unknown error";
          console.error("EmailJS Error:", error);
          
          setStatus("error");
          setErrorMessage(`Failed to send: ${errorText}. Please verify your EmailJS settings.`);
        }
      );
  };

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
            
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-3xl text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-800 mb-2">Application Received!</h4>
                <p className="text-green-700">Thank you for your interest in joining IHAUS. Our team will review your application and reach out soon.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-green-800 font-bold underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold opacity-40 ml-2">Full Name</label>
                    <input 
                      name="user_name"
                      type="text" 
                      required
                      className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold opacity-40 ml-2">Email</label>
                    <input 
                      name="user_email"
                      type="email" 
                      required
                      className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Interest Type</label>
                  <select 
                    name="interest_type"
                    className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>Volunteer</option>
                    <option>Internship</option>
                    <option>Research Partner</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Why do you want to join IHAUS?</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required
                    className="w-full p-5 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/50" 
                    placeholder="Tell us about your motivation..."
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="flex items-center text-red-600 bg-red-50 p-4 rounded-xl text-sm">
                    <AlertCircle size={18} className="mr-2" />
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "sending"}
                  className="w-full btn btn-primary py-6 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="inline ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
