"use client"
import ServiceCard from "../components/ServiceCard";
import { FaMobileAlt, FaLaptopCode, FaHeadset } from "react-icons/fa";

const serviceInfo = [
  {
    name: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "We craft high-performance mobile apps that look great and feel even better. We use modern cross-platform frameworks to deliver smooth, scalable apps without the bloat.",
  },
  {
    name: "Web Development",
    icon: FaLaptopCode,
    description:
      "We build fast, scalable, and beautiful web applications tailored to your business. As a remote-first team of modern developers, we partner with startups and growing companies to turn ideas into high-performing digital products.",
    descriptionCont:
      "Using the latest technologies and agile workflows, we move quickly without cutting corners—delivering clean code, responsive designs, and seamless user experiences. Whether you're launching an MVP or scaling an existing platform, we’re here to build what moves your business forward.",
  },
  {
    name: "App Support",
    icon: FaHeadset,
    description:
      "We offer ongoing app support to keep your product running smoothly as it grows. Our team maintains and proactively improves your app—ensuring stability, speed, and scalability.",
  },
];

export default function ServicesPage() {
  return (
    <>
    <div className="flex flex-row text-lg sm:pl-10 pb-2 sm:text-xl mb-5 justify-center md:text-2xl md:mb-0 md:pl-0 lg:text-3xl space-x-6 h-auto shadow-lg">
      <span>S</span>
      <span>E</span>
      <span>R</span>
      <span>V</span>
      <span className="lg:pl-1">I</span>
      <span className="">C</span>
      <span>E</span>
      <span>S</span>
    </div>
    <div className={`mx-auto flex flex-col items-start justify-center space-y-4 pl-1 sm:space-y-6 pr-3 md:pr-0 lg:pr-0 sm:pl-8 md:mr-0 md:ml-0 md:flex-row md:items-baseline md:space-x-8 md:pt-15 md:pl-0 lg:pl-0 lg:space-x-12 z-10`}>
      {serviceInfo.map((item, index) => {
        return (  
          <ServiceCard name={item.name} icon={item.icon} description={item.description} descriptionCont={item.descriptionCont} index={index} key={index} />
        )
      })}
    </div>
    </>
  );
}
