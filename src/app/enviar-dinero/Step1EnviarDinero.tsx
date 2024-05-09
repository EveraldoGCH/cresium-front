"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/colorsVars";
import { Box, Button, Grid, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowRight, CoinsStacked03 } from "../../../public/assets/iconsComponents/iconsComponents";
import OptionChip from "./components/OptionChip/OptionChip";
import "./style.css"
import { CheckCircle } from "../../../public/assets/iconsComponents/iconsComponents";

export default function Step1EnviarDinero() {
    const router = useRouter();
    const [step, setStep] = useState(0)


    return (
        <Grid container xs={12} justifyContent={"space-between"}>
            <Grid item xs={7.5}>
                <Stack gap={"16px"} style={{ width: "100%" }}>
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
                                    <OutlinedInput endAdornment={<CheckCircle color={colorsVars.grey400} />} />
                                </Box>
                            </Grid>
                        </Stack>
                    </Card>
                    <Card height="212px" style={{ padding: "0 36px" }}>
                    </Card>
                </Stack>
            </Grid>
            <Grid item xs={4}>
                <Stack gap={"16px"} style={{ width: "100%" }}>
                    <Card height="118px"></Card>
                    <Card>
                        <Grid container xs={12} gap={"16px"}>
                            <Typography variant="subtitle1">
                                Cuenta de origen
                            </Typography>
                            <Card style={{
                                border: `1px solid ${colorsVars.primary200}`,
                                backgroundColor: `${colorsVars.primary25}`,
                                borderRadius: "12px",
                                padding: "16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }}>
                                <CoinsStacked03 />
                                <Typography
                                    variant="subtitle2"
                                    color={colorsVars.primary700}
                                    fontWeight={500}
                                >
                                    Alphabet Inc.
                                </Typography>
                            </Card>
                            <Card style={{
                                backgroundColor: `${colorsVars.grey100}`,
                                borderRadius: "12px",
                                padding: "16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }}>
                                <Typography variant="body1" fontWeight={500}>
                                    Monto disponible
                                </Typography>
                                <Typography variant="subtitle1">
                                    ARS $12.231.123,99
                                </Typography>
                            </Card>
                        </Grid>
                    </Card>
                    <Card>
                        <Button variant="contained" style={{ width: "100%", height: "7vh" }} endIcon={<ArrowRight />}>Continuar</Button>
                    </Card>
                </Stack>
            </Grid>
        </Grid>
    );
}
