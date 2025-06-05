"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useUIStore } from '@/app/store/ui-store';

export default function Footer() {
//   const isDrawerOpen = useUIStore((s) => s.isContactDrawerOpen);
  return (
    <div className="relative left-0 mt-auto w-full">
      <div className="absolute top-2 left-0 w-full">
        <svg
          className="wave relative block w-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717"></path>
        </svg>
      </div>
      <div className="absolute top-2 left-0 w-full">
        <svg
          className="wave relative left-[100%] block w-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 L1200,50 V100 H0 Z" fill="#171717"></path>
        </svg>
      </div>
      {/* <motion.footer
        initial={false}
        animate={{ height: isDrawerOpen ? "50vh" : "auto" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 z-50 w-full overflow-hidden bg-[#171717] py-4 text-center text-white"
      > */}
      <footer className="bg-[#171717] py-4 text-center text-white">

     
        <div className="flex justify-center space-x-8 invisible">
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
        <div className="pt-4 invisible">
          <a href="#" className="px-1 text-xs">
            Terms of Use
          </a>
          <span className="text-xs text-[#808080]">•</span>
          <a href="#" className="text-xs">
            {" "}
            Privacy Policy
          </a>
        </div>
        <p className="pt-2 text-xs text-[#808080] invisible">
          &copy; {new Date().getFullYear()} AGILE-BLANCHE
        </p>
         </footer>
      {/* </motion.footer> */}
    </div>
  );
}
