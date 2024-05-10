"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/colorsVars";
import { Box, Button, Grid, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import OptionChip from "./components/OptionChip/OptionChip";
import "./style.css"
import { CheckCircle } from "../../../public/assets/iconsComponents/iconsComponents";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

export default function Step2EnviarDinero() {

    return (
        <Stack gap={"16px"} style={{ width: "100%" }}>
            <Card style={{ padding: "24px" }} height="248px">
            </Card>
            <Card style={{ padding: "24px" }} height="304px">   
            </Card>
            <Card height="212px" style={{ padding: "24px" }}>
            </Card>
        </Stack>
    );
}
