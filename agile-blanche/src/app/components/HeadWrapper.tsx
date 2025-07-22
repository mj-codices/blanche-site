"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface HeaderWrapperProps {
  children: ReactNode;
  className?: string;
}

const headerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
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
        duration: .5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.header>
  );
}
