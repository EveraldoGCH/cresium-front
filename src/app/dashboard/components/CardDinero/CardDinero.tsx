"use client";
import { Card } from "@/components/core/Card/Card";
import { CardActions, CardContent, Divider, Grid } from "@mui/material";
import React from "react";
import { TypographyCresium } from "@/components/core/TypographyCresium/TypographyCresium";
import { CardDineroProps } from "./CardDineroProps";

export function CardDinero({
  icon,
  title1,
  title2,
  subtitle,
  colorPrice,
  price,
  info,
}: CardDineroProps): React.JSX.Element {
  return (
    <Card height={"216px"}>
      <CardContent style={{ padding: "24px 24px 24px 24px" }}>
        <Grid container xs={12}>
          <Grid
            container
            item
            xs={8}
            direction={"column"}
            style={{ gap: "8px" }}
          >
            <TypographyCresium variant="subtitle2" style={{ fontSize: "16px" }}>
              {title1}
            </TypographyCresium>
            <TypographyCresium variant="h4">{title2}</TypographyCresium>
          </Grid>
          <Grid item container xs={4} justifyContent={"flex-end"}>
            <TypographyCresium variant="subtitle1">
              {subtitle}
            </TypographyCresium>
          </Grid>
        </Grid>
      </CardContent>
      <Divider style={{ width: "100%" }} />
      <CardActions style={{ padding: "24px 16px 24px 16px" }}>
        {icon}
        <TypographyCresium
          style={{ display: "inline", color: colorPrice }}
          variant="body1"
        >
          {price}
        </TypographyCresium>
        <TypographyCresium
          variant="body1"
          style={{ display: "inline", marginLeft: "4px" }}
        >
          {info}
        </TypographyCresium>
      </CardActions>
    </Card>
  );
}
