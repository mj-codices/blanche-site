import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

type navigation = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: navigation[] = [
  { name: 'Home', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  function renderNavItem(item: navigation) {
    return <a
      key={item.name}
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={classNames(
        item.name === 'Contact' ? 'font-[myFirstFont] rounded-full bg-[#171717] text-white text-lg hover:font-[myFirstFont]' : 'font-[myFirstFont]',
        item.current ? 'text-[#e9905a] bold-action-text drop-shadow-lg' : 'text-[#171717] transition delay-50 duration-200 ease-in-out hover:text-[#e9905a] hover:drop-shadow-lg',
        'px-3 py-3 text-lg lg:text-xl custom-md-lg'
      )}
    >
      {item.name}
    </a>;
  }
  return (
    // The Disclosure holds nav-style elements that incorporate dropdown or popup logic
    // @ts-ignore
    <Disclosure as="nav">
      {({ open }) => (
        <>
          {/* This div holds the container that houses the navbar */}
          <div className="mx-0 px-2 sm:px-6 lg:px-8">
            {/* This div is the container for the navbar */}
            <div className="relative flex justify-between">
              {/* This div holds the DisclosureButton. This is our "hamburger" button for "mobile view" */}
              <div className="absolute top-7 right-0 flex sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-[#171717] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              {/* This div holds our logo */}
              <div className="flex-none inset-y-0 left-0 items-center">
                <Image src="/agile-logo.png" alt="company logo" width={170} height={170} />
              </div>
              {/* These divs holds the mapping logic of our "expanded view" nav links */}
              <div className="flex pt-6 inset-x-0 top-0 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex lg:space-x-20">
                    {navigation.filter((item) => item.name !== "Contact").map((item) => (
                      renderNavItem(item)
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex ml-5 pt-6 w-[170px] items-start">
                {navigation.filter((item) => item.name === "Contact").map((item) => (
                  renderNavItem(item)
                ))}
                </div>
            </div>
          </div>
          {/* The DisclosurePanel holds the dropdown logic we need for our Navbar and renders the "mobile view" nav links */}
          <Transition
            show={open}
            enter="transition-opacity duration-300 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300 ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DisclosurePanel className="absolute w-full sm:hidden bg-[#171717]">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={"a" as const}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.name === 'Contact' ? 'font-[myFirstFontBold]' : 'font-[myFirstFont]',
                      item.current ? 'text-[#e9905a] bold-action-text' : 'text-white hover:font-[myFirstFontBold] hover:text-[#e9905a]',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}


