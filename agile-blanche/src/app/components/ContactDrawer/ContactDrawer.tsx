// src/components/ContactDrawer/ContactDrawer.tsx
"use client";

import { useUIStore } from "@/app/store/ui-store";
import { motion, AnimatePresence } from "framer-motion";

export const ContactDrawer = () => {
  const isOpen = useUIStore((state) => state.isContactDrawerOpen);
  const closeDrawer = useUIStore((state) => state.closeContactDrawer);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 bottom-0 left-0 z-50 h-[50vh] w-screen bg-[#171717]"
            initial={{ y: "100%" }}
            animate={{ y: "50%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                {/* <div className="absolute top-0 left-0 z-50 w-full overflow-hidden">
                  <svg
                    className="block h-[100px] w-full"
                    viewBox="0 0 1200 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="wavePattern"
                        x="0"
                        y="0"
                        width="1200"
                        height="100"
                        patternUnits="userSpaceOnUse"
                      >
                        <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100" fill="url(#wavePattern)" />
                  </svg>
                </div> */}
              </div>
              {/* <h2 className="text-2xl font-bold mb-4">Contact Us</h2> */}
              {/* <form>
              
                <input
                  className="w-full p-2 border mb-4"
                  type="text"
                  placeholder="Your Name"
                />
                <textarea
                  className="w-full p-2 border mb-4"
                  placeholder="Your Message"
                />
                <button className="bg-black text-white px-4 py-2 rounded">
                  Submit
                </button>
              </form> */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
