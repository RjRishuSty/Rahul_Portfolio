import { IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useThemeContext } from "../../AppContext/ThemeContext";
import { motion } from "framer-motion";

const MotionIconButton = motion.create(IconButton);

const AppMode = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <MotionIconButton
      onClick={toggleTheme}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 1.5, // for entrance only
      }}
      sx={{ backgroundColor: "background.default" }}
    >
      {mode === "light" ? (
        <NightsStayIcon
          fontSize="small"
          sx={{
            color: "animation.icon",
          }}
        />
      ) : (
        <LightModeIcon
          fontSize="small"
          sx={{
            color: "animation.icon",
          }}
        />
      )}
    </MotionIconButton>
  );
};

export default AppMode;
