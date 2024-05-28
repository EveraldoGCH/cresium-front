import React, { useState } from "react";
import { ListItemNav } from "../../VerticalMenuStyle";
import { Box, Stack } from "@mui/material";
import { ChevronDown } from "../../../../../../public/assets/iconsComponents/iconsComponents";
import { usePathname, useRouter } from "next/navigation";
import { colorsVars } from "@/utils/constants/colorsVars";

interface ExpandableItemProps {
  key: string;
  icon: () => React.JSX.Element;
  name: string;
  items: any[];
}

export default function ExpandableItem({
  key,
  icon,
  name,
  items,
}: ExpandableItemProps) {
  const [expanded, setExpanded] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const IconComp = icon;

  return (
    <Stack style={{ transition: "2s" }}>
      <ListItemNav key={key} onClick={() => setExpanded(!expanded)}>
        <Box display={"flex"} alignItems={"center"} gap={"16px"}>
          <IconComp />
          {name}
        </Box>
        {expanded ? (
          <ChevronDown
            style={{ transform: "rotate(180deg)", transition: "0.5s" }}
          />
        ) : (
          <ChevronDown
            style={
              expanded
                ? { transform: "rotate(0deg)" }
                : { transform: "rotate(360deg)", transition: "0.3s" }
            }
          />
        )}
      </ListItemNav>
      {expanded && (
        <Stack marginLeft={"24px"} gap={"8px"}>
          {items.map((elm, i) => {
            return (
              <ListItemNav
                key={elm.name + i}
                onClick={() => router.push(elm.path)}
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
        </Stack>
      )}
    </Stack>
  );
}
