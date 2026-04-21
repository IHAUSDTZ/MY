"use client";

import { motion, type Variants, type Transition } from "framer-motion";

interface AnimatedProps {
  children: React.ReactNode;
  delay?: number;
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
}: any) {
  return (
    <motion.div 
      initial={initial || { y: 50, opacity: 0 }}
      whileInView={animate || { y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={transition || { duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHeading({ children, delay = 0, className, ...props }: AnimatedProps) {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.h1>
  );
}

export function AnimatedText({ children, delay = 0, className, ...props }: AnimatedProps) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  );
}
