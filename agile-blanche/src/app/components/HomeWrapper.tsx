"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function InitialFadeWrapper({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
