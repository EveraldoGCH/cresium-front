"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/constants/colorsVars";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

interface OptionChipProps {
  labelTitle: string;
  labelSubTitle: string;
  selected: boolean;
}

export default function OptionChip({
  labelTitle,
  labelSubTitle,
  selected,
}: OptionChipProps) {
  return (
    <Card
      style={
        selected
          ? {
              border: `2px solid ${colorsVars.primary500}`,
              backgroundColor: `${colorsVars.primary25}`,
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0px 0px 0px 1px #DCDFE4",
            }
          : {
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0px 0px 0px 1px #DCDFE4",
            }
      }
    >
      <Grid container xs={12} gap={"16px"}>
        <Grid
          item
          xs={1}
          container
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <FormControl>
            <RadioGroup
              defaultValue={selected ? "selected" : ""}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="selected"
                control={<Radio />}
                label=""
                style={{ margin: 0 }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={10.5}>
          <Typography variant="subtitle1">{labelTitle}</Typography>
          <Typography variant="body1" color={colorsVars.textSecondary}>
            {labelSubTitle}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
