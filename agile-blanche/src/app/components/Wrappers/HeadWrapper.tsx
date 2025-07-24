"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface HeaderWrapperProps {
  children: ReactNode;
  className?: string;
}

const headerVariants = {
  initial: { opacity: 0, y: -10 },   
  animate: { opacity: 1, y: 0 },    
  exit: { opacity: 0, y: -10 },      
};

export default function HeaderWrapper({
  children,
  className,
}: HeaderWrapperProps) {
  return (
    <motion.header
      className={clsx(className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.header>
  );
}
