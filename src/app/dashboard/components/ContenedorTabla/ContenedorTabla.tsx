"use client";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import { Box, Divider, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { UploadCloud02 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useState } from "react";
import Tabla, { Columns, Row } from "../../../../components/core/Tabla/Tabla";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function ContenedorTabla(): React.JSX.Element {
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
          <Box>
            {children}
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

  let columns:Columns[]=[
    {label:"Fecha"},
    {label:"Nombre", align:"left"},
    {label:"Monto"},
    {label:"Cuenta"},
    {label:"Tipo de transacción", align:"right"},
  ]

  let rows:Row[]=[
    {accesor:"Fecha", value:"12 Feb 2024"},
    {accesor:"Nombre", value:"Everaldo"},
    {accesor:"Monto", value:"120120"},
    {accesor:"Fecha", value:"12 Feb 2024"},
    {accesor:"Tipo de transacción", value:"wefefdfdsf", align:"right"},


  ]

  return (
    <Card height="600px">
      <Grid container item xs={12} style={{ padding: "20px 24px 20px 24px" }}>{/*Contenedor Header*/}
        <Grid item container xs={9}>{/*Header 1er bloque*/}
          <Grid item xs={12}>
            <Typography variant="h6">
              Últimos movimientos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color={stylesVars.grey600}>
              Mantené registro de tus últimos movimientos
            </Typography>
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
              <UploadCloud02 color={stylesVars.grey600} style={{height:"20px", width:"20px"}} />
            </IconButton>
            <Typography variant="body1" color={stylesVars.grey600}>
              Exportar información
            </Typography>
          </Grid>
        </Grid>{/*FIN Header 2do bloque*/}
      </Grid>
      <Divider />
      <Grid container xs={12}>{/*Contenedor Tabs y tabla */}
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Ver todos" style={{textTransform:"none"}} {...a11yProps(0)} />
                <Tab label="Ingresos" style={{textTransform:"none"}} {...a11yProps(1)} />
                <Tab label="Egresos" style={{textTransform:"none"}} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Tabla columns={columns} rows={rows}/>
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
