import InvalidTransactionArrayData from "../errors/invalidTransactionArrayData.js";
import type Transaction from "../types/transaction.types.js";
import type TransactionAPI from "../types/transactionFromApi.types.js";
import fetchData from "../utils/http/fetchData.js";
import normalizeTransactionData from "../utils/transaction/normalizeTransactionData.js";
import { isArrayOfTransactionAPI } from "../utils/transaction/validateTransactionAPI.js";

const URL = "https://api.origamid.dev/json/transacoes.json";

export default async function getTransactions(): Promise<Transaction[]> {
  const data = await fetchData<TransactionAPI[]>(URL);

  if (isArrayOfTransactionAPI(data)) {
    return data.map(normalizeTransactionData);
  } else {
    throw new InvalidTransactionArrayData(URL, data);
  }
}
