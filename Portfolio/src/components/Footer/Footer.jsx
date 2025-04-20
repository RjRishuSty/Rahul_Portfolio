import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import { footer } from "../../footer";

const Footer = () => {
  return (
    <Stack component='footer'
      sx={{
        border: "2px solid blue",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "primary.main",
        py: 5,
      }}
    >
      <Container>
        <Grid container>
          {footer.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 12, md: 4 }}
              sx={{ border: "2px solid blue" }}
            >
              {item.label}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
