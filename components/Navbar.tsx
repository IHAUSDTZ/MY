"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Mountain } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const isScrolled = mounted && scrolled;
  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Programs", href: "/#programs" },
    { name: "Impact", href: "/#impact" },
    { name: "Get Involved", href: "/#get-involved" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled || !isHomePage 
          ? "glass py-3 shadow-xl" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 w-12 mr-3 transition-transform duration-500 group-hover:rotate-12">
            <Image 
              src="/images/logo.png" 
              alt="IHAUS Logo" 
              fill 
              className="object-cover rounded-2xl border-2 border-primary/20 shadow-lg" 
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-black tracking-tighter leading-none transition-colors duration-300",
              isScrolled || !isHomePage ? "text-secondary-900" : "text-white"
            )}>IHAUS</span>
            <span className={cn(
              "text-[0.6rem] font-black uppercase tracking-[0.3em] opacity-70",
              isScrolled || !isHomePage ? "text-primary-600" : "text-accent"
            )}>Manipur</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-black uppercase tracking-widest transition-all duration-300 hover:scale-110",
                isScrolled || !isHomePage 
                  ? "text-secondary-900 hover:text-primary-600" 
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/donate" className="btn btn-primary px-8 py-2.5 text-xs uppercase tracking-widest">
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors",
            isScrolled || !isHomePage ? "text-secondary-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-dark h-screen fixed inset-0 z-40 flex flex-col items-center justify-center space-y-10 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-[0.2em] hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setIsOpen(false)}
            className="btn btn-accent px-12 py-5 text-lg uppercase tracking-widest"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;