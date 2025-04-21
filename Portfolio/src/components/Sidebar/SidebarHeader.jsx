import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import AppMode from "../AppMode/AppMode";
import { socialMediaIcons } from "../../socialMediaIcons";
import { motion } from "framer-motion";

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
          {socialMediaIcons.map((item, index) => (
            <MotionIconButton
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.3 * index,
              }}
              sx={{
                width: "35px",
                height: "35px",
                backgroundColor: "background.default",
                m: 0.5,
              }}
            >
              {React.cloneElement(item.icon, {
                sx: {
                  fontSize: "25px",
                  color: "animation.icon",

                  "&:hover": { boxShadow: "0px 0px 10px #3d0000" },
                },
              })}
            </MotionIconButton>
          ))}
        </Box>
        <AppMode />
      </Box>
    </Stack>
  );
};

export default SidebarHeader;
