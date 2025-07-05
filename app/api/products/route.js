import { getProducts } from "@/lib/product";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products, { status: 200 });
}
