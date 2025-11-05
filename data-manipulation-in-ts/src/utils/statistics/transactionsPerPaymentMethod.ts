import type Transaction from "../../types/transaction.types.js";
import { TRANSACTION_PAY_METHODS } from "../../types/transaction.types.js";

export default function transactionsPerPaymentMethod(
  transactions: Transaction[]
): Record<Transaction["paymentMethod"], number> {
  let res = {} as Record<Transaction["paymentMethod"], number>;

  TRANSACTION_PAY_METHODS.forEach((pm) => (res[pm] = 0));

  for (let t of transactions) {
    res[t.paymentMethod]++;
  }

  return res;
}
