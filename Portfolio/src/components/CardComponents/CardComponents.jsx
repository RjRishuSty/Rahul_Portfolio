import React from "react";
import { motion } from "framer-motion";
import { Card, Typography } from "@mui/material";

const CardComponents = () => {
  const MotionCard = motion(Card);
  const MotionTypography = motion(Typography);
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MotionTypography
        variant="h6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        Animated Text
      </MotionTypography>
    </MotionCard>
  );
};

export default CardComponents;
