import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from "../Logo/Logo";
import { AppBar, Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import AppMode from "../AppMode/AppMode";
import MenuLinks from "../MenuLinks/MenuLinks";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Sidebar from "../Sidebar/Sidebar";

// ElevationScroll component
function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      top: trigger ? 0 : 0,
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const MotionMenuButton = motion.create(IconButton);

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");

  const handleToggleMenu = useCallback(() => {
    setToggleMenu((prev) => !prev);
  }, []);
  
  return (
    <Box component="nav">
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" sx={{ backgroundColor: "primary.main" }}>
          <Toolbar>
            <Logo />
            {isMobile ? (
              <>
              {toggleMenu && <Sidebar/>}
              <MotionMenuButton
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.3,
                }}
                onClick={handleToggleMenu}
              >
                {toggleMenu ? (
                  <CloseTwoToneIcon fontSize="large" sx={{ color: "#fff" }} />
                ) : (
                  <MenuTwoToneIcon fontSize="large" sx={{ color: "#fff" }} />
                )}
              </MotionMenuButton>
              </>
            ) : (
              <>
                <MenuLinks />
                <AppMode />
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default React.memo(Header);
