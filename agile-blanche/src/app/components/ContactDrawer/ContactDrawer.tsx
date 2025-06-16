// src/components/ContactDrawer/ContactDrawer.tsx
"use client";
import { useEffect, useState } from "react";
import { useUIStore } from "@/app/store/ui-store";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactDrawer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { ContactButton } from "./ContactButton";


export const ContactDrawer = () => {
  const isOpen = useUIStore((state) => state.isContactDrawerOpen);
  const closeDrawer = useUIStore((state) => state.closeContactDrawer);
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

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
      }, 400); // Give content time to fade out
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");

      // Optional reset after delay
      setTimeout(() => {
        setStatus("idle");
        // optionally reset form fields here
      }, 2000);
    }, 2000);
  };

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
            <div className="w-screen">
              <div className="relative left-0 mt-auto w-screen">
                <div className="absolute top-2 left-0 w-screen">
                  <svg
                    className="wave relative block w-screen"
                    viewBox="0 0 1200 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717"></path>
                  </svg>
                </div>
                <div className="absolute top-2 left-0 w-screen">
                  <svg
                    className="wave relative left-[100%] block w-screen"
                    viewBox="0 0 1200 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-opacity duration-300 ease-in-out ${
                  showContent ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex justify-evenly">
                  <div className="flex justify-evenly">
                    <div className="mt-7 ml-20">
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
                        We’re happy to answer your questions, hear your ideas,
                        or just chat about your next project.
                      </p>
                      <div className="fredoka pb-2 pl-6 text-sm tracking-widest text-[#88807B]">
                        +909-900-000
                      </div>
                      <div className="fredoka pl-6 text-sm tracking-widest text-[#88807B]">
                        agile_blanche@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 mr-3 w-110">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border-transition custom-input my-5 w-full border-0 border-b-2 border-gray-600 bg-transparent pb-2 text-white transition-colors duration-800 hover:border-[#a67b5b] focus:border-[#a67b5b] focus:ring-0 focus:outline-none"
                      />

                      <input
                        type="email"
                        placeholder="Your Email"
                        className="border-transition custom-input1 mt-3 mb-2 w-full border-0 border-b-2 border-gray-500 bg-transparent pb-2 text-white transition-colors duration-800 hover:border-[#c7936d] focus:border-[#c7936d] focus:ring-0 focus:outline-none"
                      />
                      <textarea
                        className="border-transition custom-input2 my-5 w-full border-0 border-b-2 border-gray-400 bg-transparent pb-2 text-white transition-colors duration-800 hover:border-[#f6b88b] focus:border-[#f6b88b] focus:ring-0 focus:outline-none"
                        placeholder="Start the conversation..."
                      />
                      <div className="mt-5">
                         <ContactButton onSubmit={handleSubmit} />
                      </div>
                    </form>
                    <div className="mt-12 flex justify-center gap-23">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-[#88807B] transition duration-600 hover:text-[#e9905a]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
