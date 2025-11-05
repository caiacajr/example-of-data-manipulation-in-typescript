import type Transaction from "../../types/transaction.types.js";

export default function transactionsPerPaymentMethod(
  transactions: Transaction[]
): Record<Transaction["paymentMethod"], number> {
  let res = {} as Record<Transaction["paymentMethod"], number>;

  for (let t of transactions) {
    res[t.paymentMethod] = (res[t.paymentMethod] ?? 0) + 1;
  }

  return res;
}
