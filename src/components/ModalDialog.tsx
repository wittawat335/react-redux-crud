import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const ModalDialog = () => {
  const [open, openchange] = useState(false);
  const [title, titlechange] = useState("Create company");
  const closepopup = () => {
    openchange(false);
  };
  const openpopup = () => {
    openchange(true);
    //clearstate();
    //dispatch(openPopup())
  };
  return (
    <div>
      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
        <DialogTitle>
          <span>{title}</span>
          <IconButton style={{ float: "right" }} onClick={closepopup}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalDialog;
