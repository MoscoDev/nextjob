import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Divider,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Auth() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Card variant={"filled"} className="rounded-lg" bg={"white"}>
      <CardHeader>
        <Stack spacing={3}>
          <Heading className="text-indigo-700" size="md">
            Log in to apply now
          </Heading>
          <Text fontSize={"xs"}>Use your social account to log in as a Seeker.</Text>
          <HStack justifyContent={"space-between"}>
            <Button variant={"outline"} className={" w-full"}>
              <svg
                className="w-6"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 506.86 506.86"
              >
                <title>facebookRound-color</title>
                <path
                  className="cls-1"
                  d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                ></path>
                <path
                  className="cls-2"
                  d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                ></path>
              </svg>
            </Button>{" "}
            <Button variant={"outline"} className={" w-full"}>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 326667 333333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                  fill="#4285f4"
                ></path>
                <path
                  d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                  fill="#34a853"
                ></path>
                <path
                  d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                  fill="#fbbc04"
                ></path>
                <path
                  d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                  fill="#ea4335"
                ></path>
              </svg>
            </Button>{" "}
            <Button variant={"outline"} className={" w-full"}>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333333 333333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                  fill="#0077b5"
                ></path>
              </svg>
            </Button>
          </HStack>
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack spacing={3}>
          <Input placeholder="Email Address" size="md" pr="4.5rem" />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4rem">
              <Button variant={"ghost"} size="sm" onClick={handleClick}>
                {show ? (
                  <EyeSlashIcon className="w-3 h-3" />
                ) : (
                  <EyeIcon className="w-3 h-3" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Link className="text-sm font-bold text-indigo-700">
            {" "}
            Forgot Password?
          </Link>
          <Checkbox size={"sm"} value="mid-level" fontWeight={"normal"}>
            Keep me logged in
          </Checkbox>
          <a
            href="#"
            className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent p-2 bg-indigo-600 lg:py-2 lg:px-4 lg:text-md text-sm font-normal text-white shadow-sm hover:bg-indigo-700"
          >
            Log in
          </a>
        </Stack>
      </CardBody>
      <CardFooter textAlign={"center"} bg={"chakra-subtle-bg"}>
        <span className="text-sm w-full">
          Don't have an account?
          <Link className="text-sm text-indigo-700"> sign up to apply</Link>
        </span>
      </CardFooter>
    </Card>
  );
}

export default Auth;
