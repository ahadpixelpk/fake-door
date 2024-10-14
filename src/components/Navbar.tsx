import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { LogoutIcon } from "../assets/Icons/LogoutIcon";

export const Navbar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    handleClose();
    router.push("/login");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-menu" : undefined;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 5,
        }}
      >
        <Box>
          <Image
            src={
              "https://fakedoor.com/_next/static/media/logo-physics.236e5a5e.svg"
            }
            alt="navbar"
            height={60}
            width={200}
          />
        </Box>
        <Box>
          <div>
            <Box
              onClick={handleClick}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar>A</Avatar>
            </Box>

            <Menu
              id={id}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
