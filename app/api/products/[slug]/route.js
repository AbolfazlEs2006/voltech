import products from "@/data/products.json";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return NextResponse.json({ error: "محصول یافت نشد" }, { status: 404 });
  }

  return NextResponse.json(product);
}
