import { Box } from "@mui/material";
import React, { PropsWithChildren, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";

interface AppLayoutProps extends PropsWithChildren {}

const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return (
    <Box
      sx={{
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default AppLayout;
