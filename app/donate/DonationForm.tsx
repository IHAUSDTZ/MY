"use client";

import { useState } from "react";
import { ShieldCheck, ArrowRight, CreditCard } from "lucide-react";
import { donationFormSchema } from "@/lib/validations";

const PRESET_AMOUNTS = [500, 1000, 5000];

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);
    
    const validation = donationFormSchema.safeParse({
      amount,
      fullName,
      email,
    });

    if (!validation.success) {
      const newErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          newErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Payment gateway integration coming soon! For now, please use UPI or bank transfer.");
    }, 1500);
  };

  const getAmount = () => selectedAmount || (customAmount ? parseFloat(customAmount) : 0);

  return (
    <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 h-fit">
      <div className="flex items-center mb-10 text-primary">
        <CreditCard className="w-8 h-8 mr-3" />
        <h3 className="text-3xl font-bold">Online Secure Donation</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <p className="text-sm font-bold opacity-50 mb-4 ml-2">Select Amount</p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount("");
                  if (errors.amount) setErrors({ ...errors, amount: "" });
                }}
                className={`py-4 rounded-2xl font-bold transition-all ${
                  selectedAmount === amt
                    ? "bg-primary text-white"
                    : "border-2 border-primary/20 text-primary hover:bg-primary hover:text-white"
                }`}
              >
                ₹{amt}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
                if (errors.amount) setErrors({ ...errors, amount: "" });
              }}
              placeholder="Other Amount"
              className="w-full bg-surface p-5 pl-10 rounded-2xl border-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          {errors.amount && (
            <p className="text-red-600 text-sm mt-2 ml-2">{errors.amount}</p>
          )}
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors({ ...errors, fullName: "" });
              }}
              placeholder="Full Name"
              className={`w-full p-5 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/50 ${
                errors.fullName ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm ml-2">{errors.fullName}</p>
            )}
          </div>
          <div className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              placeholder="Email Address"
              className={`w-full p-5 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/50 ${
                errors.email ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm ml-2">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="text-sm opacity-50 flex items-center bg-surface/50 p-4 rounded-xl">
          <ShieldCheck size={16} className="mr-2" />
          <p>Secure payment processing. Tax exemption certificate will be issued under 80G.</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !getAmount()}
          className="w-full btn btn-primary py-6 text-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              Donate Now <ArrowRight className="inline ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
