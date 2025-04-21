import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Logo from "../Logo/Logo";
import SidebarHeader from "./SidebarHeader";
import MenuLinks from "../MenuLinks/MenuLinks";

const MotionStack = motion.create(Stack);

const Sidebar = () => {
  return (
    <MotionStack
      initial={{ y: -250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      sx={{
        width: "100%",
        height: "90vh",
        position: "absolute",
        top: 57,
        left: 0,
        display:'flex',
        justifyContent:'start',
        alignItems:'start',
        backgroundColor: "background.paper",
      }}
    >
    <SidebarHeader/>
    <Box sx={{border:'2px solid white',py:2 ,mt:3}}>
        <MenuLinks useIn="sidebar"/>
    </Box>
    </MotionStack>
  );
};

export default Sidebar;
