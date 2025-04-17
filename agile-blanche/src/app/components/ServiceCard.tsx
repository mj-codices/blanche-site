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
      ? `size-18 px-1 pt-1 pb-0 mx-3 text-white`
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
                  ? `perspective transform-3d transition-transform duration-500 ${flipped ? "rotate-y-180" : ""} relative block flex h-95 w-75 flex-col items-center rounded-lg border border-gray-200 bg-gray-100 text-[#88807B] shadow-lg`
                  : `relative block h-80 w-60 rounded-lg border border-gray-200 bg-white px-2 text-[#88807B] shadow-lg`
              }
            >
              <div
                className={
                  isWebDev
                    ? `absolute -top-7 mx-22 flex size-24 rounded-lg bg-[#171717] px-1 pt-2 shadow-lg`
                    : `absolute -top-5 mx-20 flex size-16 rounded-lg bg-[#171717] px-1 py-1 shadow-lg`
                }
              >
                <Icon className={iconClassName}></Icon>
              </div>
              <h2
                className={
                  isWebDev
                    ? `pt-25 text-center font-[myFirstFontBold] text-lg text-[#174149]`
                    : `pt-18 text-center font-[myFirstFontBold] text-base text-[#174149]`
                }
              >
                {item.name}
              </h2>
              <p className="px-4 pt-3 text-center text-sm leading-6">
                {item.description}
              </p>
              {index === 1 && (
                <button
                  onClick={() => setFlipped(true)}
                  className="mx-25 mt-auto mb-5 flex justify-center rounded-full bg-[#e9905a] px-3 pt-3 pb-2 font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm"
                >
                  MORE
                </button>
              )}
              {index !== 1 && (
                <hr className="mx-5 mt-5 flex justify-center text-gray-200" />
              )}

              {/* Back Card */}
              {index === 1 && (
                // <div className="flex flex-col rotate-y-180 absolute block w-full h-full shadow-lg border border-gray-200 rounded-lg bg-gray-100 text-center text-[#88807B] backface-hidden">
                <div
                  className={
                    isWebDev
                      ? `backface-hidden rotate-y-180 absolute block flex h-95 w-75 flex-col items-center rounded-lg border border-gray-200 bg-gray-100 shadow-lg`
                      : ``
                  }
                >
                  <p className="text-center text-[#88807B] px-6 pt-10 text-sm leading-6">{serviceInfo[1].descriptionCont}</p>
                  
                  <div className="flex items-center gap-4">
                  <button
                  onClick={() => setFlipped(false)}
                  className="mx-5 mt-10 mb-5 rounded-full bg-[#e9905a] px-3 pt-3 pb-2 font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm"
                >
                  BACK
                </button>
                <button className="mx-5 text-xs mt-5 mb-1 px-3 pb-2 pt-3 rounded-full font-[myFirstFontBold] text-white bg-[#171717] hover:drop-shadow-md">
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
