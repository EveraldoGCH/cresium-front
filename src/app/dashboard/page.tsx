"use client"
import { Box, CardActions, CardContent, Divider, Grid, Stack } from "@mui/material";
import Button from "@/components/core/Button/Button";
import React from "react";
import { TrendUp02, TrendDown02 } from "../../utils/iconsComponents";
import { ChartBalance } from "@/components/widgets/charts/ChartBalance/ChartBalance";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import { CardDinero } from "./components/CardDinero/CardDinero";


export default function DashBoard() {
  return (
    <Stack spacing={5.5} sx={{ width: "100%" }}>{/* Contenedor Principal*/}
      <Stack > {/* Primer contenedor */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: 'center', width: "100%" }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <p>Home</p>
            <h1 style={{ fontWeight: "600", fontSize: "30px", margin: "20px 0" }}>Bienvenido Maximiliano</h1>
            <p>Cresium.io</p>
          </Box>
          <Button
            size="xl"
            color="primary"
            StartIcon={TrendUp02}
          >
            Enviar dinero
          </Button>
          <Button
            size="xl"
            color="primary"
            StartIcon={TrendDown02}
          >
            Recibir dinero
          </Button>
        </Stack>
        <Divider />
      </Stack>{/*Fin primer contenedor */}
      <Grid container xs={12} justifyContent={"space-between"} style={{ gap: "4%" }} flexWrap={"nowrap"}>
        <Grid item xs={8}>
          <Card
            height={"414px"} />
        </Grid>
        <Grid container item xs={4} justifyContent={"space-between"} direction={"column"} >
          <Card
            height={"220px"} />
          <Card
            height={"150px"}
            style={{ border: `1px solid ${stylesVars.primary200}`, backgroundColor: `${stylesVars.primary25}` }} />
        </Grid>
      </Grid>
      <Grid container xs={12} justifyContent={"space-between"} flexWrap={"nowrap"} style={{ gap: "4%" }}>
        <Grid item xs={6} >
          <CardDinero />
        </Grid>
        <Grid item xs={6}>
          <CardDinero />
        </Grid>
      </Grid>
      {/*FIN Contenedor Principal*/}
    </Stack>
  )
}
