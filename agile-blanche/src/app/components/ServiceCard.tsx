"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function ServiceCard({ name, icon, description, index, descriptionCont = null }:any) {
  const [flipped, setFlipped] = useState(false);
  const router = useRouter();

  const getIconClassName = (isWebDev: boolean): string => {
    return isWebDev
      ? `size-18 md:pt-1 pb-5 sm:pb-3 md:pb-0 mx-2 text-white ${flipped ? "transition delay-250 opacity-0" : "delay-250 opacity-100"}`
      : `size-10 pb-2 sm:p-1 m-2 text-white`;
  };
  
  const Icon = icon;
  const isWebDev = name === "Web Development";
  const iconClassName = getIconClassName(isWebDev);

  return (
    <div className={
        !isWebDev 
            ? `pr-5 md:pr-0 z-10`
            : `z-10`
    }>
      <div
        key={index}
        className={
          isWebDev
            ? `perspective transition-transform duration-800 transform-3d ${flipped ? "rotate-y-180" : ""} relative block flex flex-col flex-grow rounded-lg border border-gray-200 bg-gray-100 p-0 text-[#88807B] shadow-lg h-40 w-full max-w-145 min-w-70 sm:h-35 sm:w-full sm:max-w-170 sm:min-w-147 md:h-85 md:w-65 md:max-w-65 md:min-w-65 md:items-center lg:h-95 lg:max-w-75 lg:w-auto`
            : `relative block h-auto w-full max-w-140 min-w-65 rounded-lg border border-gray-200 bg-[#FDFDFB] p-3 text-[#88807B] shadow-lg sm:w-full sm:max-w-160 sm:min-w-140 sm:p-5 md:h-70 md:w-50 md:max-w-50 md:min-w-50 md:px-2 lg:h-80 lg:max-w-60 lg:w-auto`
        }
      >
        <div
          className={
            isWebDev
              ? `absolute mt-11 ml-3 flex size-12 rounded-lg bg-[#171717] shadow-lg sm:mt-5 sm:ml-5 sm:size-14 md:-top-12 md:mx-20 md:size-21 md:px-1 md:pt-0 lg:mx-22 lg:size-24 lg:px-1 lg:pt-2`
              : `absolute mt-7 flex size-12 rounded-lg bg-[#171717] shadow-lg sm:mt-0 sm:size-14 md:-top-5 md:mx-16 md:px-1 md:pt-0 md:pb-1 lg:mx-20 lg:size-16 lg:px-1 lg:py-1`
          }
        >
          <Icon className={iconClassName}></Icon>
        </div>
        <h2
          className={
            isWebDev
              ? `ml-3 pt-3 pb-1 font-[myFirstFontBold] text-[#171717] sm:ml-0 sm:pt-5 sm:pl-25 md:pt-18 md:pl-0 md:text-center md:text-base lg:pt-22 lg:text-lg`
              : `font-[myFirstFontBold] text-[#171717] sm:pl-15 sm:pl-20 md:pt-10 md:pl-0 md:text-center md:text-sm lg:pt-14 lg:text-base`
          }
        >
          {name}
        </h2>
        <p
          className={
            isWebDev
              ? `pr-8 pb-5 pl-18 text-xs leading-5 sm:pr-7 sm:pb-5 sm:pl-25 sm:text-left md:px-5 md:pt-2 md:text-center md:leading-6 lg:px-5 lg:pt-3 overflow-x-hidden overflow-y-hidden md:overflow-x-visible md:overflow-y-visible`
              : `pb-2 pl-15 text-xs leading-5 sm:pr-7 sm:pl-20 sm:text-left md:px-2 md:pt-2 md:text-center lg:px-5 lg:pt-3 lg:leading-6`
          }
        >
          {description}
        </p>
        {index === 1 && (
          <button
            onClick={() => setFlipped(true)}
            className={`${flipped ? "opacity-0" : "opacity-100"} writing-vertical-rl absolute top-0 right-0 h-full justify-center rounded-tr rounded-br bg-[#e9905a] transition duration-600 hover:bg-[#e26f28] pr-1 font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm md:relative md:mx-25 md:-mt-1 md:mb-5 md:h-auto md:rounded-full md:px-3 md:pt-2 md:pb-1 lg:mx-25 lg:mt-3 lg:mb-5 lg:px-3 lg:pt-3 lg:pb-2 cursor-pointer`}
          >
            MORE
          </button>
        )}
        {index !== 1 && (
           <div className="h-px w-24 lg:w-35 my-2 lg:my-4 mx-auto md:block hidden bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

        )}

        {/* Back Card */}
        {index === 1 && (
          <div
            className={
              isWebDev
                ? `overflow-hidden absolute block flex h-40 w-full max-w-145 min-w-70 rotate-y-180 flex-row rounded-lg border border-gray-200 bg-gray-100 shadow-lg backface-hidden sm:h-35 sm:w-full sm:max-w-170 sm:min-w-147 md:h-85 md:w-65 md:max-w-65 md:min-w-65 md:flex-col md:items-center lg:h-95 lg:max-w-75 lg:w-auto`
                : ``
            }
          >
            {/* <h4 className="md:invisible sm:pl-20">Web Development Cont.</h4> */}
            {
              !descriptionCont ? <></> : 
              <p className="pt-6 pr-6 pb-4 pl-6 text-left text-xs leading-5 text-[#88807B] sm:pt-6 sm:pr-6 sm:pb-5 sm:pl-6 md:p-5 md:px-6 md:pt-10 md:text-center md:leading-6 overflow-x-hidden overflow-y-hidden md:overflow-x-visible md:overflow-y-visible">
              {descriptionCont}
            </p>}

            <div className="flex flex-col items-center sm:gap-0 md:flex-row md:gap-3">
              <button
                onClick={() => setFlipped(false)}
                className="writing-vertical-rl mb-0 flex-1 rounded-tr bg-[#e9905a] transition duration-600 hover:bg-[#e26f28] py-1 pt-4 pb-1 pb-2 pl-0 font-[myFirstFontBold] text-xs text-white transition duration-100 ease-in-out hover:drop-shadow-sm md:mx-5 md:mt-4 md:mb-5 md:rounded-full md:px-3 md:pt-2 md:pb-1 lg:mx-5 lg:mt-10 lg:mb-5 lg:px-3 lg:pt-3 lg:pb-2 cursor-pointer"
              >
                BACK
              </button>
              <button 
                onClick={() => router.push('/about')}
                className="writing-vertical-rl flex-1 rounded-br bg-[#171717] transition duration-600 hover:text-[#e9905a] pt-4 pr-1 pb-4 pl-0 font-[myFirstFontBold] text-xs text-white hover:drop-shadow-md sm:mt-0 md:mx-5 md:-mt-1 md:mb-0 md:rounded-full md:px-3 md:pt-2 md:pb-1 lg:mx-5 lg:mt-6 lg:mb-1 lg:px-3 lg:pt-3 lg:pb-2 cursor-pointer">
                <span
                  className={`${flipped ? "opacity-0 md:opacity-100" : "opacity-0 md:opacity-100"} absolute md:relative md:pr-1.5`}
                >
                  MORE
                </span>
                <span>ABOUT</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
