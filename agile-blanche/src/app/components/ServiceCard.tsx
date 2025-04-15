const serviceInfo = [
    {name: "Web Development", description: "We build fast, scalable, and beautiful web applications tailored to your business."},
    {name: "Mobile Development", description: "We craft high-performance mobile apps that look great and feel even better."},
    {name: "App Support", description: "We offer ongoing app support to keep your product running smoothly as it grows."}
]

export default function ServiceCard() {
    return (
        <>
        {serviceInfo.map((item, index) => 
            <div key={index} className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                <h2 className="absolute top-0 left-1/2 -translate-x-1/2">{item.name}</h2>
                <p className="text-center">{item.description}</p>
            </div>
        )}
        </>
    )
}