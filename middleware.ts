import { NextRequest } from "next/server";

const middleware = async (req: NextRequest) => {
  console.log("middleware", req);
}

export default middleware;
