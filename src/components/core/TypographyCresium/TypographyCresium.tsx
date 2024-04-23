import { stylesVars } from "@/utils/stylesVars";
import {
  createTheme,
  ThemeProvider,
  Typography,
  TypographyProps,
} from "@mui/material";
import React from "react";

// Define el tema personalizado
const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
});

interface TypoCresiumProps extends TypographyProps {}

export function TypographyCresium(props: TypoCresiumProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        {...props}
        color={props.color ? props.color : stylesVars.grey900}
      >
        {props.children}
      </Typography>
    </ThemeProvider>
  );
}
