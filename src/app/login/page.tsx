"use client";
import { Box, Button, Grid, OutlinedInput, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoginA from "../../../public/assets/images/LoginA.jpg"
import LogoCresiumIcon from "../../../public/assets/iconsComponents/LogoCresiumIcon";
import { colorsVars } from "@/utils/constants/colorsVars";



export default function EnviarDinero() {
    const router = useRouter();
    const [step, setStep] = useState(0)

    return (
        <Grid container xs={12}>
            <Grid
                item
                xs={7}
                style={{ overflow: "hidden", height: "100vh" }}
                justifyContent={"center"}
                alignItems={"center"}>
                <Image
                    src={LoginA}
                    alt={"Imagen de login"}
                    style={{ flexShrink: 0, width: "auto", height: "100%" }}
                />
            </Grid>
            <Grid item xs={5} container alignItems={"center"} padding={"32px 64px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"32px"} width={"100%"}>
                    <LogoCresiumIcon />
                    <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                        <Typography variant="h1" color={colorsVars.grey900}>Inicia sesión</Typography>
                        <Typography variant="subtitle1" color={colorsVars.grey600}>¿No tenés cuenta? Hacé click acá y registrate</Typography>
                    </Box>
                    <Stack gap={"16px"}>
                        <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
                            <Typography variant="body1">
                                Correo electrónico
                            </Typography>
                            <OutlinedInput placeholder="Ingresa tu correo electrónico" />
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
                            <Typography variant="body1">
                                Contraseña
                            </Typography>
                            <OutlinedInput placeholder="Ingresa tu contraseña" />
                        </Box>
                        <Button variant="contained" fullWidth>Iniciar sesión</Button>
                        <Button variant="text" fullWidth>¿Olvidaste tu contraseña?</Button>

                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
}
