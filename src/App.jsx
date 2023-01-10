import React from "react";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Signup from "./Pages/Signup";
import Job from "./Pages/Job";
import { setAuthToken } from "../utils/setAuthToken";

axios.defaults.baseURL = "https://nextjobs.onrender.com/api/v1";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#4F46E5",
    800: "#4338CA",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nav" element={<Navbar />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="jobs/:id" element={<Job />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
