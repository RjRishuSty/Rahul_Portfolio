import React from "react";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { navItems } from "../../navItems";


const MotionButton = motion.create(Button);
const MotionBox = motion.create(Box);

// Animation variant using index for delay
const itemVariants = {
  initial: { opacity: 0, x: 50 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 300,
    },
  }),
};

const MenuLinks = ({ useIn }) => {
  const sidebar = useIn === "sidebar";
  return (
    <MotionBox
      initial="initial"
      animate="animate"
      sx={{
        mr: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: sidebar ? "column" : "row",
      }}
    >
      {navItems.map((link, i) => (
        <NavLink key={link.label} to={link.path}>
          {({ isActive }) => (
            <MotionButton
              startIcon={sidebar ? link.icon : null}
              key={link.label}
              custom={i}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              whileHover={!isActive ? { scale: 1.1 } : {}}
              sx={{
                // border:'3px solid black',
                color: isActive ? "text.secondary" : "text.primary",
                textTransform: isActive ? "uppercase" : "capitalize",
                mx: 1.2,
                fontWeight:600,
                fontSize: "1rem",
                ...(!isActive && {
                  "&:hover": {
                    backgroundColor:'redanimation.active'
                  },
                }),
              }}
            >
              {link.label}
            </MotionButton>
          )}
        </NavLink>
      ))}
    </MotionBox>
  );
};

export default React.memo(MenuLinks);
