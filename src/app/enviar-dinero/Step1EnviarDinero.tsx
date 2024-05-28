"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/constants/colorsVars";
import {
  Box,
  Button,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import OptionChip from "./components/OptionChip/OptionChip";
import "./style.css";
import { CheckCircle } from "../../../public/assets/iconsComponents/iconsComponents";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { GreyCardInfo } from "@/components/core/GreyCardInfo/GreyCardInfo";

export default function Step1EnviarDinero() {
  return (
    <Stack gap={"16px"} style={{ width: "100%", marginBottom: "32px" }}>
      <Card style={{ padding: "24px" }}>
        <Stack gap={"16px"}>
          <Grid container xs={12} flexDirection={"column"} gap={"8px"}>
            <Typography variant="subtitle1">Cuenta destino</Typography>
            <Typography variant="body1" color={colorsVars.grey500}>
              Selecciona o agrega una cuenta bancaria para enviar dinero
            </Typography>
          </Grid>
          <OptionChip
            selected={true}
            labelTitle="Nueva transferencia"
            labelSubTitle="Envía dinero a una cuenta nueva"
          />
          <OptionChip
            selected={false}
            labelTitle="Contacto existente"
            labelSubTitle="Selecciona una cuenta existente"
          />
        </Stack>
      </Card>
      <Card style={{ padding: "24px" }}>
        <Stack gap={"16px"}>
          <Typography variant="subtitle1">Destinatario</Typography>
          <Grid container xs={12} gap={"16px"} flexDirection={"column"}>
            <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
              <Typography variant="body1">
                Escribí el CBU, CVU o Alias del destinatario
              </Typography>
              <OutlinedInput
                endAdornment={<CheckCircle color={colorsVars.grey400} />}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
              <GreyCardInfo
                text1="Nombre de la cuenta recipiente"
                text2="Maximiliano Sanchez"
              />
              <GreyCardInfo text1="Nombre del banco" text2="Santander Rio" />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
              <Typography variant="body1">Dinero a enviar</Typography>
              <OutlinedInput
                endAdornment={
                  <Typography variant="body1" color={colorsVars.textSecondary}>
                    ARS
                  </Typography>
                }
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
              <Typography variant="body1">
                Categoría de transferencia
              </Typography>
              <OutlinedInput
                endAdornment={
                  <KeyboardArrowDownIcon style={{ cursor: "pointer" }} />
                }
              />
            </Box>
          </Grid>
        </Stack>
      </Card>
      <Card height="212px" style={{ padding: "24px" }}>
        <Stack gap={"16px"}>
          <Typography variant="subtitle1">
            Compartir detalles (opcional)
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
            <Typography variant="body1" color={colorsVars.textDisabled}>
              Email
            </Typography>
            <OutlinedInput placeholder="pagos@alphabet.com" />
          </Box>
          <Button variant="outlined" startIcon={<AddIcon />}>
            Agregar otro email
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
