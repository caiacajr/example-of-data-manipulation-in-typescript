import type Transaction from "../../types/transaction.types.js";
import { TRANSACTION_PAY_METHODS } from "../../types/transaction.types.js";
import { renderTransactionPaymentMethodMap } from "./transactionMaps.js";

export default function renderTransactionsPerPaymentMethod(
  transPerMethod: Record<Transaction["paymentMethod"], number>
): string {
  return (
    "<h3>Number of transactions per payment method:</h3>" +
    TRANSACTION_PAY_METHODS.map(
      (pm) => `
    <h3>${renderTransactionPaymentMethodMap[pm]}: <span>${transPerMethod[pm]} total sales</span></h3>
    `
    ).join("\n")
  );
}
