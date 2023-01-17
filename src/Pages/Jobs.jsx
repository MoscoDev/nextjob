import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { locations } from "../../utils/location";
import { useEffect, useState } from "react";
import SearchBar from "../components/job-page-component/SearchBar";
import Profile from "../components/job-page-component/Profile";
import Experience from "../components/job-page-component/Experience";

import Skills from "../components/job-page-component/Skills";
import Job from "../components/job-page-component/Job";
import Auth from "../components/Auth";
import { getJobs, getSavedJobs, getUserProfile } from "../../utils/requests";

function Jobs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isProfileLoaded, setIsProfileLoaded] = useState(null);
  useEffect(() => {
    //  get jobs with get jobs function in ../../utils/requests and  setJobs
    getUserProfile("6397ccb3f56ecc5a25a5f377").then((res) => {
      setProfile(res.data);
      setIsProfileLoaded(true)
    });
    getJobs().then((res) => {
      setJobs(res.data);
      setIsLoaded(true);
    });
    getSavedJobs().then((res) => {
      setSavedJobs(res.data);
    });
    //  set isLoggedIn to true if token is present in local storage
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != "undefined"
    ) {
      setisLoggedIn(true);
    }
  }, []);
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Grid
        variant={"outline"}
        className="sm:px-10 bg-grey/20 sm:py-0 lg:py-6 lg:px-18 lg:grid-cols-12 sm:grid-cols-6"
        alignItems={"start"}
        gap={4}
      >
        <GridItem
          className="pb-5 gap-5 h-[85vh] lg:grid hidden sticky top-[calc(78px+1.5rem)] lg:col-span-3"
          bg="\transparent"
        >
          {!isLoggedIn && <Auth />}
          {isLoggedIn && (
            <Stack
              paddingRight={"3"}
              id="scroller"
              onMouseOver={() => {
                document
                  .getElementById("scroller")
                  .classList.add("scrollbar-thumb-indigo-600");
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  document
                    .getElementById("scroller")
                    .classList.remove("scrollbar-thumb-indigo-600");
                }, 500);
              }}
              className="scrollbar-thin ease scroll-smooth
               scrollbar-corner-rounded-md transition-all  duration-1000 scrollbar-thumb-indigo-600/1 scrollbar-track-indigo-200/0 scrollbar-thumb-rounded"
              overflowY={"scroll"}
            >
              <Profile
                name={`${profile?.firstName} ${profile?.lastName}`}
                role={
                  profile?.experiences[profile?.experiences.length - 1].jobTitle
                }
                img={""}
                isLoaded={isProfileLoaded}
              />
              <Experience
                experiences={profile?.experiences.reverse()}
                isLoaded={isProfileLoaded}
              />
              <Skills skills={profile?.skills} isLoaded={isProfileLoaded} />
            </Stack>
          )}
        </GridItem>
        <GridItem
          bg="transparent"
          className="lg:py-0 md:py-6 sm:px-0 lg:col-span-6 md:col-span-4 sm:col-span-6 gap-5 lg:block w-full"
        >
          <Stack gap={2}>
            <div className="top-6 sticky z-10">
              <SearchBar />
            </div>

            {/* <Skeleton isLoaded={isLoaded} fadeDuration={2}> */}
            {jobs.map((job, i) => (
              
                <Job
                  key={job?._id}
                  isLoaded={isLoaded}
                  job={job}
                  saved={savedJobs.some(
                    (savedjob) => savedjob?.job._id === job._id
                  )}
                />
              
            ))}
            {/* </Skeleton> */}
          </Stack>
        </GridItem>
        <GridItem
          bg="transparent"
          className="pb-5 gap-5 h-[85vh] md:block lg:grid hidden sticky top-[calc(78px+1.5rem)] md:col-span-2 lg:col-span-3"
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
                      <Stack
                        gap={"2"}
                        marginStart={"0px"}
                        marginInlineStart={"0"}
                        direction={["row"]}
                        wrap={"wrap"}
                      >
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
                          marginStart={"0px"}
                          marginInlineStart={"0"}
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
