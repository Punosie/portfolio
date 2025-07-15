// app/api/visits/route.ts
import { redis } from "@/lib/redis";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const count = await redis.get<number>("visitCount") ?? 0;

  return new Response(JSON.stringify({ count }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  const count = await redis.incr("visitCount");

  return new Response(JSON.stringify({ count }), {
    headers: { "Content-Type": "application/json" },
  });
}
