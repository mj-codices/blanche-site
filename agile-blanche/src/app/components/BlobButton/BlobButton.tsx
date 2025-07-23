"use client";
import { useUIStore } from "@/app/store/ui-store";
import "./BlobButton.css";

interface BlobButtonProps {
  text: string;
  onClick?: () => void;
  isBlack?: boolean;
  isWhite?: boolean;
  isHome?: boolean;
  isNav?: boolean;
  isActiveNav?: boolean;
  disableHover?: boolean;
}

export const BlobButton = ({
  isNav = false,
  isHome = false,
  isWhite = false,
  isBlack = false,
  isActiveNav = false,
  disableHover = false,
  text,
  onClick,
}: BlobButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`buttons p-2 sm:p-3 md:inline lg:p-3`}
    >
      <button
        className={`${isWhite ? "blob-btn-text-white blob-btn px-3 py-2 font-[myFirstFont] text-sm sm:px-4 sm:py-3 sm:text-base md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-3 lg:text-lg" : ""} 
                    ${isBlack ? "blob-btn blob-btn-black px-3 py-2 font-[myFirstFont] text-sm sm:px-4 sm:py-3 sm:text-base md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-3 lg:text-lg" : ""} 
                    ${isHome ? "blob-btn-text-home blob-btn px-4 py-3 font-[myFirstFont] text-lg hover:font-[myFirstFontBold]" : ""} 
                    ${isNav ? "blob-btn blob-btn-text font-[myFirstFont] text-sm sm:px-3 sm:py-2 md:px-4 md:py-3 md:text-base lg:px-4 lg:py-3 lg:text-lg" : ""} 
                    ${isActiveNav ? "blob-btn-text-active" : ""} 
                    ${disableHover ? "disable-hover" : ""}`}
      >
        {text}
        <span
          className={`${isBlack || isHome || isActiveNav ? "blob-btn_inner-black" : ""} blob-btn__inner`}
        >
          <span className="blob-btn__blobs">
            <span
              className={`${isBlack ? "blob-btn__blob-orange" : ""} ${isHome ? "blob-btn_blob-home" : ""} blob-btn__blob`}
            ></span>
            <span
              className={`${isBlack ? "blob-btn__blob-orange" : ""} ${isHome ? "blob-btn_blob-home" : ""} blob-btn__blob`}
            ></span>
            <span
              className={`${isBlack ? "blob-btn__blob-orange" : ""} ${isHome ? "blob-btn_blob-home" : ""} blob-btn__blob`}
            ></span>
            <span
              className={`${isBlack ? "blob-btn__blob-orange" : ""} ${isHome ? "blob-btn_blob-home" : ""} blob-btn__blob`}
            ></span>
          </span>
        </span>
      </button>
    </div>
  );
};
