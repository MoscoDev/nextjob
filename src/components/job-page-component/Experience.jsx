import {
    Avatar, Card,
    CardBody, CardHeader, Flex,
    Heading, Skeleton, Stack,
    Text,
    Tooltip
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Duration } from "duration-converter";
import { PencilIcon } from "@heroicons/react/24/outline";
const darkmode = localStorage.getItem("chakra-ui-color-mode");

function experience({ experiences, isLoaded }) {

 
  
  let re = experiences?.reverse();
  console.log(re); 
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
            {experiences?.slice().reverse().map((ex) => (
              <Flex key={ex._id} justifyContent={"space-between"} alignItems={"top"}>
                <Flex columnGap={"0.5"} alignItems={"center"}>
                  <Avatar
                    size={"md"}
                    name={ex?.companyName.split(",")[0]}
                    src=""
                  />
                  <div>
                    <Text
                      fontSize="sm"
                      textAlign={"left"}
                      textTransform="capitalize"
                      className="text-gray-800 font-bold"
                    >
                      {ex?.jobTitle}
                    </Text>
                    <Text className="text-gray-400" fontSize={"sm"}>
                      {ex?.companyName + " - " + "Fulltime"}
                    </Text>
                  </div>
                </Flex>
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
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Skeleton>
  );
}

export default experience;
