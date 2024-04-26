"use client";
import { Card } from "@/components/core/Card/Card";
import { CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { CardDineroProps } from "./CardDineroProps";
import { stylesVars } from "@/utils/stylesVars";

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
            <Typography variant="subtitle2">
              {title1}
            </Typography>
            <Typography variant="h4">{title2}</Typography>
          </Grid>
          <Grid item container xs={4} justifyContent={"flex-end"}>
            <Typography variant="subtitle2">
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider style={{ width: "100%" }} />
      <CardActions style={{ padding: "24px 16px 24px 16px" }}>
        {icon}
        <Typography
          style={{ display: "inline", color: colorPrice }}
          variant="body1"
        >
          {price}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ marginLeft: "4px", color:stylesVars.grey500}}
        >
          {info}
        </Typography>
      </CardActions>
    </Card>
  );
}
