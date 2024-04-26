"use client";
import { Box, Divider, Grid, Stack } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import {
  TrendUp02,
  TrendDown02,
  TrendUp01,
  TrendDown01,
} from "../../../public/assets/iconsComponents/iconsComponents";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import { CardDinero } from "./components/CardDinero/CardDinero";
import { CardDatosCuenta } from "./components/CardDatosCuenta/CardDatosCuenta";
import { CardInfo } from "./components/CardInfo/CardInfo";
import { TablaMovimientos } from "./components/TablaMovimientos/TablaMovimientos";

export default function DashBoard() {
  return (
    <Stack spacing={5.5} sx={{ width: "100%" }}>
      {/* Contenedor Principal*/}
      <Stack>
        {" "}
        {/* Primer contenedor */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{ alignItems: "center", width: "100%" }}
        >
          <Box sx={{ flex: "1 1 auto" }}>
            <p>Home</p>
            <h1
              style={{ fontWeight: "600", fontSize: "30px", margin: "20px 0" }}
            >
              Bienvenido Maximiliano
            </h1>
            <p>Cresium.io</p>
          </Box>

          <Button variant="contained" startIcon={<TrendUp02 />}>Enviar dinero</Button>
          <Button variant="contained" startIcon={<TrendDown02 />}>Recibir dinero</Button>
        </Stack>
        <Divider />
      </Stack>
      {/*Fin primer contenedor */}
      <Grid
        container
        xs={12}
        justifyContent={"space-between"}
        style={{ gap: "4%" }}
        flexWrap={"nowrap"}
      >
        {/*Contenedor Cards y chart*/}
        <Grid item xs={8}>
          <Card height={"414px"} />
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent={"space-between"}
          direction={"column"}
        >
          <CardDatosCuenta />
          <CardInfo />
        </Grid>
      </Grid>
      {/*FIN contenedor Cards y chart*/}
      <Grid
        container
        xs={12}
        justifyContent={"space-between"}
        flexWrap={"nowrap"}
        style={{ gap: "4%" }}
      >
        {/*Contenedor Cards Ingreso egreso dinero*/}
        <Grid item xs={6}>
          <CardDinero
            icon={<TrendUp01 color={stylesVars.succesMain} />}
            title1="Ingreso de dinero"
            title2="$650.000"
            subtitle="1-9 de Marzo"
            colorPrice={stylesVars.succesMain}
            price="$302.430"
            info="más que el mes pasado"
          />
        </Grid>
        <Grid item xs={6}>
          <CardDinero
            icon={<TrendDown01 color={stylesVars.errorMain} />}
            title1="Egreso de dinero"
            title2="$650.000"
            subtitle="1-9 de Marzo"
            colorPrice={stylesVars.errorMain}
            price="$302.430"
            info="menos que el mes pasado"
          />
        </Grid>
      </Grid>
      {/*FIN contenedor Cards Ingreso egreso dinero*/}
      <Grid container xs={12}>
        {/*Contenedor Tabla */}
        <TablaMovimientos />
        {/*FIN Contenedor Tabla */}
      </Grid>
      {/*FIN Contenedor Principal*/}
    </Stack>
  );
}
