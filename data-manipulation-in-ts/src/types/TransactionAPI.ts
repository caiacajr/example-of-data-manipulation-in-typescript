export type TransactionAPIPaymentMethod = "Cartão de Crédito" | "Boleto";
export type TransactionAPIStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";

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
