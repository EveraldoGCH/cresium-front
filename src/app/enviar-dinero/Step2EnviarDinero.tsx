"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/constants/colorsVars";
import { Box, Button, Grid, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import OptionChip from "./components/OptionChip/OptionChip";
import "./style.css"
import { CheckCircle } from "../../../public/assets/iconsComponents/iconsComponents";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { GreyCardInfo } from "@/components/core/GreyCardInfo/GreyCardInfo";

export default function Step2EnviarDinero() {

    return (
        <Stack gap={"16px"} style={{ width: "100%", marginBottom: "32px" }}>
            <Card style={{ padding: "24px" }}>
                <Stack gap={"16px"}>
                    <Typography variant="subtitle1">
                        Detalles de monto
                    </Typography>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            Envías exactamente
                        </Typography>
                        <Typography variant="subtitle1">
                            ARS $12.231.123,99
                        </Typography>
                    </GreyCardInfo>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            Comisión de transacción
                        </Typography>
                        <Typography variant="subtitle1">
                            ARS $12.24
                        </Typography>
                    </GreyCardInfo>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            Destinatario recibe
                        </Typography>
                        <Typography variant="subtitle1">
                            ARS $12.231.123,99
                        </Typography>
                    </GreyCardInfo>
                </Stack>
            </Card>
            <Card style={{ padding: "24px" }}>
                <Stack gap={"16px"}>
                    <Typography variant="subtitle1">
                        Detalles de recipiente
                    </Typography>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            Nombre de la cuenta recipiente
                        </Typography>
                        <Typography variant="subtitle1">
                            Maximiliano Sánchez
                        </Typography>
                    </GreyCardInfo>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            CBU / CVU / ALIAS
                        </Typography>
                        <Typography variant="subtitle1">
                            CBU
                        </Typography>
                    </GreyCardInfo>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            CUIT
                        </Typography>
                        <Typography variant="subtitle1">
                           821618261782 32837138
                        </Typography>
                    </GreyCardInfo>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            Nombre del banco
                        </Typography>
                        <Typography variant="subtitle1">
                        Santander Rio
                        </Typography>
                    </GreyCardInfo>
                </Stack>
            </Card>
            <Card style={{ padding: "24px" }}>
                <Stack gap={"16px"}>
                    <Typography variant="subtitle1">
                        Detalles de envío
                    </Typography>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            Categoría de transacción
                        </Typography>
                        <Typography variant="subtitle1">
                            Proveedores
                        </Typography>
                    </GreyCardInfo>
                    <GreyCardInfo>
                        <Typography variant="body1" fontWeight={500}>
                            Fecha de envío
                        </Typography>
                        <Typography variant="subtitle1">
                            29/04/2024 (HOY)
                        </Typography>
                    </GreyCardInfo>
                </Stack>
            </Card>
        </Stack>
    );
}
