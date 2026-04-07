import api from "./api"

export async function request<T>(url: string): Promise<T>
{
  try
  {
    const res = await api.get(url)
    return res.data
  }
  catch (error: any)
  {
    throw new Error(
      error?.response?.data?.message ||
      error.message ||
      "Something went wrong"
    )
  }
}