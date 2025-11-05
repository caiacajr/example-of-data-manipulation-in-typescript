import renderCurrencyValue from "./renderCurrencyValue";

export default function renderTotalAmountStat(amount: number): string {
  return `<h3>Sales sum (R$): <span>${renderCurrencyValue(amount)}</span></h3>`;
}
