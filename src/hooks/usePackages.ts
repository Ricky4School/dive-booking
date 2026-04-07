import { useEffect, useState } from "react"
import { getPackages } from "../services/packageService"
import type { PackageResponse } from "../types/package"

export default function usePackages()
{
  const [data, setData] = useState<PackageResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const res = await getPackages()
        setData(res)
      }
      catch (err: any)
      {
        setError(err.message)
      }
      finally
      {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    packageList: data?.packageList || [],
    scubaEquipment: data?.scubaEquipment || [],
    loading,
    error
  }
}