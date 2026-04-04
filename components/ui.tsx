import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl",
    accent: "bg-accent text-secondary hover:bg-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-10 py-4 text-xl",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-[3rem] shadow-sm border border-gray-100",
        hover && "hover:shadow-xl transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "surface" | "primary" | "secondary";
}

export function Section({ 
  children, 
  className, 
  background = "white" 
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    surface: "bg-surface",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <section className={cn("py-24 px-6", backgrounds[background], className)}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
