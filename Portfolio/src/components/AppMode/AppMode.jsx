import { IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import { useThemeContext } from "../../AppContext/ThemeContext";
import { motion } from "framer-motion";

const MotionIconButton = motion.create(IconButton);
const MotionDarkIcon = motion.create(BrightnessMediumIcon);
const MotionLightIcon = motion.create(LightModeIcon);

const AppMode = () => {
  const { mode, toggleTheme } = useThemeContext();
  console.log("AppMode");
  return (
    <MotionIconButton
      onClick={toggleTheme}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 1.5, 
      }}
      sx={{width: "35px",height:'35px', backgroundColor: "background.default" }}
    >
      {mode === "light" ? (
        <MotionDarkIcon
          fontSize="medium"
          sx={{
            color: "animation.icon",
            "&:hover":{color:'#fff'}
          }}
          whileHover={{scale:1.2}}
        />
      ) : (
        <MotionLightIcon
          fontSize="medium"
          whileHover={{scale:1.2}}
          sx={{
            color: "animation.icon",
            "&:hover":{color:'#fff'}
          }}
        />
      )}
    </MotionIconButton>
  );
};

export default React.memo(AppMode);
