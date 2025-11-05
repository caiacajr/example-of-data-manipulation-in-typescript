import getTransactions from "./service/transaction.service.js";
import renderTransactionTable from "./utils/html/renderTransactionTable.js";

async function handleData() {
  try {
    const data = await getTransactions();
    renderTransactionTable(data);
  } catch (error) {
    console.error(error);
  }
}

handleData();
