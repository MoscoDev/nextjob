import {
  Button,
  Card,
  CardHeader,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  CardBody,
  HStack,
  Select,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Skeleton,
  CheckboxGroup,
  Checkbox,
  DrawerFooter,
} from "@chakra-ui/react";
import { MagnifyingGlassIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { locations } from "../../../utils/location";

const darkmode = localStorage.getItem("chakra-ui-color-mode");

function SearchBar({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  return (
    <>
      <Drawer
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        placement={"left"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className="border-y text-indigo-700 border-b-indigo-200/60">
            <Heading fontSize="large" textTransform="capitalize">
              Filters
            </Heading>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody padding={3}>
            <Skeleton isLoaded={true}>
              <Stack padding={"0"}>
                <Card
                  maxW="md"
                  variant={"filled"}
                  className="rounded-lg"
                  bg={"white"}
                  padding={0}
                >
                  <CardHeader padding={3}>
                    <Stack spacing={4} direction={"column"}>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Heading
                          className="text-indigo-700"
                          size="sm"
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
                  padding={0}
                  maxW="md"
                  variant={"filled"}
                  className="rounded-lg"
                  bg={"white"}
                >
                  <CardHeader padding={3}>
                    <Stack gap={3}>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Heading
                          className="text-indigo-700"
                          size="sm"
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
                <Card
                  padding={0}
                  variant={"filled"}
                  className="rounded-lg"
                  bg={"white"}
                >
                  <CardHeader padding={3}>
                    <Stack spacing={4} direction={"column"}>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Heading
                          className="text-indigo-700"
                          size="sm"
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
          </DrawerBody>
          <DrawerFooter
            onClick={onClose}
            className="bg-indigo-600 text-white"
            justifyContent={"center"}
          >
            Apply Filter
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Stack borderBottom={"1"}>
        <Card
          variant={"filled"}
          className="rounded-lg border-b"
          bg={darkmode === "light" ? "white" : ""}
        >
          <CardHeader paddingBottom={0}>
            <Flex columnGap={2} alignItems="center" flexWrap="wrap">
              <Heading
                className="text-indigo-700"
                size="md"
                textAlign={"center"}
                textTransform="capitalize"
              >
                Search Jobs
              </Heading>
            </Flex>
          </CardHeader>
          <CardBody>
            <Stack>
              <HStack>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    fontSize={"sm"}
                    children={
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-indigo-600"
                        color="gray.300"
                      />
                    }
                  />
                  <Input
                    focusBorderColor="brand.800"
                    type=""
                    placeholder="job title, keywords, or company"
                  />
                </InputGroup>
                <Select
                  width={"fit-content"}
                  placeholder="Date Posted"
                  focusBorderColor="brand.800"
                  size="md"
                >
                  <option value="PastWeek">Any time</option>
                  <option value="PastWeek">Past week</option>
                  <option value="PastWeek">Past 24 hours</option>
                  <option value="PastWeek">Past month</option>
                </Select>
                <div className="lg:hidden sm:block md:hidden">
                  <IconButton
                    onClick={() => handleClick("full")}
                    icon={
                      <AdjustmentsHorizontalIcon className="w-6 h-6 text-indigo-600" />
                    }
                  />
                </div>
              </HStack>
              <Button size={"md"} isLoading={isLoading} className="w-full">
                Search
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
}

export default SearchBar;
