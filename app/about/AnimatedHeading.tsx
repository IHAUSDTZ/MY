"use client";

import { motion, type Transition } from "framer-motion";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  [key: string]: any;
}

export function AnimatedHeading({ children, delay = 0, className, ...props }: AnimatedHeadingProps) {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.h1>
  );
}
