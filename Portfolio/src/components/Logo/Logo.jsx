import { Box, Typography } from "@mui/material";
import React from "react";
import DeblurIcon from "@mui/icons-material/Deblur";
import { motion } from "framer-motion";

const MotionIcon = motion.create(DeblurIcon);
const MotionTypography = motion.create(Typography);

const Logo = () => {
  return (
    <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
      <MotionIcon
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        fontSize="large"
        sx={{ color: "animation.icon", mr: 0.5 }}
      />
      <MotionTypography
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: "0.1" }}
        variant="h6"
        color="#fff"
      >
        Rahul Designs
      </MotionTypography>
    </Box>
  );
};

export default Logo;
