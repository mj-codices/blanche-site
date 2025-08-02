"use client";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useUIStore } from "@/app/store/ui-store";
import { motion } from "framer-motion";

export default function Footer() {
  const isDrawerOpen = useUIStore((s) => s.isContactDrawerOpen);

  return (
    <div className="relative left-0 mt-auto w-full">
      {/* SVG Waves */}
      <div className="absolute top-2 left-0 w-full">
        <svg
          className="wave relative block w-[300%]"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 C150,80 300,20 450,50 C600,80 750,20 900,50 C1050,80 1200,20 1350,50 C1500,80 1650,20 1800,50 V100 H0 Z" fill="#171717" />
        </svg>
      </div>
      <div className="absolute top-2 left-0 w-full">
        <svg
          className="wave relative left-[100%] block w-[300%]"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 C150,80 300,20 450,50 C600,80 750,20 900,50 C1050,80 1200,20 1350,50 C1500,80 1650,20 1800,50 V100 H0 Z" fill="#171717" />
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="bg-[#171717] py-4 text-center text-white">
        <motion.div
          initial={false}
          animate={{ opacity: isDrawerOpen ? 0 : 1 }}
          transition={{
            duration: 0.6,
            delay: isDrawerOpen ? 0 : 1.7, // wait for drawer to close before fading in
          }}
          className={`${isDrawerOpen ? "pointer-events-none" : "pointer-events-auto"} select-none`}
        >
          <div className="z-100 flex justify-center space-x-8">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl transition duration-600 hover:text-[#e9905a]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl transition duration-600 hover:text-[#e9905a]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl transition duration-600 hover:text-[#e9905a]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl transition duration-600 hover:text-[#e9905a]" />
            </a>
          </div>
          <div className="pt-4">
            <a href="#" className="pr-1 text-xs transition duration-600 hover:text-[#e9905a]">
              Terms of Use
            </a>
            <span className="text-xs text-[#808080]">•</span>
            <a href="#" className="pl-1 text-xs transition duration-600 hover:text-[#e9905a]">
              Privacy Policy
            </a>
          </div>
          <p className="pt-2 text-xs text-[#808080] ">
            &copy; {new Date().getFullYear()} AGILE-BLANCHE
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
