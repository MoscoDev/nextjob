import {
    Button,
    Card,
    CardHeader, Flex,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Stack,
    CardBody,
    HStack,
    Select
} from "@chakra-ui/react";
import { MagnifyingGlassIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
const darkmode = localStorage.getItem("chakra-ui-color-mode");

function SearchBar({}) {
    const [isLoading, setIsLoading] = useState(false)
  return (
    <Stack>
      <Card
        variant={"filled"}
        className="rounded-lg"
        bg={darkmode === "light" ? "white" : ""}
      >
        <CardHeader>
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            flexWrap="wrap"
          >
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
                    <MagnifyingGlassIcon className="h-5 w-5 text-indigo-600" color="gray.300" />
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
            </HStack>
            <Button size={"md"} isLoading={isLoading} className="w-full">
              Search
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

export default SearchBar;
