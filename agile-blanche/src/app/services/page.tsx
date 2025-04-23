"use client"
import ServiceCard from "../components/ServiceCard";
import { FaMobileAlt, FaLaptopCode, FaHeadset } from "react-icons/fa";

// Page Resposibility: have the card data to map over, is the container div
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
  // const getClassName = (isWebDev: boolean): string => {
  //     if (flipped && isWebDev) {
  //       return "invisible";
  //     }
  //     return isWebDev
  //       ? `size-18 md:pt-1 pb-5 sm:pb-3 md:pb-0 mx-2 text-white`
  //       : `size-10 pb-2 sm:p-1 m-2 text-white`;
  //   };
  return (
    <div className={`mx-5 flex flex-col items-start justify-center space-y-4 pl-4 sm:space-y-6 sm:pr-10 sm:pl-8 md:mx-0 md:flex-row md:items-baseline md:space-x-8 md:pt-15 md:pl-0 lg:space-x-12`}>
      {serviceInfo.map((item, index) => {
        return (
          <ServiceCard name={item.name} icon={item.icon} description={item.description} descriptionCont={item.descriptionCont} index={index} key={index} />
        )
      })}
    </div>
  );
}
