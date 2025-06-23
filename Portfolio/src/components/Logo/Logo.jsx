import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const MotionImgBox = motion.create(Box);

const Logo = () => {
  return (
    <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
      <MotionImgBox
        component="img"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        src={logo}
        alt="Rahul Portfolio"
        sx={{width:"auto",height:'60px'}}
      />
    </Box>
  );
};

export default React.memo(Logo);
