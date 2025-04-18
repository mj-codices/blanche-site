import ServiceCard from "../components/ServiceCard";

export default function ServicesPage() {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:space-x-12 md:space-x-8 md:pt-15 sm:mx-5 md:mx-0">
            <ServiceCard/>
        </div>
    )
}