import React, { useEffect, useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";

const TypingText = ({ text = "", speed = 100, ...props }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const smallMobile = useMediaQuery("(max-width:440px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");
   const isLaptop = useMediaQuery("(max-width:1014px)");

  useEffect(() => {
    if (!text || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed]);

  return (
    <Typography
      variant={smallMobile?"h4":isMobile?"h2":isTablet?"h2":isLaptop?"h2":"h1"}
      gutterBottom
      sx={{
        textTransform: "uppercase",
        fontWeight:800,
        color: "text.primary",
      }}
      {...props}
    >
      {displayedText}
    </Typography>
  );
};

export default TypingText;
