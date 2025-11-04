export const PAYMENT_METHODS = ["Cartão de Crédito", "Boleto"] as const;

export const STATUSES = [
  "Paga",
  "Recusada pela operadora de cartão",
  "Aguardando pagamento",
  "Estornada",
] as const;

export type TransactionAPIPaymentMethod = (typeof PAYMENT_METHODS)[number];
export type TransactionAPIStatus = (typeof STATUSES)[number];

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
