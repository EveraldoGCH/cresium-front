"use client";
import { Card } from "@/components/core/Card/Card";
import { stylesVars } from "@/utils/stylesVars";
import { Box, CardContent, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface OptionChipProps {
    labelTitle: string;
    labelSubTitle: string;
    selected: boolean;
}

export default function OptionChip({ labelTitle, labelSubTitle, selected }: OptionChipProps) {
    const router = useRouter();
    const [step, setStep] = useState(0)


    return (
        <Card
            style={
                selected ? {
                    border: `2px solid ${stylesVars.primary500}`,
                    backgroundColor: `${stylesVars.primary25}`,
                    borderRadius: "8px",
                    padding: "16px",
                    boxShadow: "0px 0px 0px 1px #DCDFE4"
                }
                    :
                    {
                        borderRadius: "8px",
                        padding: "16px",
                        boxShadow: "0px 0px 0px 1px #DCDFE4"
                    }}>
            <Grid container xs={12} gap={"16px"}>
                <Grid item xs={1} container justifyContent={"flex-start"} alignItems={"center"}>
                    <FormControl>
                        <RadioGroup
                            defaultValue={selected ? "selected" : ""}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="selected" control={<Radio />} label="" style={{ margin: 0 }} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={10.5}>
                    <Typography variant="h6">{labelTitle}</Typography>
                    <Typography variant="body1" color={stylesVars.textSecondary}>{labelSubTitle}</Typography>
                </Grid>
            </Grid>

        </Card>

    );
}
