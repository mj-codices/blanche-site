import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const TestFoot = () => {
  return (
    <div>
        <div className="top-1 left-0 w-full overflow-hidden leading-none">
            <svg
                className="relative block w-full h-16"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0,50 C150,150 350,-50 600,50 C850,150 1050,-50 1200,50 V100 H0 Z"
                fill="#1f2937"
                ></path>
            </svg>
      </div>

    <footer className="relative bg-gray-800 text-white text-center py-8">
      {/* Social Icons */}
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400 transition" />
        </a>
      </div>

      <p className="mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default TestFoot;

  
  