import Image from "next/image";
import BlobButton from "../components/BlobButton";


export default function AboutPage() {
  return (
    <div className="mb-20 flex min-h-[calc(100dvh-300px)] flex-col sm:mb-25 md:mb-10 lg:mb-15">
      <div className="z-50 mb-5 flex h-auto flex-row justify-center space-x-6 pb-2 text-lg shadow-lg sm:mb-5 sm:pb-4 sm:pl-10 sm:text-xl md:mb-0 md:pl-0 md:text-2xl lg:text-3xl">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span className="pl-5">U</span>
        <span>S</span>
      </div>
      <div className="relative z-10 flex flex-grow flex-col md:flex-row">
        <section className="relative sm:pt-3 md:pt-18 md:pr-20 md:pl-20 lg:pt-22 lg:pr-20 lg:pl-25">
          <h1 className="px-1 text-center text-xl text-[#88807B] sm:text-2xl md:pb-5 md:text-left md:leading-10 lg:pb-7 lg:text-3xl lg:leading-12 lg:tracking-wider">
            Where <span className="text-[#e9905a]">pragmatism</span> meets the
            human <span className="text-[#e9905a]">spirit</span>
          </h1>
          <p className="px-15 pt-4 text-center text-sm leading-7 text-[#88807B] sm:px-20 sm:pt-5 sm:text-base md:p-0 md:text-left md:text-lg md:leading-9 lg:text-xl lg:leading-11">
            Combining technical expertise with personal touch, we at{" "}
            <span className="fredoka text-xs tracking-wider text-[#171717] sm:text-sm md:pl-1 md:text-base lg:text-lg">
              AGILE-
            </span>
            <span className="fredoka text-xs tracking-wider sm:text-sm md:text-base lg:text-lg">
              BLANCHE
            </span>{" "}
            take pride in delivering streamlined, scalable apps that empower
            your ideas and businesses to grow. As a small team, we champion
            practical solutions, clear communication, and custom development.
          </p>
          {/* <div className="flex flex-row items-center justify-center my-5 sm:my-8 lg:mt-2 md:hidden lg:inline-flex lg:space-x-7">
            <button className="mt-1 flex cursor-pointer rounded-full border-2 border-black bg-[#171717] px-3 py-2 text-xs whitespace-nowrap text-white sm:text-sm lg:ml-8 lg:text-base">
              Contact Us
            </button>
            
            <div className="lg:hidden mx-3 h-[40px] sm:h-[45px] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

            <button className="mt-1 flex cursor-pointer rounded-full border-2 border-black bg-white px-4 py-2 text-xs whitespace-nowrap text-black sm:text-sm lg:text-base">
              Our Work
            </button>
          </div> */}

          <div className="mt-10 flex justify-center space-x-4">
              <BlobButton>Contact Us</BlobButton>
              <BlobButton>Our Work</BlobButton>
            </div>
    

        </section>
        <section className="pt-3 sm:pt-0 md:pt-20 md:pr-20 lg:pt-21 lg:pr-20">
          <h1 className="hidden text-center tracking-widest text-[#171717] md:mb-3 md:block md:text-2xl lg:mb-6 lg:text-3xl">
            Our Team
          </h1>
          <Image
            className="mx-auto max-w-80 rounded-lg shadow-lg sm:max-w-120 md:max-w-80 md:min-w-60 lg:max-w-96"
            src="/placeholder.png"
            alt=""
            width={1200}
            height={500}
          />
          <div className="md:pl-4">
            <p className="pt-6 text-center text-xs tracking-widest text-[#88807B] md:text-left">
              JESLYN WHITE - Senior Software Developer
            </p>
            <p className="pt-4 text-center text-xs tracking-widest text-[#88807B] md:text-left">
              JULIAN WHITE - Software Developer
            </p>
          </div>
          <span className="hidden md:block lg:hidden">
            <button className="mt-5 ml-12 flex inline cursor-pointer rounded-full border-1 border-black bg-[#171717] px-3 py-2 text-sm whitespace-nowrap text-white">
              Contact Us
            </button>
            <button className="mt-5 ml-8 flex inline cursor-pointer rounded-full border-2 border-black bg-white px-4 py-2 text-sm whitespace-nowrap text-black">
              Our Work
            </button>
          </span>
        </section>
      </div>
    </div>
  );
}
