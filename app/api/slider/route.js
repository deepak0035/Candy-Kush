import { NextResponse } from "next/server";
import productData from "/data.json";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json(productData.SlideShow);
}
