import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import ScanBarcode from "./Pages/ScanBarcode";
import Movielist from "./Pages/Movielist";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#4F46E5",
      800: "#153e75",
      700: "#4e46e55a",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ScanBarcode />} />

          <Route path="movies" element={<Movielist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
