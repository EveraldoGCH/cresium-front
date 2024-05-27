"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { colorsVars } from "@/utils/constants/colorsVars";
import { ChartResponse } from "@/types/responses/responseTypes";
import { useFormatChartData } from "@/hooks/format/useFormatChartData";
import { useMemo } from "react";

interface DotProps {
  hover?: boolean;
  active?: string;
  cx?: number;
  cy?: number;
  payload?: { name: string };
  stroke?: string;
}

interface TooltipContentProps {
  active?: boolean;
  payload?: { name: string; dataKey: string; value: number; stroke: string }[];
  label?: string;
}
const chartHeight = 240;

export function Chart({
  data,
  loadingData = false,
}: {
  data: ChartResponse[] | undefined;
  loadingData?: boolean;
}): React.JSX.Element {
  let formattedResponse = useMemo(() => {
    return useFormatChartData(data);
  }, [data]) satisfies { name: string; value: number }[];

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

  function TooltipContent({
    active,
    payload,
  }: TooltipContentProps): React.JSX.Element | null {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          {/* <p className="label">{`Date: ${payload[0].payload?.name}`}</p> */}
          <p className="intro">{`Value: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  }

  let dataForLoading = [
    { name: "", value: Math.random() },
    { name: "", value: Math.random() },
    { name: "", value: Math.random() },
    { name: "", value: Math.random() },
    { name: "", value: Math.random() },
    { name: "", value: Math.random() },
    { name: "", value: Math.random() },
  ];
  //SOLO si le llega prop de cargando, de lo contrario actua normal
  return (
    <ResponsiveContainer height={chartHeight} width="100%">
      <AreaChart
        data={loadingData ? dataForLoading : formattedResponse}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <defs>
          <linearGradient id="area-performance" x1="0" x2="0" y1="0" y2="1">
            <stop
              offset="0"
              stopColor={loadingData ? "grey" : colorsVars.primaryMain}
              stopOpacity={loadingData ? 0 : 0.3}
            />
            <stop
              offset="100%"
              stopColor={loadingData ? "grey" : colorsVars.primaryMain}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="2 4" vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="name"
          tickLine={loadingData}
          type="category"
        />
        <YAxis
          axisLine={false}
          domain={["auto", "auto"]}
          tickLine={false}
          type="number"
          hide={true}
        />
        <Area
          animationDuration={loadingData ? 100 : 800}
          dataKey="value"
          dot={<Dot />}
          fill="url(#area-performance)"
          fillOpacity={2}
          name="Balance"
          stroke={loadingData ? "grey" : colorsVars.primaryMain}
          strokeWidth={3}
          type="linear"
        />
        <Tooltip
          animationDuration={100}
          content={<TooltipContent />}
          cursor={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
