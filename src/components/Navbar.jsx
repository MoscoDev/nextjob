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
                <span className="sr-only">Nextjobs</span>
                <img
                  className="h-8"
                  src={
                    "data:image/png;base64,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"
                  }
                  alt=""
                />
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
