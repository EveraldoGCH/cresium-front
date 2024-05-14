"use client";
import { Stack, Box, Link, Typography, Breadcrumbs, Button, Divider, Grid, OutlinedInput } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { colorsVars } from "@/utils/colorsVars";
import { Card } from "@/components/core/Card/Card";
import { ArrowRight, CheckCircle, CoinsStacked03 } from "../../../public/assets/iconsComponents/iconsComponents";
import Step1EnviarDinero from "./Step1EnviarDinero";
import OptionChip from "./components/OptionChip/OptionChip";
import "./style.css"
import { Stepper } from "./components/Stepper/Stepper";
import Step2EnviarDinero from "./Step2EnviarDinero";
import { GreyCardInfo } from "@/components/core/GreyCardInfo/GreyCardInfo";


export default function EnviarDinero() {
    const router = useRouter();
    const [step, setStep] = useState(0)

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            onClick={() => router.push("/dashboard")}
            sx={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}
        >
            <HomeIcon />
            Home
        </Link>,
        <Typography key="3">
            Enviar dinero
        </Typography>,
    ];

    const continueStep1=()=>{
        setStep(1)
    }

    return (
        <Stack spacing={4} sx={{ width: "100%"}}>{/* Contenedor Principal*/}
            <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
                sx={{
                    xs: { alignItems: "center" },
                    md: { alignItems: "flex-end" },
                    width: "100%"
                }}
            >
                <Box sx={{ flex: "1 1 auto" }}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Typography
                        variant="h2"
                        style={{ fontWeight: "600", margin: "20px 0" }}
                    >
                        Enviar dinero
                    </Typography>
                    <Typography variant="body1" color={colorsVars.grey500}>Envia dinero de tu cuenta a una persona o empresa</Typography>
                </Box>
                <Box sx={{
                    flex: "1 1 auto",
                    display: "flex",
                    alignItems: { xs: "center", md: "flex-end", },
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                    gap: "15px"
                }}>
                    <Typography variant="body1" fontWeight={500}>¿Queres enviar dinero a múltiples cuentas?</Typography>
                    <Button variant="text" sx={{ padding: 0, boxShadow: "none", marginRight: "8px" }}>Pagos masivos</Button>
                </Box>

            </Stack>
            <Divider />
            <Stack sx={{ width: "100%", alignItems: "flex-end" }} spacing={4}>{/*Contenedor Card */}
                <Grid container xs={12} justifyContent={"space-between"} alignItems={"flex-start"}>
                    <Grid item xs={7.5}>
                        {step === 0 && (<Step1EnviarDinero />)}
                        {step === 1 && (<Step2EnviarDinero />)}
                    </Grid>
                    <Grid item xs={4} className={"sticky"}>
                        <Stack gap={"16px"} style={{ width: "100%" }}>
                            <Card height="118px" style={{ padding: "24px" }}>
                                <Stepper />
                            </Card>
                            <Card style={{ padding: "24px" }}>
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
                                    <GreyCardInfo>
                                        <Typography variant="body1" fontWeight={500}>
                                            Monto disponible
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            ARS $12.231.123,99
                                        </Typography>
                                    </GreyCardInfo>
                                </Grid>
                            </Card>
                            <Card style={{ padding: "24px" }}>
                                {step === 0 && (<Button
                                    variant="contained"
                                    style={{ width: "100%", height: "7vh" }}
                                    endIcon={<ArrowRight />}
                                    onClick={() => continueStep1()}>
                                    Continuar
                                </Button>)}
                                {step === 1 && (
                                    <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                                        <Button
                                            variant="contained"
                                            style={{ width: "100%", height: "7vh" }}
                                            endIcon={<ArrowRight />}
                                            onClick={() => setStep(1)}>
                                            Confirmar transferencia
                                        </Button>
                                        <Typography
                                            variant="body1"
                                            style={{ margin: 0, fontSize: "12px", fontWeight: 400 }}>
                                            Al enviar dinero estas aceptando los
                                            <p
                                                style={{
                                                    color: colorsVars.blue600,
                                                    margin: 0,
                                                    display: "inline",
                                                    cursor: "pointer"
                                                }}> términos de uso y privacidad de Cresium.</p>
                                        </Typography>
                                    </Box>
                                )}
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>{/*FIN Contenedor card */}
            {/*FIN Contenedor Principal*/}
        </Stack>
    );
}
