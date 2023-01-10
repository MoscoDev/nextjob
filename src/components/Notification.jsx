import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  CheckBadgeIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

function Notification() {
  const status = "shortlisted"
  return (
    <Card variant={"elevated"} className="rounded-lg px-3 bg-[#edf2f7ad]">
      <CardHeader paddingRight={"0"} paddingLeft={"0"} className="px-0">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex columnGap={2} alignItems={"center"}>
            <Avatar
              size={"sm"}
              name="Airbnb"
              src="https://banner2.cleanpng.com/20180605/oot/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c6a7270.541603821528200972436.jpg"
            />
            <div>
              <Text className="text-black" fontSize={"sm"}>
                {"Airbnb, inc"}
              </Text>{" "}
              <Text className="text-black" fontSize={"xs"}>
                {"Backend Developer"}
              </Text>
            </div>
          </Flex>

          <Tag
            gap={"1"}
            size={"md"}
            variant="subtle"
            colorScheme={
              status === "shortlisted"
                ? "green"
                : status === "rejected"
                ? "red"
                : null
            }
          >
            {status === "shortlisted" ? (
              <CheckBadgeIcon className="w-5 h-5" />
            ) : status === "rejected" ? (
              <XCircleIcon className="w-5 h-5" />
            ) : null}

            <TagLabel>{status}</TagLabel>
          </Tag>
        </Flex>
      </CardHeader>
      <CardBody paddingRight={"0"} paddingLeft={"0"}>
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
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Notification;
