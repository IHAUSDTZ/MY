"use client";
import { useState, useRef, FormEvent } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Note: In a production environment, you should use environment variables for keys.
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key.
const SERVICE_ID = "service_rinb7pi";
const TEMPLATE_ID = "template_vh4kfll";
const PUBLIC_KEY = "6NMbf23hFLlnvZBSH"; // Public key from EmailJS dashboard

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    if (PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      setStatus("error");
      setErrorMessage("Public Key is not configured. Please add your EmailJS Public Key.");
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
          // EmailJS errors often have a 'text' property
          const errorText = error?.text || error?.message || "Unknown error";
          console.error("EmailJS Full Error Object:", error);
          console.error("EmailJS Error Text:", errorText);
          
          setStatus("error");
          setErrorMessage(`Failed to send: ${errorText}. Please check your EmailJS dashboard configuration.`);
        }
      );
  };

  return (
    <div className="pt-32 flex flex-col">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Connect with Us</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto font-light">We welcome partnerships, volunteers, and inquiries from all who share our vision for the hills.</p>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-secondary tracking-tight">Visit Our Office</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm mr-6">
                  <MapPin className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Location</h3>
                  <p className="text-gray-600">Duithanjang Village, Khoupum,<br />Noney District, Manipur 795147</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm mr-6">
                  <Mail className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-gray-600">IHAUSDTZ@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm mr-6">
                  <Phone className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">+91-XXXXXXXXXX</p>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115858.73038676612!2d93.44755146059247!3d24.84386927951268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374eb3666f7f57cb%3A0xc3f5a287950c455c!2sKhoupum!5e0!3m2!1sen!2sin!4v1710682000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="IHAUS Office Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 h-fit">
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
            
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-3xl text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">Thank you for reaching out. We will get back to you soon.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-green-800 font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Full Name</label>
                  <input 
                    name="user_name"
                    type="text" 
                    required
                    placeholder="Your Name" 
                    className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Email Address</label>
                  <input 
                    name="user_email"
                    type="email" 
                    required
                    placeholder="email@example.com" 
                    className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Subject</label>
                  <select 
                    name="subject"
                    className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option>General Inquiry</option>
                    <option>Volunteer Opportunity</option>
                    <option>Partnership Proposal</option>
                    <option>Donation Question</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-40 ml-2">Message</label>
                  <textarea 
                    name="message"
                    rows={5} 
                    required
                    placeholder="How can we help you?" 
                    className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50"
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
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send className="inline ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
