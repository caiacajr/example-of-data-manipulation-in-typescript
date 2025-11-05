import type Transaction from "../../types/transaction.types.js";

export const renderTransactionStatusMap: Record<Transaction["status"], string> =
  {
    PAID: "Paid",
    AWAITING_PAYMENT: "Awaiting payment",
    DECLINED_BY_THE_CARD_ISSUER: "Declined",
    REVERSED: "Reversed",
  };

export const renderTransactionPaymentMethodMap: Record<
  Transaction["paymentMethod"],
  string
> = {
  BANK_SLIP: "Bank slip",
  CREDIT_CARD: "Credit card",
};
