import styled from "styled-components";
import { stylesVars } from "@/utils/stylesVars";

export const SideNavCont = styled.div`
  background: white;
  color: ${stylesVars.grey900};
  border-right: 1px solid ${stylesVars.navBorderColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${stylesVars.verticalMenuWidth};
  left: 0;
  position: fixed;
  top: 0;
`;

export const LogoCont = styled.div`
  padding: 16px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 16px;
  scrollbar-width: none;
  gap: 8px;
`;

export const ListItemNav = styled.div`
  gap: 8px;
  padding: 6px 16px;
  display: flex;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 28px;
  &:hover {
    background-color: rgb(242, 244, 247, 0.4);
    transition: 0.2s ease;
  }
`;

export const ChildrenCont = styled.main`
  margin-left: ${stylesVars.verticalMenuWidth};
  padding: 32px 64px 48px 64px;
  width: 100vw;
  min-height: 100%;
  background-color: ${stylesVars.backgroundColor};
`;
