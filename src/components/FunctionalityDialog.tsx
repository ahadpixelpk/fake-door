import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FunctionalityDialog = ({ text }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        onClick={handleClickOpen}
        component="span"
        sx={{
          fontWeight: "bold",
          color: "#243BC7",
          cursor: "pointer",
        }}
      >
        {text}
      </Typography>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="feature-dialog-description"
        sx={{ padding: 10 }}
      >
        <DialogTitle sx={{ padding: 3 }}>{"Feature Unavailable"}</DialogTitle>
        <DialogContent sx={{ padding: 3 }}>
          <DialogContentText id="feature-dialog-description">
            The feature you attempted to access is currently unavailable. We are
            working to bring this functionality to you soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: 3 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 50,
              fontWeight: "bold",
              fontSize: 14,
              paddingY: 1.2,
              paddingX: 5,
            }}
            size="small"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FunctionalityDialog;
