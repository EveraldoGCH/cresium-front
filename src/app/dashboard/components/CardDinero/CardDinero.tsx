'use client';
import { Card } from '@/components/core/Card/Card';
import { CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { Bloque1, Bloque2 } from './CardDineroStyle';
import { TypographyCresium } from '@/components/core/TypographyCresium/TypographyCresium';
import { stylesVars } from '@/utils/stylesVars';


export function CardDinero(): React.JSX.Element {

  return (
    <Card height={"216px"}>
      <CardContent style={{ padding: "24px 24px 24px 24px" }}>
        <Grid container xs={12}>
          <Grid container item xs={8} direction={"column"} style={{ gap: "8px" }}>
            <TypographyCresium variant='subtitle1'>
              Ingreso de dinero
            </TypographyCresium>
            <TypographyCresium variant='h4'>
              $650.000
            </TypographyCresium>
          </Grid>
          <Grid item container xs={4} justifyContent={"flex-end"}>
            <TypographyCresium variant='subtitle1'>
              1-9 de Marzo
            </TypographyCresium>
          </Grid>
        </Grid>
      </CardContent>
      <Divider style={{ width: "100%" }} />
      <CardActions style={{ padding: "24px 16px 24px 16px" }}>
        
        <TypographyCresium style={{ display: "inline", color: stylesVars.succesMain }} variant='body1'>
          $302.430
        </TypographyCresium>
        <TypographyCresium variant='body1' style={{ display: "inline" }}>
          más que el mes pasado
        </TypographyCresium>
      </CardActions>
    </Card>
  );
}
