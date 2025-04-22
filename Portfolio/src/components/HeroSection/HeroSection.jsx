import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";
import React from "react";

const HeroSection = () => {
  return (
    <Stack component="section" sx={{py:5,overflow: "hidden" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} sx={{border:'2px solid black'}}>
            <Box
              component={motion.div}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography
                component="p"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "text.secondary",
                  fontFamily: "'Roboto Slab', serif !important",
                }}
              >
                Hello I'm a
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "text.main",
                }}
              >
                UI & UX{" "}
                <Box
                  component="span"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  Designer.
                </Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{border:'2px solid black'}}>
            <Box
              component={motion.div}
              initial={{ x: 100, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              sx={{
                position: "relative",
                width: "100%",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                  width: "400px",
                  height: "400px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #99ff99 20%, #66cc66 80%)",
                  zIndex: 1,
                }}
              />

              {/* Foreground image */}
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
