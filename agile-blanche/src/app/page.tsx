"use client";
import { BlobButton } from "./components/BlobButton/BlobButton";
import { UIState, useUIStore } from "./store/ui-store";
import FadeInDirectionalWrapper from "./components/Wrappers/FadeInDirectionalWrapper";

export default function Home() {
  const openContactDrawer = useUIStore(
    (state: UIState) => state.openContactDrawer,
  );
  return (
    <>
      <section className="flex items-center justify-center">
        <FadeInDirectionalWrapper direction="right" delay={0.3}>
          <div className="pt-2 sm:pt-15 md:pt-15 lg:pt-15 lg:pb-7">
            <span className="fredoka ml-5 text-7xl tracking-wide sm:ml-0 sm:text-6xl md:text-7xl lg:text-8xl">
              AGILE-
            </span>
            <span className="fredoka ml-5 text-6xl tracking-wide text-[#88807B] sm:ml-0 sm:text-6xl md:text-7xl lg:text-8xl">
              BLANCHE
            </span>
          </div>
        </FadeInDirectionalWrapper>
      </section>
      <section className="flex items-center justify-center">
        <FadeInDirectionalWrapper direction="left" delay={1}>
          <div className="pt-6">
            <span className="pr-3 pl-2 font-[myFirstFontBold] text-3xl tracking-wide text-[#e9905a] sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-wider">
              Software
            </span>
            <span className="pr-3 font-[myFirstFontBold] text-3xl tracking-wide text-[#e9905a] sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-wider">
              Development
            </span>
            <span className="block pl-2 text-3xl tracking-wider sm:inline sm:pl-2 sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-widest">
              Services
            </span>
          </div>
        </FadeInDirectionalWrapper>
      </section>
      <section className="flex items-center justify-center">
        <FadeInDirectionalWrapper direction="right" delay={1}>
          <div className="flex items-center justify-center sm:pt-10">
            <p className="invisible font-[myFirstFontBold] text-xs sm:visible sm:text-sm md:text-base lg:text-lg lg:text-[#171717]">
              Redefining app development with modern, nimble and results-driven
              solutions.
            </p>
          </div>
        </FadeInDirectionalWrapper>
      </section>
        <section>
      <FadeInDirectionalWrapper direction="down" delay={1.2}>
          <div className="flex items-center justify-center pt-6 pb-10 sm:pt-5 md:pt-8 lg:pt-10">
            <BlobButton isHome text="Contact Us" onClick={openContactDrawer} />
          </div>
      </FadeInDirectionalWrapper>
        </section>
    </>
  );
}
