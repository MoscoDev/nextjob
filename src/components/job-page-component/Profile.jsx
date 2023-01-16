import { Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const darkmode = localStorage.getItem("chakra-ui-color-mode");
function Profile({name, role, img, isLoaded}) {
  return (
    <Skeleton isLoaded={isLoaded} className={"min-h-[265]"}>
      <Card
        variant={"filled"}
        maxW="md"
        align="center"
        className="rounded-lg"
        bg={darkmode === "light" ? "white" : ""}
      >
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4">
              <Avatar size={"lg"} name={name || ""} src="" />
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Heading size="md" textAlign={"center"} textTransform="uppercase">
            {name}
          </Heading>
          <Text
            fontSize={"sm"}
            align={"center"}
            className="text-gray-400 capitalize"
          >
            {role}
          </Text>
        </CardBody>
        <CardFooter>
          <Link className="py-1.5 px-10 cursor-pointer rounded-full  bg-indigo-600 hover:bg-indigo-700 text-white ">
            Edit Profile
          </Link>
        </CardFooter>
      </Card>
    </Skeleton>
  );
}

export default Profile