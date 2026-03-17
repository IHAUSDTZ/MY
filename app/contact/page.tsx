import { MapPin, Mail, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with IHAUS. Visit our office in Khoupum or send us a message to learn more about our programs and how you can support our work."
};

export default function Contact() {
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
              {/* Google Maps Embed (Khoupum Area) */}
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
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-40 ml-2">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-40 ml-2">Email Address</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-40 ml-2">Subject</label>
                <select className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50">
                  <option>General Inquiry</option>
                  <option>Volunteer Opportunity</option>
                  <option>Partnership Proposal</option>
                  <option>Donation Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-40 ml-2">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full bg-surface p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary/50"></textarea>
              </div>
              <button type="submit" className="w-full btn btn-primary py-6 text-xl">
                Send Message <Send className="inline ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
