"use client";
import { Card } from "@/components/core/Card/Card";
import { CardContent, Chip, Divider, Grid, Typography } from "@mui/material";
import { TabStyled, TabsStyled } from "./ChartDashboardStyle";
import { useState } from "react";
import { Chart } from "../Chart/Chart";


export function ChartDashboard(): React.JSX.Element {
    const [tab, setTab] = useState(0)

    const tabs = [
        { label: 'Día', value: 0 },
        { label: 'Mes', value: 1 },
        { label: 'Año', value: 2 }
    ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

        return (
            <Card height={"414px"}>
                <Typography variant="h5" fontWeight={600} style={{ padding: "24px 24px 0 24px" }}>
                    Balance de Cresium
                </Typography>
                <CardContent style={{ padding: "16px 24px" }}>
                    <Grid container xs={12}>
                        <Grid item container xs={8} alignItems={"center"}>
                            <Typography variant="h2" fontWeight={600}>$12.097.834,81</Typography>
                            <Chip color="success" label={"4.2% TNA"} size="small" sx={{ mx: 2 }} />
                        </Grid>
                        <Grid item xs={4} container alignItems={"center"} justifyContent={"flex-end"}>
                            <TabsStyled value={tab} onChange={handleChange} variant="scrollable">
                                {tabs.map((tab) => (
                                    <TabStyled
                                        iconPosition="end"
                                        key={tab.value}
                                        label={tab.label}
                                        sx={{ minHeight: 'auto' }}
                                        tabIndex={0}
                                        value={tab.value}
                                    />
                                ))}
                            </TabsStyled>
                        </Grid>
                    </Grid>
                    <Divider style={{ margin: "16px 0" }} />
                    <Grid container xs={12}>
                        <Chart/>
                    </Grid>
                </CardContent>
            </Card>
        );
    }