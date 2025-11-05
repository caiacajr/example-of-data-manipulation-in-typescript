export default function renderDate(d: Date): string {
  return (
    d.getMonth().toString().padStart(2, "0") +
    "-" +
    d.getDay().toString().padStart(2, "0") +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours().toString().padStart(2, "0") +
    ":" +
    d.getMinutes().toString().padStart(2, "0")
  );
}
