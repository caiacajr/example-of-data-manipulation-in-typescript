/**
 * The possible payment methods for a transaction
 */
export type TransactionPaymentMethod = "CREDIT_CARD" | "BANK_SLIP";

/**
 *
 */
export type TransactionStatus =
  | "PAID"
  | "DECLINED_BY_THE_CARD_ISSUER"
  | "AWAITING_PAYMENT"
  | "REVERSED";

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
