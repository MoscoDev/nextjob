import { Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Grid, GridItem, Heading, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Signup() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [isPassowrdError, setIsPassowrdError] = useState(false)
  return (
    <div>
      <Navbar />
      <Center padding={"12"}>
        <Stack>
          <Heading textAlign={"center"} fontSize={"2xl"}>
            Create an Account to apply to jobs
          </Heading>
          <Text textAlign={"center"} fontSize={"lg"}>
            Get your next job in a bit
          </Text>
        </Stack>
      </Center>
      <Grid>
        <GridItem>
          <Heading>Personal Information</Heading>
          <Text>This is information pertaining to you as an individual</Text>
        </GridItem>
        <GridItem>
          <Grid>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" type={"text"} />
              </InputGroup>
              <FormLabel>Last Name</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" type={"text"} />
              </InputGroup>
              <FormLabel>Email</FormLabel>
              <InputGroup size="md">
                <Input placeholder="you@example.com" pr="4.5rem" type={"text"} />
              </InputGroup>

              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input pr="4.5rem" type={show ? "text" : "password"} />
                <InputRightElement width="4rem">
                  <Button variant={"ghost"} size="sm" onClick={handleClick}>
                    {show ? (
                      <EyeSlashIcon className="w-3 h-3" />
                    ) : (
                      <EyeIcon className="w-3 h-3" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
             {isPassowrdError? <FormHelperText>minimum of 6 Characters</FormHelperText>:
              <FormErrorMessage>Password is required.</FormErrorMessage>}
            </FormControl>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Signup;
