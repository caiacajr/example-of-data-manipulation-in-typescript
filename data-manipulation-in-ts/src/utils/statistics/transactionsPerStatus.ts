import type Transaction from "../../types/transaction.types.js";
import { TRANSACTION_STATUSES } from "../../types/transaction.types.js";

export default function transactionsPerStatus(
  transactions: Transaction[]
): Record<Transaction["status"], number> {
  let res = {} as Record<Transaction["status"], number>;

  TRANSACTION_STATUSES.forEach((pm) => (res[pm] = 0));

  for (let t of transactions) {
    res[t.status]++;
  }

  return res;
}
