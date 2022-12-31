import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { locations, categories } from "../../utils/location";
import React, { useState } from "react";
import job from "../assets/jobs.svg";
import SearchBar from "../components/job-page-component/SearchBar";
import Profile from "../components/job-page-component/Profile";
import Experience from "../components/job-page-component/Experience";

import Navbar from "../components/Navbar";
import Skills from "../components/job-page-component/Skills";
import { PencilIcon } from "@heroicons/react/24/solid";
import Job from "../components/job-page-component/Job";
import Auth from "../components/job-page-component/Auth";

function Jobs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div style={{ maxWidth: "100vw" }}>
      <Navbar />
      <Grid
        className="px-6 bg-grey/20 py-6 lg:px-18"
        templateColumns="repeat(12, 1fr)"
        alignItems={"start"}
        gap={4}
      >
        <GridItem
          className="lg:py-0 gap-5  h-[calc(100vh-120px)] lg:grid hidden sticky top-10"
          colSpan={3}
          bg="transparent"
          overflowY={"scroll"}
        >
          <Profile />
          <Experience />
          <Skills />
        </GridItem>
        <GridItem
          colSpan={6}
          bg="transparent"
          className="lg:py-0 gap-5 lg:grid"
        >
          <Skeleton isLoaded={setTimeout(() => setIsLoaded(true), 2000)}>
            <Stack gap={2}>
              <SearchBar />
              <Job />
              <Job />
              <Job />
              <Job />
              <Job />
              <Job />
              <Job />
              <Job />
              <Job />
            </Stack>
          </Skeleton>
        </GridItem>
        <GridItem
          colSpan={3}
          bg="transparent"
          className="lg:py-0 gap-5 lg:block hidden top-10 sticky"
        >
          <Skeleton isLoaded={setTimeout(() => setIsLoaded(true), 2000)}>
            <Stack>
              <Card
                maxW="md"
                variant={"filled"}
                className="rounded-lg"
                bg={"white"}
              >
                <CardHeader>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Heading
                      className="text-indigo-700"
                      size="xs"
                      textAlign={"center"}
                      textTransform="capitalize"
                    >
                      Filters
                    </Heading>
                    <Button size={"xs"}>Clear all</Button>
                  </Flex>
                </CardHeader>
              </Card>
              <Card
                maxW="md"
                variant={"filled"}
                className="rounded-lg"
                bg={"white"}
              >
                <CardHeader>
                  <Stack spacing={4} direction={"column"}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <Heading
                        className="text-indigo-700"
                        size="xs"
                        textAlign={"center"}
                        textTransform="capitalize"
                      >
                        Experience Level
                      </Heading>
                      <Button size={"xs"}>Clear</Button>
                    </Flex>
                    <CheckboxGroup>
                      <Stack spacing={1} direction={"column"} wrap={"wrap"}>
                        <Checkbox
                          size={"sm"}
                          className="accent-indigo-800"
                          fontWeight={"semibold"}
                          value="entry-level"
                          textTransform={"capitalize"}
                        >
                          entry level
                        </Checkbox>
                        <Checkbox
                          size={"sm"}
                          textTransform={"capitalize"}
                          value="mid-level"
                          fontWeight={"semibold"}
                        >
                          intermediate
                        </Checkbox>
                        <Checkbox
                          size={"sm"}
                          fontWeight={"semibold"}
                          value="senior"
                          _checked={{
                            // bg: "teal.600",
                            accentColor: "brand.800",
                            // color: "white",
                            _focusVisible: "brand.800",
                            borderColor: "teal.600",
                          }}
                          _focus={{
                            boxShadow: "outline",
                            accentColor: "brand.800",
                            borderColor: "brand.800",
                          }}
                        >
                          Senior
                        </Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Stack>
                </CardHeader>
              </Card>
              <Card
                maxW="md"
                variant={"filled"}
                className="rounded-lg"
                bg={"white"}
              >
                <CardHeader>
                  <Stack gap={3}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <Heading
                        className="text-indigo-700"
                        size="xs"
                        textAlign={"center"}
                        textTransform="capitalize"
                      >
                        Location
                      </Heading>
                      <Button size={"xs"}>Clear all</Button>
                    </Flex>
                    <CheckboxGroup>
                      <Stack spacing={"3"} direction={["column", "row"]}>
                        <Checkbox
                          className="accent-indigo-800"
                          fontWeight={"semibold"}
                          value="entry-level"
                          textTransform={"capitalize"}
                          size={"sm"}
                        >
                          Remote
                        </Checkbox>
                        <Checkbox
                          textTransform={"capitalize"}
                          value="mid-level"
                          fontWeight={"semibold"}
                          size={"sm"}
                        >
                          Hybrid
                        </Checkbox>
                        <Checkbox
                          fontWeight={"semibold"}
                          value="senior"
                          size={"sm"}
                          _checked={{
                            // bg: "teal.600",
                            accentColor: "brand.800",
                            // color: "white",
                            _focusVisible: "brand.800",
                            borderColor: "teal.600",
                          }}
                          _focus={{
                            boxShadow: "outline",
                            accentColor: "brand.800",
                            borderColor: "brand.800",
                          }}
                        >
                          Onsite
                        </Checkbox>
                      </Stack>
                    </CheckboxGroup>
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
                  </Stack>
                </CardHeader>
              </Card>
              <Card variant={"filled"} className="rounded-lg" bg={"white"}>
                <CardHeader>
                  <Stack spacing={4} direction={"column"}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <Heading
                        className="text-indigo-700"
                        size="xs"
                        textAlign={"center"}
                        textTransform="capitalize"
                      >
                        Job Type
                      </Heading>
                      <Button size={"xs"}>Clear</Button>
                    </Flex>
                    <CheckboxGroup>
                      <Stack spacing={1} direction={"column"}>
                        <Checkbox
                          className="accent-indigo-800"
                          fontWeight={"semibold"}
                          value="entry-level"
                          textTransform={"capitalize"}
                          size={"sm"}
                        >
                          Full Time
                        </Checkbox>
                        <Checkbox
                          textTransform={"capitalize"}
                          value="mid-level"
                          fontWeight={"semibold"}
                          size={"sm"}
                        >
                          Freelance
                        </Checkbox>
                        <Checkbox
                          size={"sm"}
                          fontWeight={"semibold"}
                          value="senior"
                          _checked={{
                            // bg: "teal.600",
                            accentColor: "brand.800",
                            // color: "white",
                            _focusVisible: "brand.800",
                            borderColor: "teal.600",
                          }}
                          _focus={{
                            boxShadow: "outline",
                            accentColor: "brand.800",
                            borderColor: "brand.800",
                          }}
                        >
                          Part Time
                        </Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Stack>
                </CardHeader>
              </Card>
            </Stack>
          </Skeleton>
        </GridItem>
      </Grid>
      {/* <img src={job} alt="" /> */}
    </div>
  );
}
export default Jobs;
