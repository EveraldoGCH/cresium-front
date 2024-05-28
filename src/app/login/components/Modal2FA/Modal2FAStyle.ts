import { OutlinedInput } from "@mui/material";
import styled from "styled-components";

export const InputStyled = styled(OutlinedInput)(() => ({
  width: "56px",
  height: "60px",
  fontSize: "48px",
  "& .MuiInputBase-input": {
    height: "60px",
  },
}));
