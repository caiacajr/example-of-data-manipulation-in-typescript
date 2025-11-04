import type Transaction from "../../types/Transaction.js";
import type TransactionAPI from "../../types/TransactionAPI.js";
import { DATE_REGEXP } from "./validateTransactionAPI.js";

const transactionPaymentMethodMap: Record<
  TransactionAPI["Forma de Pagamento"],
  Transaction["paymentMethod"]
> = {
  "Cartão de Crédito": "CREDIT_CARD",
  Boleto: "BANK_SLIP",
};

const transactionStatusMap: Record<
  TransactionAPI["Status"],
  Transaction["status"]
> = {
  Paga: "PAID",
  "Recusada pela operadora de cartão": "DECLINED_BY_THE_CARD_ISSUER",
  "Aguardando pagamento": "AWAITING_PAYMENT",
  Estornada: "REVERSED",
};

function normalizeDate(date: string): Date {
  const normalizedDate = date.replace(DATE_REGEXP, "$3-$2-$1T$4:$5:00");
  return new Date(normalizedDate);
}

function normalizeValue(value: string): number | null {
  if (value === "-") return null;

  return Math.round(Number(value.replaceAll(".", "").replace(",", ".")) * 100);
}

export default function normalizeTransactionData(
  data: TransactionAPI
): Transaction {
  return {
    status: transactionStatusMap[data.Status],
    id: data.ID,
    date: normalizeDate(data.Data),
    name: data.Nome,
    paymentMethod: transactionPaymentMethodMap[data["Forma de Pagamento"]],
    email: data.Email,
    value: normalizeValue(data["Valor (R$)"]),
    newClient: Boolean(data["Cliente Novo"]),
  };
}
