/* This example requires Tailwind CSS v3.0+ */
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
// import img from "next/img";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/img/logo.svg";
import { locations, categories } from "../../utils/location";
import Job from "../components/job-page-component/Job";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";

const navigation = [
  { name: "Contact", href: "/contact" },
  { name: "notifications", href: "#" },
  { name: "Job Alerts", href: "#" },
  { name: "Employers", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    var data = "";

    var config = {
      method: "get",
      url: "https://nextjobs.onrender.com/api/v1/jobs/?limit=9",
      data: data,
    };

    axios(config)
      .then(function (response) {
        setJobs(response.data.data);
        console.log(jobs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Find your next job with NextJobs
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  the easy and effective way to connect with potential
                  employers.
                </p>
              </div>

              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(100%-42rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-indigo-500/60 -mt-20 rounded-lg">
            <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 sm:py-2 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 gap-10 rounded">
              <div
                className="mx-auto max-w-7xl flex flex-col flex-1 rounded-md justify-end
              "
              >
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="job title, keywords, or company"
                  className="mt-1 block w-full rounded-md border lg:text-sm text-xs font-normal border-gray-300 bg-white py-2 lg:py-2.5 lg:px-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>{" "}
              <div
                className="mx-auto max-w-7xl flex flex-col flex-1
              "
              >
                <select
                  id="categories"
                  name="categories"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border sm:text-sm text-sm lg:font-medium font-normal border-gray-300 bg-white py-2 lg:py-2.5 lg:px-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      className="text-sm sm:text-xs capitalize"
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className="mx-auto max-w-7xl flex flex-col flex-1
              "
              >
                <select
                  id="location"
                  name="location"
                  autoComplete="country-name"
                  defaultValue={"Lagos"}
                  className="mt-1 block w-full rounded-md border sm:text-sm text-sm lg:font-medium font-normal border-gray-300 bg-white py-2 lg:py-2.5 lg:px-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                >
                  {locations.map((location) => (
                    <option
                      key={location}
                      className="text-sm sm:text-xs sm:w-16"
                    >
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <a
                href="#"
                className="mt-3 flex items-center justify-center rounded-md border border-transparent p-2 bg-indigo-600 lg:py-3 lg:px-8 lg:text-base text-xs font-normal text-white shadow-sm hover:bg-indigo-700"
              >
                Find jobs
              </a>
            </div>
          </div>
        </div>
      </main>
      <Box className="rounded-md lg:p-10 md:p-5 sm:p-6 mt-5 z-0">
        <Heading textAlign={"center"} className="px-6 py-10 lg:px-8">
          Find the right job vacancies in Nigeria
        </Heading>
        <Grid 
          className="lg:grid-cols-12 lg:p-10 md:p-6 sm:p-10 rounded-lg bg-grey/20 gap-4 md:grid-cols-8  sm:grid-cols-4"
          alignItems={"start"}
        >
          {jobs.map(
            (job, i) => (
             
              <GridItem className="col-span-4" key={job._id}>
                <Job job= {job} />
              </GridItem>
            )
            
          )}
        </Grid>
      </Box>
    </div>
  );
}
