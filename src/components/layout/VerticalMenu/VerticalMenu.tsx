"use client";
import React from "react";
import { VerticalMenuProps } from "./VerticalMenuProps";
import {
  Block,
  ChildrenCont,
  ListItemNav,
  LogoCont,
  SideNavCont,
} from "./styles";
import Image from "next/image";
import logo from "../../../../public/assets/logo.svg";
import { pathsForVerticalMenu } from "@/utils/pathsForVerticalMenu";
import { colorsVars } from "@/utils/colorsVars";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";

export function VerticalMenu({ children }: VerticalMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const ExcludedRoutes = [routes.login]

  if (ExcludedRoutes.includes(pathname)) {
    return (<>{children}</>)
  }

  else {
    return (
      <>
        <SideNavCont>
          <LogoCont>
            <Image src={logo} alt="Logo" />
          </LogoCont>
          <Block style={{ flex: "1 1 auto" }}>
            {pathsForVerticalMenu.firstBlock.map((elm, i) => {
              return (
                <ListItemNav
                  key={i}
                  style={
                    pathname === elm.path
                      ? { backgroundColor: colorsVars.grey100 }
                      : {}
                  }
                  onClick={() => router.push(elm.path)}
                >
                  <Image src={elm.icon} alt={elm.name} />
                  {elm.name}
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
                  <Image src={elm.icon} alt={elm.name} />
                  {elm.name}
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
