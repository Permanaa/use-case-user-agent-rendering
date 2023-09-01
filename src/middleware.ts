import { NextRequest, NextResponse, userAgent } from "next/server";

export const config = {
  matcher: "/landing-page",
}

export const middleware = (req: NextRequest) => {
  const { device } = userAgent(req)

  const viewport = device.type === "mobile" ? "mobile" : "desktop"

  req.nextUrl.pathname = `_viewport/${viewport}`

  return NextResponse.rewrite(req.nextUrl)
}