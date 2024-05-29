"use client";
import Modal from "@/components/core/Modal/Modal";
import { Lock01 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { Box, Button, Grid, Typography } from "@mui/material";
import { InputStyled } from "./Modal2FAStyle";
import { colorsVars } from "@/utils/constants/colorsVars";
import { useRef } from "react";

interface Modal2FAProps {
  open: boolean;
  onClose: () => void;
  subtitle?: string;
}
export function Modal2FA({
  open,
  onClose,
  ...props
}: Modal2FAProps): React.JSX.Element {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);

  const handleInputChange = (event: any, nextInputRef: any) => {
    const value = event.target.value;
    if (value.length === 1 && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Configura la autenticación en dos pasos"}
      subtitle="Para terminar con tu inicio de sesión deberas conectar tu cuenta con Google Authenticator App e ingresar el código de verificación debajo."
      maxWidth={"xs"}
      icon={<Lock01 />}
      {...props}
    >
      <Typography variant="body1" sx={{ marginBottom: "6px" }}>
        Código de verificación
      </Typography>
      <Grid container xs={12} justifyContent={"space-between"}>
        <Grid item xs={5.25}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <InputStyled
              placeholder="0"
              tabIndex={0}
              onChange={(e) => handleInputChange(e, input1Ref)}
            />
            <InputStyled
              placeholder="0"
              tabIndex={1}
              inputRef={input1Ref}
              onChange={(e) => handleInputChange(e, input2Ref)}
            />
            <InputStyled
              placeholder="0"
              inputRef={input2Ref}
              onChange={(e) => handleInputChange(e, input3Ref)}
              tabIndex={2}
            />
          </Box>
        </Grid>
        <Grid item xs={0.5} container alignItems={"center"}>
          <Typography
            fontSize={"48px"}
            color={colorsVars.grey300}
            sx={{ marginBottom: "4px" }}
          >
            -
          </Typography>
        </Grid>
        <Grid item xs={5.25}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <InputStyled
              placeholder="0"
              inputRef={input3Ref}
              onChange={(e) => handleInputChange(e, input4Ref)}
              tabIndex={3}
            />
            <InputStyled
              placeholder="0"
              inputRef={input4Ref}
              onChange={(e) => handleInputChange(e, input5Ref)}
              tabIndex={4}
            />
            <InputStyled
              placeholder="0"
              inputRef={input5Ref}
              onChange={(e) => handleInputChange(e, input5Ref)}
              tabIndex={5}
            />
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        fullWidth
        onClick={onClose}
        sx={{ marginTop: "16px" }}
      >
        Confirmar
      </Button>
    </Modal>
  );
}
