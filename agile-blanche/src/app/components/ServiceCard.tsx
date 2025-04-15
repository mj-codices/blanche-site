const serviceInfo = [
    {name: "Mobile Development", description: "We craft high-performance mobile apps that look great and feel even better."},
    {name: "Web Development", description: "We build fast, scalable, and beautiful web applications tailored to your business."},
    {name: "App Support", description: "We offer ongoing app support to keep your product running smoothly as it grows."}
]

export default function ServiceCard() {
    return (
        <>
        {serviceInfo.map((item, index) => 
            <div key={index} className={item.name === 'Web Development' ? `
                flex flex-col relative block w-75 h-95 px-4 shadow-lg border border-gray-200 rounded-lg bg-gray-100` : `
                relative block w-60 h-80 px-2 bg-white shadow-lg border border-gray-200 rounded-lg text-[#88807B]`}>
                <h2 className="text-center text-base pt-20 font-[myFirstFontBold] text-[#171717]">{item.name}</h2>
                <p className="text-center text-sm pt-5">{item.description}</p>
                {index === 1 && (
                 
                    <button 
                    className="flex mt-auto mb-5 mx-25 px-3 pb-2 pt-3 justify-center text-xs rounded-full bg-[#e9905a] text-white font-[myFirstFontBold]"
                    >MORE</button>)
                    
                    }
            </div>
        )}
        </>
    )
}