export const TRANSACTION_PAY_METHODS = ["CREDIT_CARD", "BANK_SLIP"] as const;

export const TRANSACTION_STATUSES = [
  "PAID",
  "DECLINED_BY_THE_CARD_ISSUER",
  "AWAITING_PAYMENT",
  "REVERSED",
] as const;

/**
 * The possible payment methods for a transaction
 */
export type TransactionPaymentMethod = (typeof TRANSACTION_PAY_METHODS)[number];

/**
 *
 */
export type TransactionStatus = (typeof TRANSACTION_STATUSES)[number];

/**
 *
 */
export default interface Transaction {
  status: TransactionStatus;
  id: number;
  date: Date;
  name: string;
  paymentMethod: TransactionPaymentMethod;
  email: string;
  value: number | null;
  newClient: boolean;
}
