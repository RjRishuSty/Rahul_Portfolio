import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";
import React from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { flexStart } from "./styles/custom_styles";

const socialMediaIcons = [
  {
    id: "facebook",
    icon: <FacebookOutlinedIcon />,
    url: "https://facebook.com",
  },
  { id: "instagram", icon: <InstagramIcon />, url: "https://instagram.com" },
  { id: "linkedin", icon: <LinkedInIcon />, url: "https://linkedin.com" },
  { id: "x", icon: <XIcon />, url: "https://x.com" },
  //  { id: "youtube", icon: <YouTubeIcon />, url: "https://youtube.com" },
  // { id: "phone", icon: <LocalPhoneIcon />, url: "" },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const SocialMediaIcons = () => {
  const isMobile = useMediaQuery("(max-width:523px)");

  return (
    <Box sx={{ ...flexStart }}>
      {socialMediaIcons.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          transition={{ delay: 1 + index * 0.2 }}
        >
          <IconButton
            component={motion.button}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{ backgroundColor: "text.main", mr: 2 }}
          >
            {React.cloneElement(item.icon, {
              sx: {
                fontSize: isMobile ? 35 : 50,
                padding: 0.5,
                color: "text.primary",
              },
            })}
          </IconButton>
        </motion.div>
      ))}
    </Box>
  );
};

export default SocialMediaIcons;
