"use client";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { colorsVars } from "@/utils/colorsVars";


export function Chart(): React.JSX.Element {
    const chartHeight = 240;

    const data = [
        { name: 'Jan', value: 2 },
        { name: 'Feb', value: 20 },
        { name: 'Mar', value: 10 },
        { name: 'Apr', value: 35 },
        { name: 'May', value: 25 },
        { name: 'Jun', value: 20 },
        { name: 'Jul', value: 31 },
        { name: 'Aug', value: 50 },
        { name: 'Sep', value: 55 },
        { name: 'Oct', value: 32 },
        { name: 'Nov', value: 60 },
        { name: 'Dec', value: 88 }
    ] satisfies { name: string; value: number }[];

    interface DotProps {
        hover?: boolean;
        active?: string;
        cx?: number;
        cy?: number;
        payload?: { name: string };
        stroke?: string;
    }

    function Dot({ active, cx, cy, payload, stroke }: DotProps): React.JSX.Element | null {
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
    function TooltipContent({ active, payload }: TooltipContentProps): React.JSX.Element | any {
        if (!active) {
            return null;
        }
    }

    return (
        <ResponsiveContainer height={chartHeight} width="100%">
            <AreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <defs>
                    <linearGradient id="area-performance" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor={colorsVars.primaryMain} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={colorsVars.primaryMain} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 4" vertical={false} />
                <XAxis axisLine={false} dataKey="name" tickLine={false} type="category" />
                <YAxis axisLine={false} domain={[0, 30]} tickLine={false} type="number" hide={true} />
                <Area
                    animationDuration={300}
                    dataKey="value"
                    dot={<Dot />}
                    fill="url(#area-performance)"
                    fillOpacity={1}
                    name="Balance"
                    stroke={colorsVars.primaryMain}
                    strokeWidth={3}
                    type="natural"
                />
                <Tooltip animationDuration={50} content={<TooltipContent />} cursor={false} />
            </AreaChart>
        </ResponsiveContainer>
    );
}
