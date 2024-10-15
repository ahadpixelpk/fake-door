import { Box, Typography } from "@mui/material";
import React from "react";
import UnityLoader from "./UnityLoader";

const Lesson = () => {
  return (
    <Box // Wrapper Box for the lesson content
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" color="primary.dark" fontWeight={600}>
          1/8
        </Typography>
        <Typography
          variant="body2"
          color="primary.dark"
          fontWeight={600}
          sx={{ maxWidth: 400 }}
        >
          Energy changes in a system, and the ways energy is stored before and
          after such changes.
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: "auto", md: "70vh" },
          width: "100%",
          bgcolor: "#F6F7FF",
          borderRadius: 5,
          padding: 1,
        }}
      >
        {/* It renders the simulation */}
        <UnityLoader />
      </Box>
    </Box>
  );
};

export default Lesson;
