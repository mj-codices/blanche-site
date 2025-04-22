import ServiceCard from "../components/ServiceCard";

export default function ServicesPage() {
    return (
        <div className="pl-2 sm:pl-10 md:pl-0 flex flex-col md:flex-row items-start md:items-baseline justify-center lg:space-x-12 md:space-x-8 md:pt-15 mx-5 md:mx-0 sm:space-y-6 space-y-4">
            <ServiceCard/>
        </div>
    )
}