"use client";
import { Card } from "@/components/core/Card/Card";
import { Stack, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import { GreyCardInfo } from "@/components/core/GreyCardInfo/GreyCardInfo";

export default function Step2EnviarDinero() {
  return (
    <Stack gap={"16px"} style={{ width: "100%", marginBottom: "32px" }}>
      <Card style={{ padding: "24px" }}>
        <Stack gap={"16px"}>
          <Typography variant="subtitle1">Detalles de monto</Typography>
          <GreyCardInfo text1="Envías exactamente" text2="ARS $12.231.123,99" />
          <GreyCardInfo text1="Comisión de transacción" text2="ARS $12.24" />
          <GreyCardInfo
            text1="Destinatario recibe"
            text2="ARS $12.231.123,99"
          />
        </Stack>
      </Card>
      <Card style={{ padding: "24px" }}>
        <Stack gap={"16px"}>
          <Typography variant="subtitle1">Detalles de recipiente</Typography>
          <GreyCardInfo
            text1="Nombre de la cuenta recipiente"
            text2="Maximiliano Sánchez"
          />
          <GreyCardInfo text1="CBU / CVU / ALIAS" text2="CBU" />
          <GreyCardInfo text1="CUIT" text2="821618261782 32837138" />
          <GreyCardInfo text1="Nombre del banco" text2="Santander Rio" />
        </Stack>
      </Card>
      <Card style={{ padding: "24px" }}>
        <Stack gap={"16px"}>
          <Typography variant="subtitle1">Detalles de envío</Typography>
          <GreyCardInfo text1="Categoría de transacción" text2="Proveedores" />
          <GreyCardInfo text1="Fecha de envío" text2="29/04/2024 (HOY)" />
        </Stack>
      </Card>
    </Stack>
  );
}
