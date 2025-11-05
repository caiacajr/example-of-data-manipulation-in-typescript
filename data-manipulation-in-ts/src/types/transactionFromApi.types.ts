export const TRANSACTION_PAY_METHODS_API = [
  "Cartão de Crédito",
  "Boleto",
] as const;

export const TRANSACTION_STATUSES_API = [
  "Paga",
  "Recusada pela operadora de cartão",
  "Aguardando pagamento",
  "Estornada",
] as const;

export type TransactionAPIPaymentMethod =
  (typeof TRANSACTION_PAY_METHODS_API)[number];
export type TransactionAPIStatus = (typeof TRANSACTION_STATUSES_API)[number];

export default interface TransactionAPI {
  Status: TransactionAPIStatus;
  ID: number;
  Data: string;
  Nome: string;
  ["Forma de Pagamento"]: TransactionAPIPaymentMethod;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: 0 | 1;
}
