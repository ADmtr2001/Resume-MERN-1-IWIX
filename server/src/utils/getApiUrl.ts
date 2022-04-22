import { Request } from "express";

export function getApiUrl(req: Request) {
  return `${req.protocol}://${req.get("host")}`;
}
