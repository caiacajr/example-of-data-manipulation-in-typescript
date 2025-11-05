import type Transaction from "../../types/transaction.types.js";

export default function salesPerWeekDay(
  transactions: Transaction[]
): Array<number> {
  let res = [0, 0, 0, 0, 0, 0, 0]; // One per day of the week

  transactions.forEach((t) => res[t.date.getDay()]++);

  return res;
}
