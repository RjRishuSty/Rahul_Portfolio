import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.jpg";
import React from "react";
import TypingText from "../TypingText/TypingText";
import { flexCenter, flexStart } from "../../styles/custom_styles";
import SocialMediaIcons from "../SocialMediaIcons";

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
  transition: { duration: 1, ease: "easeOut", delay: 0.5 },
};

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  return (
    <Stack
      component="section"
      sx={{
        minHeight: "90vh",
        backgroundColor: "primary.main",
        ...flexCenter,
        py:10
      }}
    >
      <Grid container columnSpacing={4} rowSpacing={5} >
        <Grid
          size={{ xs: 12, sm: 12, md: 8 }}
          sx={{
            ...flexStart,
            pl:2
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
                variant={isMobile ? "h4" : "h2"}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 900,
                  color: "text.secondary",
                }}
              >
                UI & UX{" "}
                <Box
                  component="span"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                    color: "text.default",
                  }}
                >
                  Designer.
                </Box>
              </Typography>
            </motion.div>

            <Box sx={{ mt: 5 }}>
              <SocialMediaIcons />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4 }} order={{ xs: 1, sm: 1, md: 2 }}>
          <Box
            component={motion.div}
            {...motionBoxRight}
            sx={{ width: "100%", ...flexCenter }}
          >
            <Box
              component="img"
              src={heroImg}
              alt="Graphic Designer"
              sx={{
                width: isMobile ? "80%" : isTablet ? "60%" : "100%",
                height: "auto",
                mt: isTablet ? 5 : 0,
                objectFit:'cover',
                objectPosition: "center",
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
                borderRadius: isMobile ? "100%" : "",
                boxShadow: isMobile ? "0px 0px 5px black" : "",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HeroSection;
