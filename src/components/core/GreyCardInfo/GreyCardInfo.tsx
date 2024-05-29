"use client";
import React from "react";
import { Card } from "../Card/Card";
import { colorsVars } from "@/utils/constants/colorsVars";
import { Typography } from "@mui/material";

interface CardProps {
  height?: string;
  style?: React.CSSProperties;
  text1: string;
  text2: string | number;
}

export function GreyCardInfo({
  style,
  text1,
  text2,
}: CardProps): React.JSX.Element {
  return (
    <Card
      style={{
        ...style,
        backgroundColor: `${colorsVars.grey100}`,
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <Typography variant="body1" fontWeight={500}>
        {text1}
      </Typography>
      <Typography variant="subtitle1">{text2}</Typography>
    </Card>
  );
}
