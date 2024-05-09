"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/colorsVars";
import { Grid, Typography } from "@mui/material";
import {
  ArrowRight,
  CoinsStacked03,
} from "../../../../../public/assets/iconsComponents/iconsComponents";

export function CardInfo(): React.JSX.Element {
  return (
    <Card
      style={{
        border: `1px solid ${colorsVars.primary200}`,
        backgroundColor: `${colorsVars.primary25}`,
        padding: "16px",
        borderRadius:"12px"
      }}
    >
      <Grid container xs={12}>
        {/*Contenedor Card */}
        <Grid item container xs={12} style={{ gap: "12px" }}>
          <Grid
            item
            xs={1}
            container
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"flex-start"}
          >
            <CoinsStacked03 />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="subtitle2"
              color={colorsVars.primary700}
            >
              Ingresa dinero a tu cuenta de Cresium ahora y empeza a generar
              rendimiento.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent={"flex-end"}
          style={{ marginLeft: "12px", marginTop: "4vh" }}
        >
          <Grid item xs={5.5}>
            <Typography
              variant="subtitle2"
              component={"button"}
              color={colorsVars.primary700}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              Aprendé más
            </Typography>
          </Grid>
          <Grid
            item
            xs={5.5}
            container
            alignItems={"center"}
            style={{ gap: "8px" }}
          >
            <Typography
              variant="subtitle2"
              component={"button"}
              color={colorsVars.primary700}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              Ingresá dinero
            </Typography>
            <ArrowRight
              color={colorsVars.primary700}
              style={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
