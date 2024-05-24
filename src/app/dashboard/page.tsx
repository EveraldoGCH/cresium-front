"use client";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import {
  TrendUp02,
  TrendDown02,
  TrendUp01,
  TrendDown01,
  Home01,
} from "../../../public/assets/iconsComponents/iconsComponents";
import { colorsVars } from "@/utils/constants/colorsVars";
import { CardDinero } from "./components/CardDinero/CardDinero";
import { CardDatosCuenta } from "./components/CardDatosCuenta/CardDatosCuenta";
import { CardInfo } from "./components/CardInfo/CardInfo";
import { ContenedorTabla } from "./components/ContenedorTabla/ContenedorTabla";
import { ChartDashboard } from "./components/ChartDashboard/ChartDashboard";
import { useRouter } from "next/navigation";


export default function DashBoard() {
  const router = useRouter()

  return (
    <Stack spacing={5.5} sx={{ width: "100%" }}>{/* Contenedor Principal*/}
      <Stack spacing={2.5}>{/* Primer contenedor */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{ alignItems: "center", width: "100%" }}
        >
          <Box sx={{ flex: "1 1 auto" }}>
            <Box display={"flex"} alignItems={"center"} gap={"8px"}>
              <Home01 height={"16px"} width={"16px"} color={colorsVars.textSecondary}/>
              <p style={{ margin: 0, color:colorsVars.textSecondary }}>Home</p>
            </Box>
            <Typography
              variant="h2"
              style={{ fontWeight: "600", margin: "14px 0" }}
            >
              Bienvenido Maximiliano
            </Typography>
            <p style={{ margin: 0, color:colorsVars.textSecondary }}>Alphabet Inc.</p>
          </Box>
          <Button variant="text" startIcon={<TrendDown02 />}>Recibir dinero</Button>
          <Button variant="contained" startIcon={<TrendUp02 />} onClick={() => router.push("/enviar-dinero")}>Enviar dinero</Button>
        </Stack>
        <Divider style={{ color: colorsVars.grey200 }} />
      </Stack>{/*Fin primer contenedor */}
      <Grid
        container
        xs={12}
        justifyContent={"space-between"}
        style={{ gap: "4%" }}
        flexWrap={"nowrap"}
      >{/*Contenedor Cards y chart*/}
        <Grid item xs={8}>
          <ChartDashboard />
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
            icon={<TrendUp01 color={colorsVars.succesMain} />}
            title1="Ingreso de dinero"
            title2="$650.000"
            subtitle="1-9 de Marzo"
            colorPrice={colorsVars.succesMain}
            price="$302.430"
            info="más que el mes pasado"
          />
        </Grid>
        <Grid item xs={6}>
          <CardDinero
            icon={<TrendDown01 color={colorsVars.errorMain} />}
            title1="Egreso de dinero"
            title2="$650.000"
            subtitle="1-9 de Marzo"
            colorPrice={colorsVars.errorMain}
            price="$302.430"
            info="menos que el mes pasado"
          />
        </Grid>
      </Grid>
      {/*FIN contenedor Cards Ingreso egreso dinero*/}
      <Grid container xs={12}>
        {/*Contenedor Tabla */}
        <ContenedorTabla />
        {/*FIN Contenedor Tabla */}
      </Grid>
      {/*FIN Contenedor Principal*/}
    </Stack>
  );
}
