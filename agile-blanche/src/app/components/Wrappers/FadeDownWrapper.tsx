"use client";
import { motion, Variants, Transition, easeInOut } from "framer-motion";
import { ReactNode } from "react";

const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

interface FadeDownProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeDownWrapper = ({ children, delay = 0, className = "" }: FadeDownProps) => {
  const transition: Transition = {
    duration: 0.8,
    ease: easeInOut,
    delay,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeDownVariants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeDownWrapper;