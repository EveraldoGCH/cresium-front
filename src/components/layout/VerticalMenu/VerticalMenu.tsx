"use client";
import React from "react";
import { VerticalMenuProps } from "./VerticalMenuProps";
import {
  Block,
  ChildrenCont,
  ListItemNav,
  LogoCont,
  SideNavCont,
} from "./VerticalMenuStyle";
import Image from "next/image";
import logo from "../../../../public/assets/logo.svg";
import { pathsForVerticalMenu } from "@/utils/constants/pathsForVerticalMenu";
import { colorsVars } from "@/utils/constants/colorsVars";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";
import { Box } from "@mui/material";
import ExpandableItem from "./components/ExpandableItem/ExpandableItem";

export function VerticalMenu({ children }: VerticalMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const ExcludedRoutes = [routes.login];

  if (ExcludedRoutes.includes(pathname)) {
    return <>{children}</>;
  } else {
    return (
      <>
        <SideNavCont>
          <LogoCont>
            <Image src={logo} alt="Logo" />
          </LogoCont>
          <Block style={{ flex: "1 1 auto" }}>
            {pathsForVerticalMenu.firstBlock.map((elm, i) => {
              return elm.expand != undefined ? (
                <ExpandableItem
                  key={elm.name + i}
                  icon={elm.icon}
                  name={elm.name}
                  items={elm.expand}
                />
              ) : (
                <ListItemNav
                  key={elm.name + i}
                  style={
                    pathname === elm.path
                      ? { backgroundColor: colorsVars.grey200 }
                      : {}
                  }
                  onClick={() => router.push(elm.path)}
                >
                  <Box display={"flex"} alignItems={"center"} gap={"16px"}>
                    <elm.icon />
                    {elm.name}
                  </Box>
                </ListItemNav>
              );
            })}
          </Block>
          <Block style={{ flex: "0 0 auto" }}>
            {pathsForVerticalMenu.secondBlock.map((elm, i) => {
              return (
                <ListItemNav
                  key={i}
                  style={
                    pathname === elm.path
                      ? { backgroundColor: colorsVars.grey100 }
                      : {}
                  }
                >
                  <Box display={"flex"} alignItems={"center"} gap={"16px"}>
                    <elm.icon />
                    {elm.name}
                  </Box>
                </ListItemNav>
              );
            })}
          </Block>
        </SideNavCont>
        <ChildrenCont>{children}</ChildrenCont>
      </>
    );
  }
}
