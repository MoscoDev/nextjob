import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
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
import SelectCountry from "react-select";
import { locations } from "../../utils/location";
import Navbar from "../components/Navbar";

function Signup() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select"
    )
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
      <Center padding={"12"}>
        <Stack>
          <Heading textAlign={"center"} fontSize={"2xl"}>
            Create an Account to apply to jobs
          </Heading>
          <Text textAlign={"center"} fontSize={"lg"}>
            Get your next job in a bit
          </Text>
        </Stack>
      </Center>
      <Grid
        className="px-6 bg-grey/20 py-6 lg:px-18 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6"
        alignItems={"start"}
        gap={10}
      >
        <GridItem className="lg:py-0 gap-5 sm:col-span-12 md:col-span-12 grid lg:col-span-4">
          <Heading>Personal Information</Heading>
          <Text>This is information pertaining to you as an individual</Text>
        </GridItem>
        <GridItem className="lg:py-0 sm:col-span-12 md:col-span-12 lg:col-span-8">
          <FormControl>
            <Stack>
              <Grid
                columnGap={"5"}
                rowGap="4"
                className="px-6 py-6 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12"
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
              <StackDivider />
              <Grid
                columnGap={"5"}
                rowGap="4"
                className="px-6 py-6 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12"
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
            </Stack>
          </FormControl>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Signup;
