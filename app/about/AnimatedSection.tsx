"use client";

import { motion, type Variants, type Transition } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  initial?: Variants | Record<string, any>;
  animate?: Variants | Record<string, any>;
  transition?: Transition;
  className?: string;
  [key: string]: any;
}

export function AnimatedSection({ 
  children, 
  initial, 
  animate, 
  transition,
  className,
  ...props 
}: AnimatedSectionProps) {
  return (
    <motion.div 
      initial={initial || { y: 50, opacity: 0 }}
      animate={animate || { y: 0, opacity: 1 }}
      transition={transition || { duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
