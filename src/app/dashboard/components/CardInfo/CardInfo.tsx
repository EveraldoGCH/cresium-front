"use client";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import { Grid, Typography } from "@mui/material";
import {
  ArrowRight,
  CoinsStacked03,
} from "../../../../../public/assets/iconsComponents/iconsComponents";

export function CardInfo(): React.JSX.Element {
  return (
    <Card
      style={{
        border: `1px solid ${stylesVars.primary200}`,
        backgroundColor: `${stylesVars.primary25}`,
        padding: "16px",
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
              color={stylesVars.primary700}
              fontWeight={500}
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
              color={stylesVars.primary700}
              fontWeight={500}
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
              color={stylesVars.primary700}
              fontWeight={500}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              Ingresá dinero
            </Typography>
            <ArrowRight
              color={stylesVars.primary700}
              style={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
