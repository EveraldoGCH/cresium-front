"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/constants/colorsVars";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { UploadCloud02 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useMemo, useState } from "react";
import Tabla from "../../../../components/core/Tabla/Tabla";
import { Column } from "@/components/core/Tabla/TablaProps";
import { useGetTransactions } from "@/hooks/apiCalls/get/useGetTransactions";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabs = [
  { label: "Ver todos", value: 0, type: "all" },
  { label: "Ingresos", value: 1, type: "income" },
  { label: "Egresos", value: 2, type: "outcome" },
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
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export function ContenedorTabla(): React.JSX.Element {
  const [tab, setTab] = useState(0);

  const { data: dataTransactions, isLoading: loadingTransactions } =
    useGetTransactions(tabs[tab].type);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const columns: Column[] = [
    { label: "Fecha", rowAccesor: "createdAt" },
    { label: "Nombre", align: "left", rowAccesor: "collaboratorFirstName" },
    { label: "Monto", align: "right", rowAccesor: "amount" },
    { label: "Cuenta", align: "right", rowAccesor: "account" },
    { label: "Tipo de transacción", align: "right", rowAccesor: "transaction" },
  ];

  let rows = useMemo(() => {
    let rowsMap = dataTransactions?.transactions.map((elm) => {
      return {
        createdAt: elm.createdAt,
        collaboratorFirstName: elm.collaborator.firstName,
        amount: elm.totalAmount,
        account: elm.collaborator.phone,
        transaction: elm.type,
      };
    });

    return rowsMap;
  }, [dataTransactions]);

  if (loadingTransactions) {
    return (
      <Card style={{ marginBottom: "64px", minHeight: "798px" }}>
        <Grid container item xs={12} style={{ padding: "20px 24px 20px 24px" }}>
          {/*Contenedor Header*/}
          <Grid item container xs={9}>
            {/*Header 1er bloque*/}
            <Grid item xs={12}>
              <Typography variant="h6">Últimos movimientos</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color={colorsVars.grey600}>
                Mantené registro de tus últimos movimientos
              </Typography>
            </Grid>
          </Grid>
          {/*FIN Header 1er bloque*/}
          <Grid item container xs={3}>
            {/* Header 2do bloque*/}
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"flex-end"}
              xs={12}
            >
              <IconButton>
                <UploadCloud02
                  color={colorsVars.grey600}
                  style={{ height: "20px", width: "20px" }}
                />
              </IconButton>
              <Typography variant="body1" color={colorsVars.grey600}>
                Exportar información
              </Typography>
            </Grid>
          </Grid>
          {/*FIN Header 2do bloque*/}
        </Grid>
        <Divider />
        <Grid container xs={12}>
          {/*Contenedor Tabs y tabla */}
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={tab} aria-label="basic tabs example">
                  {tabs.map((tab, i) => (
                    <Tab
                      label={tab.label}
                      onClick={(e) => handleChange(e, i)}
                      key={tab.label + i}
                    />
                  ))}
                </Tabs>
              </Box>
              {tabs.map((elm, i) => (
                <CustomTabPanel
                  value={tab}
                  index={elm.value}
                  key={elm.value + i}
                >
                  <Stack padding={"24px"}>
                    <Skeleton variant="rounded" height={"658px"} />
                  </Stack>
                </CustomTabPanel>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
  }

  return (
    <Card style={{ marginBottom: "64px", minHeight: "798px" }}>
      <Grid container item xs={12} style={{ padding: "20px 24px 20px 24px" }}>
        {/*Contenedor Header*/}
        <Grid item container xs={9}>
          {/*Header 1er bloque*/}
          <Grid item xs={12}>
            <Typography variant="h6">Últimos movimientos</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color={colorsVars.grey600}>
              Mantené registro de tus últimos movimientos
            </Typography>
          </Grid>
        </Grid>
        {/*FIN Header 1er bloque*/}
        <Grid item container xs={3}>
          {/* Header 2do bloque*/}
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"flex-end"}
            xs={12}
          >
            <IconButton>
              <UploadCloud02
                color={colorsVars.grey600}
                style={{ height: "20px", width: "20px" }}
              />
            </IconButton>
            <Typography variant="body1" color={colorsVars.grey600}>
              Exportar información
            </Typography>
          </Grid>
        </Grid>
        {/*FIN Header 2do bloque*/}
      </Grid>
      <Divider />
      <Grid container xs={12}>
        {/*Contenedor Tabs y tabla */}
        <Grid item xs={12}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={tab} aria-label="basic tabs example">
                {tabs.map((tab, i) => (
                  <Tab label={tab.label} onClick={(e) => handleChange(e, i)} key={tab.value + i} />
                ))}
              </Tabs>
            </Box>
            {tabs.map((elm) => (
              <CustomTabPanel value={tab} index={elm.value} key={elm.value}>
                <Tabla columns={columns} rows={rows} />
              </CustomTabPanel>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
