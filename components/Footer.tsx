import Link from "next/link";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white py-32 px-6 relative overflow-hidden">
      {/* Decorative Blueprint Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 relative z-10">
        <div>
          <div className="flex flex-col mb-8">
            <span className="text-3xl font-black tracking-tighter uppercase leading-none mb-1">IHAUS</span>
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-accent">Manipur Upliftment</span>
          </div>
          <p className="text-white/50 text-xs font-medium leading-relaxed mb-8 max-w-xs">
            Integrated Hill Areas Upliftment Society (IHAUS) is a registered NGO (Reg No: MN/NON/2014/102) architecting sustainable rural development in Manipur.
          </p>
          <div className="text-[0.6rem] font-black uppercase tracking-widest text-white/30">
            &copy; {new Date().getFullYear()} IHAUS SOCIETY
          </div>
        </div>

        <div>
          <h4 className="font-black text-accent mb-8 uppercase tracking-[0.3em] text-[0.65rem]">Contact Infrastructure</h4>
          <ul className="space-y-6 text-xs font-bold uppercase tracking-widest text-white/70">
            <li className="flex items-start">
              <MapPin size={16} className="mr-4 text-accent shrink-0" />
              <span className="leading-relaxed">Duithanjang, Khoupum, <br/>Noney District, Manipur 795147</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-4 text-accent shrink-0" />
              <span>IHAUSDTZ@gmail.com</span>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-4 text-accent shrink-0" />
              <span>+91-9876543210</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-accent mb-8 uppercase tracking-[0.3em] text-[0.65rem]">Project Navigation</h4>
          <ul className="grid grid-cols-1 gap-5 text-xs font-bold uppercase tracking-widest text-white/70">
            <li><Link href="/#about" className="hover:text-white transition-colors flex items-center group"><div className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all"></div> Our History</Link></li>
            <li><Link href="/#programs" className="hover:text-white transition-colors flex items-center group"><div className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all"></div> Projects & Programs</Link></li>
            <li><Link href="/#get-involved" className="hover:text-white transition-colors flex items-center group"><div className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all"></div> Volunteer Opportunities</Link></li>
            <li><Link href="/donate" className="hover:text-white transition-colors flex items-center group"><div className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all"></div> Support Our Work</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-accent mb-8 uppercase tracking-[0.3em] text-[0.65rem]">Network Channels</h4>
          <div className="flex gap-4">
            {['FB', 'TW', 'IG', 'LI'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-[0.65rem] font-black hover:bg-primary-600 hover:border-primary-600 transition-all shadow-xl group"
              >
                <span className="group-hover:scale-110 transition-transform">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-white/20">
          Precision • Purpose • Progress
        </div>
        <div className="flex gap-8 text-[0.55rem] font-black uppercase tracking-widest text-white/40">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Protocol</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
