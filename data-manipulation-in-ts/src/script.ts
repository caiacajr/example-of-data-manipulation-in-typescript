import getTransactions from "./service/transaction.service.js";
import renderStatistics from "./utils/html/renderStatistics.js";
import renderTransactionTable from "./utils/html/renderTransactionTable.js";

async function handleData() {
  try {
    const data = await getTransactions();
    renderTransactionTable(data);
    renderStatistics(data);
  } catch (error) {
    console.error(error);
  }
}

handleData();
