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
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import FunctionalityDialog from "./FunctionalityDialog";

export const Login = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Using custom hook to handle form submission and validation
  const { register, handleSubmit, errors, onSubmit } =
    useLogin(setSnackbarOpen);

  return (
    <>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          style={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              paddingX: { xs: 2, sm: 8 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box mb={12}>
              <Image
                src="https://fakedoor.com/_next/static/media/fakedoor-logo.ae0eb839.svg"
                alt="logo"
                height={70}
                width={70}
              />
            </Box>

            {/* Form start */}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              width="100%"
            >
              <Typography variant="h5" mb={4} fontWeight={"bold"}>
                Welcome Back!
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
                  InputProps={{ sx: { borderRadius: 50 } }}
                  InputLabelProps={{ sx: { fontWeight: "bold" } }}
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  InputProps={{ sx: { borderRadius: 50 } }}
                  InputLabelProps={{ sx: { fontWeight: "bold" } }}
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
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
                type="submit"
              >
                Login
              </Button>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            {/* Form end */}

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
                  <FunctionalityDialog text={"Sign up"} />
                </Typography>
              </Typography>
              <FunctionalityDialog text={"Forgot Password"} />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: { xs: "none", lg: "block" } }} // Display only on large devices and above
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

      {/* Snackbar for invalid credentials */}
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
