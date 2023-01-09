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
import {
  Tooltip,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Job from "./job-page-component/Job";
import Notification from "./Notification";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigation = [
    {
      name: "My Jobs",
      to: "/myjobs",
      icon: (
        <Tooltip label={"My Jobs"}>
          <BriefcaseIcon className="h-5 w-5" />
        </Tooltip>
      ),
    },
    {
      name: "Notifications",
      to: "#",
      icon: (
        <Tooltip label={"Notifications"}>
          <BellAlertIcon className="h-5 w-5 hover:text-white" />
        </Tooltip>
      ),
      action: btnRef,
      onClick: onOpen,
    },
    {
      name: "Saved",
      to: "/saved",
      icon: (
        <Tooltip label={"Saved Jobs"}>
          <BookmarkIcon className="h-5 w-5 active:text-indigo-700" />
        </Tooltip>
      ),
    },
    {
      name: "Profile",
      to: "/profile",

      icon: (
        <Tooltip label={"Profile"}>
          <UserIcon className="h-5 w-5" />
        </Tooltip>
      ),
    },
  ];
  return (
    <div className="sticky top-0 z-10 bg-white">
      <Drawer
        isOpen={isOpen}
        onOpen={onOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="border-y text-indigo-700 border-b-indigo-200/60">
            <Heading fontSize={"large"}>Notifications</Heading>
          </DrawerHeader>

          <DrawerBody>
            <Notification />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              onClick={() => setNotificationOpen(false)}
            >
              Cancel
            </Button>
         
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="px-6 py-5 lg:px-20 border-y border-b-indigo-200/60 ">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Nextjobs</span>
                <img className="h-8" src={logo} alt="" />
              </Link>
            </div>
            <div className="flex md:hidden lg:hidden">
              <button
                type="button"
                className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden md:flex lg:flex lg:min-w-0 lg:flex-1 lg:justify-end items-center md:gap-x-5">
              <div className="sm:hidden md:flex lg:flex lg:min-w-fit lg: md:justify-center md:gap-x-5  whitespace-nowrap">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    ref={item.action}
                    onClick={item.onClick}
                    className="font-semibold text-black-500 hover:text-white flex-nowrap p-2 hover:p-2 rounded-full bg-grey/80 m-auto hover:bg-indigo-700 ease-in"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
              <Link
                to="/employer"
                className="flex w-fit items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-1.5 text-base font-medium text-white shadow-sm hover:bg-indigo-700 whitespace-nowrap"
              >
                Post Job
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8" src={logo} alt="" />
                  </Link>
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
                      <Link
                        key={item.name}
                        to={item.to}
                        ref={item.action}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          item.onClick();
                        }}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
