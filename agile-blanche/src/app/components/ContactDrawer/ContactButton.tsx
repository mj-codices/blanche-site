"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactDrawer.css";

interface ContactButtonProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export const ContactButton = ({ onSubmit }: ContactButtonProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const handleClick = (e: any) => {
    if (status !== "idle") return;

    setStatus("loading");

    // Call parent logic
    onSubmit(e);

    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
      }, 1500);
    }, 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="button relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-[#e9905a] px-4 py-2 text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 pr-2"
          >
            Send it
            <img
              id="arrow-hover"
              src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"
              alt="Paper Plane"
              width={20}
              height={20}
              style={{ position: "absolute" }}
            />
          </motion.span>
        )}

        {status === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            Sending
            <motion.div
              className="h-3 w-3 animate-spin rounded-full border-2 border-dashed border-white border-t-[transparent]"
              key="spinner"
            />
          </motion.span>
        )}

        {status === "sent" && (
          <motion.span
            key="sent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            Sent
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
