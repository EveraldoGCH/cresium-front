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

export default function Step1EnviarDinero() {
    
    return (
        <Stack gap={"16px"} style={{ width: "100%", marginBottom:"32px" }}>
            <Card style={{ padding: "24px" }}>
                <Stack gap={"16px"}>
                    <Grid container xs={12} flexDirection={"column"} gap={"8px"}>
                        <Typography variant="subtitle1">
                            Cuenta destino
                        </Typography>
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
                    <Typography variant="subtitle1">
                        Destinatario
                    </Typography>
                    <Grid container xs={12} gap={"16px"} flexDirection={"column"}>
                        <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
                            <Typography variant="body1">
                                Escribí el CBU, CVU o Alias del destinatario
                            </Typography>
                            <OutlinedInput endAdornment={<CheckCircle color={colorsVars.grey400} />} />
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                            <Card style={{
                                backgroundColor: `${colorsVars.grey100}`,
                                borderRadius: "12px",
                                padding: "16px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "12px"
                            }}>
                                <Typography variant="body1" fontWeight={500}>
                                    Nombre de la cuenta recipiente
                                </Typography>
                                <Typography variant="subtitle1">
                                    Maximiliano Sanchez
                                </Typography>
                            </Card>
                            <Card style={{
                                backgroundColor: `${colorsVars.grey100}`,
                                borderRadius: "12px",
                                padding: "16px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "12px"
                            }}>
                                <Typography variant="body1" fontWeight={500}>
                                    Nombre del banco
                                </Typography>
                                <Typography variant="subtitle1">
                                    Santander Rio
                                </Typography>
                            </Card>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
                            <Typography variant="body1">
                                Dinero a enviar
                            </Typography>
                            <OutlinedInput
                                endAdornment={<Typography variant="body1" color={colorsVars.textSecondary}>ARS</Typography>} />
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
                            <Typography variant="body1">
                                Categoría de transferencia
                            </Typography>
                            <OutlinedInput endAdornment={<KeyboardArrowDownIcon style={{ cursor: "pointer" }} />} />
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
                    <Button variant="outlined" startIcon={<AddIcon />}>Agregar otro email</Button>
                </Stack>
            </Card>
        </Stack>
    );
}
