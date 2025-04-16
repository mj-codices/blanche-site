import { FaMobileAlt, FaLaptopCode, FaHeadset } from "react-icons/fa";

const serviceInfo = [
    {   name: "Mobile Development", 
        icon: FaMobileAlt, 
        description: "We craft high-performance mobile apps that look great and feel even better."},
    {   name: "Web Development", 
        icon: FaLaptopCode,
        description: "We build fast, scalable, and beautiful web applications tailored to your business."},
    {   name: "App Support",
        icon: FaHeadset,
        description: "We offer ongoing app support to keep your product running smoothly as it grows."}
]

export default function ServiceCard() {
    
    return (
        <>
        {serviceInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                <div key={index} className={item.name === 'Web Development' ? `
                flex flex-col relative block w-75 h-95 px-4 shadow-lg border border-gray-200 rounded-lg bg-gray-100 text-[#88807B]` : `
                relative block w-60 h-80 px-2 bg-white shadow-lg border border-gray-200 rounded-lg text-[#88807B]`}>
                <div className={item.name === 'Web Development' ? `
                flex bg-[#171717] rounded-lg mx-22 pt-2 px-1 absolute -top-7 size-24` : `
                flex bg-[#171717] rounded-lg mx-20 py-1 px-1 absolute size-16 -top-5`}>
                    <Icon className={item.name ==='Web Development' ? `size-18 px-1 pt-1 pb-0 mx-3 text-white` : `size-10 p-1 m-2 text-white`}/>    
                </div>
                <h2 className={item.name === 'Web Development' ? `
                text-center text-lg pt-27 font-[myFirstFontBold] text-[#171717]` : `
                text-center text-base pt-20 font-[myFirstFontBold] text-[#171717]`}
                >{item.name}</h2>
                <p className="text-center text-sm pt-5">{item.description}</p>
                {index === 1 && (
                    <button 
                    className="flex mt-auto mb-5 mx-25 px-3 pb-2 pt-3 justify-center text-xs rounded-full bg-[#e9905a] text-white font-[myFirstFontBold]"
                    >MORE</button>)
                    
                    }
            </div>)
            }
        )}
        </>
    )
}