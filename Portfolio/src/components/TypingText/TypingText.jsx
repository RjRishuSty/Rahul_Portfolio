import React, { useEffect, useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";

const TypingText = ({ text = "", speed = 100, ...props }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:523px)");

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
      component="h4"
      variant={isMobile?"h6":"h4"}
      gutterBottom
      sx={{
        textTransform: "uppercase",
        fontWeight: 600,
        color: "text.main",
      }}
      {...props}
    >
      {displayedText}
    </Typography>
  );
};

export default TypingText;
