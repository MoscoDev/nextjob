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
import millify from "millify";
import { Link } from "react-router-dom";

function Job({
  job: {
    title,
    description,
    hiringFor,
    jobType,
    organization,
    keywords,
    salary,
    _id
  },
}) {
  
  const options = {
    precision: 3,
    lowercase: true,
  };
  return (
    <Card variant={"elevated"} className="rounded-lg " bg={"white"}>
      <CardHeader>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex columnGap={3} alignItems={"center"}>
            <Avatar
              size={"md"}
              colorScheme={"purple"}
              name={hiringFor}
              src={organization?.logo}
              className={"object-contain"}
            />
            <div>
              <Heading
                fontSize="lg"
                textAlign={"left"}
                textTransform="capitalize"
                className="text-gray-800 font-semibold"
              >
                {title}
              </Heading>
              <Text className="text-gray-400" fontSize={"sm"}>
                {hiringFor + " - " + jobType}
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
          <Text fontSize={"sm"} noOfLines={[2, 2, 2]}>
            {description}
          </Text>
          <HStack wrap={"wrap"} gap={2}>
            {keywords?.map((keyword, i) =>
              i < 5 ? (
                <Tag key={keyword} size={"md"}>
                  {keyword}
                </Tag>
              ) : null
            )}
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
                {` ₦${millify(salary.min, options)} -  ₦${millify(
                  salary.max,
                  options
                )} ${salary.type}`}
              </Text>
            </Flex>
            <Flex gap={2} alignItems={"center"} className={"sm:hidden"}>
              <UserGroupIcon className="w-7 h-7 text-indigo-600" />
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                55 people applied
              </Text>
            </Flex>
            <Link
              to={`/jobs/${_id}`}
              className="mt-1 flex w-fit items-center justify-center rounded-md border whitespace-nowrap border-transparent p-2 bg-indigo-600 lg:py-2 lg:px-4 lg:text-md text-sm font-normal text-white shadow-sm hover:bg-indigo-700"
            >
              Apply Now
            </Link>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Job;
