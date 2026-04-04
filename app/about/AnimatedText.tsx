"use client";

import { motion, type Transition } from "framer-motion";

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  [key: string]: any;
}

export function AnimatedText({ children, delay = 0, className, ...props }: AnimatedTextProps) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  );
}
