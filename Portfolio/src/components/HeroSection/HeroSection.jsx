import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";
import React from "react";
import { socialMediaIcons } from "../../socialMediaIcons";
import TypingText from "../TypingText/TypingText";

// Reusable style variables
const flexCenterStart = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
};

// Animation variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

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
const motionBoxRight = {
  initial: { x: 100, opacity: 0, scale: 0.95 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { duration: 1, ease: "easeOut", delay: 0.3 },
};

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:523px)");
  const socialIconBox = {
    border:'2px solid red',
    width: isMobile?"100%":"80%",
    display: "flex",
    justifyContent: isMobile ? "start" : " space-between",
    alignItems: "center",
    mt: 2,
  };

  return (
    <Stack component="section" sx={{ py: 5, overflow: "hidden" }}>
      <Container>
        <Grid container spacing={4}>
          {/* Left Text Block */}
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              border: "2px solid black",
              px: 2,
              ...flexCenterStart,
            }}
            order={{ xs: 2, sm: 2, md: 1 }}
          >
            <Box
              component={motion.div}
              variants={containerVariant}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeInUp}>
                <TypingText text="Hello I'm a" speed={80} />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  gutterBottom
                  variant={isMobile ? "h4" : "h3"}
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  UI & UX{" "}
                  <Box
                    component="span"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 700,
                      color: "text.main",
                    }}
                  >
                    Designer.
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  component="p"
                  sx={{
                    color: "text.secondary",
                    width: isMobile ? "100%" : "80%",
                    fontWeight: 500,
                    mt: 4,
                  }}
                >
                  Hi I'm Rahul Kumar, a passionate UI/UX designer based in
                  Bihar. Welcome to my portfolio.
                </Typography>
              </motion.div>

              <Box sx={socialIconBox}>
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
                    >
                      {React.cloneElement(item.icon, {
                        sx: {
                          fontSize: isMobile?35:50,
                          borderRadius: 10,
                          padding: isMobile?0.5:1,
                          color: "text.default",
                          transition: "0.3s",
                          backgroundColor: "background.primary",
                          "&:hover": {
                            color: "text.primary",
                            backgroundColor: "transparent",
                          },
                        },
                      })}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Image Block */}
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{ border: "2px solid black" }}
            order={{ xs: 1, sm: 1, md: 2 }}
          >
            <Box
              component={motion.div}
              {...motionBoxRight}
              sx={{
                position: "relative",
                width: "100%",
                height: isMobile?"350px":"500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Animated Background Circle */}
              <Box
                component={motion.div}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: "absolute",
                  width: isMobile?"100%":"400px",
                  height: isMobile?"350px":"400px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, #99ff99 20%, #1eb997 80%)",
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src={heroImg}
                alt="Graphic Designer"
                sx={{
                  width: "80%",
                  height: "auto",
                  borderRadius: "20px",
                  zIndex: 2,
                  position: "relative",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default HeroSection;
