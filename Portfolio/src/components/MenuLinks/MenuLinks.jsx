import React from "react";
import { menuLinks } from "../../menulinks";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

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

const MenuLinks = () => {
  return (
    <MotionBox initial="initial" animate="animate" sx={{mr:2}}>
      {menuLinks.map((link, i) => (
        <NavLink key={link.label} to={link.path}>
          {({ isActive }) => (
            <MotionButton
              key={link.label}
              custom={i}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              whileHover={!isActive?{ scale: 1.1 }:{}}
              sx={{
                color: isActive ? "animation.active" : "text.main",
                textTransform: isActive ? "uppercase" : "capitalize",
                mx: 1.2,
                fontWeight: isActive ? 500 : 200,
                fontSize: "1rem",
                ...(!isActive && {
                  "&:hover": {
                    color: "animation.hover",
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

export default MenuLinks;
