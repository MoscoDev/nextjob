import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import {
  Bars3Icon,
  XMarkIcon,
  BookmarkIcon,
  UserIcon,
  BellAlertIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import { Tooltip } from "@chakra-ui/react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "My Jobs",
      href: "/contact",
      icon: (
        <Tooltip label={"My Jobs"}>
          <BriefcaseIcon className="h-5 w-5" />
        </Tooltip>
      ),
    },
    {
      name: "Notifications",
      href: "/notification",
      icon: (
        <Tooltip label={"Notifications"}>
          <BellAlertIcon className="h-5 w-5 hover:text-white" />
        </Tooltip>
      ),
    },
    {
      name: "Saved",
      href: "/saved",
      icon: (
        <Tooltip label={"Saved Jobs"}>
          <BookmarkIcon className="h-5 w-5 active:text-indigo-700" />
        </Tooltip>
      ),
    },
    {
      name: "Profile",
      href: "/profile",
      icon: (
        <Tooltip label={"Profile"}>
          <UserIcon className="h-5 w-5" />
        </Tooltip>
      ),
    },
  ];
  return (
    <div className="px-6 py-5 lg:px-20">
      <div>
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end items-center lg:gap-x-5">
            <div className="hidden lg:flex lg:min-w-fit lg: lg:justify-center lg:gap-x-5  whitespace-nowrap">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-black-500 hover:text-white flex-nowrap p-2 hover:p-2 rounded-full bg-grey/80 m-auto hover:bg-indigo-700 ease-in"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="flex w-fit items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-1.5 text-base font-medium text-white shadow-sm hover:bg-indigo-700 whitespace-nowrap"
            >
              Post Job
            </a>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8" src={logo} alt="" />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}

export default Navbar;
