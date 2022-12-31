import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon, CurrencyDollarIcon, UserGroupIcon } from "@heroicons/react/24/outline";

function Job() {
  return (
    <Card variant={"filled"} className="rounded-lg" bg={"white"}>
      <CardHeader>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex columnGap={2} alignItems={"center"}>
            <Avatar
              size={"lg"}
              name="Airbnb"
              src="https://banner2.cleanpng.com/20180605/oot/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c6a7270.541603821528200972436.jpg"
            />
            <div>
              <Heading
                fontSize="lg"
                textAlign={"left"}
                textTransform="capitalize"
                className="text-gray-800 font-semibold"
              >
                Junior Designer
              </Heading>
              <Text className="text-gray-400" fontSize={"sm"}>
                {"Airbnb, inc" + " - " + "Fulltime"}
              </Text>
            </div>
          </Flex>
          <Button
            leftIcon={<BookmarkIcon className="w-5 h-5" />}
            variant="solid"
            size={"sm"}
          >
            Save job
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          <Text fontSize={"sm"} noOfLines={[1, 2, 2]}>
            eHealth4everyone is a digital health enterprise based in Nigeria
            (Africa) contributing to health service delivery using data science
            and information technology. At ehealth4everyone, our goal is saving
            lives and our approach is information and technology. We believe
            that if health is a right, proven digital health solutions and
            expertise such as ours should not be a privilege.
          </Text>
          <HStack spacing={4}>
            <Tag size={"md"}>Node.js</Tag>
            <Tag size={"md"}>Javascript</Tag>
            <Tag size={"md"}>SQL</Tag>
          </HStack>
          <Divider orientation="horizontal" />
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            className="align-middle"
          >
            <Flex gap={2} alignItems={"center"}>
              <CurrencyDollarIcon className="w-7 h-7 text-indigo-600" />
              <Text fontSize={"sm"} fontWeight={"semibold"}>
                $12K - 14K /Month
              </Text>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
              <UserGroupIcon className="w-7 h-7 text-indigo-600" />
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                55 people applied
              </Text>
            </Flex>
            <a
              href="#"
              className="mt-1 flex w-fit items-center justify-center rounded-md border border-transparent p-2 bg-indigo-600 lg:py-2 lg:px-4 lg:text-md text-sm font-normal text-white shadow-sm hover:bg-indigo-700"
            >
              Apply Now
            </a>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Job;
