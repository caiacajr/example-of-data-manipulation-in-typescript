import type Transaction from "../../types/transaction.types.js";
import { TRANSACTION_STATUSES } from "../../types/transaction.types.js";
import { renderTransactionStatusMap } from "./transactionMaps.js";

export default function renderTransactionsPerStatus(
  stats: Record<Transaction["status"], number>
): string {
  return (
    "<h3>Number of transactions per transaction stats:</h3>" +
    TRANSACTION_STATUSES.map(
      (pm) => `
      <h3>${renderTransactionStatusMap[pm]}: <span>${stats[pm]} total sales</span></h3>
      `
    ).join("\n")
  );
}
