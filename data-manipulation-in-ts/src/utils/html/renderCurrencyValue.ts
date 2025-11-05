export default function renderCurrencyValue(v: number | null): string {
  if (!v) {
    return "-";
  }

  let val = v.toString().replace(/\d{2}$/, ".$&"); // 115075  -> 1150.75

  // -1 -> -0.01
  if (/^-?\d$/.test(val)) return val.replace(/^(-?)(\d)$/, "$10.0$2");

  // -10 -> -0.10
  if (/^-?.\d{2}$/.test(val)) return val.replace(/^(-?).(\d{2})$/, "$10.$2");

  // 1150.75 -> 1,150.75 and 1234,567.00 -> 1,234,567.00
  const thousandSeparatorRegexp = /(\d)(\d{3}[,.])/;
  while (thousandSeparatorRegexp.test(val)) {
    val = val.replace(thousandSeparatorRegexp, "$1,$2");
  }
  return val;
}
