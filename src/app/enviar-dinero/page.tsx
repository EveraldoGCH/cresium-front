"use client";
import { Stack, Box, Link, Typography, Breadcrumbs, Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { stylesVars } from "@/utils/stylesVars";
import { Card } from "@/components/core/Card/Card";
import { ArrowRight } from "../../../public/assets/iconsComponents/iconsComponents";
import Step1EnviarDinero from "./Step1EnviarDinero";


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

    return (
        <Stack spacing={2.8} sx={{ width: "100%" }}>{/* Contenedor Principal*/}
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
                    <Typography variant="body1" color={stylesVars.grey500}>Envia dinero de tu cuenta a una persona o empresa</Typography>
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
                {step === 0 && (
                    <Step1EnviarDinero />
                )}
                {step === 1 && (
                    <Card height="733px">step2</Card>
                )}
                {step === 2 && (
                    <Card height="733px">step3</Card>
                )}
                {step === 0 && (
                    <>
                        <Button
                            variant="contained"
                            endIcon={<ArrowRight />}
                            onClick={() => { setStep(1), window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                        >Continuar</Button>
                    </>
                )}
                {step === 1 && (
                    <>
                        <Button
                            variant="contained"
                            endIcon={<ArrowRight />}
                            onClick={() => setStep(2)}
                        >Confirmar transferencia</Button>
                    </>
                )}
            </Stack>{/*FIN Contenedor card */}

            {/*FIN Contenedor Principal*/}
        </Stack>
    );
}
