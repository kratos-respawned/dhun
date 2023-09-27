import { music } from "@/lib/music";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  console.log(searchParams)
  const Request = await req.json();
  const id = Request.id;
  if (!id) throw new Error("No id provided");
  const { data } = await music.get(`songs?id=${id}`);
  return NextResponse.json(data);
}
