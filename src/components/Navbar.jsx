import React from "react";
import {
  Bars3Icon
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Navbar() {
 
 
  return (
    <div className="sticky top-0 z-[11] bg-white">
      <div className="px-6 py-5 lg:px-20 border-y border-b-indigo-200/60 ">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link to="/" className="-m-1.5 p-1.5">

                <span className="sr-only n">Nextjobs</span>
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
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
