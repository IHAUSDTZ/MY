import { ShieldCheck, Landmark, Phone, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Support Our Work",
  description: "Your contributions help us build sustainable futures in the hills of Manipur. Support IHAUS through online and offline donations."
};

export default function Donate() {
  return (
    <div className="pt-32 flex flex-col">
      {/* Header */}
      <section className="bg-secondary text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tight underline decoration-accent decoration-8 underline-offset-8">Invest in a Future</h1>
          <p className="text-xl opacity-80 font-light">Every contribution, no matter the size, directly fuels our projects in the hills of Manipur.</p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Offline / Direct Options */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-secondary">Direct Support</h2>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Landmark className="text-primary w-10 h-10 mr-4" />
                <h3 className="text-2xl font-bold">Bank Transfer (Offline)</h3>
              </div>
              <div className="space-y-4 text-gray-700 bg-surface/50 p-6 rounded-2xl border border-gray-200">
                <div>
                  <p className="text-xs font-bold uppercase opacity-50">Account Name</p>
                  <p className="text-lg font-semibold">Integrated Hill Areas Upliftment Society</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-50">Account Number</p>
                  <p className="text-lg font-mono">123456789012</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-50">IFSC Code</p>
                  <p className="text-lg font-mono">SBIN0001234</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-50">Bank Name</p>
                  <p className="text-lg">State Bank of India, Khoupum Branch</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-primary/10 p-4 rounded-2xl mr-6">
                  <Phone className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">UPI / GPay</h3>
                  <p className="text-gray-600">ihaus@upi</p>
                </div>
              </div>
              <div className="w-24 h-24 bg-surface rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400">
                QR Placeholder
              </div>
            </div>
          </div>

          {/* Online Form (Placeholder / Payment Gateway) */}
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 h-fit">
            <div className="flex items-center mb-10 text-primary">
              <ShieldCheck className="w-8 h-8 mr-3" />
              <h3 className="text-3xl font-bold">Online Secure Donation</h3>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {['₹500', '₹1000', '₹5000'].map((amt) => (
                  <button key={amt} type="button" className="py-4 border-2 border-primary/20 rounded-2xl font-bold text-primary hover:bg-primary hover:text-white transition-all">
                    {amt}
                  </button>
                ))}
              </div>
              
              <div className="space-y-4">
                <input type="number" placeholder="Other Amount (INR)" className="w-full p-5 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/50" />
                <input type="text" placeholder="Full Name" className="w-full p-5 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/50" />
                <input type="email" placeholder="Email Address" className="w-full p-5 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/50" />
              </div>

              <div className="text-sm opacity-50 flex items-center bg-surface/50 p-4 rounded-xl">
                <ShieldCheck size={16} className="mr-2" />
                <p>Secure payment processing via Stripe/Razorpay (Stub)</p>
              </div>

              <button type="submit" className="w-full btn btn-primary py-6 text-xl">
                Donate Now <ArrowRight className="inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Tax Disclaimer */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto opacity-70">
          <p className="text-lg font-light leading-relaxed">
            Note: Your donations are utilized for project implementation in the Khoupum area. Tax exemption certificates will be issued under 80G as per society registration status.
          </p>
        </div>
      </section>
    </div>
  );
}
