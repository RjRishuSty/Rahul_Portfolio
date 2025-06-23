import { Container, Stack } from "@mui/material";
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <Stack component="main" sx={{mt:5}}>
      <HeroSection />
    </Stack>
  );
};

export default Home;
