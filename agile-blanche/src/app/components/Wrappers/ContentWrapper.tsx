"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };


  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
