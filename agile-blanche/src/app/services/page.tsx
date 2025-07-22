"use client";
import ServiceCard from "../components/ServiceCard";
import { FaMobileAlt, FaLaptopCode, FaHeadset } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

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
      <div className="flex justify-center pl-10 shadow-lg">
        <span className="mb-5 text-center text-lg tracking-[2rem] uppercase sm:text-xl md:text-2xl lg:text-3xl">
          Services
        </span>
      </div>

      <PageWrapper>
      <div
        className={`z-10 mt-3 sm:mt-5 md:mt-0 mx-auto flex flex-col items-start justify-center space-y-4 pr-3 pb-10 pl-1 sm:space-y-6 sm:pl-8 md:mr-0 md:ml-0 md:flex-row md:items-baseline md:space-x-8 md:pt-15 md:pr-0 md:pl-0 lg:space-x-12 lg:pr-0 lg:pl-0`}
      >
        {serviceInfo.map((item, index) => {
          return (
            <ServiceCard
              name={item.name}
              icon={item.icon}
              description={item.description}
              descriptionCont={item.descriptionCont}
              index={index}
              key={index}
            />
          );
        })}
      </div>
      </PageWrapper>
      
    </>
  );
}
