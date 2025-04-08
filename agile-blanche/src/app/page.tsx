import { Button } from '@headlessui/react'

export default function Home() {
  return (
    <div>
    <section className="flex items-center justify-center">
      <div className="lg:pt-20 pl-12">
        <span className="fredoka text-6xl lg:text-8xl tracking-wide">AGILE-</span>
        <span className="fredoka text-[#88807B] text-6xl lg:text-8xl tracking-wide">BLANCHE</span>
      </div>
    </section>
    <section className="flex items-center justify-center">
      <div className="pt-10 pl-2">
        <span className="font-[myFirstFontBold] text-[#e9905a] text-4xl lg:text-5xl tracking-wider">Software Development </span>
        <span className="text-4xl lg:text-5xl tracking-widest">Services</span>
        <div className="flex items-center justify-center pt-8 pl-1">
          <p className="font-[myFirstFontBold] lg:text-[#171717] ">Redefining software development with modern, nimble and results-driven solutions</p>
        </div>
        <div className="flex items-center justify-center">
            <Button className="rounded-full bg-[#171717] font-[myFirstFont] text-white transition delay-50 duration-150 ease-in-out hover:drop-shadow-lg hover:text-[#e9905a] text-lg pl-3.5 pr-3.5 pb-3 pt-3.5 mt-10">Contact Us</Button>
        </div>
      </div>
    </section>
    </div>
  );
}
