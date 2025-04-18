"use client";
import { useState } from "react";
import { FaMobileAlt, FaLaptopCode, FaHeadset } from "react-icons/fa";

const serviceInfo = [
  {
    name: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "We craft high-performance mobile apps that look great and feel even better. We use modern cross-platform frameworks to deliver smooth, scalable apps without the bloat.",
  },
  {
    name: "Web Development",
    icon: FaLaptopCode,
    description:
      "We build fast, scalable, and beautiful web applications tailored to your business. As a remote-first team of modern developers, we partner with startups and growing companies to turn ideas into high-performing digital products.",
    descriptionCont:
      "Using the latest technologies and agile workflows, we move quickly without cutting corners—delivering clean code, responsive designs, and seamless user experiences. Whether you're launching an MVP or scaling an existing platform, we’re here to build what moves your business forward.",
  },
  {
    name: "App Support",
    icon: FaHeadset,
    description:
      "We offer ongoing app support to keep your product running smoothly as it grows. Our team maintains and proactively improves your app—ensuring stability, speed, and scalability.",
  },
];

export default function ServiceCard() {
  const [flipped, setFlipped] = useState(false);

  const getIconClassName = (isWebDev: boolean): string => {
    if (flipped && isWebDev) {
      return "invisible";
    }
    return isWebDev
      ? `size-18 md:pt-1 pb-3 md:pb-0 mx-3 text-white`
      : `size-10 p-1 m-2 text-white`;
  };

  return (
    <>
      {serviceInfo.map((item, index) => {
        const Icon = item.icon;
        const isWebDev = item.name === "Web Development";
        const iconClassName = getIconClassName(isWebDev);
        return (
          <div key={index}>
            {/* <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped ? "rotate-y-180" : ""
                }`}
                > */}
            {/* Front Card */}
            <div
              key={index}
              className={
                isWebDev
                  ? `perspective transform-3d transition-transform duration-500 ${flipped ? "rotate-y-180" : ""} relative block flex lg:h-95 lg:w-75 md:h-85 md:w-65 flex-col md:items-center rounded-lg border border-gray-200 bg-gray-100 text-[#88807B] shadow-lg sm:my-5 sm:p-5 md:p-0`
                  : `relative block lg:h-80 lg:w-60 md:h-70 md:w-50 rounded-lg border border-gray-200 bg-[#FDFDFB] sm:p-5 md:px-2 text-[#88807B] shadow-lg`
              }
            >
              <div
                className={
                  isWebDev
                    ? `absolute md:-top-7 lg:mx-22 md:mx-20 flex sm:size-14 md:size-21 lg:size-24 rounded-lg bg-[#171717] lg:px-1 lg:pt-2 md:px-1 md:pt-0 shadow-lg`
                    : `absolute md:-top-5 lg:mx-20 md:mx-16 flex md:size-14 lg:size-16 rounded-lg bg-[#171717] lg:px-1 lg:py-1 md:px-1 md:pt-0 md:pb-1 shadow-lg`
                }
              >
                <Icon className={iconClassName}></Icon>
              </div>
              <h2
                className={
                  isWebDev
                    ? `lg:pt-22 md:pt-18 md:text-center sm:pl-20 md:pl-0 font-[myFirstFontBold] lg:text-lg md:text-base text-[#171717]`
                    : `lg:pt-16 md:pt-12 md:text-center sm:pl-20 md:pl-0 font-[myFirstFontBold] lg:text-base md:text-sm text-[#171717]`
                }
              >
                {item.name}
              </h2>
              <p className="sm:pl-20 sm:pr-5 md:px-4 lg:pt-3 md:pt-2 md:text-center sm:text-xs lg:text-sm md:leading-5 lg:leading-6 sm:text-left">
                {item.description}
              </p>
              {index === 1 && (
                <button
                  onClick={() => setFlipped(true)}
                  className="sm:absolute md:relative top-0 right-0 sm:h-full md:h-auto lg:mx-25 lg:mt-3 lg:mb-5 md:mx-25 md:mt-4 md:mb-5 lg:px-3 lg:pt-3 lg:pb-2 md:px-3 md:pt-2 md:pb-1 sm:pr-1 pl-1 justify-center sm:rounded-sm md:rounded-full bg-[#e9905a] font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm writing-vertical-rl"
                >
                  MORE
                </button>
              )}
              {index !== 1 && (
                <hr className="lg:mx-5 lg:mt-4 md:mx-4 md:mt-3 flex justify-center text-gray-200 invisible md:visible" />
              )}

              {/* Back Card */}
              {index === 1 && (
                // <div className="flex flex-col rotate-y-180 absolute block w-full h-full shadow-lg border border-gray-200 rounded-lg bg-gray-100 text-center text-[#88807B] backface-hidden">
                <div
                  className={
                    isWebDev
                      ? `backface-hidden rotate-y-180 absolute block flex lg:h-95 lg:w-75 md:h-85 md:w-65 flex-col items-center rounded-lg border border-gray-200 bg-gray-100 shadow-lg`
                      : ``
                  }
                >
                  <p className="text-center text-[#88807B] px-6 pt-10 lg:text-sm md:text-xs leading-6">{serviceInfo[1].descriptionCont}</p>
                  
                <div className="flex items-center gap-4">
                  <button
                  onClick={() => setFlipped(false)}
                  className="lg:mx-5 lg:mt-10 lg:mb-5 md:mx-5 md:mt-6 md:mb-5 rounded-full bg-[#e9905a] lg:px-3 lg:pt-3 lg:pb-2 md:px-3 md:pt-2 md:pb-1 font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm"
                >
                  BACK
                </button>
                <button className="lg:mx-5 lg:mt-6 lg:mb-1 md:mx-5 md:mt-1 md:mb-0 text-xs lg:px-3 lg:pb-2 lg:pt-3 md:px-3 md:pb-1 md:pt-2 rounded-full font-[myFirstFontBold] text-white bg-[#171717] hover:drop-shadow-md">
                  MORE ABOUT
                </button>
                </div>
                </div>
              )}

              {/* </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
