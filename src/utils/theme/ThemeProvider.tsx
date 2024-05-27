"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { type FC, type ReactNode } from "react";
import theme from "./theme";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
