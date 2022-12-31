import {
    Avatar, Card,
    CardBody, CardHeader, Flex,
    Heading, Stack,
    Text,
    Tooltip
} from "@chakra-ui/react";
import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

function experience() {
  return (
    <Card maxW="md" variant={"filled"} className="rounded-lg" bg={"white"}>
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
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex columnGap={2} alignItems={"center"}>
              <Avatar
                size={"md"}
                name="Airbnb"
                src="https://banner2.cleanpng.com/20180605/oot/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c6a7270.541603821528200972436.jpg"
              />
              <div>
                <Text
                  fontSize="sm"
                  textAlign={"left"}
                  textTransform="capitalize"
                  className="text-gray-800 font-semibold"
                >
                  Junior Designer
                </Text>
                <Text className="text-gray-400" fontSize={"sm"}>
                  {"Airbnb, inc" + " - " + "Fulltime"}
                </Text>
              </div>
            </Flex>
            <Text>{"2 mos"}</Text>
          </Flex>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex columnGap={2} alignItems={"center"}>
              <Avatar
                size={"md"}
                name="Netflix"
                src="https://icon2.cleanpng.com/20180512/rbw/kisspng-logo-brand-line-5af686b81ae832.3337453015261057841102.jpg"
              />
              <div>
                <Text
                  fontSize="sm"
                  textAlign={"left"}
                  textTransform="capitalize"
                  className="text-gray-800 font-semibold"
                >
                  Junior Designer
                </Text>
                <Text className="text-gray-400" fontSize={"sm"}>
                  {"Netflix" + " - " + "internship"}
                </Text>
              </div>
            </Flex>
            <Text>{"6 mos"}</Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default experience;
