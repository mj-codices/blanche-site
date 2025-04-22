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
      ? `size-18 md:pt-1 pb-5 sm:pb-3 md:pb-0 mx-2 text-white`
      : `size-10 pb-2 sm:p-1 m-2 text-white`;
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
                  ? `perspective transform-3d transition-transform duration-800 ${flipped ? "rotate-y-180" : ""} relative block flex lg:h-95 lg:w-75 md:h-85 md:w-65 sm:w-142 sm:h-35 w-115 h-auto flex-col md:items-center rounded-lg border border-gray-200 bg-gray-100 text-[#88807B] shadow-lg p-0`
                  : `relative block lg:h-80 lg:w-60 md:h-70 md:w-50 rounded-lg border border-gray-200 bg-[#FDFDFB] p-3 sm:p-5 md:px-2 text-[#88807B] shadow-lg sm:w-136 sm:h-30 w-110 h-auto`
              }
            >
              <div
                className={
                  isWebDev
                    ? `absolute md:-top-12 lg:mx-22 md:mx-20 flex size-12 sm:size-14 md:size-21 lg:size-24 rounded-lg bg-[#171717] lg:px-1 lg:pt-2 md:px-1 md:pt-0 shadow-lg ml-3 sm:ml-5 mt-11 sm:mt-5`
                    : `absolute md:-top-5 lg:mx-20 md:mx-16 flex size-12 sm:size-14 lg:size-16 rounded-lg bg-[#171717] lg:px-1 lg:py-1 md:px-1 md:pt-0 md:pb-1 shadow-lg mt-7 sm:mt-0`
                }
              >
                <Icon className={iconClassName}></Icon>
              </div>
              <h2
                className={
                  isWebDev
                    ? `lg:pt-22 md:pt-18 md:text-center ml-3 sm:ml-0 sm:pl-25 pb-1 pt-3 sm:pt-5 md:pl-0 font-[myFirstFontBold] lg:text-lg md:text-base text-[#171717]`
                    : `lg:pt-14 md:pt-10 md:text-center sm:pl-15 sm:pl-20 md:pl-0 font-[myFirstFontBold] lg:text-base md:text-sm text-[#171717]`
                }
              >
                {item.name}
              </h2>
              <p className={
                  isWebDev
                    ?  `pb-5 sm:pb-5 pl-18 sm:pl-25 pr-8 sm:pr-7 md:px-5 lg:pt-3 md:pt-2 lg:px-5 md:text-center text-xs leading-5 md:leading-6 sm:text-left`
                    :   `pl-15 pb-2 sm:pl-20 sm:pr-7 md:px-2 lg:px-5 lg:pt-3 md:pt-2 md:text-center text-xs leading-5 lg:leading-6 sm:text-left` }>
                {item.description}
              </p>
              {index === 1 && (
                <button
                  onClick={() => setFlipped(true)}
                  className={`${flipped ? "opacity-0" : "opacity-100"} absolute md:relative top-0 right-0 h-full md:h-auto lg:mx-25 lg:mt-3 lg:mb-5 md:mx-25 md:mt-1 md:mb-5 lg:px-3 lg:pt-3 lg:pb-2 md:px-3 md:pt-2 md:pb-1 pr-1 justify-center rounded-tr rounded-br md:rounded-full bg-[#e9905a] font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm writing-vertical-rl`}
                >
                  MORE
                </button>
              )}
              {index !== 1 && (
                <hr className="lg:mx-5 lg:mt-4 md:mx-4 md:mt-3 flex justify-center text-gray-200 invisible md:visible" />
              )}

              {/* Back Card */}
              {index === 1 && (
                <div
                  className={
                    isWebDev
                      ? `backface-hidden rotate-y-180 absolute block flex w-115 h-auto sm:w-142 sm:h-35 lg:h-95 lg:w-75 md:h-85 md:w-65 flex-row md:flex-col md:items-center rounded-lg border border-gray-200 bg-gray-100 shadow-lg`
                      : ``
                  }
                >
                  {/* <h4 className="md:invisible sm:pl-20">Web Development Cont.</h4> */}
                  <p className="pb-4 text-left md:text-center text-[#88807B] md:px-6 md:p-5 pt-6 pl-6 sm:pl-5 sm:pb-5 sm:pr-3 pr-6 sm:pt-8 md:pt-10 text-xs leading-5 md:leading-6">{serviceInfo[1].descriptionCont}</p>
                  
                <div className="flex flex-col md:flex-row items-center sm:gap-0 md:gap-3">
                  <button
                  onClick={() => setFlipped(false)}
                  className="flex-1 lg:mx-5 lg:mt-10 lg:mb-5 md:mx-5 md:mt-4 md:mb-5 mb-0 pl-0 py-1 pb-2 pt-4 pb-1 rounded-tr md:rounded-full bg-[#e9905a] lg:px-3 lg:pt-3 lg:pb-2 md:px-3 md:pt-2 md:pb-1 font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm writing-vertical-rl"
                >
                  BACK
                </button>
                <button className="flex-1 lg:mx-5 lg:mt-6 lg:mb-1 md:mx-5 md:-mt-1 md:mb-0 sm:mt-0 text-xs lg:px-3 lg:pb-2 lg:pt-3 md:px-3 md:pb-1 md:pt-2 pl-0 pr-1 pt-4 pb-4 rounded-br md:rounded-full font-[myFirstFontBold] text-white bg-[#171717] hover:drop-shadow-md writing-vertical-rl">
                  <span className={`${flipped ? "opacity-0 md:opacity-100" : "opacity-0 md:opacity-100"} absolute md:relative md:pr-1.5`}>
                  MORE 
                  </span>
                  <span>
                  ABOUT
                  </span>
                </button>
                </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
