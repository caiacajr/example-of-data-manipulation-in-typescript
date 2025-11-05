export default function renderSalesPerWeekDay(stats: number[]): string {
  if (stats.length === 7) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return (
      "<h3>Total sales per day of the week:</h3>" +
      stats
        .map(
          (n, i) => `
    <p>${days[i]}: <span>${n} total sales<span><p>
    `
        )
        .join("\n")
    );
  } else return "";
}
