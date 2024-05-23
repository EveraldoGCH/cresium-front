"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/colorsVars";
import { Box, Divider, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { UploadCloud02 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useState } from "react";
import Tabla from "../../../../components/core/Tabla/Tabla";
import { Column } from "@/components/core/Tabla/TablaProps";
import { useGetTransactions } from "@/hooks/apiCalls/get/useGetTransactions";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabs = [
  { label: 'Ver todos', value: 0, type: "all" },
  { label: 'Ingresos', value: 1, type: "income" },
  { label: 'Egresos', value: 2, type: "outcome" }
];

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

export function ContenedorTabla(): React.JSX.Element {
  const [tab, setTab] = useState(0)

  const { data: transactions, isLoading: loadingTransactions } = useGetTransactions(tabs[tab].type);

  console.log("TRANSS", transactions)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const columns: Column[] = [
    { label: "Fecha" },
    { label: "Nombre", align: "left" },
    { label: "Monto", align: "right" },
    { label: "Cuenta", align: "right" },
    { label: "Tipo de transacción", align: "right" },
  ]

  const rows = [
    { name: "Fecha1", date: 'Snow', amount: 'Jon', account: 35, transaccion: "transaccion" },
    { name: "Fecha2", date: 'Lannister', amount: 'Cersei', account: 42, transaccion: "transaccion" },
    { name: "Fecha3", date: 'Lannister', amount: 'Jaime', account: 45, transaccion: "transaccion" },
    { name: "Fecha4", date: 'Stark', amount: 'Arya', account: 16, transaccion: "transaccion" },
    { name: "Fecha5", date: 'Targaryen', amount: 'Daenerys', account: null, transaccion: "transaccion" },
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
            <Typography variant="body1" color={colorsVars.grey600}>
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
              <UploadCloud02 color={colorsVars.grey600} style={{ height: "20px", width: "20px" }} />
            </IconButton>
            <Typography variant="body1" color={colorsVars.grey600}>
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
              <Tabs value={tab} aria-label="basic tabs example">
                {tabs.map((tab, i) => (
                  <Tab label={tab.label} onClick={(e)=>handleChange(e, i)}/>
                ))}
              </Tabs>
            </Box>
            <CustomTabPanel value={tab} index={0}>
              <Tabla columns={columns} rows={rows} />
            </CustomTabPanel>
            <CustomTabPanel value={tab} index={1}>
              Ingresos
            </CustomTabPanel>
            <CustomTabPanel value={tab} index={2}>
              Egresos
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
