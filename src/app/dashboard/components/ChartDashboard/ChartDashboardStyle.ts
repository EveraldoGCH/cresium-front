import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";
// import { stylesVars } from "@/utils/stylesVars";

export const TabStyled = styled(Tab)`
  padding:0;
  min-width:40px;
  
`;

export const TabsStyled = styled(Tabs)`
min-height:30px;
  & .MuiTabs-indicator{
    bottom: 0px;
  }
  & .MuiTabs-flexContainer{
    gap:24px;
  }
`;
