import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { handleLogin } = useLogin(setSnackbarOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              paddingX: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box mb={12}>
              <Image
                src={
                  "https://fakedoor.com/_next/static/media/fakedoor-logo.ae0eb839.svg"
                }
                alt="logo"
                height={70}
                width={70}
              />
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="h4" mb={4} fontWeight={"bold"}>
                Login
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  mb: 4,
                }}
              >
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    sx: { borderRadius: 50 },
                  }}
                  InputLabelProps={{
                    sx: { fontWeight: "bold" },
                  }}
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    sx: { borderRadius: 50 },
                  }}
                  InputLabelProps={{
                    sx: { fontWeight: "bold" },
                  }}
                />
              </Box>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: 50,
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingY: 1.2,
                }}
                size="large"
                type="submit" // Set type to submit to trigger the form submission
              >
                Login
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  mt={5}
                  variant="caption"
                  textAlign="center"
                  fontWeight={"bold"}
                >
                  By continuing, you agree to the Terms of Service and Privacy
                  Notice.
                </Typography>
              </Box>
            </Box>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ marginTop: 4 }}
              variant="middle"
            />

            <Box
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                p: 2,
              }}
            >
              <Typography fontWeight={"bold"} color="textSecondary">
                {"Don't have an account?"}
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    color: "#243BC7",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Sign Up
                </Typography>
              </Typography>
              <Typography color="#243BC7" fontWeight={"bold"}>
                Forgot password?
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: { sm: "none", md: "block" } }}
          >
            <Image
              src="https://fakedoor.com/_next/static/media/register.b27e65da.svg"
              alt="fake-door"
              height={852}
              width={680}
              style={{ borderRadius: "26px" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid credentials!
        </Alert>
      </Snackbar>
    </>
  );
};
