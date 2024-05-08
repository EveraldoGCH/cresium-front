"use client";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import { Box, Button, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowRight, CoinsStacked03 } from "../../../public/assets/iconsComponents/iconsComponents";
import OptionChip from "./components/OptionChip/OptionChip";
import "./style.css"

export default function Step1EnviarDinero() {
    const router = useRouter();
    const [step, setStep] = useState(0)


    return (
        <Grid container xs={12} justifyContent={"space-between"}>
            <Grid item xs={7.5}>
                <Stack gap={"16px"} style={{ width: "100%" }}>
                    <Card height="291px" style={{ padding: "0 36px" }}>
                    </Card>
                    <Card height="188px" style={{ padding: "0 36px" }}>
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
                                border: `1px solid ${stylesVars.primary200}`,
                                backgroundColor: `${stylesVars.primary25}`,
                                borderRadius: "12px",
                                padding: "16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }}>
                                <CoinsStacked03 />
                                <Typography
                                    variant="subtitle2"
                                    color={stylesVars.primary700}
                                    fontWeight={500}
                                >
                                    Alphabet Inc.
                                </Typography>
                            </Card>
                            <Card style={{
                                backgroundColor: `${stylesVars.grey100}`,
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
                        <Button variant="contained" style={{ width: "100%", height:"7vh" }} endIcon={<ArrowRight />}>Continuar</Button>
                    </Card>
                </Stack>
            </Grid>
        </Grid>

        // <Card height="733px" style={{ padding: "0 36px" }}>
        //     <CardContent>
        //         <Grid container xs={12} gap={"24px"} style={{ marginTop: "16px", marginBottom: "32px" }}>
        //             <Typography variant="h6">Cuenta de origen</Typography>
        //             <Card style={{
        //                 border: `1px solid ${stylesVars.primary200}`,
        //                 backgroundColor: `${stylesVars.primary25}`,
        //                 borderRadius: "12px",
        //                 padding: "16px",
        //                 display: "flex",
        //                 alignItems: "center",
        //                 gap: "12px"
        //             }}>
        //                 <CoinsStacked03 />
        //                 <Typography
        //                     variant="subtitle2"
        //                     color={stylesVars.primary700}
        //                     fontWeight={500}
        //                 >
        //                     Alphabet Inc.
        //                 </Typography>
        //             </Card>
        //         </Grid>
        //         <Divider />
        //         <Stack style={{ padding: "32px 0", gap: "24px" }} >
        //             <Typography variant="h6">Destinatario</Typography>
        //             <Box>
        //                 <Grid container xs={12}>
        //                     <Grid item container xs={12} justifyContent={"space-between"}>
        //                         <Grid item xs={5.9}>
        //                             <OptionChip
        //                                 selected={true}
        //                                 labelTitle="Nueva transferencia"
        //                                 labelSubTitle="Envía dinero a una cuenta nueva, se guardará automáticamente para enviarle dinero en el futuro"
        //                             />
        //                         </Grid>
        //                         <Grid item xs={5.9}>
        //                             <OptionChip
        //                                 selected={false}
        //                                 labelTitle="Contacto existente"
        //                                 labelSubTitle="Selecciona cualquier cuenta a la que le hayas enviado dinero previamente"
        //                             />
        //                         </Grid>
        //                     </Grid>

        //                 </Grid>
        //             </Box>
        //         </Stack>
        //     </CardContent>
        // </Card>

    );
}
