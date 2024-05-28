import React from "react";
import {
  Box,
  Button,
  DialogProps,
  IconButton,
  Typography,
} from "@mui/material";
import { XClose } from "../../../../public/assets/iconsComponents/iconsComponents";
import {
  CloseContainer,
  IconContainer,
  ModalHeader,
  ModalRoot,
  ModalWrapper,
} from "./ModalStyle";

export interface ModalProps extends DialogProps {
  onClose: () => void;
  open: boolean;
  subtitle?: string;
  children: React.ReactNode;
  hideCloseButton?: boolean;
  textOnAccept?: string;
  icon?: React.ReactNode;
}

const Modal = ({
  open = false,
  onClose,
  icon,
  children,
  hideCloseButton = false,
  title,
  subtitle,
  textOnAccept,
  ...props
}: ModalProps) => {
  //BREAKPOINTS for maxWidth: xs=0px, sm=600px, md=900px, lg=1200px, xl=1536px
  return (
    <ModalRoot {...props} open={open}>
      <ModalWrapper>
        <ModalHeader>
          <Box display={"flex"} justifyContent={"space-between"}>
            <IconContainer>{icon}</IconContainer>
            <CloseContainer>
              {!hideCloseButton && (
                <IconButton aria-label="Close modal" onClick={onClose}>
                  <XClose />
                </IconButton>
              )}
            </CloseContainer>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
            <Typography variant="h6">{title}</Typography>
            {subtitle && <Typography variant="body1">{subtitle}</Typography>}
          </Box>
        </ModalHeader>
        {children}
        {textOnAccept && (
          <Button
            variant="contained"
            fullWidth
            onClick={onClose}
            sx={{ marginTop: "32px" }}
          >
            {textOnAccept}
          </Button>
        )}
      </ModalWrapper>
    </ModalRoot>
  );
};

export default Modal;
