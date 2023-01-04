import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectCountry from "react-select";
import { locations } from "../../utils/location";
import Navbar from "../components/Navbar";

function Signup() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const qualifications = ["SSCE", "OND", "HND", "B.SC"];

  useEffect(() => {
    fetch("https://valid.layercode.workers.dev/list/countries?format=select")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [isPassowrdError, setIsPassowrdError] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="lg:hidden block">
        <Center className="lg:p-12 md:p-12 p-6">
          <Stack>
            <Heading textAlign={"center"} fontSize={"2xl"}>
              Create an Account to apply to jobs
            </Heading>
            <Text textAlign={"center"} fontSize={"lg"}>
              Get your next job in a bit
            </Text>
          </Stack>
        </Center>
      </div>
      <Grid
        className="px-3 pb-20 bg-grey/20 py-6 lg:px-18 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6"
        alignItems={"start"}
        columnGap={10}
      >
        <GridItem
          textAlign={"center"}
          className="lg:py-0 gap-5 sm:col-span-12 md:col-span-12 grid lg:col-span-6"
        >
          <Heading>Personal Information</Heading>
          <Text>This is information pertaining to you as an individual</Text>
          <Center>
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              className="hidden lg:block"
            />
          </Center>
        </GridItem>
        <GridItem className="lg:pt-10 lg:pb-0 sm:col-span-12 md:col-span-12 lg:col-span-6">
          <FormControl>
            <Stack gap={"1"}>
              <Grid
                columnGap={"5"}
                rowGap={"4"}
                className="px-6 lg:py-4 sm:py-0 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12"
              >
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>First Name</FormLabel>
                  <InputGroup size="md">
                    <Input pr="1rem" type={"text"} />
                  </InputGroup>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Last Name</FormLabel>
                  <InputGroup size="md">
                    <Input pr="1rem" type={"text"} />
                  </InputGroup>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Email</FormLabel>
                  <InputGroup size="md">
                    <Input
                      placeholder="you@example.com"
                      pr="1rem"
                      type={"email"}
                      required
                    />
                  </InputGroup>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input pr="1rem" type={show ? "text" : "password"} />
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
                  {isPassowrdError ? (
                    <FormHelperText>minimum of 6 Characters</FormHelperText>
                  ) : (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                  )}
                </GridItem>
              </Grid>
              <Grid
                columnGap={"5"}
                rowGap="4"
                className="px-4 lg:py-6 sm:py-0 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12"
              >
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Date of Birth</FormLabel>
                  <InputGroup size="md">
                    <Input pr="1rem" type={"date"} />
                  </InputGroup>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Gender</FormLabel>
                  <InputGroup size="md">
                    <Input pr="1rem" type={"text"} />
                  </InputGroup>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Nationality</FormLabel>
                  <SelectCountry
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) =>
                      setSelectedCountry(selectedOption)
                    }
                  />
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Location</FormLabel>
                  <Select placeholder="Select option">
                    {locations?.map((location) => (
                      <option className="p-5" key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </Select>
                </GridItem>
              </Grid>
              <Grid
                columnGap={"5"}
                rowGap="4"
                className="px-6 lg:py-6 sm:py-0 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 border-1"
              >
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Highest Qualification</FormLabel>
                  <Select>
                    {qualifications?.map((qualification) => (
                      <option
                        className="p-5"
                        key={qualification}
                        value={qualification}
                      >
                        {qualification}
                      </option>
                    ))}
                  </Select>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Current Role</FormLabel>
                  <InputGroup size="md">
                    <Input
                      placeholder="Web Developer"
                      pr="1rem"
                      type={"text"}
                      required
                    />
                  </InputGroup>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Years of Experience</FormLabel>
                  <InputGroup size="md">
                    <Input
                      placeholder="2"
                      pr="1rem"
                      type={"number"}
                      min={0}
                      max={20}
                      required
                    />
                  </InputGroup>
                </GridItem>
                <GridItem className="lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <FormLabel>Availability</FormLabel>
                  <Select placeholder="Select availability">
                    <option>1 week</option>
                    <option>2 week</option>
                    <option>3 week</option>
                    <option>1 month</option>
                    <option>2 month</option>
                    <option>3 month</option>
                  </Select>
                </GridItem>
              </Grid>
              <Flex className="px-6 lg:py-4 sm:py-0 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 justify-end">
                <Link className="flex w-2/6 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 whitespace-nowrap">
                  Register
                </Link>
              </Flex>
            </Stack>
          </FormControl>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Signup;
