import type Transaction from "../../types/transaction.types.js";
import salesPerWeekDay from "../statistics/salesPerWeekDay.js";
import totalAmountStat from "../statistics/totalAmountStat.js";
import transactionsPerPaymentMethod from "../statistics/transactionsPerPaymentMethod.js";
import transactionsPerStatus from "../statistics/transactionsPerStatus.js";
import renderMostProfitableDay from "./renderMostProfitableDay.js";
import renderSalesPerWeekDay from "./renderSalesPerWeekDay.js";
import renderTotalAmountStat from "./renderTotalAmountStat.js";
import renderTransactionsPerPaymentMethod from "./renderTransactionsPerPaymentMethod.js";
import renderTransactionsPerStatus from "./renderTransactionsPerStatus.js";

export default function renderStatistics(transactions: Transaction[]): void {
  const list = document.getElementById("transactionsStatistics");
  if (list) {
    // Total sales amount
    list.innerHTML += renderNewLi(
      renderTotalAmountStat(totalAmountStat(transactions))
    );

    // Transactions amount per payment method
    list.innerHTML += renderNewLi(
      renderTransactionsPerPaymentMethod(
        transactionsPerPaymentMethod(transactions)
      )
    );

    // Transactions amount per transaction status
    list.innerHTML += renderNewLi(
      renderTransactionsPerStatus(transactionsPerStatus(transactions))
    );

    const salesPerDay = salesPerWeekDay(transactions);
    const maxSales = Math.max(...salesPerDay);
    const maxDay = salesPerDay.indexOf(maxSales);

    // Sales per day of the week
    list.innerHTML += renderNewLi(renderSalesPerWeekDay(salesPerDay));

    list.innerHTML += renderNewLi(renderMostProfitableDay(maxDay, maxSales));
  }
}

function renderNewLi(innerHtml: string): string {
  return `<li>
      ${innerHtml}
    </li>`;
}
