import { Box,  useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useProductStore } from "./store/product.js";

function App() {
  
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
