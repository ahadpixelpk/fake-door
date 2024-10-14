import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import GoBackIcon from "../assets/Icons/GoBackIcon";
import { useState } from "react";
import { ArrowDownIcon } from "../assets/Icons/ArrowDownIcon";
import { ArrowUpIcon } from "../assets/Icons/ArrowUpIcon";
import Image from "next/image";
import { Typography } from "@mui/material";

const LessonsList = ({ lesson, index }: { lesson: any; index: number }) => {
  const [open, setOpen] = useState(false); // Track open state individually

  const handleClick = () => {
    setOpen(!open); // Toggle open state for this specific item
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "#F6F7FF",
        borderRadius: 5,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        onClick={handleClick}
        sx={{
          gap: 2,
          marginX: 1,
          "&:hover": {
            bgcolor: "#e0e7ff",
            borderRadius: 4,
          },
        }}
      >
        <ListItemIcon>
          <Image
            src={"https://fakedoor.com/assets/images/space.svg"}
            alt="img"
            width={45}
            height={45}
          />
        </ListItemIcon>
        <ListItemText primary={lesson?.title} />
        {open ? (
          <ArrowDownIcon style={{ minHeight: 12, minWidth: 12 }} />
        ) : (
          <ArrowUpIcon style={{ minHeight: 12, minWidth: 12 }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
              <Image
                src={"https://fakedoor.com/assets/images/energy.svg"}
                alt="img"
                width={30}
                height={30}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  National and Global Energy Resources
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
              <Image
                src={"https://fakedoor.com/assets/images/magnet.svg"}
                alt="img"
                width={30}
                height={30}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  Conservation and dissipation of energy
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 6 }}>
            <ListItemIcon>
              <Image
                src={"https://fakedoor.com/assets/images/molecule.svg"}
                alt="img"
                width={30}
                height={30}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  Energy stores and systems
                </Typography>
              }
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default LessonsList;
