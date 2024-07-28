import { ApiException } from "./exception";

export async function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  try {
    const apiUrl = `${""}${input}`;
    const response = await fetch(apiUrl, init);
    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (error) {
    throw new ApiException({
      message: (error as Error).message,
      error,
    });
  }
}
