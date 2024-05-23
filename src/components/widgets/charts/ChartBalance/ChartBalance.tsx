"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// import { NoSsr } from '@/components/core/NoSsr/NoSsr';
import { Divider } from "@mui/material";

const data = [
  { name: "Jan", value: 2 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 10 },
  { name: "Apr", value: 35 },
  { name: "May", value: 25 },
  { name: "Jun", value: 20 },
  { name: "Jul", value: 31 },
  { name: "Aug", value: 50 },
  { name: "Sep", value: 55 },
  { name: "Oct", value: 32 },
  { name: "Nov", value: 60 },
  { name: "Dec", value: 88 },
] satisfies { name: string; value: number }[];

const tabs = [
  { label: "Día", value: "" },
  { label: "Mes", value: "" },
  { label: "Año", value: "" },
] satisfies { label: string, value: string }[];

export function ChartBalance(): React.JSX.Element {
  const chartHeight = 240;
  const color = "white";

  return (
    <Box>
      <Card>
        <CardHeader title="Balance de Cresium" />
        <CardContent>
          {/* <NoSsr fallback={<Box sx={{ height: `${chartHeight}px` }} />}> */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center">
              <Box className="Display-smSemibold">$12.097.834,81</Box>
              <Chip
                color="success"
                label={"4.2% TNA"}
                size="small"
                sx={{ mx: 2 }}
              />
            </Stack>
            <Tabs style={{ paddingLeft: "3px" }} value={""} variant="scrollable">
              {tabs.map((tab) => (
                <Tab
                  iconPosition="end"
                  key={tab.value}
                  label={tab.label}
                  sx={{ minHeight: "auto" }}
                  tabIndex={0}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <ResponsiveContainer height={chartHeight} width="100%">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <defs>
                <linearGradient
                  id="area-performance"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop offset="0" stopColor={color} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="2 4" vertical={false} />
              <XAxis
                axisLine={false}
                dataKey="name"
                tickLine={false}
                type="category"
              />
              <YAxis
                axisLine={false}
                domain={[0, 30]}
                tickLine={false}
                type="number"
                hide={true}
              />
              <Area
                animationDuration={300}
                dataKey="value"
                dot={<Dot />}
                fill="url(#area-performance)"
                fillOpacity={1}
                name="Balance"
                stroke={color}
                strokeWidth={3}
                type="natural"
              />
              <Tooltip
                animationDuration={50}
                content={<TooltipContent />}
                cursor={false}
              />
            </AreaChart>
          </ResponsiveContainer>
          {/* </NoSsr> */}
        </CardContent>
      </Card>
    </Box>
  );
}

export interface DotProps {
  hover?: boolean;
  active?: string;
  cx?: number;
  cy?: number;
  payload?: { name: string };
  stroke?: string;
}

function Dot({
  active,
  cx,
  cy,
  payload,
  stroke,
}: DotProps): React.JSX.Element | null {
  if (active && payload?.name === active) {
    return <circle cx={cx} cy={cy} fill={stroke} r={6} />;
  }

  return null;
}

interface TooltipContentProps {
  active?: boolean;
  payload?: { name: string; dataKey: string; value: number; stroke: string }[];
  label?: string;
}

function TooltipContent({
  active,
  payload,
}: TooltipContentProps): React.JSX.Element | null {
  if (!active) {
    return null;
  }

  return (
    <Paper
      sx={{
        border: "1px solid var(--mui-palette-divider)",
        boxShadow: "var(--mui-shadows-16)",
        p: 1,
      }}
    >
      <Stack spacing={2}>
        {payload?.map(
          (entry): React.JSX.Element => (
            <Stack
              direction="row"
              key={entry.name}
              spacing={3}
              sx={{ alignItems: "center" }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", flex: "1 1 auto" }}
              >
                <Box
                  sx={{
                    bgcolor: entry.stroke,
                    borderRadius: "2px",
                    height: "8px",
                    width: "8px",
                  }}
                />
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  {entry.name}
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="body2">
                {new Intl.NumberFormat("en-US").format(entry.value)}
              </Typography>
            </Stack>
          ),
        )}
      </Stack>
    </Paper>
  );
}
