"use client";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useUIStore } from '@/app/store/ui-store';

export default function Footer() {
  const isDrawerOpen = useUIStore((s) => s.isContactDrawerOpen);
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
      <footer className="bg-[#171717] py-4 text-center text-white">
     
        <div className={`${isDrawerOpen ? "transition duration-200 opacity-0" : "transition delay-900 duration-900 opacity-100"} flex justify-center space-x-8 z-100`}>
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
        <div className={`${isDrawerOpen ? "transition duration-200 opacity-0" : "transition delay-600 duration-600 opacity-100"} pt-4`}>
          <a href="#" className="px-1 text-xs">
            Terms of Use
          </a>
          <span className="text-xs text-[#808080]">•</span>
          <a href="#" className="text-xs">
            {" "}
            Privacy Policy
          </a>
        </div>
        <p className={`${isDrawerOpen ? "transition duration-200 opacity-0" : "transition delay-600 duration-600 opacity-100"} pt-2 text-xs text-[#808080]`}>
          &copy; {new Date().getFullYear()} AGILE-BLANCHE
        </p>
         </footer>
      {/* </motion.footer> */}
    </div>
  );
}
