"use client"
import { BlobButton } from './components/BlobButton/BlobButton';
import { useUIStore } from './store/ui-store';
import PageWrapper from "./components/PageWrapper";

export default function Home() {
    const openContactDrawer = useUIStore((state) => state.openContactDrawer);
  return (
    <PageWrapper>
    <div>
    <section className="flex items-center justify-center">
      <div className="pt-2 sm:pt-15 md:pt-15 lg:pt-15 lg:pb-7">
        <span className="ml-5 sm:ml-0 fredoka text-7xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide">AGILE-</span>
        <span className="ml-5 sm:ml-0 fredoka text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-[#88807B] tracking-wide">BLANCHE</span>
      </div>
    </section>
    <section className="flex items-center justify-center">
      <div className="pt-6">
        <span className="pl-2 pr-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide lg:tracking-wider font-[myFirstFontBold] text-[#e9905a]">Software</span>
        <span className="pr-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide lg:tracking-wider font-[myFirstFontBold] text-[#e9905a]">Development</span>
        <span className="block sm:inline pl-2 sm:pl-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider lg:tracking-widest">Services</span>
        <div className="flex sm:pt-10 items-center justify-center">
          <p className="invisible sm:visible font-[myFirstFontBold] lg:text-[#171717] text-xs sm:text-sm md:text-base lg:text-lg">Redefining app development with modern, nimble and results-driven solutions.</p>
        </div>
        <div className="flex items-center justify-center pb-10 pt-6 sm:pt-5 md:pt-8 lg:pt-10">
            <BlobButton isHome text="Contact Us" onClick={openContactDrawer} />
        </div>
      </div>
    </section>
    </div>
    </PageWrapper>
  );
}