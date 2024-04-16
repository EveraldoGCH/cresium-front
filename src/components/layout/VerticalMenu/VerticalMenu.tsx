"use client";
import * as React from "react";
import { VerticalMenuProps } from "./VerticalMenuProps";
import { FirstBlock, ListItemNav, LogoCont, SideNavCont } from "./styles";
import Image from "next/image";
import logo from "../../../../public/assets/logo.svg"

export function VerticalMenu({
  children,
}: VerticalMenuProps) {

  return (
    <SideNavCont>
      <LogoCont>
        <Image src={logo} alt="Logo" />
      </LogoCont>
      <FirstBlock>
        <ListItemNav>
          
        </ListItemNav>
      </FirstBlock>

    </SideNavCont>
  );
}
