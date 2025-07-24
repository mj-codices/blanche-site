import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlobButton } from "../BlobButton/BlobButton";
import FadeInDirectionalWrapper from "../Wrappers/FadeInDirectionalWrapper";
import "./Navbar.css";
import { UIState, useUIStore } from "@/app/store/ui-store";
import { useRef } from "react";

type navigation = {
  name: string;
  href: string;
};

const navigation: navigation[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const openContactDrawer = useUIStore(
    (state: UIState) => state.openContactDrawer,
  );
  const isDrawerOpen = useUIStore(
    (state: UIState) => state.isContactDrawerOpen,
  );
  const closeContactDrawer = useUIStore(
    (state: UIState) => state.closeContactDrawer,
  );
  const disclosureButtonRef = useRef<HTMLButtonElement>(null);
  const handleContactClick = (e?: MouseEvent) => {
    e?.stopPropagation(); // Prevent parent from catching the click
    if (isDrawerOpen) {
      closeContactDrawer();
    } else {
      openContactDrawer();
    }
  };
  function renderNavItem(item: navigation) {
    const isActive = pathname === item.href;
    return (
      <Link
        key={item.name}
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        onClick={closeContactDrawer}
        className={classNames(
          item.name === "Contact"
            ? "hidden rounded-full bg-[#171717] font-[myFirstFont] text-white hover:text-white"
            : "font-[myFirstFont]",
          isActive
            ? isDrawerOpen
              ? "text-[#171717] opacity-25 transition duration-600 hover:text-[#e9905a] hover:opacity-100" // Neutral color when drawer is open
              : "text-[#e9905a]" // Highlight when active and drawer is closed
            : "text-[#171717] transition duration-600 hover:text-[#e9905a] hover:drop-shadow-lg",
          "px-3 py-2.5 text-sm md:text-base lg:text-lg",
        )}
      >
        {item.name}
      </Link>
    );
  }

  return (
    // The Disclosure holds nav-style elements that incorporate dropdown or popup logic
    // @ts-ignore
    <Disclosure as="nav">
      {({ open }: any) => (
        <>
          {open && (
            <div
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm sm:hidden"
              onClick={() => {
                disclosureButtonRef.current?.click();
              }}
            />
          )}
          {/* This div holds the container that houses the navbar */}
          <div
            onClick={closeContactDrawer}
            className={`relative z-50 mx-0 px-2 sm:px-6 lg:px-8`}
          >
            {/* This div is the container for the navbar */}
            <div className="relative flex justify-between">
              {/* This div holds the DisclosureButton. This is our "hamburger" button for "mobile view" */}
              <div className="absolute top-7 right-0 flex pr-4 sm:hidden">
                <DisclosureButton
                  onClick={closeContactDrawer}
                  ref={disclosureButtonRef}
                  className="group relative inline-flex cursor-pointer items-center justify-center rounded-md bg-[#171717] p-2 text-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <div id="nav-icon3" className={open ? "open" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </DisclosureButton>
              </div>
              {/* This div holds our logo */}
              <div className="inset-y-0 left-0 flex-none items-center">
                <Image
                  src="/assets/agile-logo.png"
                  alt="company logo"
                  width={170}
                  height={170}
                />
              </div>
              {/* These divs holds the mapping logic of our "expanded view" nav links */}
              <div className="inset-x-0 top-0 flex items-center justify-center pt-6 sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex sm:space-x-4 md:space-x-12 lg:space-x-15">
                    {navigation
                      .filter((item) => item.name !== "Contact")
                      .map((item) => renderNavItem(item))}
                  </div>
                </div>
              </div>
              <div className="ml-5 hidden w-[170px] items-start pt-4 sm:flex sm:pl-10 md:pl-0">
                <BlobButton
                  isActiveNav={isDrawerOpen}
                  disableHover={isDrawerOpen}
                  isNav
                  text="Contact"
                  onClick={(e) => handleContactClick(e)}
                />
              </div>
            </div>
          </div>
          {/* The DisclosurePanel holds the dropdown logic we need for our Navbar and renders the "mobile view" nav links */}
          <Transition
            show={open}
            enter="transition-opacity duration-600 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-600 ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DisclosurePanel className="absolute z-40 w-screen bg-[#171717] sm:hidden">
              <div className="space-y-1 px-2 pt-5 pb-4">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  const isLast = index === navigation.length - 1;

                  const isContact = item.name === "Contact";

                  return (
                    <div key={item.name}>
                      {isContact ? (
                        <DisclosureButton
                          as="button"
                          onClick={() => {
                            openContactDrawer();
                            // Close the Disclosure dropdown
                          }}
                          className={classNames(
                            "font-lg block w-full rounded-md pt-3 pb-2 text-center text-base tracking-[1rem] uppercase",
                            "text-white transition duration-600 ease-in-out hover:text-[#e9905a]",
                            "font-[myFirstFontBold]",
                          )}
                        >
                       <FadeInDirectionalWrapper direction="down" delay={.6}>
                            {item.name}
                       </FadeInDirectionalWrapper>
                        
                        </DisclosureButton>
                      ) : (
                        <DisclosureButton
                          as="a"
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={classNames(
                            "font-lg block rounded-md pt-3 pb-2 text-center text-base tracking-[1rem] uppercase",
                            isActive
                              ? "text-[#e9905a]"
                              : "text-white transition duration-600 ease-in-out hover:text-[#e9905a]",
                            "font-[myFirstFont]",
                          )}
                        >
                      <FadeInDirectionalWrapper direction="down" delay={.6}>
                            {item.name}
                       </FadeInDirectionalWrapper>
                        </DisclosureButton>
                      )}

                      {!isLast && (
                        <div className="my-3 flex justify-center">
                          <div className="h-px w-50 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
