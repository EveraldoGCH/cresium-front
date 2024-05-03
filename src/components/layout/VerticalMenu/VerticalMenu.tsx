"use client";
import React, { useState, useEffect } from "react";
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
import { paths } from "@/utils/paths";
import { stylesVars } from "@/utils/stylesVars";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function VerticalMenu({ children }: VerticalMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <>
      <SideNavCont>
        <LogoCont>
          <Image src={logo} alt="Logo" />
        </LogoCont>
        <Block style={{ flex: "1 1 auto" }}>
          {paths.firstBlock.map((elm, i) => {
            return (
              <ListItemNav
                key={i}
                style={
                  currentPath === elm.path
                    ? { backgroundColor: stylesVars.grey100 }
                    : {}
                }
                onClick={()=>router.push(elm.path)}
              >
                <Image src={elm.icon} alt={elm.name} />
                {elm.name}
              </ListItemNav>
            );
          })}
        </Block>
        <Block style={{ flex: "0 0 auto" }}>
          {paths.secondBlock.map((elm, i) => {
            return (
              <ListItemNav
                key={i}
                style={
                  currentPath === elm.path
                    ? { backgroundColor: stylesVars.grey100 }
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
