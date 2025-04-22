import { Container, Stack } from "@mui/material";
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <Stack component="main" sx={{ border: "0px solid blue", mt: 8}}>
      <HeroSection />
    </Stack>
  );
};

export default Home;
