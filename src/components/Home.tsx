import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import React from "react";
import GoBackIcon from "../assets/Icons/GoBackIcon";
import LessonsList from "./LessonsList";
import { useGetLessons } from "../hooks/useGetLessons";
import Lesson from "./Lesson";

const Home = () => {
  const { data, isLoading } = useGetLessons(); // Fetching lesson data and loading state from custom hook

  return (
    // Wrapper Box for the main content,
    <Box
      sx={{
        mt: 5,
        paddingX: 6,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          height: { xs: "auto", md: "70vh" },
        }}
        mb={4}
      >
        <Grid item xs={12} md={4} sx={{ overflowY: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#EEEEEE",
                  width: "max-content",
                  paddingY: 1,
                  paddingX: 1.2,
                  borderRadius: "50%",
                }}
              >
                <GoBackIcon />
              </Box>
              <Typography variant="body2" fontWeight={"600"} color="secondary">
                Go Back
              </Typography>
            </Box>
            <>
              {isLoading ? (
                <CircularProgress />
              ) : !data || data?.content.length === 0 ? (
                <Typography variant="body1" color="error" mt={2}>
                  Unable to load lessons. Please enable CORS policy in your
                  browser to access the lesson list.
                </Typography>
              ) : (
                <>
                  {/* Mapping over the first 5 lessons */}
                  {data?.content.slice(0, 5).map((lesson, index) => (
                    <LessonsList
                      key={lesson.id}
                      lesson={lesson}
                      index={index}
                    />
                  ))}
                </>
              )}
            </>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Lesson />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
