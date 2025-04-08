import { Button } from '@headlessui/react'

export default function Home() {
  return (
    <div>
    <section className="flex items-center justify-center">
      <div className="pt-2 sm:pt-8 md:pt-10 lg:pt-15 landscape:pt-0">
        <span className="ml-5 sm:ml-0 fredoka text-7xl sm:text-7xl md:text-7xl lg:text-8xl tracking-wide">AGILE-</span>
        <span className="ml-5 sm:ml-0 fredoka text-6xl sm:text-7xl md:text-7xl lg:text-8xl text-[#88807B] tracking-wide">BLANCHE</span>
      </div>
    </section>
    <section className="flex items-center justify-center">
      <div className="pt-6">
        <span className="pl-2 pr-2 text-3xl sm:text-4xl md:text-4xl lg:text-6xl tracking-wider font-[myFirstFontBold] text-[#e9905a]">Software</span>
        <span className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl tracking-wider font-[myFirstFontBold] text-[#e9905a]">Development</span>
        <span className="block sm:inline pl-2 sm:pl-2 text-3xl sm:text-4xl md:text-4xl lg:text-6xl tracking-widest">Services</span>
        <div className="flex sm:pt-10 items-center justify-center">
          <p className="invisible sm:visible font-[myFirstFontBold] lg:text-[#171717] text-xs sm:text-sm md:text-base lg:text-lg landscape:invisible">Redefining app development with modern, nimble and results-driven solutions.</p>
        </div>
        <div className="flex items-center justify-center">
            <Button className="rounded-full bg-[#171717] font-[myFirstFont] text-lg text-white pl-3.5 pr-3.5 pb-3 pt-3.5 mt-1 sm:mt-10 landscape:invisible">Contact Us</Button>
        </div>
      </div>
    </section>
    </div>
  );
}
