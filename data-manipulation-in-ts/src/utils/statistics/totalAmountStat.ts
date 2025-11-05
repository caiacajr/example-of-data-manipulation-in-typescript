import type Transaction from "../../types/transaction.types.js";

export default function totalAmountStat(t: Transaction[]): number {
  return t.reduce(
    (total, transaction) =>
      (total += transaction.value ? transaction.value : 0),
    0
  );
}
