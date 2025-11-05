export default function renderMostProfitableDay(
  day: number,
  sales: number
): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `
    <h3>Day of the week with more sales: </h3>
    <p>${days[day]}: <span>${sales} total sales</span></p>
    `;
}
