import styled from "styled-components";
import { stylesVars } from "@/utils/stylesVars";

export const SideNavCont = styled.div`
  background: white;
  color: rgba(52, 64, 84, 1);
  border-right: 1px solid ${stylesVars.navBorderColor};
  display:flex;
  flex-direction: column;
  height: 100%;
  width: 280px;
  left: 0;
  position: fixed;
  top: 0;
`;

export const LogoCont = styled.div`
  padding: 16px;
`;

export const Block = styled.div`
display:flex;
flex-direction:column;
overflow-y: auto;
padding: 16px;
scrollbar-width: none;
gap:8px;
`;

export const ListItemNav = styled.div`
gap: 8px;
padding: 6px 16px;
display:flex;
font-weight:500;
border-radius: 8px;
cursor:pointer;
font-size: 0.875rem;
line-height: 28px;
`;
