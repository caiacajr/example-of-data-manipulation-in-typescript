export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error)
      console.error("Error on fetching url: ", url, "\n", e.message);
    return null;
  }
}
