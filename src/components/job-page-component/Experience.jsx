import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Duration } from "duration-converter";
import { PencilIcon } from "@heroicons/react/24/outline";
const darkmode = localStorage.getItem("chakra-ui-color-mode");

function experience({ experiences, isLoaded }) {
  return (
    <Skeleton isLoaded={isLoaded}>
      <Card
        maxW="md"
        variant={"filled"}
        className="rounded-lg"
        bg={darkmode === "light" ? "white" : ""}
      >
        <CardHeader>
          <Flex
            flex="1"
            gap="4"
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
              Work Experience
            </Heading>
            <Tooltip label={"Edit Work Experience"}>
              <PencilIcon className="h-8 w-8 hover:text-white bg-grey hover:bg-indigo-700  text-gray-700  p-2.5 rounded-full cursor-pointer" />
            </Tooltip>
          </Flex>
        </CardHeader>
        <CardBody>
          <Stack gap={2}>
            {experiences
              ?.slice()
              .reverse()
              .map((ex) => (
                <Flex
                  key={ex._id}
                  justifyContent={"space-between"}
                  alignItems={"top"}
                  width="full"
                >
                  <Flex width={"full"} columnGap={"1.5"} alignItems={"center"}>
                    <Avatar
                      size={"sm"}
                      name={ex?.company.name}
                      src={ex?.company.logo}
                    />
                    <Stack width={"full"}>
                      <Flex justifyContent={"space-between"}>
                        <Text
                          fontSize="sm"
                          textAlign={"left"}
                          textTransform="capitalize"
                          className="text-gray-800 font-medium"
                        >
                          {ex?.jobTitle}
                        </Text>
                        <Text
                          fontSize="sm"
                          alignItems={"flex-start"}
                          fontWeight={""}
                          whiteSpace={"nowrap"}
                        >
                          {Duration.fromSeconds(
                            ex?.duration * 365 * 24 * 60 * 60
                          ).toString()}
                        </Text>
                      </Flex>
                      <Text className="text-gray-400 !mt-0" fontSize={"sm"}>
                        {ex?.company.name + " - " + "Fulltime"}
                      </Text>
                    </Stack>
                  </Flex>
                </Flex>
              ))}
          </Stack>
        </CardBody>
      </Card>
    </Skeleton>
  );
}

export default experience;
