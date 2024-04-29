"use client";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import { Box, Divider, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { UploadCloud02 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useState } from "react";
import Tabla from "../../../../components/core/Tabla/Tabla";
import { Column } from "@/components/core/Tabla/TablaProps";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`

  };
}

export function ContenedorTabla(): React.JSX.Element {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const columns: Column[] = [
    { label: "Fecha" },
    { label: "Nombre", align: "left" },
    { label: "Monto", align:"right" },
    { label: "Cuenta", align:"right" },
    { label: "Tipo de transacción", align: "right" },
  ]

  const rows = [
    { name: "Fecha1", date: 'Snow', amount: 'Jon', account: 35, transaccion:"transaccion" },
    { name: "Fecha2", date: 'Lannister', amount: 'Cersei', account: 42, transaccion:"transaccion" },
    { name: "Fecha3", date: 'Lannister', amount: 'Jaime', account: 45, transaccion:"transaccion" },
    { name: "Fecha4", date: 'Stark', amount: 'Arya', account: 16, transaccion:"transaccion" },
    { name: "Fecha5", date: 'Targaryen', amount: 'Daenerys', account: null, transaccion:"transaccion" },
  ];

  return (
    <Card>
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
              <UploadCloud02 color={stylesVars.grey600} style={{ height: "20px", width: "20px" }} />
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
                <Tab label="Ver todos" {...a11yProps(0)} />
                <Tab label="Ingresos" {...a11yProps(1)} />
                <Tab label="Egresos" {...a11yProps(2)} />
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
