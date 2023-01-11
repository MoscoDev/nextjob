import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const darkmode = localStorage.getItem("chakra-ui-color-mode");

function Skills() {

    const [skills, setSkills] = useState(
      [
        "typescript",
        "javascript",
        "backend development",
        "Node.js",
        "React.js",
        "frontend development",
        "docker",
        "Express.js",
        "Nest.Js",
      ]);
  return (
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
            Skills
          </Heading>
          <Tooltip label={"Edit Skills"}>
            <PencilIcon className="h-8 w-8 hover:text-white bg-grey hover:bg-indigo-700  text-gray-700  p-2.5 rounded-full cursor-pointer" />
          </Tooltip>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack gap={2}>
          {skills?.map((skill) => (
            <Flex
              key={skill}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex columnGap={2} alignItems={"center"}>
                <CheckCircleIcon className="w-6 h-6 fill-indigo-600/60" />

                <Text
                  fontSize="sm"
                  textAlign={"left"}
                  textTransform="capitalize"
                  className="font-semibold"
                >
                  {skill}
                </Text>
              </Flex>
              <Text>{"2 mos"}</Text>
            </Flex>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Skills;
