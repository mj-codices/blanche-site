"use client";
import "./portfolio.css";
import Link from "next/link";
import { UIState, useUIStore } from "../store/ui-store";
import ContentWrapper from "../components/Wrappers/ContentWrapper";
import HeadWrapper from "../components/Wrappers/HeadWrapper";

export default function Porfolio() {
  const openContactDrawer = useUIStore((state: UIState) => state.openContactDrawer);
  return (
    <div className="inset-0">
     
      <div className="flex justify-center shadow-lg md:pl-10">
         <HeadWrapper className="mb-5">
        <span className="pl-6 text-center text-lg tracking-[1.7rem] uppercase sm:pl-2 sm:text-xl md:pl-0 md:text-2xl lg:text-3xl">
          Portfolio
        </span>
         </HeadWrapper>
      </div>

      <ContentWrapper>
        <div className="pt-5 sm:pt-8 lg:pt-12">
          <h1 className="text-center font-[myFirstFontBold] text-4xl tracking-[.3rem] sm:text-5xl sm:tracking-[.5rem] md:pl-2 md:text-6xl md:tracking-[.3rem] lg:pl-4 lg:text-7xl lg:tracking-[.5rem]">
            Coming Soon.
          </h1>
        </div>
        <div className="flex flex-col justify-center text-black md:flex-row">
          <section className="md:w-md">
            <p className="sm:text-md md:tracking-16 lg:tracking-18 mx-15 pt-3 pb-3 text-center font-[myFirstFontBold] text-base leading-12 text-[#88807B] sm:mx-25 sm:pt-5 sm:pb-2 sm:text-xl sm:leading-14 md:mx-auto md:py-10 md:text-left md:text-2xl md:leading-16 lg:py-10 lg:text-3xl lg:leading-18">
              We are in the process of building something great. Till then,{" "}
              <Link
                href=""
                onClick={openContactDrawer}
                className="cursor-pointer underline transition duration-600 ease-in-out hover:text-[#e9905a]"
              >
                let's keep in touch.
              </Link>
            </p>
          </section>
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-25 w-25 pb-5 sm:mt-3 sm:h-30 sm:w-30 md:mx-0 md:mt-10 md:h-35 md:w-35 md:pb-0 lg:mt-10 lg:h-45 lg:w-45"
          >
            <defs>
              <filter
                id="gear-shadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feOffset result="offOut" in="SourceAlpha" dx="3" dy="3" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>

              <linearGradient
                id="metal-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#666" />
                <stop offset="50%" stopColor="#aaa" />
                <stop offset="100%" stopColor="#444" />
              </linearGradient>
            </defs>

            <g>
              <path
                className="gear gear-large"
                d="M499.139,318.571l-37.178-5.407c-2.329-0.178-4.336-1.642-5.228-3.8l-12.054-29.086c-0.901-2.15-0.526-4.613,1-6.379l22.243-29.88c3.533-4.141,3.301-10.314-0.554-14.168l-17.602-17.594c-3.846-3.854-10.029-4.104-14.159-0.553l-29.889,22.233c-1.758,1.518-4.238,1.91-6.38,1.018l-29.094-12.062c-2.151-0.883-3.622-2.926-3.81-5.228l-5.389-37.169c-0.428-5.442-4.96-9.635-10.402-9.635h-24.893c-5.45,0-9.983,4.193-10.402,9.635l-5.407,37.169c-0.17,2.32-1.642,4.345-3.792,5.228l-29.103,12.062c-2.151,0.892-4.613,0.5-6.388-1.018l-29.872-22.233c-4.13-3.542-10.304-3.302-14.167,0.553l-17.594,17.594c-3.854,3.854-4.086,10.028-0.554,14.168l22.234,29.888c1.508,1.758,1.91,4.229,1.009,6.371l-12.054,29.086c-0.874,2.159-2.908,3.622-5.219,3.81l-37.195,5.398c-5.425,0.429-9.618,4.961-9.618,10.412v24.883c0,5.442,4.194,9.993,9.618,10.403l37.195,5.398c2.311,0.188,4.345,1.659,5.219,3.81l12.054,29.086c0.901,2.159,0.5,4.63-1.009,6.388l-22.234,29.889c-3.533,4.14-3.301,10.295,0.554,14.168l17.594,17.594c3.863,3.854,10.037,4.086,14.167,0.544l29.872-22.243c1.775-1.498,4.237-1.9,6.388-0.998l29.103,12.044c2.151,0.902,3.622,2.918,3.802,5.246l5.398,37.169c0.428,5.433,4.952,9.636,10.402,9.636h24.893c5.451,0,9.974-4.203,10.402-9.636l5.389-37.169c0.188-2.328,1.659-4.344,3.81-5.246l29.103-12.044c2.142-0.902,4.622-0.5,6.379,0.998l29.881,22.243c4.13,3.542,10.314,3.31,14.159-0.544l17.602-17.594c3.864-3.873,4.087-10.028,0.554-14.168l-22.243-29.889c-1.499-1.758-1.9-4.229-1-6.388l12.054-29.086c0.892-2.151,2.899-3.622,5.228-3.81l37.178-5.398c5.434-0.41,9.627-4.961,9.627-10.403v-24.883C508.766,323.532,504.573,319,499.139,318.571z"
              />
            </g>
            <g filter="url(#gear-shadow)">
              <path
                className="gear gear-small"
                d="M187.351,252.156c4.032-1.445,6.254-5.746,5.122-9.868l-5.898-28.854c-0.472-1.767,0.072-3.649,1.419-4.88l18.263-16.621c1.338-1.222,3.284-1.588,4.97-0.946l27.961,8.466c3.989,1.508,8.485-0.294,10.306-4.166l8.297-17.656c1.837-3.881,0.366-8.485-3.346-10.591l-24.339-16.14c-1.58-0.91-2.535-2.632-2.436-4.452l1.16-24.66c0.098-1.829,1.186-3.444,2.838-4.194l26.008-13.874c3.898-1.74,5.781-6.218,4.336-10.215l-6.603-18.371c-1.454-4.024-5.755-6.254-9.876-5.121l-28.863,5.879c-1.767,0.5-3.632-0.053-4.871-1.41L195.185,56.23c-1.24-1.357-1.614-3.265-0.955-4.978l8.468-27.944c1.507-4.006-0.294-8.494-4.175-10.306l-17.648-8.306c-3.872-1.821-8.494-0.366-10.608,3.354l-16.131,24.34c-0.902,1.58-2.623,2.533-4.444,2.445l-24.66-1.169c-1.82-0.08-3.462-1.205-4.202-2.847L106.974,4.821c-1.758-3.898-6.219-5.782-10.234-4.336L78.379,7.096c-4.024,1.446-6.254,5.738-5.112,9.859l5.888,28.872c0.482,1.748-0.062,3.64-1.418,4.862l-18.264,16.63c-1.356,1.222-3.274,1.597-4.987,0.955l-27.944-8.476c-3.988-1.516-8.476,0.304-10.305,4.175L7.939,81.622c-1.82,3.872-0.366,8.494,3.346,10.599l24.339,16.14c1.588,0.902,2.534,2.615,2.436,4.435l-1.16,24.66c-0.071,1.838-1.187,3.444-2.837,4.193L8.055,155.522c-3.9,1.749-5.782,6.219-4.336,10.216l6.611,18.37c1.445,4.024,5.746,6.254,9.859,5.131l28.881-5.906c1.749-0.482,3.64,0.071,4.862,1.427l16.612,18.255c1.24,1.356,1.598,3.283,0.954,4.987l-8.466,27.944c-1.499,3.997,0.304,8.485,4.175,10.305l17.648,8.297c3.881,1.829,8.493,0.357,10.608-3.346l16.122-24.348c0.91-1.57,2.623-2.534,4.452-2.428l24.661,1.16c1.829,0.09,3.453,1.178,4.211,2.846l13.847,25.989c1.767,3.9,6.219,5.8,10.233,4.354L187.351,252.156z"
              />
            </g>
          </svg>
        </div>
      </ContentWrapper>
    </div>
  );
}
