"use client";
import React from "react";
import { Card } from "../Card/Card";
import { colorsVars } from "@/utils/colorsVars";

interface CardProps {
    height?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export function GreyCardInfo({
    children,
    style,
}: CardProps): React.JSX.Element {
    return (
        <Card style={{
            ...style,
            backgroundColor: `${colorsVars.grey100}`,
            borderRadius: "12px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px"
        }}>
            {children}
        </Card>
    );
}
