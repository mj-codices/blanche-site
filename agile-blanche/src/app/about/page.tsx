"use client";
import Image from "next/image";
import { BlobButton } from "../components/BlobButton/BlobButton";

export default function AboutPage() {
  return (
    <div className="mb-20 flex min-h-[calc(100dvh-300px)] flex-col sm:mb-25 md:mb-5 lg:mb-3">
      <div className="mb-5 flex justify-center pl-10 shadow-lg">
        <span className="mb-5 text-center text-lg tracking-[1.7rem] uppercase sm:text-xl md:text-2xl lg:text-3xl">
          About Us
        </span>
      </div>
      <div className="relative z-10 flex flex-grow flex-col md:flex-row">
        <section className="relative sm:pt-3 md:pt-18 md:pr-20 md:pl-20 lg:pt-20 lg:pr-20 lg:pl-25">
          <h1 className="px-1 text-center font-[myFirstFont] text-xl text-[#88807B] sm:text-2xl md:pb-5 md:text-left md:leading-10 lg:pb-7 lg:text-3xl lg:leading-12 lg:tracking-wider">
            Where <span className="text-[#e9905a]">pragmatism</span> meets the
            human <span className="text-[#e9905a]">spirit</span>
          </h1>
          <p className="px-15 pt-4 text-center text-sm leading-7 text-[#88807B] sm:px-20 sm:pt-5 sm:text-base md:mb-10 md:p-0 md:text-left md:text-lg md:leading-9 lg:mb-4 lg:text-xl lg:leading-11">
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

          <div className="my-3 flex flex-row justify-center sm:my-4 md:hidden lg:my-0 lg:mb-10 lg:ml-5 lg:inline-flex">
            <BlobButton
              isBlack={true}
              text="Contact Us"
              onClick={() => console.log("Contact button clicked!")}
            />
            <div className="mx-4 mt-2 block h-9 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent sm:mt-4 sm:h-12 md:mt-0 md:hidden"></div>
            <BlobButton
              isWhite={true}
              text="Our Work"
              onClick={() => console.log("Work button clicked!")}
            />
          </div>
        </section>
        <section className="pt-3 sm:pt-0 md:pt-20 md:pr-20 lg:pt-21 lg:pr-20">
          <h1 className="hidden text-center font-[myFirstFont] tracking-widest text-[#171717] md:mb-3 md:block md:text-2xl lg:mb-6 lg:text-3xl">
            Our Team
          </h1>
          <Image
            className="mx-auto max-w-80 rounded-lg shadow-lg sm:max-w-120 md:max-w-80 md:min-w-60 lg:max-w-96"
            src="/placeholder.png"
            alt=""
            width={1200}
            height={500}
          />
          <div className="md:pl-2">
            <p className="pt-6 text-center font-[myFirstFont] text-xs tracking-widest text-[#88807B] md:text-left">
              JESLYN WHITE - Senior Software Developer
            </p>
            <p className="pt-4 text-center font-[myFirstFont] text-xs tracking-widest text-[#88807B] md:text-left">
              JULIAN WHITE - Software Developer
            </p>
          </div>
          <div className="flex hidden flex-row md:block md:pt-4 md:pl-10 lg:hidden">
            <BlobButton
              isBlack={true}
              text="Contact Us"
              onClick={() => console.log("Contact button clicked!")}
            />
            <BlobButton
              isWhite={true}
              text="Our Work"
              onClick={() => console.log("Work button clicked!")}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
