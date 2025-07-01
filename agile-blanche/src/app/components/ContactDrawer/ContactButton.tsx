"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactButton.css";

interface ContactButtonProps {
  status: "idle" | "loading" | "sent";
  setStatus: React.Dispatch<React.SetStateAction<"idle" | "loading" | "sent">>;
  buttonRef: React.RefObject<HTMLButtonElement | null >;
}

export const ContactButton = ({ status, setStatus, buttonRef }: ContactButtonProps) => {

  return (

    <div className="flex justify-end">

    
      <button
      disabled={status === 'loading'}
      ref={buttonRef}
      type="submit"
      className="bubbly-button group gap-1 flex rounded-md text-white w-[200px] px-3 py-4"
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center font-[myFirstFont] tracking-widest pl-12"
          >
            Send it
            <img
              id="arrow-hover"
              src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"
              alt="Paper Plane"
              width={20}
              height={20}
              // style={{ position: "absolute" }}
              className="transition-opacity duration-200 ml-1 opacity-0 group-hover:opacity-100"
            />
          </motion.span>
        )}

        {status === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-center justify-center text-base font-[myFirstFont] tracking-widest"
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
            className="flex items-center gap-2 text-center justify-center text-base font-[myFirstFont] tracking-widest"
          >
            Sent
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white pb-1"
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
    </div>
  );
};
