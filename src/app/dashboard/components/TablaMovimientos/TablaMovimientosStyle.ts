import { Tab } from "@mui/material";
import styled from "styled-components";
import { stylesVars } from "@/utils/stylesVars";

export const TabStyled = styled(Tab)`
color:${stylesVars.textSecondary};

&.Mui-selected{
    color: ${stylesVars.primaryMain};
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
}
&span >{
    background-color:${stylesVars.primaryMain};
    border-radius:20px;
    left:10px;
    height:10px;
    width:90px;
}
`;
