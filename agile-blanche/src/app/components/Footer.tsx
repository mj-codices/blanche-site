"use client";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 w-full">
        <div className="bg-[#e9905a] absolute -top-6 left-0">
           <p>Hello</p>
        </div>
        <footer className="bg-[#171717] text-white py-4 text-center">
                <div className="absolute inset-x-0 top-0 left-0 w-full overflow-hidden leading-none">
        </div>
            <div className="flex justify-center space-x-8">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-xl hover:text-[#e9905a] transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-xl hover:text-[#e9905a] transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl hover:text-[#e9905a] transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl hover:text-[#e9905a] transition" />
                </a>
            </div>
            <div className="pt-4">
                <a href="#" className="text-xs px-1">Terms of Use</a>
                <span className="text-xs text-[#808080]">•</span>
                <a href="#" className="text-xs"> Privacy Policy</a>
            </div>
            <p className="text-xs text-[#808080] pt-2">&copy; {new Date().getFullYear()} AGILE-BLANCHE</p>
        </footer>
        </div>
   

    );
  };


