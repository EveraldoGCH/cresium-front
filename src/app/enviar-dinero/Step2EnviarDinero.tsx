"use client";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Step2EnviarDinero() {
    const router = useRouter();
    const [step, setStep] = useState(0)


    return (
        <Stack spacing={2.8} sx={{ width: "100%" }}>{/* Contenedor Principal*/}
        </Stack>
    );
}
