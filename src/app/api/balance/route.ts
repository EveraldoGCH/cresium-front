import { sleep } from "@/utils/ApiUtils";
import { NextResponse } from "next/server";
import mock from "./balanceMock.json";

export async function GET() {
  await sleep(2000);
  return NextResponse.json(mock);
}
