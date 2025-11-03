export type TransactionPaymentMethod = "Credit Card" | "Bank Slip";
export type TransactionStatus =
  | "Paid"
  | "Declined by the card issuer"
  | "Awaiting payment"
  | "Reversal";

export default interface Transaction {
  status: TransactionStatus;
  id: number;
  data: string;
  name: string;
  paymentMethod: TransactionPaymentMethod;
  email: string;
  value: number;
  newClient: boolean;
}
