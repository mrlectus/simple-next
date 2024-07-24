import { NextResponse } from "next/server"

export const GET = () => {
  const response = NextResponse.json({
    name: "MrLectus",
    age: 24,
    sex: "Female"
  }, { statusText: "Hello, from ..." });
  response.cookies.set("name", "MrLectus");
  return response;
}
