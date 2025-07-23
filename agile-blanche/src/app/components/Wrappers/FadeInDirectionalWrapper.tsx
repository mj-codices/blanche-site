"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type Direction = "left" | "right" | "up" | "down";

interface FadeInDirectionalProps {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  className?: string;
}

const getVariants = (direction: Direction = "up"): Variants => {
  const distance = 20;
  const offsets = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  };

  return {
    initial: { opacity: 0, ...offsets[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, ...offsets[direction] },
  };
};

export default function FadeInDirectionalWrapper({
  children,
  direction = "up",
  duration = 1,
  delay = 0,
  className,
}: FadeInDirectionalProps) {
  return (
    <motion.div
      className={clsx(className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={getVariants(direction)}
      transition={{
        duration,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
