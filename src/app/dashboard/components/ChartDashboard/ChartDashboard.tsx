"use client";
import { Card } from "@/components/core/Card/Card";
import { CardContent, Chip, Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { TabStyled, TabsStyled } from "./ChartDashboardStyle";
import { useEffect, useState } from "react";
import { Chart } from "../../../../components/core/Chart/Chart";
import { colorsVars } from "@/utils/colorsVars";
import { ShieldTick, TrendUp01 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useGetBalance } from "@/hooks/api/get/useGetBalance";
import { formatCurrency } from "@/utils/helpers/numbers";


export function ChartDashboard(): React.JSX.Element {
    const [tab, setTab] = useState(0)
    const { data: balanceResponse, isLoading: loadingBalance } = useGetBalance();

    const tabs = [
        { label: 'Día', value: 0 },
        { label: 'Mes', value: 1 },
        { label: 'Año', value: 2 }
    ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <Card>
            <Grid container xs={12} padding={"24px 24px 0 24px"} alignItems={"center"} gap={"8px"}>
                <Typography variant="h5" fontWeight={600}>
                    Balance de Cresium
                </Typography>
                <ShieldTick color={colorsVars.primary500} />
            </Grid>
            <CardContent style={{ padding: "16px 24px" }}>
                <Grid container xs={12}>
                    <Grid item container xs={8} alignItems={"center"}>
                        {loadingBalance ?
                            <Skeleton sx={{width:"50%"}}/>
                            :
                            <Typography variant="h2" fontWeight={600}>{formatCurrency(balanceResponse[0]?.balance)}</Typography>

                        }
                        <Chip
                            color="success"
                            icon={<TrendUp01 color={colorsVars.success500} />}
                            label={"4.2% TNA"}
                            size="small"
                            sx={{
                                mx: 2,
                                backgroundColor: colorsVars.success50,
                                color: colorsVars.success700
                            }} />
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
                    <Chart />
                </Grid>
            </CardContent>
        </Card>
    );
}