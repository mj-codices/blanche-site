"use client";
import { motion, Variants, Transition, easeInOut } from "framer-motion";
import { ReactNode } from "react";

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 25 },   // starts slightly below
  visible: { opacity: 1, y: 0 },   // animates upward into place
};

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeInUpWrapper = ({ children, delay = 0, className = "" }: FadeInUpProps) => {
  const transition: Transition = {
    duration: 0.8,
    ease: easeInOut,
    delay,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpWrapper;
