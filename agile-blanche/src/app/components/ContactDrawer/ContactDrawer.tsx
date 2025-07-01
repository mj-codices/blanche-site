// src/components/ContactDrawer/ContactDrawer.tsx
"use client";
import { useRef, useEffect, useState } from "react";
import { useUIStore } from "@/app/store/ui-store";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { ContactButton } from "./ContactButton";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactDrawer = () => {
  const isOpen = useUIStore((state) => state.isContactDrawerOpen);
  const closeDrawer = useUIStore((state) => state.closeContactDrawer);
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [showThankYou, setShowThankYou] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const triggerBubblyEffect = () => {
    const btn = buttonRef.current;
    if (!btn) return;

    btn.classList.remove("animate");
    void btn.offsetWidth; // force reflow
    btn.classList.add("animate");

    setTimeout(() => {
      btn.classList.remove("animate");
    }, 700);
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormData>();

  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setTimeout(() => {
        triggerBubblyEffect(); // 💥 Add this here!

        // ⏱️ Wait for button animation (e.g., 1s) before fading out
        setTimeout(() => {
          setShowContent(false);

          setTimeout(() => {
            setShowThankYou(true);
            reset();
          }, 600); // Wait for fade-out to finish
        }, 700); // Wait for bubbly effect
      }, 600); // Let the ContactButton finish 'sent' animation
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      setIsVisible(true); // Mount drawer
      timeout = setTimeout(() => {
        setShowContent(true); // Fade in content
      }, 600); // Matches drawer animation
    } else {
      setShowContent(false); // Trigger content fade-out
      timeout = setTimeout(() => {
        setIsVisible(false); // Unmount drawer AFTER fade-out
      }, 600); // Give content time to fade out
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            transition={{ delay: 0.3 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 bottom-0 left-0 z-50 h-[110vh] w-screen bg-[#171717]"
            initial={{ y: "100%" }}
            animate={{ y: "50%" }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 30,
              delay: isOpen ? 0.3 : 0,
            }}
          >
            <AnimatePresence mode="wait">
              {!showThankYou ? (
                <motion.div key="form">
                  <div className="w-screen">
                    <div className="relative left-0 mt-auto w-screen">
                      <div className="absolute top-2 left-0 w-screen">
                        <svg
                          className="wave relative block w-screen"
                          viewBox="0 0 1200 100"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0,50 L1200,50 V100 H0 Z"
                            fill="#171717"
                          ></path>
                        </svg>
                      </div>
                      <div className="absolute top-2 left-0 w-screen">
                        <svg
                          className="wave relative left-[100%] block w-screen"
                          viewBox="0 0 1200 100"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0,50 L1200,50 V100 H0 Z"
                            fill="#171717"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`transition-opacity duration-500 ease-in-out ${
                        showContent && !showThankYou
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div className="flex justify-evenly">
                        <div className="flex justify-evenly">
                          <div className="mt-10 ml-18">
                            <h2 className="fredoka text-1xl mb-4 text-8xl tracking-wider text-[#FDFDFB]">
                              Contact
                            </h2>

                            {/* Flex row: line + Us */}
                            <div className="flex items-center gap-4 pt-1 pl-4">
                              <div className="h-[.2rem] w-22 rounded-md bg-[#e9905a] lg:w-56"></div>
                              <h2 className="fredoka text-1xl text-8xl tracking-wider text-[#FDFDFB]">
                                Us
                              </h2>
                            </div>
                            <p className="w-[18rem] pt-2 pb-5 pl-2 font-[myFirstFont] text-base leading-8 text-[#FDFDFB]">
                              We’re happy to answer your questions, hear your
                              ideas, or just chat about your next project.
                            </p>
                            <div className="fredoka pb-2 pl-6 text-sm tracking-widest text-[#88807B]">
                              +909-900-000
                            </div>
                            <div className="fredoka pl-6 text-sm tracking-widest text-[#88807B]">
                              agile_blanche@gmail.com
                            </div>
                          </div>
                        </div>

                        <div className="mt-15 mr-10 w-110">
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative mt-2 w-full">
                              <input
                                {...register("name", { required: true })}
                                id="name"
                                type="text"
                                className="peer w-full border-b border-b-2 border-gray-600 bg-transparent py-1 text-lg text-white transition transition-all duration-400 outline-none focus:border-[#c7936d]"
                                placeholder=" "
                              />
                              <div
                                className={`overflow-hidden transition-all duration-500 ${
                                  errors.name
                                    ? "mt-1 max-h-10 opacity-100"
                                    : "mt-0 max-h-0 opacity-0"
                                }`}
                              >
                                <p className="text-sm text-[#DB4437]">
                                  Name is required
                                </p>
                              </div>

                              <label
                                htmlFor="name"
                                className="float-labels absolute -top-5 left-0 max-w-[calc(100%-18px)] cursor-text truncate text-sm text-gray-600 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#c7936d]"
                              >
                                Your Name
                              </label>
                            </div>
                            <div className="relative mt-6 w-full">
                              <input
                                {...register("email", {
                                  required: true,
                                  pattern: /^\S+@\S+$/i,
                                })}
                                id="email"
                                type="email"
                                className="peer w-full border-b border-b-2 border-gray-500 bg-transparent py-1 text-lg text-white transition transition-all duration-400 outline-none focus:border-[#c7936d]"
                                placeholder=" "
                              />
                              <div
                                className={`overflow-hidden transition-all duration-500 ${
                                  errors.email
                                    ? "mt-1 max-h-10 opacity-100"
                                    : "mt-0 max-h-0 opacity-0"
                                }`}
                              >
                                <p className="text-sm text-[#DB4437]">
                                  Email is required
                                </p>
                              </div>
                              <label
                                htmlFor="email"
                                className="float-labels absolute -top-5 left-0 max-w-[calc(100%-18px)] cursor-text truncate text-sm text-gray-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#c7936d]"
                              >
                                Email Address
                              </label>
                            </div>
                            <div className="relative mt-6 w-full">
                              <textarea
                                {...register("message", { required: true })}
                                id="message"
                                className="peer w-full border-b border-b-2 border-gray-400 bg-transparent py-1 text-lg text-white transition transition-all duration-400 outline-none focus:border-[#c7936d]"
                                placeholder=" "
                              />
                              <div
                                className={`overflow-hidden transition-all duration-500 ${
                                  errors.message
                                    ? "mt-1 max-h-10 opacity-100"
                                    : "mt-0 max-h-0 opacity-0"
                                }`}
                              >
                                <p className="text-sm text-[#DB4437]">
                                  Message is required
                                </p>
                              </div>
                              <label
                                htmlFor="message"
                                className="float-labels absolute -top-5 left-0 max-w-[calc(100%-18px)] cursor-text truncate text-sm text-gray-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#c7936d]"
                              >
                                Your Message...
                              </label>
                            </div>

                            <div className="mt-7">
                              <ContactButton
                                status={status}
                                setStatus={setStatus}
                                buttonRef={buttonRef}
                              />
                            </div>
                            <div
                              className={`overflow-hidden text-center transition-all duration-500 ${
                                errors.root
                                  ? "mt-5 max-h-10 opacity-100"
                                  : "mt-0 max-h-0 opacity-0"
                              }`}
                            >
                              <p className="text-sm text-[#DB4437]">
                                {errors.root?.message || ""}
                              </p>
                            </div>
                          </form>
                          <div
                            className={`mt-12 flex justify-center gap-27 ${
                              hasErrors
                                ? "pointer-events-none opacity-0"
                                : "opacity-100"
                            } transition-opacity duration-500`}
                          >
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFacebook className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaTwitter className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="thanks" className="flex w-screen">
                  <div className="absolute top-2 left-0 w-screen">
                    <svg
                      className="wave relative block w-screen"
                      viewBox="0 0 1200 100"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717" />
                    </svg>
                  </div>
                  <div className="absolute top-2 left-0 w-screen">
                    <svg
                      className="wave relative left-[100%] block w-screen"
                      viewBox="0 0 1200 100"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717" />
                    </svg>
                  </div>
                  <div className="text-center">
                    {/* This will be where my thank you page will go */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
