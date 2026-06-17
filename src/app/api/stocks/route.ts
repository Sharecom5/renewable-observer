import { NextResponse } from "next/server";
import { getLiveStockData } from "@/lib/api";

export async function GET() {
  const data = await getLiveStockData();
  return NextResponse.json(data);
}
