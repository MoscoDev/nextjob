import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Auth from "../components/Auth";

function Login() {
  return (
    <Grid
      className=" lg:grid-cols-12 md:grid-cols-8  sm:grid-cols-4"
      alignItems={"start"}
    >
      <GridItem alignItems={"center"} className="px-5 grid col-span-4">
        <div>
          <Auth />
        </div>
      </GridItem>
      <GridItem className="lg:h-[calc(100vh-78px)] md:h-[calc(100vh-78px)] gap-5 lg:block lg:col-span-8 md:col-span-4 md:block sm:hidden bg-indigo-600">
        <Box className="bg-[url('https://res.cloudinary.com/dzjp4mfzm/image/upload/v1672736360/OJXL4E0-removebg-preview_sk1ixw.png')] bg-center lg:bg-[length:600px_600px] md:bg-[length:400px_400px] bg-no-repeat" />
      </GridItem>
    </Grid>
  );
}

export default Login;
