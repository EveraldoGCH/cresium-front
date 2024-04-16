import styled from "styled-components";
import { stylesVars } from "@/utils/stylesVars";

export const SideNavCont = styled.div`
background:white;
color:rgba(52, 64, 84, 1);
border-right:1px solid ${stylesVars.navBorderColor};
flex-direction: column;
height: 100%;
width:280px;
left: 0;
position: fixed;
top: 0;
`

export const LogoCont = styled.div`
padding:16px;
`

export const FirstBlock = styled.div`
flex: 1 1 auto;
overflow-y: auto;
padding: 16px;
scrollbar-width: none;
`

export const ListItemNav=styled.div`

`