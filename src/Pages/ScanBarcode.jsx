import axios from "axios";
import React, { useEffect, useState } from "react";

function ScanBarcode() {
  const [QRcode, setQRcode] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/qr").then((res) => {
      setQRcode(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div class="bg-white h-[100vh] dark:bg-gray-800 overflow-hidden relative flex flex-col sm:flex-row">
        <div class="text-start flex flex-col justify-center  w-full sm:w-1/2 py-12 px-4 sm:px-12 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Want to get movies ?</span>
            <span class="block text-indigo-500">It&#x27;s today or never.</span>
          </h2>
          <p class="text-xl mt-4 text-gray-400">
            I had noticed that both in the very poor and very rich extremes of
            society the mad were often allowed to mingle freely
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Scan the QR-code
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 px-4 sm:px-12 lg:py-16 lg:px-8 w-full sm:w-1/2 items-center flex-row">
          <div class="">
            <div
              className="!bg-cover !bg-no-repeat"
              style={{
                width: "300px",
                height: "300px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                background: `url(${QRcode})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanBarcode;
