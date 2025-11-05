import HttpRequestError from "../../errors/httpRequestError";

export default async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new HttpRequestError(url, response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HttpRequestError) throw error;

    throw new HttpRequestError(
      url,
      0,
      error instanceof Error ? error.message : "INTERNET_CONNECTION_ERROR"
    );
  }
}
