import type Transaction from "../../types/transaction.types";

export default function transactionsPerStatus(
  transactions: Transaction[]
): Record<Transaction["status"], number> {
  return transactions.reduce((record, currTransaction) => {
    record[currTransaction.status] = (record[currTransaction.status] ?? 0) + 1;
    return record;
  }, {} as Record<Transaction["status"], number>);
}
