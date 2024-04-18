"use client"
import { Box, Divider, Grid, Stack } from "@mui/material";
import Button from "@/components/core/Button/Button";
import React from "react";
import { TrendUp02, TrendDown02 } from "../../utils/iconsComponents";
import { ChartBalance } from "@/components/widgets/charts/ChartBalance/ChartBalance";

export default function DashBoard() {
  return (
    <Stack spacing={4} sx={{ width: "100%" }}>{/* Contenedor Principal*/}
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* <ChartBalance/> */}
        </Grid>
      </Grid>
      {/*FIN Contenedor Principal*/}
    </Stack>
  )
}
