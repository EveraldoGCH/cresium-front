"use client";
import { Card } from "@/components/core/Card/Card";
import { TypographyCresium } from "@/components/core/TypographyCresium/TypographyCresium";
import { stylesVars } from "@/utils/stylesVars";
import { Box, Divider, Grid, IconButton, Tab, Tabs } from "@mui/material";
import { UploadCloud02 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useState } from "react";
import { TabStyled } from "./TablaMovimientosStyle";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TablaMovimientos(): React.JSX.Element {
  const [value, setValue] = useState(0)

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <TypographyCresium>{children}</TypographyCresium>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
      
    };
  }

  return (
    <Card height="600px">
      <Grid container item xs={12} style={{ padding: "20px 24px 20px 24px" }}>{/*Contenedor Header*/}
        <Grid item container xs={9}>{/*Header 1er bloque*/}
          <Grid item xs={12}>
            <TypographyCresium variant="h6">
              Últimos movimientos
            </TypographyCresium>
          </Grid>
          <Grid item xs={12}>
            <TypographyCresium variant="subtitle1" color={stylesVars.grey600}>
              Mantené registro de tus últimos movimientos
            </TypographyCresium>
          </Grid>
        </Grid>{/*FIN Header 1er bloque*/}
        <Grid item container xs={3}>{/* Header 2do bloque*/}
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"flex-end"}
            xs={12}
          >
            <IconButton>
              <UploadCloud02 color={stylesVars.grey600} />
            </IconButton>
            <TypographyCresium variant="subtitle1" color={stylesVars.grey600}>
              Exportar información
            </TypographyCresium>
          </Grid>
        </Grid>{/*FIN Header 2do bloque*/}
      </Grid>
      <Divider />
      <Grid container xs={12}>{/*Contenedor Tabs y tabla */}
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <TabStyled label="Ver todos" style={{textTransform:"none"}} {...a11yProps(0)} />
                <TabStyled label="Ingresos" style={{textTransform:"none"}} {...a11yProps(1)} />
                <TabStyled label="Egresos" style={{textTransform:"none"}} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Ver todos
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Ingresos
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Egresos
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
