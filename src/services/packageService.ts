import { request } from "./request"
import type { PackageResponse } from "../types/package"

export const getPackages = () =>
{
  return request<PackageResponse>("/packages.json")
}