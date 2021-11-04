import { GH_RAW_URL } from "@/lib/const";

export async function fetcher<T>(url: string) {
  const response = await fetch(`${GH_RAW_URL}${url}`);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const data = (await response.json()) as T;

  return data;
}
