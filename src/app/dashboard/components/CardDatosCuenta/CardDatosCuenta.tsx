"use client";
import { Card } from "@/components/core/Card/Card";
import { TypographyCresium } from "@/components/core/TypographyCresium/TypographyCresium";
import { stylesVars } from "@/utils/stylesVars";
import { CardActions, CardContent, Divider, Grid } from "@mui/material";
import { Copy06 } from "../../../../../public/assets/iconsComponents/iconsComponents";

export function CardDatosCuenta(): React.JSX.Element {
  return (
    <Card>
      <CardContent style={{ padding: "16px 24px 16px 24px" }}>
        <TypographyCresium variant="subtitle2" style={{ fontSize: "16px" }}>
          Datos de la cuenta
        </TypographyCresium>
      </CardContent>
      <Divider style={{ width: "100%" }} />
      <CardActions style={{ padding: "24px" }}>
        <Grid container direction={"column"}>
          {/*Contenedor Alias y cvu */}
          <Grid item>
            <TypographyCresium
              variant="subtitle2"
              color={stylesVars.grey500}
              fontSize={"18px"}
            >
              Alias
            </TypographyCresium>
          </Grid>
          <Grid
            item
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TypographyCresium variant="subtitle2" fontSize={"18px"}>
              cresiumapp
            </TypographyCresium>
            <Copy06
              style={{ cursor: "pointer", colors: stylesVars.primary600 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider style={{ width: "100%", margin: "16px 0" }} />
          </Grid>
          <Grid item>
            <TypographyCresium
              variant="subtitle2"
              color={stylesVars.grey500}
              fontSize={"18px"}
            >
              CVU
            </TypographyCresium>
          </Grid>
          <Grid
            item
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TypographyCresium variant="subtitle2" fontSize={"18px"}>
              1234567890123456789
            </TypographyCresium>
            <Copy06
              style={{ cursor: "pointer", colors: stylesVars.primary600 }}
            />
          </Grid>
        </Grid>
        {/*FIN Contenedor Alias y cvu */}
      </CardActions>
    </Card>
  );
}
