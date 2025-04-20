import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from "../Logo/Logo";
import { AppBar, Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import AppMode from "../AppMode/AppMode";
import MenuLinks from "../MenuLinks/MenuLinks";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { motion } from "framer-motion";

// Elevation effect on scroll
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
  const isMobile = useMediaQuery("(max-width:800px)");
  console.log(isMobile);
  return (
    <Box component="nav">
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" sx={{ backgroundColor: "primary.main" }}>
          <Toolbar>
            <Logo />
            {isMobile ? (
              <>
                <MotionMenuButton
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <MenuTwoToneIcon fontSize="large" sx={{ color: "#fff" }} />
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

export default Header;
