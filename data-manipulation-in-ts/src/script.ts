import fetchData from "./fetchData.js";

type TransactionPaymentMethod = "Cartão de Crédito" | "Boleto";
type TransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";

interface TransactionAPI {
  Status: TransactionStatus;
  ID: number;
  Data: string;
  Nome: string;
  ["Forma de Pagamento"]: TransactionPaymentMethod;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: 0 | 1;
}

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );

  console.log(data);
  if (data) data.forEach((e) => console.log(e.Status));
}

handleData();
