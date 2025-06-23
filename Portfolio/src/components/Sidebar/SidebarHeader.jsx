import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import AppMode from "../AppMode/AppMode";
import { motion } from "framer-motion";
import SocialMediaIcons from "../SocialMediaIcons";

const MotionIconButton = motion(IconButton);

const SidebarHeader = () => {
  return (
    <Stack
      sx={{
        p: 1.5,
        mt: 5,
        width: "100%",
        backgroundColor: "background.main",
      }}
    >
      <Box
        sx={{
          width: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SocialMediaIcons />
        </Box>
        <AppMode />
      </Box>
    </Stack>
  );
};

export default SidebarHeader;
