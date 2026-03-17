import Link from "next/link";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-20 px-6 border-t border-white/5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        <div>
          <div className="flex items-center mb-6">
            <Mountain className="mr-2 text-accent" />
            <span className="text-2xl font-bold tracking-tight">IHAUS</span>
          </div>
          <p className="opacity-70 text-sm leading-relaxed mb-6">
            Integrated Hill Areas Upliftment Society (IHAUS) is a registered NGO (Reg No: MN/NON/2014/102) dedicated to rural upliftment in Manipur.
          </p>
          <div className="text-xs opacity-50 space-y-2">
            <p>&copy; {new Date().getFullYear()} IHAUS. All Rights Reserved.</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-accent mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-accent shrink-0" />
              <span>Duithanjang Village, Khoupum, Noney District, Manipur 795147</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-accent shrink-0" />
              <span>IHAUSDTZ@gmail.com</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-accent shrink-0" />
              <span>+91-9876543210</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-accent mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="grid grid-cols-1 gap-4 text-sm opacity-80">
            <li><Link href="/about" className="hover:text-accent transition-colors">Our History</Link></li>
            <li><Link href="/programs" className="hover:text-accent transition-colors">Projects & Programs</Link></li>
            <li><Link href="/get-involved" className="hover:text-accent transition-colors">Volunteer Opportunities</Link></li>
            <li><Link href="/donate" className="hover:text-accent transition-colors">Support Our Work</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-accent mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all shadow-md">FB</a>
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all shadow-md">TW</a>
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all shadow-md">IG</a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-10 border-t border-white/5 text-center text-xs opacity-30">
        Empowering Communities, Sustaining Futures.
      </div>
    </footer>
  );
};

export default Footer;
