import React from "react";
import {
  Dialog,
  DialogProps,
  DialogTitle,
  styled,
  IconButton,
} from "@mui/material";
import { Home01 } from "../../../../public/assets/iconsComponents/iconsComponents";

export interface ModalProps extends DialogProps {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  hideCloseButton?: boolean;
}

const ModalRoot = styled(Dialog)(({ theme, maxWidth }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 0px 40px rgba(12, 40, 84, 0.17)",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    color: "inherit",
    maxWidth: maxWidth || "900px",
    margin: "32px 16px",
    [theme.breakpoints.up("sm")]: {
      margin: "32px",
    },
  },
}));

const ModalWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 0px 40px rgba(12, 40, 84, 0.17)",
  borderRadius: "4px",
  padding: "15px 10px 25px 10px",
  minWidth: "200px",
  position: "relative",
  [theme.breakpoints.up("lg")]: {
    padding: "45px 37px 55px 54px",
  },
}));

const Modal = ({
  open = false,
  onClose,
  children,
  hideCloseButton,
  title,
  ...props
}: ModalProps) => {
  const handleClose = () => onClose();

  return (
    <ModalRoot {...props} open={open}>
      <ModalWrapper>
        {title && <DialogTitle>{title}</DialogTitle>}
        {!hideCloseButton && (
          <IconButton
            aria-label="Close modal"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: {
                xs: "20px",
                lg: "40px",
              },
              top: {
                xs: "24px",
                lg: "44px",
              },
              color: "#111111",
            }}
          >
            <Home01 />
          </IconButton>
        )}
        {children}
      </ModalWrapper>
    </ModalRoot>
  );
};

export default Modal;
