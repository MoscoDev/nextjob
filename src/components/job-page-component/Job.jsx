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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import {
  BookmarkIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import millify from "millify";
import { Link } from "react-router-dom";
import { saveJob } from "../../../utils/requests";

const darkmode = localStorage.getItem("chakra-ui-color-mode");

function Job({
  job: {
    title,
    description,
    hiringFor,
    jobType,
    organization,
    keywords,
    salary,
    _id,
  },
}) {
  const options = {
    precision: 3,
    lowercase: true,
  };
  const [saved, setSaved] = useState("save A job");
  const toast = useToast();
  const saveAJob = () => {
    saveJob(_id)
      .then((result) => {
        setSaved("saved");
        toast({
          title: "job saved.",
          description: "success",
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        toast({
          title: "Failed",
          description: err?.response.data.data,
          status: "error",
          duration: 3000,
          position: "top-right",
          isClosable: true,
          colorScheme: "orange",
          variant: "top-accent",
        });
      });
  };
  return (
    <Card
      variant={"elevated"}
      bg={darkmode === "light" ? "white" : ""}
      className="rounded-lg "
    >
      <CardHeader>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex columnGap={3} alignItems={"center"}>
            <Avatar
              size={"md"}
              colorScheme={"purple"}
              name={hiringFor || organization?.name}
              src={organization?.logo}
              className={"object-contain"}
            />
            <div>
              <Heading
                fontSize="lg"
                textAlign={"left"}
                textTransform="capitalize"
                className="font-semibold"
              >
                {title}
              </Heading>
              <Text className="text-gray-400" fontSize={"sm"}>
                {hiringFor || organization?.name + " - " + jobType}
              </Text>
            </div>
          </Flex>
          <Button
            onClick={() => saveAJob(_id)}
            leftIcon={<BookmarkIcon className="w-5 h-5" />}
            variant="solid"
            size={"sm"}
          >
            {saved}
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          <Text whiteSpace={""} noOfLines={[2, 2, 2]} fontSize={"sm"}>
            {description}
          </Text>
          <Flex wrap={"wrap"} rowGap={2} columnGap={2}>
            {keywords?.map((keyword, i) =>
              i < 5 ? (
                <Tag key={keyword} size={"md"}>
                  {keyword}
                </Tag>
              ) : null
            )}
          </Flex>
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
