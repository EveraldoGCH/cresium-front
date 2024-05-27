import { sleep } from "@/utils/ApiUtils";
import { NextResponse } from "next/server";
import mockDias from "./chartMockDia.json";
import mockMes from "./chartMockMes.json";
import mockAnio from "./chartMockAnio.json";

export async function GET(
  req: Request,
  { params }: { params: { type: string } },
) {
  const { type } = params;
  await sleep(500);
  if (type == "hour") {
    return NextResponse.json(mockDias, { status: 200 });
  } else if (type === "day") {
    return NextResponse.json(mockMes, { status: 200 });
  } else if (type === "month") {
    return NextResponse.json(mockAnio, { status: 200 });
  }
}
